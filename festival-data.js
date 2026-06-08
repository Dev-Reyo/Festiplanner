(function () {
  const SETTINGS_KEY = "festiplanner:settings";
  const PINNED_KEY = "festiplanner:pinnedFestivals";
  const LEGACY_PLAN_KEY = "graspopPackingPlanner";
  const LEGACY_PINNED_KEY = "festiplannerPinnedFestivals";
  const DEFAULT_FESTIVAL_ID = "graspop-2026";

  function readJson(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value === null ? fallback : value;
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function readSettings() {
    const saved = readJson(SETTINGS_KEY, {});
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    return saved;
  }

  function updateSettings(patch) {
    const next = { ...readSettings(), ...patch };
    writeJson(SETTINGS_KEY, next);
    return next;
  }

  function language() {
    return readSettings().language || "en";
  }

  function text(value, lang = language()) {
    if (value === null || value === undefined) return "";
    if (typeof value === "string" || typeof value === "number") return String(value);
    if (typeof value !== "object" || Array.isArray(value)) return "";
    if (value[lang] !== undefined) return String(value[lang]);
    if (value.en !== undefined) return String(value.en);
    const first = Object.values(value).find(item => item !== null && item !== undefined);
    return first === undefined ? "" : String(first);
  }

  function selectedFestivalId() {
    const queryId = new URLSearchParams(window.location.search).get("festival");
    return queryId || readSettings().selectedFestivalId || DEFAULT_FESTIVAL_ID;
  }

  function festivalKey(festivalId, section) {
    return `festiplanner:${festivalId}:${section}`;
  }

  function readFestivalSection(festivalId, section, fallback) {
    return readJson(festivalKey(festivalId, section), fallback);
  }

  function writeFestivalSection(festivalId, section, value) {
    writeJson(festivalKey(festivalId, section), value);
  }

  function removeFestivalData(festivalId) {
    ["packing", "favorites", "travel", "notes"].forEach(section => {
      localStorage.removeItem(festivalKey(festivalId, section));
    });
  }

  function migrateLegacyData() {
    const settings = readSettings();
    const legacyAlreadyMigrated = settings.legacyMigrated === true;
    const nextSettings = { ...settings };
    if (!nextSettings.language) nextSettings.language = localStorage.getItem("festiplannerLanguage") || "en";
    if (!nextSettings.appearance) nextSettings.appearance = localStorage.getItem("festiplannerAppearance") || "system";
    if (nextSettings.showPinnedFirst === undefined) {
      nextSettings.showPinnedFirst = localStorage.getItem("festiplannerShowPinnedFirst") !== "false";
    }
    if (!nextSettings.selectedFestivalId) nextSettings.selectedFestivalId = DEFAULT_FESTIVAL_ID;
    nextSettings.legacyMigrated = true;
    writeJson(SETTINGS_KEY, nextSettings);

    if (!localStorage.getItem(PINNED_KEY)) {
      const pinned = readJson(LEGACY_PINNED_KEY, []);
      writeJson(PINNED_KEY, Array.isArray(pinned) ? pinned : []);
    }

    if (legacyAlreadyMigrated) return;
    const legacy = readJson(LEGACY_PLAN_KEY, null);
    if (!legacy || typeof legacy !== "object") return;

    if (!localStorage.getItem(festivalKey(DEFAULT_FESTIVAL_ID, "packing"))) {
      writeFestivalSection(DEFAULT_FESTIVAL_ID, "packing", {
        camp: legacy.camp || "",
        campType: legacy.campType || "",
        checked: legacy.checked && typeof legacy.checked === "object" ? legacy.checked : {}
      });
    }
    if (!localStorage.getItem(festivalKey(DEFAULT_FESTIVAL_ID, "favorites"))) {
      writeFestivalSection(DEFAULT_FESTIVAL_ID, "favorites", {
        lineupDay: legacy.lineupDay || "Thursday",
        favoriteActs: legacy.favoriteActs && typeof legacy.favoriteActs === "object" ? legacy.favoriteActs : {}
      });
    }
    if (!localStorage.getItem(festivalKey(DEFAULT_FESTIVAL_ID, "travel"))) {
      writeFestivalSection(DEFAULT_FESTIVAL_ID, "travel", {
        arrivalMode: legacy.arrivalMode || "driving",
        mapStart: legacy.mapStart || "",
        mapDestination: legacy.mapDestination || "",
        departureTime: legacy.departureTime || "",
        meetingPoint: legacy.meetingPoint || ""
      });
    }
    if (!localStorage.getItem(festivalKey(DEFAULT_FESTIVAL_ID, "notes"))) {
      writeFestivalSection(DEFAULT_FESTIVAL_ID, "notes", { value: legacy.freeNotes || "" });
    }
  }

  async function fetchJson(path) {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`Could not load ${path} (${response.status})`);
    return response.json();
  }

  async function loadFestivalSummaries() {
    const data = await fetchJson("data/festivals.json");
    if (!Array.isArray(data)) throw new Error("Festival list is invalid.");
    return data;
  }

  async function loadFestival(festivalId = selectedFestivalId()) {
    const festivals = await loadFestivalSummaries();
    const explicitFestivalId = new URLSearchParams(window.location.search).get("festival");
    const summary = festivals.find(item => item.id === festivalId) || (explicitFestivalId ? null : festivals[0]);
    if (explicitFestivalId && !summary) throw new Error(`Festival "${explicitFestivalId}" is not available.`);
    if (!summary) throw new Error("No festivals are available.");
    const festival = await fetchJson(summary.dataFile);
    updateSettings({ selectedFestivalId: festival.id });
    applyFestivalTheme(festival);
    window.FESTIPLANNER_FESTIVAL_DATA = festival;
    window.FESTIPLANNER_LINEUP_DATA = festival.timetable || [];
    return { summary, festival, festivals };
  }

  function applyFestivalTheme(festival) {
    const theme = festival?.theme || {};
    document.body.classList.forEach(className => {
      if (className.endsWith("-theme")) document.body.classList.remove(className);
    });
    if (theme.className) document.body.classList.add(theme.className);
    if (theme.accent) {
      document.body.style.setProperty("--festival-accent", theme.accent);
      document.body.style.setProperty("--primary-accent", theme.accent);
      document.body.style.setProperty("--accent", theme.accent);
    }
  }

  function formatDateRange(startDate, endDate, lang = language()) {
    const locale = lang === "nl" ? "nl-NL" : lang;
    const start = new Date(`${startDate}T12:00:00`);
    const end = new Date(`${endDate}T12:00:00`);
    const day = new Intl.DateTimeFormat(locale, { day: "numeric" });
    const month = new Intl.DateTimeFormat(locale, { month: "long" });
    if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth()) {
      return `${day.format(start)}-${day.format(end)} ${month.format(end)} ${end.getFullYear()}`;
    }
    const short = new Intl.DateTimeFormat(locale, { day: "numeric", month: "short" });
    return `${short.format(start)}-${short.format(end)} ${end.getFullYear()}`;
  }

  function festivalUrl(path, festivalId = selectedFestivalId()) {
    return `${path}?festival=${encodeURIComponent(festivalId)}`;
  }

  function showLoadError(error, container = document.querySelector("main")) {
    if (!container) return;
    container.innerHTML = `
      <section class="band">
        <article class="panel data-error" role="alert">
          <h2>Festival data unavailable</h2>
          <p>${error?.message || "The festival data could not be loaded. Please refresh and try again."}</p>
        </article>
      </section>
    `;
  }

  migrateLegacyData();

  window.FestiPlannerData = {
    SETTINGS_KEY,
    PINNED_KEY,
    DEFAULT_FESTIVAL_ID,
    readJson,
    writeJson,
    readSettings,
    updateSettings,
    language,
    text,
    selectedFestivalId,
    festivalKey,
    readFestivalSection,
    writeFestivalSection,
    removeFestivalData,
    loadFestivalSummaries,
    loadFestival,
    applyFestivalTheme,
    formatDateRange,
    festivalUrl,
    showLoadError
  };
})();
