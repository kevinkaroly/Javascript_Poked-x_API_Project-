async function handleLoadMore() {
  disableLoadMoreButton();
  showLoaderOverlay(true);

  await loadPokemonBatch();

  showLoaderOverlay(false);
  enableLoadMoreButton();
}

async function loadMoreBatch() {
  await loadPokemonBatch();
  enableLoadMoreButton();
}

function disableLoadMoreButton() {
  let loadMoreButton = document.getElementById("load-more");
  loadMoreButton.classList.add("d_none");
}

function enableLoadMoreButton() {
  let loadMoreButton = document.getElementById("load-more");
  loadMoreButton.classList.remove("d_none");
}
