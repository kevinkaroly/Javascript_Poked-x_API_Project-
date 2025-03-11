let pokemonContainer;
let loadMoreButton;
let searchInput;
let overlay;
let currentPokemonIndex = -1;

function init() {
  showLoaderOverlay(true);
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
function getPokemonTypeIcons(types) {
  let iconsHTML = "";

  for (let i = 0; i < types.length; i++) {
    iconsHTML += `
      <img 
        src="https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/gen8/${types[i]}.png" 
        alt="${types[i]} Type" 
        class="type-icon"
      >`;
  }

  return iconsHTML;
}

function renderAllPokemon(pokemonList) {
  let pokemonContainer = document.getElementById("pokemon-container");
  pokemonContainer.innerHTML = "";
  for (let i = 0; i < pokemonList.length; i++) {
    pokemonContainer.innerHTML += getPokemonCardTemplate(pokemonList[i]);
  }
}

function renderPokemonCard(pokemon) {
  let pokemonContainer = document.getElementById("pokemon-container");
  pokemonContainer.innerHTML += getPokemonCardTemplate(pokemon);
}

function previousPokemon() {
  if (currentPokemonIndex > 0) {
    currentPokemonIndex--;
    let newId = allPokemon[currentPokemonIndex].id;
    openModal(newId);
  } else {
    console.log("Bereits beim ersten Pokémon");
  }
}

function nextPokemon() {
  if (currentPokemonIndex < allPokemon.length - 1) {
    currentPokemonIndex++;
    let newId = allPokemon[currentPokemonIndex].id;
    openModal(newId);
  } else {
    console.log("Bereits beim letzten Pokémon");
  }
}

function getPokemonByName(name) {
  return allPokemon.find((p) => p.name.toLowerCase() === name.toLowerCase());
}

function searchPokemon() {
  let searchInput = document.getElementById("search").value.toLowerCase();

  if (searchInput.length < 3) {
    displayPokemon(allPokemon);
    return;
  }

  let filteredPokemon = filterPokemon(searchInput);

  if (filterPokemon.length === 0) {
    document.getElementById("pokemon-container").innerHTML =
      "<p>Kein Pokemon gefunden.</p>";
  } else {
    displayPokemon(filteredPokemon);
  }
}

function filterPokemon(searchInput) {
  let result = [];
  for (let i = 0; i < allPokemon.length; i++) {
    if (allPokemon[i].name.toLowerCase().includes(searchInput)) {
      result.push(allPokemon[i]);
    }
  }
  return result;
}

function displayPokemon(pokemonList) {
  let pokemonContainer = document.getElementById("pokemon-container");
  pokemonContainer.innerHTML = "";

  for (let i = 0; i < pokemonList.length; i++) {
    let cardHTML = getPokemonCardTemplate(pokemonList[i]);
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = cardHTML;

    pokemonContainer.appendChild(tempDiv.firstElementChild);
  }
}
