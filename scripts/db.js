const BASE_URL = "https://pokeapi.co/api/v2/";
let offset = 0;
const limit = 20;
let allPokemon = [];

async function loadPokemonBatch() {
  showLoadingScreen(true);
  showLoaderOverlay(true);
  await new Promise((resolve) => setTimeout(resolve, 5000));

  try {
    let response = await fetch(
      `${BASE_URL}pokemon?offset=${offset}&limit=${limit}`
    );
    let data = await response.json();

    offset += limit;

    for (let i = 0; i < data.results.length; i++) {
      let pokemon = await loadOnePokemon(data.results[i].url);
      allPokemon.push(pokemon);

      renderPokemonCard(pokemon);
    }
  } catch (error) {
    console.error("Fehler beim Laden der Pokémon:", error);
  } finally {
    showLoadingScreen(false);
    showLoaderOverlay(false);
    enableLoadMoreButton();
  }
}

async function loadOnePokemon(url) {
  let data = await fetchPokemonData(url);
  return parsePokemon(data);
}

async function fetchPokemonData(url) {
  let response = await fetch(url);
  return await response.json();
}

function parsePokemon(data) {
  let types = parseTypes(data);
  let abilities = parseAbilities(data);
  let images = parseImages(data);

  return {
    name: data.name,
    id: data.id,
    imageDream: images.dream,
    imageArtwork: images.artwork,
    types: types,
    stats: data.stats,
    height: data.height,
    weight: data.weight,
    baseExperience: data.base_experience,
    abilities: abilities,
  };
}

function parseTypes(data) {
  let types = [];
  for (let i = 0; i < data.types.length; i++) {
    types.push(data.types[i].type.name);
  }
  return types;
}

function parseAbilities(data) {
  let abilities = [];
  for (let i = 0; i < data.abilities.length; i++) {
    abilities.push(data.abilities[i].ability.name);
  }
  return abilities;
}

function parseImages(data) {
  let fallback = data.sprites.front_default || "assets/fallback.png";
  let dream = data.sprites.other.dream_world.front_default || fallback;
  let artwork =
    data.sprites.other["official-artwork"].front_default || fallback;

  return { dream, artwork };
}
