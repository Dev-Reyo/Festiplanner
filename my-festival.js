(async function () {
  const dataApi = window.FestiPlannerData;

  function setText(id, text) {
    const element = document.getElementById(id);
    if (element) element.textContent = text;
  }

  function setHtml(id, html) {
    const element = document.getElementById(id);
    if (element) element.innerHTML = html;
  }

  function slug(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function actId(act) {
    return act.id || slug(`${act.day}:${act.stage}:${act.name}:${act.start}`);
  }

  function timeToMinutes(value) {
    const [hourText, minuteText] = value.split(".");
    const hour = Number(hourText);
    return (hour < 6 ? hour + 24 : hour) * 60 + Number(minuteText);
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

  try {
    const festival = await dataApi.whenReady();
    const festivalId = festival.id;
    const favorites = dataApi.readFestivalSection(festivalId, "favorites", { favoriteActs: {} });
    const travel = dataApi.readFestivalSection(festivalId, "travel", {});
    const notes = dataApi.readFestivalSection(festivalId, "notes", { value: "" });
    const checkedIds = Array.from(document.querySelectorAll("#packingGrid input[data-item]")).map(input => input.dataset.item);
    const packing = dataApi.readFestivalSection(festivalId, "packing", { checked: {} });
    const checked = packing.checked || {};
    const packed = checkedIds.filter(id => checked[id]).length;
    const percent = checkedIds.length ? Math.round((packed / checkedIds.length) * 100) : 0;
    const daysData = festival.days || [];
    const dayOrder = Object.fromEntries(daysData.map((day, index) => [day.id, index]));
    const dayLabel = dayId => dataApi.text(daysData.find(day => day.id === dayId)?.label) || dayId;
    const marked = (festival.timetable || [])
      .filter(act => favorites.favoriteActs?.[actId(act)])
      .map(act => ({ ...act, startMinutes: timeToMinutes(act.start), endMinutes: timeToMinutes(act.end) }))
      .sort((a, b) => dayOrder[a.day] - dayOrder[b.day] || a.startMinutes - b.startMinutes);
    const clashes = clashPairs(marked);
    const start = new Date(`${festival.startDate}T00:00:00`);
    const days = Math.max(0, Math.ceil((start - new Date()) / 86400000));
    const destination = travel.mapDestination || festival.travel?.destination || festival.city;
    const route = travel.mapStart ? `${travel.mapStart} -> ${destination.replace(`, ${festival.country}`, "")}` : "Plan your route";

    setText("overviewCountdown", days === 1 ? `1 day until ${festival.shortName}` : `${days} days until ${festival.shortName}`);
    setText("overviewDates", dataApi.formatDateRange(festival.startDate, festival.endDate));
    setText("overviewPacking", `${packed}/${checkedIds.length} items packed`);
    setText("overviewPackingDetail", `${percent}% ready`);
    setText("overviewBands", marked.length === 1 ? "1 favourite band" : `${marked.length} favourite bands`);
    setText("overviewClashes", clashes.length === 1 ? "1 schedule conflict" : `${clashes.length} schedule conflicts`);
    setText("overviewTravel", route);
    setText("overviewTravelMode", route === "Plan your route"
      ? "Travel details"
      : `${routeModeLabel(travel.arrivalMode)}${travel.departureTime ? " · " + travel.departureTime : ""}${travel.meetingPoint ? " · " + travel.meetingPoint : ""}`);

    setHtml("overviewBandList", marked.length ? marked.slice(0, 5).map(act => `
      <span>${act.name}<small>${dayLabel(act.day)} · ${formatTime(act.start)}-${formatTime(act.end)} · ${act.stage}</small></span>
    `).join("") : `<span>No favourite bands yet<small>Mark bands in the lineup.</small></span>`);
    setHtml("overviewClashList", clashes.length ? clashes.slice(0, 4).map(({ act, other, overlap }) => `
      <span>${act.name} vs ${other.name}<small>${overlap} min overlap · ${formatTime(act.start)}-${formatTime(act.end)} / ${formatTime(other.start)}-${formatTime(other.end)}</small></span>
    `).join("") : `<span>No clashes yet<small>Mark bands to detect overlaps.</small></span>`);

    const notesField = document.getElementById("overviewNotes");
    if (notesField) {
      notesField.value = notes.value || "";
      notesField.addEventListener("input", () => {
        dataApi.writeFestivalSection(festivalId, "notes", { value: notesField.value });
      });
    }
  } catch {
    // The shared loader already displays the readable error state.
  }
})();
