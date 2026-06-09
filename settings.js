(async function () {
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
      resetDialogTitle.textContent = dataApi.text({
        en: "Reset current festival?",
        nl: "Huidig festival resetten?"
      });
      resetDialogText.textContent = dataApi.text({
        en: "Campsite, travel information, selected bands, notes, and packing progress will be cleared.",
        nl: "Camping, reisinformatie, geselecteerde bands, notities en inpakvoortgang worden gewist."
      });
      confirmResetButton.textContent = dataApi.text({
        en: "Reset festival",
        nl: "Festival resetten"
      });
    } else {
      resetDialogTitle.textContent = dataApi.text({
        en: "Reset all local data?",
        nl: "Alle lokale gegevens resetten?"
      });
      resetDialogText.textContent = dataApi.text({
        en: "All festival plans, pinned festivals, language, theme, and app preferences will be cleared. This cannot be undone.",
        nl: "Alle festivalplannen, vastgezette festivals, taal, thema en app-voorkeuren worden gewist. Dit kan niet ongedaan worden gemaakt."
      });
      confirmResetButton.textContent = dataApi.text({
        en: "Reset all data",
        nl: "Alle gegevens resetten"
      });
    }
    resetDialog.showModal();
  }

  try {
    const { festivals } = await dataApi.bootstrap();

    pinnedFirst.checked = settings().showPinnedFirst !== false;
    pinnedFirst.addEventListener("change", () => {
      dataApi.updateSettings({ showPinnedFirst: pinnedFirst.checked });
      setStatus(dataApi.text({
        en: "Festival preference saved.",
        nl: "Festivalvoorkeur opgeslagen."
      }));
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
        setStatus(dataApi.text({
          en: "Current festival data reset.",
          nl: "Gegevens van het huidige festival gereset."
        }));
      } else if (pendingReset === "all") {
        localStorage.clear();
        setStatus(dataApi.text({
          en: "All local data reset.",
          nl: "Alle lokale gegevens gereset."
        }));
        setTimeout(() => window.location.reload(), 250);
      }
      pendingReset = "";
    });

    document.getElementById("festivalCount").textContent = String(festivals.length);
  } catch (error) {
    document.getElementById("festivalCount").textContent = dataApi.text({
      en: "Unavailable",
      nl: "Niet beschikbaar"
    });
    dataApi.showLoadError(error);
  }
})();
