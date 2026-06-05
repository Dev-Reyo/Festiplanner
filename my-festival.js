(function () {
  const STORAGE_KEY = "graspopPackingPlanner";
  const FESTIVAL_START = new Date("2026-06-18T00:00:00+02:00");

  function readState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function setText(id, text) {
    const element = document.getElementById(id);
    if (element) element.textContent = text;
  }

  function setHtml(id, html) {
    const element = document.getElementById(id);
    if (element) element.innerHTML = html;
  }

  function itemIdsFromPage() {
    return Array.from(document.querySelectorAll("#packingGrid input[data-item]"))
      .map(input => input.dataset.item);
  }

  function actId(act) {
    return `${act.day}:${act.stage}:${act.name}:${act.start}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function timeToMinutes(value) {
    const [hourText, minuteText] = value.split(".");
    const hour = Number(hourText);
    const minute = Number(minuteText);
    return (hour < 6 ? hour + 24 : hour) * 60 + minute;
  }

  function formatTime(value) {
    return value.replace(".", ":");
  }

  function routeModeLabel(mode) {
    return {
      driving: "Car",
      transit: "Public transport",
      walking: "Walking",
      bicycling: "Cycle"
    }[mode] || "Travel details";
  }

  function markedActs(favoriteActs) {
    const lineup = window.FESTIPLANNER_LINEUP_DATA || [];
    const dayOrder = { Thursday: 1, Friday: 2, Saturday: 3, Sunday: 4 };
    return lineup
      .filter(act => favoriteActs && favoriteActs[actId(act)])
      .map(act => ({
        ...act,
        startMinutes: timeToMinutes(act.start),
        endMinutes: timeToMinutes(act.end)
      }))
      .sort((a, b) => dayOrder[a.day] - dayOrder[b.day] || a.startMinutes - b.startMinutes);
  }

  function clashPairs(marked) {
    const clashes = [];
    marked.forEach((act, index) => {
      marked.slice(index + 1).forEach(other => {
        if (act.day !== other.day) return;
        const overlap = Math.min(act.endMinutes, other.endMinutes) - Math.max(act.startMinutes, other.startMinutes);
        if (overlap > 0) clashes.push({ act, other, overlap });
      });
    });
    return clashes.sort((a, b) => b.overlap - a.overlap);
  }

  function updateNotesBinding(state) {
    const notes = document.getElementById("overviewNotes");
    if (!notes) return;
    if (!notes.dataset.bound) {
      notes.dataset.bound = "true";
      notes.addEventListener("input", () => {
        const next = readState();
        next.freeNotes = notes.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      });
    }
    if (document.activeElement !== notes) notes.value = state.freeNotes || "";
  }

  function updateOverview() {
    const state = readState();
    const checked = state.checked || {};
    const visibleItems = itemIdsFromPage();
    const total = visibleItems.length;
    const packed = visibleItems.filter(id => checked[id]).length;
    const packingPercent = total ? Math.round((packed / total) * 100) : 0;
    const marked = markedActs(state.favoriteActs || {});
    const clashes = clashPairs(marked);
    const days = Math.max(0, Math.ceil((FESTIVAL_START - new Date()) / 86400000));
    const origin = state.mapStart || "";
    const destination = state.mapDestination || "Dessel";
    const route = origin ? `${origin} -> ${destination.replace(", Belgium", "")}` : "Plan your route";

    setText("overviewCountdown", days === 1 ? "1 day until Graspop" : `${days} days until Graspop`);
    setText("overviewPacking", `${packed}/${total} items packed`);
    setText("overviewPackingDetail", `${packingPercent}% ready`);
    setText("overviewBands", marked.length === 1 ? "1 favourite band" : `${marked.length} favourite bands`);
    setText("overviewClashes", clashes.length === 1 ? "1 schedule conflict" : `${clashes.length} schedule conflicts`);
    setText("overviewTravel", route);
    setText("overviewTravelMode", route === "Plan your route"
      ? "Travel details"
      : `${routeModeLabel(state.arrivalMode)}${state.departureTime ? " · " + state.departureTime : ""}${state.meetingPoint ? " · " + state.meetingPoint : ""}`);

    setHtml("overviewBandList", marked.length ? marked.slice(0, 5).map(act => `
      <span>${act.name}<small>${act.day} · ${formatTime(act.start)}-${formatTime(act.end)} · ${act.stage}</small></span>
    `).join("") : `<span>No favourite bands yet<small>Mark bands in the lineup.</small></span>`);

    setHtml("overviewClashList", clashes.length ? clashes.slice(0, 4).map(({ act, other, overlap }) => `
      <span>${act.name} vs ${other.name}<small>${overlap} min overlap · ${formatTime(act.start)}-${formatTime(act.end)} / ${formatTime(other.start)}-${formatTime(other.end)}</small></span>
    `).join("") : `<span>No clashes yet<small>Mark bands to detect overlaps.</small></span>`);

    updateNotesBinding(state);
  }

  document.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(updateOverview);
  });
})();
