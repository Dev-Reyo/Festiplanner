(function () {
  const scriptUrl = document.currentScript?.src || window.location.href;
  const appBaseUrl = new URL("./", scriptUrl);

  function getAssetBaseUrl() {
    return appBaseUrl.href;
  }

  function resolveAssetPath(path = "") {
    if (!path) return appBaseUrl.href;
    return new URL(path, appBaseUrl).href;
  }

  function resolveDataPath(path = "") {
    if (/^[a-z][a-z\d+.-]*:/i.test(path) || path.startsWith("/")) {
      return resolveAssetPath(path);
    }
    const normalized = path.startsWith("data/") ? path : `data/${path}`;
    return resolveAssetPath(normalized);
  }

  function resolveDeclaredAssets() {
    document.querySelectorAll("[data-app-asset]").forEach(element => {
      const path = element.dataset.appAsset;
      if (path) element.setAttribute("src", resolveAssetPath(path));
    });
  }

  window.FestiPlannerPaths = {
    getAssetBaseUrl,
    resolveAssetPath,
    resolveDataPath
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", resolveDeclaredAssets, { once: true });
  } else {
    resolveDeclaredAssets();
  }
})();
