async function loadEvolutionChain(pokemon) {
  let speciesData = await loadPokemonSpecies(pokemon.id);
  let evoData = await loadEvoData(speciesData);
  let chain = parseChainObject(evoData.chain, []);
  return chain;
}

async function loadPokemonSpecies(pokemonId) {
  let speciesUrl = `${BASE_URL}pokemon-species/${pokemonId}`;
  let response = await fetch(speciesUrl);
  return await response.json();
}

async function loadEvoData(speciesData) {
  let evoUrl = speciesData.evolution_chain.url;
  let response = await fetch(evoUrl);
  return await response.json();
}

function parseChainObject(chainObj, chainArray) {
  chainArray.push(chainObj.species.name);

  if (chainObj.evolves_to && chainObj.evolves_to.length > 0) {
    return parseChainObject(chainObj.evolves_to[0], chainArray);
  }
  return chainArray;
}
