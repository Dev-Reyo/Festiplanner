(async function () {
  const dataApi = window.FestiPlannerData;
  const search = document.getElementById("festivalSearch");
  const featured = document.getElementById("featuredFestival");
  const pinnedSection = document.getElementById("pinnedFestivalsSection");
  const allSection = document.getElementById("allFestivalsSection");
  const pinnedList = document.getElementById("pinnedFestivalList");
  const allList = document.getElementById("allFestivalList");
  const empty = document.getElementById("pinnedEmptyState");
  let festivals = [];

  function readPinned() {
    const value = dataApi.readJson(dataApi.PINNED_KEY, []);
    return new Set(Array.isArray(value) ? value : []);
  }

  function savePinned(pinned) {
    dataApi.writeJson(dataApi.PINNED_KEY, [...pinned]);
  }

  function countdownText(startDate) {
    const remaining = new Date(`${startDate}T00:00:00`).getTime() - Date.now();
    if (remaining <= 0) return "Festival started";
    const hours = Math.ceil(remaining / 3600000);
    if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} remaining`;
    if (hours < 168) {
      const days = Math.floor(hours / 24);
      const rest = hours % 24;
      return `${days} day${days === 1 ? "" : "s"} ${rest} hour${rest === 1 ? "" : "s"} remaining`;
    }
    const days = Math.ceil(hours / 24);
    return `${days} day${days === 1 ? "" : "s"} remaining`;
  }

  function locationText(festival) {
    return [festival.city, festival.country].filter(Boolean).join(", ");
  }

  function datesText(festival) {
    return dataApi.formatDateRange(festival.startDate, festival.endDate);
  }

  function setPinButton(button, pinned) {
    button.textContent = pinned ? "★" : "☆";
    button.setAttribute("aria-pressed", String(pinned));
    button.setAttribute("aria-label", pinned ? "Unpin festival" : "Pin festival");
    button.title = pinned ? "Unpin festival" : "Pin festival";
  }

  function festivalRow(festival, pinned) {
    const row = document.createElement("article");
    row.className = `fp-festival-item${pinned ? " is-pinned" : ""}`;
    row.dataset.festivalId = festival.id;
    row.dataset.search = `${festival.name} ${festival.city} ${festival.country}`.toLowerCase();
    row.tabIndex = 0;
    row.setAttribute("role", "link");
    row.innerHTML = `
      <img src="${dataApi.resolveAssetPath(festival.featuredImage)}" alt="">
      <div class="fp-festival-copy">
        <strong>${festival.name}</strong>
        <span>${locationText(festival)} · ${datesText(festival)}</span>
        <span class="fp-row-countdown" aria-live="polite">${countdownText(festival.startDate)}</span>
      </div>
      <button class="fp-pin-button" type="button"></button>
    `;
    const pinButton = row.querySelector(".fp-pin-button");
    setPinButton(pinButton, pinned);
    pinButton.addEventListener("click", event => {
      event.stopPropagation();
      togglePinned(festival.id);
    });
    const open = () => {
      window.location.href = dataApi.festivalUrl("packing.html", festival.id);
    };
    row.addEventListener("click", open);
    row.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
    return row;
  }

  function renderFeatured(pinned) {
    const upcoming = festivals
      .filter(item => pinned.has(item.id) && new Date(item.startDate).getTime() >= Date.now())
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    const festival = upcoming[0] || festivals[0];
    if (!festival) return;
    featured.dataset.festivalId = festival.id;
    featured.querySelector("img").src = dataApi.resolveAssetPath(festival.featuredImage);
    document.getElementById("featuredName").textContent = festival.name;
    document.getElementById("featuredDates").textContent = datesText(festival);
    document.getElementById("featuredCountdown").textContent = countdownText(festival.startDate);
    document.getElementById("featuredLocation").textContent = locationText(festival);
    document.getElementById("featuredLink").href = dataApi.festivalUrl("packing.html", festival.id);
    const button = document.getElementById("featuredPin");
    button.dataset.festivalId = festival.id;
    setPinButton(button, pinned.has(festival.id));
  }

  function render() {
    const pinned = readPinned();
    pinnedList.replaceChildren();
    allList.replaceChildren();
    festivals.forEach(festival => {
      allList.appendChild(festivalRow(festival, pinned.has(festival.id)));
      if (pinned.has(festival.id)) pinnedList.appendChild(festivalRow(festival, true));
    });
    empty.hidden = pinnedList.children.length > 0;
    renderFeatured(pinned);

    const settings = dataApi.readSettings();
    const parent = pinnedSection.parentElement;
    if (settings.showPinnedFirst === false) {
      parent.insertBefore(allSection, pinnedSection);
    } else {
      parent.insertBefore(pinnedSection, allSection);
    }
    applySearch();
  }

  function togglePinned(id) {
    const pinned = readPinned();
    if (pinned.has(id)) pinned.delete(id);
    else pinned.add(id);
    savePinned(pinned);
    render();
  }

  function applySearch() {
    const query = search.value.trim().toLowerCase();
    document.querySelectorAll(".fp-festival-item").forEach(row => {
      row.hidden = Boolean(query && !row.dataset.search.includes(query));
    });
  }

  try {
    ({ festivals } = await dataApi.bootstrap());
    if (!festivals.length) throw new Error("No festivals are available.");
    document.getElementById("featuredPin").addEventListener("click", () => {
      togglePinned(document.getElementById("featuredPin").dataset.festivalId);
    });
    search.addEventListener("input", applySearch);
    render();
    setInterval(() => renderFeatured(readPinned()), 60000);
  } catch (error) {
    dataApi.showLoadError(error, document.querySelector(".fp-main"));
  }
})();
