async function openModal(pokemonId) {
  let pokemon = getPokemonById(pokemonId);
  if (!pokemon) return;

  let evoChain = await loadEvolutionChain(pokemon);
  let modalHTML = createModalHTML(pokemon, evoChain);

  setOverlayHTML(modalHTML);
  showOverlayAsFlex();
}

function getPokemonById(pokemonId) {
  return allPokemon.find((p) => p.id === pokemonId);
}

function createModalHTML(pokemon, evoChain) {
  let mainTab = getMainTabTemplate(pokemon);
  let statsTab = getStatsTabTemplate(pokemon);
  let evoTab = getEvolutionTabTemplate(evoChain);

  return getPokemonModalTabsTemplate(pokemon, mainTab, statsTab, evoTab);
}

function setOverlayHTML(html) {
  overlay.innerHTML = html;
}

function showOverlayAsFlex() {
  overlay.classList.remove("d_none");
  overlay.classList.remove("d_block");
  overlay.classList.add("d_flex");
}

function closeModal() {
  overlay.innerHTML = "";
  overlay.classList.remove("d_flex");
  overlay.classList.remove("d_block");
  overlay.classList.add("d_none");
}

function openTab(tabName) {
  const mainTab = document.getElementById("tab-main");
  const statsTab = document.getElementById("tab-stats");
  const evoTab = document.getElementById("tab-evo");

  hideAllTabs(mainTab, statsTab, evoTab);
  showTab(tabName, mainTab, statsTab, evoTab);
}

function hideAllTabs(mainTab, statsTab, evoTab) {
  mainTab.classList.remove("d_block");
  mainTab.classList.add("d_none");

  statsTab.classList.remove("d_block");
  statsTab.classList.add("d_none");

  evoTab.classList.remove("d_block");
  evoTab.classList.add("d_none");
}

function showTab(tabName, mainTab, statsTab, evoTab) {
  if (tabName === "main") {
    mainTab.classList.remove("d_none");
    mainTab.classList.add("d_block");
  } else if (tabName === "stats") {
    statsTab.classList.remove("d_none");
    statsTab.classList.add("d_block");
  } else if (tabName === "evo") {
    evoTab.classList.remove("d_none");
    evoTab.classList.add("d_block");
  }
}
