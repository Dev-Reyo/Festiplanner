(function () {
  const SETTINGS_KEY = "festiplanner:settings";
  const PINNED_KEY = "festiplanner:pinnedFestivals";
  const LEGACY_PLAN_KEY = "graspopPackingPlanner";
  const LEGACY_PINNED_KEY = "festiplannerPinnedFestivals";
  const DEFAULT_FESTIVAL_ID = "graspop-2026";
  const LEGACY_FESTIVAL_ID = "graspop-2026";
  const fallbackData = window.FESTIPLANNER_FALLBACK_DATA || { summaries: [], festivals: {} };
  const paths = window.FestiPlannerPaths;
  const appearanceMedia = window.matchMedia?.("(prefers-color-scheme: light)");
  let summariesPromise;
  let bootstrapPromise;
  let activeFestivalTheme = {};

  function isRecord(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  function hasKeys(value) {
    return isRecord(value) && Object.keys(value).length > 0;
  }

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
    if (!isRecord(saved)) return {};
    return saved;
  }

  function updateSettings(patch) {
    const next = { ...readSettings(), ...patch };
    writeJson(SETTINGS_KEY, next);
    if (Object.prototype.hasOwnProperty.call(patch, "appearance")) {
      applyUserTheme();
    }
    return next;
  }

  function appearanceMode() {
    const saved = readSettings().appearance;
    return ["light", "dark", "system"].includes(saved) ? saved : "system";
  }

  function resolvedTheme(mode = appearanceMode()) {
    if (mode === "system") return appearanceMedia?.matches ? "light" : "dark";
    return mode;
  }

  function applyUserTheme(festival) {
    const mode = appearanceMode();
    const resolved = resolvedTheme(mode);
    const theme = festival?.theme || activeFestivalTheme;
    const accent = resolved === "light"
      ? (theme.accentLight || theme.accent)
      : (theme.accent || theme.accentLight);

    document.documentElement.dataset.appearance = mode;
    document.documentElement.dataset.theme = resolved;
    if (document.body) {
      document.body.dataset.appearance = mode;
      document.body.dataset.theme = resolved;
      if (accent) {
        document.body.style.setProperty("--festival-accent", accent);
        document.body.style.setProperty("--primary-accent", accent);
        document.body.style.setProperty("--accent", accent);
      }
    }
    return resolved;
  }

  appearanceMedia?.addEventListener("change", () => {
    if (appearanceMode() === "system") applyUserTheme();
  });

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

  function packingCategoriesForAccommodation(festival, campingId, accommodationTypeId) {
    const categories = Array.isArray(festival?.packingCategories) ? festival.packingCategories : [];
    const types = Array.isArray(festival?.accommodationTypes) ? festival.accommodationTypes : [];
    const type = types.find(item => item.campingId === campingId && item.id === accommodationTypeId);
    const mode = type?.stayMode || "ownTent";
    const adaptation = festival?.packingAdaptation || {};
    const accommodationKey = type ? `${type.campingId}:${type.id}` : "";
    const list = value => Array.isArray(value) ? value : [];
    const remove = new Set([
      ...list(adaptation.removeByMode?.[mode]),
      ...list(adaptation.removeByAccommodation?.[accommodationKey]),
      ...list(type?.packing?.removeItemIds)
    ]);
    const filtered = categories.map(category => ({
      ...category,
      items: list(category.items).filter(item => !remove.has(item.id))
    })).filter(category => category.items.length);
    const extras = [
      ...list(adaptation.extraByMode?.[mode]),
      ...list(adaptation.extraByAccommodation?.[accommodationKey]),
      ...list(type?.packing?.items)
    ];

    if (extras.length) {
      filtered.push({
        id: "stay-specific",
        name: adaptation.staySpecificCategory || { en: "Stay-specific" },
        items: extras
      });
    }
    return filtered;
  }

  function migrateLegacyData(festivals) {
    try {
      const settings = readSettings();
      const nextSettings = { ...settings };
      if (!nextSettings.language) nextSettings.language = localStorage.getItem("festiplannerLanguage") || "en";
      if (!nextSettings.appearance) nextSettings.appearance = localStorage.getItem("festiplannerAppearance") || "system";
      if (nextSettings.showPinnedFirst === undefined) {
        nextSettings.showPinnedFirst = localStorage.getItem("festiplannerShowPinnedFirst") !== "false";
      }
      if (!nextSettings.selectedFestivalId) nextSettings.selectedFestivalId = DEFAULT_FESTIVAL_ID;

      if (!localStorage.getItem(PINNED_KEY)) {
        const pinned = readJson(LEGACY_PINNED_KEY, []);
        writeJson(PINNED_KEY, Array.isArray(pinned) ? pinned : []);
      }

      const legacyFestivalExists = Array.isArray(festivals)
        && festivals.some(festival => festival?.id === LEGACY_FESTIVAL_ID);
      const legacy = readJson(LEGACY_PLAN_KEY, null);
      if (legacyFestivalExists && isRecord(legacy)) {
        const checked = hasKeys(legacy.checked) ? legacy.checked : {};
        const favoriteActs = hasKeys(legacy.favoriteActs) ? legacy.favoriteActs : {};
        const hasPacking = Boolean(legacy.camp || legacy.campType || Object.keys(checked).length);
        const hasFavorites = Boolean(legacy.lineupDay || Object.keys(favoriteActs).length);
        const hasTravel = Boolean(
          legacy.arrivalMode
          || legacy.mapStart
          || legacy.mapDestination
          || legacy.departureTime
          || legacy.meetingPoint
        );
        const hasNotes = typeof legacy.freeNotes === "string" && legacy.freeNotes.trim() !== "";

        if (hasPacking && !localStorage.getItem(festivalKey(LEGACY_FESTIVAL_ID, "packing"))) {
          writeFestivalSection(LEGACY_FESTIVAL_ID, "packing", {
            camp: legacy.camp || "",
            campType: legacy.campType || "",
            checked
          });
        }
        if (hasFavorites && !localStorage.getItem(festivalKey(LEGACY_FESTIVAL_ID, "favorites"))) {
          const legacyDay = String(legacy.lineupDay || "thursday").toLowerCase();
          writeFestivalSection(LEGACY_FESTIVAL_ID, "favorites", {
            lineupDay: legacyDay,
            favoriteActs
          });
        }
        if (hasTravel && !localStorage.getItem(festivalKey(LEGACY_FESTIVAL_ID, "travel"))) {
          writeFestivalSection(LEGACY_FESTIVAL_ID, "travel", {
            arrivalMode: legacy.arrivalMode || "driving",
            mapStart: legacy.mapStart || "",
            mapDestination: legacy.mapDestination || "",
            departureTime: legacy.departureTime || "",
            meetingPoint: legacy.meetingPoint || ""
          });
        }
        if (hasNotes && !localStorage.getItem(festivalKey(LEGACY_FESTIVAL_ID, "notes"))) {
          writeFestivalSection(LEGACY_FESTIVAL_ID, "notes", { value: legacy.freeNotes || "" });
        }
      }

      nextSettings.legacyMigrated = true;
      writeJson(SETTINGS_KEY, nextSettings);
    } catch (error) {
      console.warn("Legacy Festiplanner data could not be migrated yet.", error);
    }
  }

  function cloneFallback(value) {
    return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
  }

  function fallbackSummaries() {
    return cloneFallback(fallbackData.summaries) || [];
  }

  function fallbackFestival(festivalId) {
    return cloneFallback(fallbackData.festivals?.[festivalId]);
  }

  function warnFallback(path, error) {
    console.warn(`Using bundled festival data because ${path} could not be loaded.`, error);
  }

  async function fetchJson(path, fallback) {
    const url = paths.resolveDataPath(path);
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error(`Could not load ${url} (${response.status})`);
      return await response.json();
    } catch (error) {
      const value = typeof fallback === "function" ? fallback() : cloneFallback(fallback);
      if (value !== undefined && value !== null) {
        warnFallback(url, error);
        return value;
      }
      throw error;
    }
  }

  async function loadFestivalSummaries() {
    if (!summariesPromise) {
      summariesPromise = fetchJson("festivals.json", fallbackSummaries).then(data => {
        if (Array.isArray(data) && data.length) return data;
        const fallback = fallbackSummaries();
        if (fallback.length) return fallback;
        throw new Error("No festival list is available.");
      });
    }
    return summariesPromise;
  }

  async function bootstrap(festivalId = selectedFestivalId()) {
    if (bootstrapPromise) return bootstrapPromise;
    bootstrapPromise = (async () => {
      const festivals = await loadFestivalSummaries();
      const explicitFestivalId = new URLSearchParams(window.location.search).get("festival");
      const summary = festivals.find(item => item.id === festivalId)
        || fallbackSummaries().find(item => item.id === festivalId)
        || (explicitFestivalId ? null : festivals[0]);
      if (explicitFestivalId && !summary) throw new Error(`Festival "${explicitFestivalId}" is not available.`);
      if (!summary) throw new Error("No festivals are available.");
      const festival = await fetchJson(summary.dataFile, () => fallbackFestival(summary.id));
      if (!isRecord(festival)) {
        throw new Error(`Festival "${summary.id}" has no usable data.`);
      }

      migrateLegacyData(festivals);
      updateSettings({ selectedFestivalId: festival.id });
      applyFestivalTheme(festival);
      window.FESTIPLANNER_FESTIVAL_DATA = festival;
      window.FESTIPLANNER_LINEUP_DATA = festival.timetable || [];
      const detail = { summary, festival, festivals };
      window.FESTIPLANNER_DATA_READY = detail;
      window.dispatchEvent(new CustomEvent("festiplanner:data-ready", { detail }));
      return detail;
    })();
    return bootstrapPromise;
  }

  function resolveAssetPath(path) {
    return paths.resolveAssetPath(path);
  }

  function whenReady(callback) {
    if (window.FESTIPLANNER_READY_DETAIL?.festival) {
      const festival = window.FESTIPLANNER_READY_DETAIL.festival;
      return Promise.resolve(callback ? callback(festival) : festival);
    }
    return new Promise((resolve, reject) => {
      const onReady = event => {
        window.removeEventListener("festiplanner:error", onError);
        resolve(callback ? callback(event.detail.festival) : event.detail.festival);
      };
      const onError = event => {
        window.removeEventListener("festiplanner:ready", onReady);
        reject(event.detail.error);
      };
      window.addEventListener("festiplanner:ready", onReady, { once: true });
      window.addEventListener("festiplanner:error", onError, { once: true });
    });
  }

  function applyFestivalTheme(festival) {
    const theme = festival?.theme || {};
    activeFestivalTheme = theme;
    document.body.classList.forEach(className => {
      if (className.endsWith("-theme")) document.body.classList.remove(className);
    });
    if (theme.className) document.body.classList.add(theme.className);
    applyUserTheme(festival);
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
    const url = new URL(paths.resolveAssetPath(path));
    url.searchParams.set("festival", festivalId);
    return url.href;
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

  window.FestiPlannerData = {
    SETTINGS_KEY,
    PINNED_KEY,
    DEFAULT_FESTIVAL_ID,
    readJson,
    writeJson,
    readSettings,
    updateSettings,
    appearanceMode,
    resolvedTheme,
    applyUserTheme,
    language,
    text,
    selectedFestivalId,
    festivalKey,
    readFestivalSection,
    writeFestivalSection,
    removeFestivalData,
    packingCategoriesForAccommodation,
    bootstrap,
    loadFestivalSummaries,
    getAssetBaseUrl: paths.getAssetBaseUrl,
    resolveAssetPath,
    resolveDataPath: paths.resolveDataPath,
    whenReady,
    applyFestivalTheme,
    formatDateRange,
    festivalUrl,
    showLoadError
  };
})();
