(function () {
  const dataApi = window.FestiPlannerData;
  const pinnedFirst = document.getElementById("showPinnedFirst");
  const resetFestivalButton = document.getElementById("resetFestivalButton");
  const resetAllButton = document.getElementById("resetAllButton");
  const resetDialog = document.getElementById("resetDialog");
  const resetDialogTitle = document.getElementById("resetDialogTitle");
  const resetDialogText = document.getElementById("resetDialogText");
  const confirmResetButton = document.getElementById("confirmResetButton");
  const status = document.getElementById("settingsStatus");
  let pendingReset = "";

  function settings() {
    return dataApi.readSettings();
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

  pinnedFirst.checked = settings().showPinnedFirst !== false;
  pinnedFirst.addEventListener("change", () => {
    dataApi.updateSettings({ showPinnedFirst: pinnedFirst.checked });
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
      dataApi.removeFestivalData(dataApi.selectedFestivalId());
      setStatus("Current festival data reset.");
    } else if (pendingReset === "all") {
      localStorage.clear();
      setStatus("All local data reset.");
      setTimeout(() => window.location.reload(), 250);
    }
    pendingReset = "";
  });

  dataApi.loadFestivalSummaries()
    .then(festivals => {
      document.getElementById("festivalCount").textContent = String(festivals.length);
    })
    .catch(() => {
      document.getElementById("festivalCount").textContent = "Unavailable";
    });
})();
