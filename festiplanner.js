(function () {
  const dataApi = window.FestiPlannerData;

  function slug(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function actId(act) {
    return slug(`${act.day}:${act.stage}:${act.name}:${act.start}`);
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

  function minutesToLabel(minutes) {
    return `${String(Math.floor(minutes / 60) % 24).padStart(2, "0")}:00`;
  }

  function routeModeLabel(mode) {
    return {
      driving: "Car",
      transit: "Public transport",
      walking: "Walking",
      bicycling: "Cycle"
    }[mode] || "Car";
  }

  async function init() {
    try {
      const { festival } = await dataApi.loadFestival();
      const festivalId = festival.id;
      const t = value => dataApi.text(value);
      const camps = festival.campings || [];
      const accommodationTypes = festival.accommodationTypes || [];
      const lineup = festival.timetable || [];
      const days = festival.days?.length
        ? festival.days
        : [...new Set(lineup.map(act => act.day))].map(day => ({ id: day, label: { en: day }, shortLabel: { en: day.slice(0, 3) } }));
      const dayIds = days.map(day => day.id);

      const packingState = dataApi.readFestivalSection(festivalId, "packing", {
        camp: "",
        campType: "",
        checked: {}
      });
      const favoriteState = dataApi.readFestivalSection(festivalId, "favorites", {
        lineupDay: dayIds[0] || "",
        favoriteActs: {}
      });
      const travelState = dataApi.readFestivalSection(festivalId, "travel", {
        arrivalMode: "driving",
        mapStart: "",
        mapDestination: festival.travel?.destination || festival.location || "",
        departureTime: "",
        meetingPoint: ""
      });
      const notesState = dataApi.readFestivalSection(festivalId, "notes", { value: "" });
      const state = {
        camp: packingState.camp || "",
        campType: packingState.campType || "",
        checked: packingState.checked && typeof packingState.checked === "object" ? packingState.checked : {},
        lineupDay: dayIds.includes(favoriteState.lineupDay) ? favoriteState.lineupDay : (dayIds[0] || ""),
        favoriteActs: favoriteState.favoriteActs && typeof favoriteState.favoriteActs === "object" ? favoriteState.favoriteActs : {},
        arrivalMode: ["driving", "transit", "walking", "bicycling"].includes(travelState.arrivalMode) ? travelState.arrivalMode : "driving",
        mapStart: travelState.mapStart || "",
        mapDestination: travelState.mapDestination || festival.travel?.destination || festival.location || "",
        departureTime: travelState.departureTime || "",
        meetingPoint: travelState.meetingPoint || "",
        freeNotes: notesState.value || ""
      };

      function savePacking() {
        dataApi.writeFestivalSection(festivalId, "packing", {
          camp: state.camp,
          campType: state.campType,
          checked: state.checked
        });
      }

      function saveFavorites() {
        dataApi.writeFestivalSection(festivalId, "favorites", {
          lineupDay: state.lineupDay,
          favoriteActs: state.favoriteActs
        });
      }

      function saveTravel() {
        dataApi.writeFestivalSection(festivalId, "travel", {
          arrivalMode: state.arrivalMode,
          mapStart: state.mapStart,
          mapDestination: state.mapDestination,
          departureTime: state.departureTime,
          meetingPoint: state.meetingPoint
        });
      }

      function hydrateFestivalChrome() {
        const profile = document.querySelector(".festival-profile-header");
        if (profile) {
          const name = profile.querySelector("span");
          const dates = profile.querySelector("strong");
          const location = profile.querySelector("p");
          const link = profile.querySelector(".official-link");
          if (name) name.textContent = festival.name;
          if (dates) dates.textContent = dataApi.formatDateRange(festival.startDate, festival.endDate);
          if (location) location.textContent = [festival.city, festival.country].filter(Boolean).join(", ");
          if (link) {
            link.href = festival.officialWebsite;
            link.textContent = t(festival.officialLinks?.website?.label) || "Official website";
          }
        }

        const path = window.location.pathname.split("/").pop() || "packing.html";
        const pageKey = path === "timeline.html" ? "myFestival" : path.replace(".html", "");
        const subtitle = document.querySelector("header .subtitle");
        if (subtitle && festival.text?.pageSubtitle?.[pageKey]) {
          subtitle.textContent = t(festival.text.pageSubtitle[pageKey]);
        }

        document.querySelectorAll(".profile-actions a, nav.site-nav a").forEach(link => {
          const href = link.getAttribute("href");
          if (href && !href.startsWith("http") && href.endsWith(".html") && href !== "index.html" && href !== "settings.html") {
            link.href = dataApi.festivalUrl(href, festivalId);
          }
        });

        const timetableLink = document.querySelector("#lineup .section-head .official-link");
        if (timetableLink && festival.officialLinks?.timetable) {
          timetableLink.href = festival.officialLinks.timetable.url;
          timetableLink.textContent = t(festival.officialLinks.timetable.label);
        }

        const sourceNote = document.querySelector("#lineup .source-note");
        if (sourceNote && festival.text?.lineup?.sourceNote) sourceNote.textContent = t(festival.text.lineup.sourceNote);

        const travelLocation = document.querySelector("#festival-location .hint");
        if (travelLocation) {
          travelLocation.innerHTML = `${festival.name}<br>${festival.travel?.address || festival.location || ""}`;
        }
        const routeHelper = document.querySelector("#route .section-head .hint");
        if (routeHelper && festival.travel?.routeHelper) routeHelper.textContent = t(festival.travel.routeHelper);
        const map = document.querySelector("#festival-location iframe");
        if (map) {
          const query = festival.travel?.mapQuery || festival.location || festival.name;
          map.src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
        }
        const tips = document.querySelector("#arrival-tips ul");
        if (tips) {
          const items = festival.travel?.tips || [];
          tips.innerHTML = items.length
            ? items.map(item => `<li>${t(item)}</li>`).join("")
            : `<li>${t(festival.text?.emptyStates?.travelTips) || "No arrival tips available."}</li>`;
        }
      }

      hydrateFestivalChrome();

      const campGrid = document.getElementById("campGrid");
      const campTypePanel = document.getElementById("campTypePanel");
      const campTypeGrid = document.getElementById("campTypeGrid");
      const packingGrid = document.getElementById("packingGrid");
      const selectedTitle = document.getElementById("selectedTitle");
      const selectedSummary = document.getElementById("selectedSummary");
      const selectedPills = document.getElementById("selectedPills");
      const campTips = document.getElementById("campTips");
      const progressNumber = document.getElementById("progressNumber");
      const progressFill = document.getElementById("progressFill");
      const progressText = document.getElementById("progressText");
      const mobileProgressNumber = document.getElementById("mobileProgressNumber");
      const mobileProgressFill = document.getElementById("mobileProgressFill");
      const mobileProgressText = document.getElementById("mobileProgressText");
      const dayTabs = document.getElementById("dayTabs");
      const stageFilter = document.getElementById("stageFilter");
      const favoriteFilter = document.getElementById("favoriteFilter");
      const lineupSearch = document.getElementById("lineupSearch");
      const lineupTitle = document.getElementById("lineupTitle");
      const actList = document.getElementById("actList");
      const clashList = document.getElementById("clashList");
      const markedList = document.getElementById("markedList");
      const planList = document.getElementById("planList");
      const mapsLink = document.getElementById("mapsLink");
      const mapsPreview = document.getElementById("mapsPreview");
      const routeFrom = document.getElementById("routeFrom");
      const routeTo = document.getElementById("routeTo");

      function typesForCamp(campId) {
        return accommodationTypes.filter(type => type.campingId === campId);
      }

      function selectedType() {
        return accommodationTypes.find(type => type.campingId === state.camp && type.id === state.campType);
      }

      function renderCamps() {
        if (!campGrid) return;
        if (!camps.length) {
          campGrid.innerHTML = `<p class="hint">No camping options available.</p>`;
          return;
        }
        campGrid.innerHTML = camps.map(camp => `
          <button class="camp-card ${state.camp === camp.id ? "active" : ""}" type="button" data-camp="${camp.id}">
            <span class="camp-icon" aria-hidden="true">${camp.icon || camp.name.slice(0, 1)}</span>
            <h3>${camp.name}</h3>
            <p><strong>${t(camp.style)}</strong></p>
            <p>${t(camp.description)}</p>
          </button>
        `).join("");
        campGrid.querySelectorAll("button").forEach(button => {
          button.addEventListener("click", () => {
            if (state.camp !== button.dataset.camp) state.campType = "";
            state.camp = button.dataset.camp;
            savePacking();
            renderPackingPage();
          });
        });
      }

      function renderCampTypes() {
        if (!campTypePanel || !campTypeGrid) return;
        const types = typesForCamp(state.camp);
        if (!types.length) {
          campTypePanel.hidden = true;
          campTypeGrid.innerHTML = "";
          return;
        }
        campTypePanel.hidden = false;
        campTypeGrid.innerHTML = types.map(type => `
          <button class="type-card ${state.campType === type.id ? "active" : ""}" type="button" data-type="${type.id}">
            <strong>${type.name}</strong>
            <span>${t(type.description)}</span>
          </button>
        `).join("");
        campTypeGrid.querySelectorAll("button").forEach(button => {
          button.addEventListener("click", () => {
            state.campType = button.dataset.type;
            savePacking();
            renderCampTypes();
            renderSelectedCamp();
            renderPacking();
            renderProgress();
          });
        });
      }

      function renderSelectedCamp() {
        if (!selectedTitle || !selectedSummary || !selectedPills || !campTips) return;
        const camp = camps.find(item => item.id === state.camp);
        const type = selectedType();
        if (!camp) {
          selectedTitle.textContent = t(festival.text?.packing?.emptyTitle) || "No campsite selected yet";
          selectedSummary.textContent = t(festival.text?.packing?.emptyDescription) || "Choose a campsite to personalize your list.";
          selectedPills.innerHTML = "";
          const tips = festival.text?.packing?.defaultTips || [];
          campTips.innerHTML = tips.length ? tips.map(tip => `<li>${t(tip)}</li>`).join("") : "";
          return;
        }
        selectedTitle.textContent = type ? `${camp.name}: ${type.name}` : `Staying at ${camp.name}`;
        selectedSummary.textContent = t(type?.description || camp.description);
        const tags = [...(camp.tags || []).map(t), ...(type ? [`Selected: ${type.name}`] : [])];
        selectedPills.innerHTML = tags.map(tag => `<span class="pill">${tag}</span>`).join("");
        const reminders = [...(camp.reminders || []), ...(type?.reminders || [])];
        campTips.innerHTML = reminders.map(item => `<li>${t(item)}</li>`).join("");
      }

      function packingCategoriesForStay() {
        return dataApi.packingCategoriesForAccommodation(festival, state.camp, state.campType);
      }

      function renderPacking() {
        if (!packingGrid) return;
        const categories = packingCategoriesForStay();
        if (!categories.length) {
          packingGrid.innerHTML = `<p class="hint">No packing categories available.</p>`;
          return;
        }
        packingGrid.innerHTML = categories.map(category => {
          const checkedCount = category.items.filter(item => state.checked[item.id]).length;
          return `
            <article class="category">
              <h3>${t(category.name)}<span class="counter">${checkedCount}/${category.items.length}</span></h3>
              <div class="checklist">
                ${category.items.map(item => `
                  <label class="check ${state.checked[item.id] ? "done" : ""}">
                    <input type="checkbox" data-item="${item.id}" data-essential="${item.essential}" ${state.checked[item.id] ? "checked" : ""}>
                    <span>${t(item.name)}</span>
                  </label>
                `).join("")}
              </div>
            </article>
          `;
        }).join("");
        packingGrid.querySelectorAll("input[type='checkbox']").forEach(box => {
          box.addEventListener("change", () => {
            state.checked[box.dataset.item] = box.checked;
            if (!box.checked) delete state.checked[box.dataset.item];
            savePacking();
            renderPacking();
            renderProgress();
          });
        });
      }

      function renderProgress() {
        if (!progressNumber || !progressFill || !progressText) return;
        const ids = packingCategoriesForStay().flatMap(category => category.items.map(item => item.id));
        const checked = ids.filter(id => state.checked[id]).length;
        const percentage = ids.length ? Math.round((checked / ids.length) * 100) : 0;
        const label = ids.length && checked === ids.length ? "Packed and ready." : `${checked} of ${ids.length} items checked.`;
        progressNumber.textContent = `${percentage}%`;
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = label;
        if (mobileProgressNumber) mobileProgressNumber.textContent = `${percentage}%`;
        if (mobileProgressFill) mobileProgressFill.style.width = `${percentage}%`;
        if (mobileProgressText) mobileProgressText.textContent = label;
      }

      function renderPackingPage() {
        renderCamps();
        renderCampTypes();
        renderSelectedCamp();
        renderPacking();
        renderProgress();
      }

      function markedActs() {
        const dayOrder = Object.fromEntries(dayIds.map((day, index) => [day, index]));
        return lineup.filter(act => state.favoriteActs[actId(act)]).map(act => ({
          ...act,
          startMinutes: timeToMinutes(act.start),
          endMinutes: timeToMinutes(act.end)
        })).sort((a, b) => dayOrder[a.day] - dayOrder[b.day] || a.startMinutes - b.startMinutes);
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
        return clashes;
      }

      function clashingIds() {
        const ids = new Set();
        clashPairs(markedActs()).forEach(({ act, other }) => {
          ids.add(actId(act));
          ids.add(actId(other));
        });
        return ids;
      }

      function renderLineupControls() {
        if (!dayTabs || !stageFilter) return;
        if (!days.length) {
          dayTabs.innerHTML = "";
          stageFilter.innerHTML = "";
          return;
        }
        dayTabs.innerHTML = days.map(day => `
          <button class="day-tab ${state.lineupDay === day.id ? "active" : ""}" type="button" data-day="${day.id}">${t(day.shortLabel)}</button>
        `).join("");
        dayTabs.querySelectorAll("button").forEach(button => {
          button.addEventListener("click", () => {
            state.lineupDay = button.dataset.day;
            saveFavorites();
            renderLineup();
          });
        });
        const availableStages = [...new Set(lineup.filter(act => act.day === state.lineupDay).map(act => act.stage))];
        const current = stageFilter.value || "All stages";
        stageFilter.innerHTML = ["All stages", ...availableStages].map(stage => `<option value="${stage}">${stage}</option>`).join("");
        stageFilter.value = availableStages.includes(current) ? current : "All stages";
      }

      function visibleActs() {
        const stage = stageFilter?.value || "All stages";
        const search = (lineupSearch?.value || "").trim().toLowerCase();
        const markedOnly = favoriteFilter?.value === "favorites";
        return lineup
          .filter(act => act.day === state.lineupDay)
          .filter(act => stage === "All stages" || act.stage === stage)
          .filter(act => !markedOnly || state.favoriteActs[actId(act)])
          .filter(act => !search || `${act.name} ${act.stage}`.toLowerCase().includes(search))
          .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));
      }

      function dayBounds(acts) {
        const starts = acts.map(act => timeToMinutes(act.start));
        const ends = acts.map(act => timeToMinutes(act.end));
        const min = Math.floor(Math.min(...starts) / 60) * 60;
        const max = Math.ceil(Math.max(...ends) / 60) * 60;
        return { min, max, span: Math.max(max - min, 1) };
      }

      function toggleFavorite(button) {
        state.favoriteActs[button.dataset.act] = !state.favoriteActs[button.dataset.act];
        if (!state.favoriteActs[button.dataset.act]) delete state.favoriteActs[button.dataset.act];
        saveFavorites();
        renderActList();
        renderClashes();
      }

      function renderActList() {
        if (!actList || !lineupTitle) return;
        const acts = visibleActs();
        const currentDay = days.find(day => day.id === state.lineupDay);
        const dayName = t(currentDay?.label) || state.lineupDay;
        const dayTitle = t(festival.text?.lineup?.dayTitle) || "{day} lineup";
        lineupTitle.textContent = dayTitle.replace("{day}", dayName);
        if (!acts.length) {
          actList.innerHTML = `<p class="hint">No bands match these filters.</p>`;
          return;
        }
        const dayActs = lineup.filter(act => act.day === state.lineupDay);
        const bounds = dayBounds(dayActs);
        const stageOrder = [...new Set(dayActs.map(act => act.stage))].filter(stage => acts.some(act => act.stage === stage));
        const clashes = clashingIds();
        const ticks = [];
        const lines = [];
        for (let minute = bounds.min; minute <= bounds.max; minute += 60) {
          const left = ((minute - bounds.min) / bounds.span) * 100;
          ticks.push(`<span class="time-tick" style="left:${left}%">${minutesToLabel(minute)}</span>`);
          lines.push(`<span class="hour-line" style="left:${left}%"></span>`);
        }
        actList.innerHTML = `
          <div class="schedule-board">
            <div class="time-axis"><div class="axis-spacer" aria-hidden="true"></div><div class="time-scale">${ticks.join("")}</div></div>
            ${stageOrder.map(stage => `
              <div class="stage-lane">
                <div class="stage-name">${stage}</div>
                <div class="stage-track">
                  ${lines.join("")}
                  ${acts.filter(act => act.stage === stage).map(act => {
                    const id = actId(act);
                    const favorite = Boolean(state.favoriteActs[id]);
                    const start = timeToMinutes(act.start);
                    const end = timeToMinutes(act.end);
                    return `
                      <article class="act-card ${favorite ? "favorite" : ""} ${clashes.has(id) ? "clashing" : ""}" style="--act-left:${((start - bounds.min) / bounds.span) * 100}%;--act-width:${((end - start) / bounds.span) * 100}%;">
                        <div class="act-card-content"><span class="act-name">${act.name}</span><span class="act-meta">${formatTime(act.start)} - ${formatTime(act.end)}</span></div>
                        <button class="favorite-button" type="button" data-act="${id}" aria-pressed="${favorite}" aria-label="${favorite ? "Unmark" : "Mark"} ${act.name}" title="${favorite ? "Unmark band" : "Mark band"}"><span aria-hidden="true">${favorite ? "✓" : "+"}</span></button>
                      </article>
                    `;
                  }).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        `;
        actList.querySelectorAll("button").forEach(button => button.addEventListener("click", () => toggleFavorite(button)));
      }

      function renderClashes() {
        if (!markedList || !planList || !clashList) return;
        const marked = markedActs();
        const clashes = clashPairs(marked).sort((a, b) => a.act.startMinutes - b.act.startMinutes || b.overlap - a.overlap);
        const ids = clashingIds();
        markedList.innerHTML = marked.length ? marked.map(act => `
          <article class="mini-act ${ids.has(actId(act)) ? "clashing" : ""}">
            <strong>${act.name}</strong><div class="act-meta">${t(days.find(day => day.id === act.day)?.label) || act.day} · ${formatTime(act.start)} - ${formatTime(act.end)} · ${act.stage}</div>
          </article>
        `).join("") : `<p class="hint">${t(festival.text?.emptyStates?.noBands) || "No bands marked yet."}</p>`;
        const planningDays = [...new Set(marked.map(act => act.day))];
        planList.innerHTML = marked.length ? planningDays.map(day => `
          <article class="mini-act"><strong>${t(days.find(item => item.id === day)?.label) || day}</strong>${marked.filter(act => act.day === day).map(act => `<div class="act-meta">${formatTime(act.start)} - ${formatTime(act.end)} · ${act.name} · ${act.stage}</div>`).join("")}</article>
        `).join("") : `<p class="hint">Mark bands to build your planning.</p>`;
        clashList.innerHTML = clashes.length ? clashes.map(({ act, other, overlap }) => `
          <article class="clash-card"><strong>${act.name} vs ${other.name} — ${overlap} min overlap</strong><span class="act-meta">${formatTime(act.start)}-${formatTime(act.end)} / ${formatTime(other.start)}-${formatTime(other.end)}</span><span class="act-meta">${act.stage} / ${other.stage}</span></article>
        `).join("") : `<p class="hint">${t(festival.text?.emptyStates?.noClashes) || "No clashes yet. Mark bands to detect overlaps."}</p>`;
      }

      function renderLineup() {
        renderLineupControls();
        renderActList();
        renderClashes();
      }

      function updateMapsLink() {
        if (!mapsLink || !mapsPreview) return;
        const destination = (state.mapDestination || festival.travel?.destination || festival.location || "").trim();
        const origin = (state.mapStart || "").trim();
        if (origin) {
          const params = new URLSearchParams({ api: "1", origin, destination, travelmode: state.arrivalMode });
          mapsLink.href = `https://www.google.com/maps/dir/?${params}`;
        } else {
          const params = new URLSearchParams({ api: "1", query: destination });
          mapsLink.href = `https://www.google.com/maps/search/?${params}`;
        }
        mapsPreview.textContent = `${routeModeLabel(state.arrivalMode)} route ${origin ? `from ${origin} ` : ""}to ${destination}.`;
        if (routeFrom) routeFrom.textContent = origin || "Add a starting point";
        if (routeTo) routeTo.textContent = destination;
      }

      function bindTravelAndNotes() {
        ["arrivalMode", "mapStart", "mapDestination", "departureTime", "meetingPoint"].forEach(id => {
          const field = document.getElementById(id);
          if (!field) return;
          field.value = state[id] || "";
          field.addEventListener("input", () => {
            state[id] = field.value;
            saveTravel();
            if (["arrivalMode", "mapStart", "mapDestination"].includes(id)) updateMapsLink();
          });
        });
        const notes = document.getElementById("freeNotes");
        if (notes) {
          notes.value = state.freeNotes;
          notes.addEventListener("input", () => {
            state.freeNotes = notes.value;
            dataApi.writeFestivalSection(festivalId, "notes", { value: state.freeNotes });
          });
        }
        updateMapsLink();
      }

      function bindTools() {
        document.getElementById("checkEssentials")?.addEventListener("click", () => {
          packingCategoriesForStay().forEach(category => category.items.forEach(item => {
            if (item.essential) state.checked[item.id] = true;
          }));
          savePacking();
          renderPacking();
          renderProgress();
        });
        document.getElementById("clearChecks")?.addEventListener("click", () => {
          state.checked = {};
          savePacking();
          renderPacking();
          renderProgress();
        });
        document.getElementById("clearFavorites")?.addEventListener("click", () => {
          state.favoriteActs = {};
          saveFavorites();
          renderLineup();
        });
        [stageFilter, favoriteFilter, lineupSearch].filter(Boolean).forEach(field => {
          field.addEventListener("input", () => {
            renderActList();
            renderClashes();
          });
        });
      }

      bindTravelAndNotes();
      bindTools();
      renderPackingPage();
      renderLineup();
      const readyDetail = { festival };
      window.FESTIPLANNER_READY_DETAIL = readyDetail;
      window.dispatchEvent(new CustomEvent("festiplanner:ready", { detail: readyDetail }));
      return festival;
    } catch (error) {
      dataApi.showLoadError(error);
      window.dispatchEvent(new CustomEvent("festiplanner:error", { detail: { error } }));
      return null;
    }
  }

  window.FESTIPLANNER_APP_READY = init();
})();
