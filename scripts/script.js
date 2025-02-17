let pokemonContainer;
let loadMoreButton;
let searchInput;
let overlay;

function init() {
  getElements();
  loadPokemonBatch();
}

function getElements() {
  pokemonContainer = document.getElementById("pokemon-container");
  loadMoreButton = document.getElementById("load-more");
  searchInput = document.getElementById("search");
  overlay = document.getElementById("overlay");
}

function getTypeClass(pokemon) {
  if (pokemon.types.length > 0) {
    return `type-${pokemon.types[0]}`;
  }
  return "type-normal";
}

function renderPokemonCard(pokemon) {
  pokemonContainer.innerHTML += getPokemonCardTemplate(pokemon);
}

function previousPokemon() {
  console.log("previousPokemon() clicked - not yet implemented");
}
function nextPokemon() {
  console.log("nextPokemon() clicked - not yet implemented");
}

function getPokemonByName(name) {
  return allPokemon.find((p) => p.name.toLowerCase() === name.toLowerCase());
}
