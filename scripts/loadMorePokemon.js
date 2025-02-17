function handleLoadMore() {
    disableLoadMoreButton();
    loadMoreBatch();
  }
  
  async function loadMoreBatch() {
    await loadPokemonBatch();
    enableLoadMoreButton();
  }
  
  function disableLoadMoreButton() {
    loadMoreButton.disabled = true;
    loadMoreButton.textContent = "Lädt...";
  }
  
  function enableLoadMoreButton() {
    loadMoreButton.disabled = false;
    loadMoreButton.textContent = "Mehr Laden";
  }