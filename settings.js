(function () {
  const FESTIVAL_KEY = "graspopPackingPlanner";
  const PINNED_FIRST_KEY = "festiplannerShowPinnedFirst";
  const LANGUAGE_KEY = "festiplannerLanguage";
  const APPEARANCE_KEY = "festiplannerAppearance";

  const pinnedFirst = document.getElementById("showPinnedFirst");
  const resetFestivalButton = document.getElementById("resetFestivalButton");
  const resetAllButton = document.getElementById("resetAllButton");
  const resetDialog = document.getElementById("resetDialog");
  const resetDialogTitle = document.getElementById("resetDialogTitle");
  const resetDialogText = document.getElementById("resetDialogText");
  const confirmResetButton = document.getElementById("confirmResetButton");
  const status = document.getElementById("settingsStatus");
  let pendingReset = "";

  function pinnedFirstEnabled() {
    return localStorage.getItem(PINNED_FIRST_KEY) !== "false";
  }

  function setStatus(message) {
    status.textContent = message;
  }

  function openResetDialog(type) {
    pendingReset = type;
    if (type === "festival") {
      resetDialogTitle.textContent = "Reset current festival?";
      resetDialogText.textContent = "Campsite, travel information, selected bands, notes, and packing progress will be cleared.";
      confirmResetButton.textContent = "Reset festival";
    } else {
      resetDialogTitle.textContent = "Reset all local data?";
      resetDialogText.textContent = "All festival plans, pinned festivals, language, theme, and app preferences will be cleared. This cannot be undone.";
      confirmResetButton.textContent = "Reset all data";
    }
    resetDialog.showModal();
  }

  pinnedFirst.checked = pinnedFirstEnabled();
  pinnedFirst.addEventListener("change", () => {
    localStorage.setItem(PINNED_FIRST_KEY, String(pinnedFirst.checked));
    setStatus("Festival preference saved.");
  });

  resetFestivalButton.addEventListener("click", () => openResetDialog("festival"));
  resetAllButton.addEventListener("click", () => openResetDialog("all"));

  resetDialog.addEventListener("close", () => {
    if (resetDialog.returnValue !== "confirm") {
      pendingReset = "";
      return;
    }

    if (pendingReset === "festival") {
      localStorage.removeItem(FESTIVAL_KEY);
      setStatus("Current festival data reset.");
    } else if (pendingReset === "all") {
      localStorage.clear();
      pinnedFirst.checked = true;
      document.documentElement.lang = "en";
      document.documentElement.dataset.appearance = "system";
      const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
      document.documentElement.dataset.theme = systemTheme;
      document.querySelectorAll(".language-toggle button").forEach(button => {
        const active = button.dataset.lang === "en";
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      document.querySelectorAll(".appearance-toggle button").forEach(button => {
        const active = button.dataset.appearance === "system";
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      setStatus("All local data reset.");
      setTimeout(() => window.location.reload(), 250);
    }

    pendingReset = "";
  });

  window.addEventListener("storage", event => {
    if (event.key === PINNED_FIRST_KEY) pinnedFirst.checked = pinnedFirstEnabled();
    if (event.key === LANGUAGE_KEY || event.key === APPEARANCE_KEY) setStatus("Settings updated.");
  });
})();
