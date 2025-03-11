function showLoadingScreen(show) {
  const loader = document.getElementById("loader-overlay");
  if (loader) {
    loader.classList.toggle("d_none", !show);
  } else {
    console.error("Fehler: #loader-overlay nicht gefunden!");
  }
}

function showLoaderOverlay(show) {
  const overlay = document.getElementById("loader-overlay");
  if (show) {
    overlay.classList.remove("d_none");
  } else {
    overlay.classList.add("d_none");
  }
}
