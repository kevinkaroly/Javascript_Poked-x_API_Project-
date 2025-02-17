const BASE_URL = "https://pokeapi.co/api/v2/";
let offset = 0;
const limit = 20;
let allPokemon = [];

async function loadPokemonBatch() {
  showLoadingScreen(true);

  let response = await fetch(
    `${BASE_URL}pokemon?offset=${offset}&limit=${limit}`
  );
  let data = await response.json();
  offset += limit;

  for (let i = 0; i < data.results.length; i++) {
    let pokemon = await loadPokemonDetails(data.results[i].url);
    allPokemon.push(pokemon);
    renderPokemonCard(pokemon);
  }

  showLoadingScreen(false);
}

async function loadPokemonDetails(url) {
  let response = await fetch(url);
  let data = await response.json();

  let types = [];
  for (let i = 0; i < data.types.length; i++) {
    types.push(data.types[i].type.name);
  }

  let abilities = [];
  for (let i = 0; i < data.abilities.length; i++) {
    abilities.push(data.abilities[i].ability.name);
  }

  return {
    name: data.name,
    id: data.id,
    image: data.sprites.other["official-artwork"].front_default,
    types: types,
    stats: data.stats,
    height: data.height,
    weight: data.weight,
    baseExperience: data.base_experience,
    abilities: abilities,
  };
}
