function getPokemonCardTemplate(pokemon) {
  let typeClass = getTypeClass(pokemon);
  return `
    <div class="pokemon-card ${typeClass}" onclick="openModal(${pokemon.id})">
      <h3>${pokemon.name} (#${pokemon.id})</h3>
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <p>${pokemon.types.join(", ")}</p>
    </div>
  `;
}

function getPokemonModalTemplate(pokemon) {
  return `
    <div class="pokemon-modal" onclick="event.stopPropagation()">
      <h2>${pokemon.name} (#${pokemon.id})</h2>
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <p>Typ: ${pokemon.types.join(", ")}</p>
      <p>HP: ${pokemon.stats[0].base_stat}</p>
      <button onclick="closeModal()">Schließen</button>
    </div>
  `;
}

function getPokemonModalTabsTemplate(pokemon, mainTab, statsTab, evoTab) {
  return `
    <div class="pokemon-modal" onclick="event.stopPropagation()">
      <h2>${pokemon.name} (#${pokemon.id})</h2>
      <img src="${pokemon.image}" alt="${pokemon.name}" />

      <div class="tab-buttons">
        <button onclick="openTab('main')">Main</button>
        <button onclick="openTab('stats')">Stats</button>
        <button onclick="openTab('evo')">Evolution</button>
      </div>

      <!-- Tabs -->
      <div id="tab-main" class="tab-content d_block">
        ${mainTab}
      </div>
      <div id="tab-stats" class="tab-content d_none">
        ${statsTab}
      </div>
      <div id="tab-evo" class="tab-content d_none">
        ${evoTab}
      </div>
      
      <div class="buttons">
        <button onclick="previousPokemon()">Back</button>
        <button onclick="closeModal()">Schließen</button>
        <button onclick="nextPokemon()">Next</button>
      </div>
    </div>
  `;
}

function getMainTabTemplate(pokemon) {
  return `
    <h3>Main Info</h3>
    <p>Höhe: ${pokemon.height}</p>
    <p>Gewicht: ${pokemon.weight}</p>
    <p>Base Experience: ${pokemon.baseExperience}</p>
    <p>Abilities: ${pokemon.abilities.join(", ")}</p>
  `;
}

function getStatsTabTemplate(pokemon) {
  return `
    <h3>Stats</h3>
    <p>HP: ${pokemon.stats[0].base_stat}</p>
    <p>Attack: ${pokemon.stats[1].base_stat}</p>
    <p>Defense: ${pokemon.stats[2].base_stat}</p>
    <p>Special Attack: ${pokemon.stats[3].base_stat}</p>
    <p>Special Defense: ${pokemon.stats[4].base_stat}</p>
    <p>Speed: ${pokemon.stats[5].base_stat}</p>
  `;
}

function getEvolutionTabTemplate(evoChain) {
  return `
    <h3>Evolution Chain</h3>
    <p>${evoChain.join(" → ")}</p>
  `;
}
