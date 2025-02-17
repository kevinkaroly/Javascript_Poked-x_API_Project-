function getPokemonCardTemplate(pokemon) {
  let typeClass = getTypeClass(pokemon);
  return `
    <div class="pokemon-card" onclick="openModal(${pokemon.id})">
      <div class="pokemon-card-header">
        <h3>${pokemon.name} (#${pokemon.id})</h3>
      </div>
      <div class="pokemon-card-img ${typeClass}">
        <img src="${pokemon.image}" alt="${pokemon.name}">
      </div>
      <div class="pokemon-card-type">
        <p>${pokemon.types.join(", ")}</p>
      </div>
    </div>
  `;
}

function getPokemonModalTabsTemplate(pokemon, mainTab, statsTab, evoTab) {
  return `
    <div class="pokemon-modal" onclick="event.stopPropagation()">
      <div class="modal-header">
        <h2>${pokemon.name} (#${pokemon.id})</h2>
        <img src="${pokemon.image}" alt="${pokemon.name}" />
      </div>

      <div class="tab-buttons">
        <button class="tab-btn" onclick="openTab('main')">Main</button>
        <button class="tab-btn" onclick="openTab('stats')">Stats</button>
        <button class="tab-btn" onclick="openTab('evo')">Evolution</button>
      </div>

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
        <button class="close-btn" onclick="closeModal()">Schließen</button>
        <button onclick="nextPokemon()">Next</button>
      </div>
    </div>
  `;
}

function getMainTabTemplate(pokemon) {
  return `
    <h3>Main Info</h3>
    <table class="main-table">
      <tr>
        <td>Höhe</td>
        <td>: ${pokemon.height} m</td>
      </tr>
      <tr>
        <td>Gewicht</td>
        <td>: ${pokemon.weight} kg</td>
      </tr>
      <tr>
        <td>Base Experience</td>
        <td>: ${pokemon.baseExperience}</td>
      </tr>
      <tr>
        <td>Abilities</td>
        <td>: ${pokemon.abilities.join(", ")}</td>
      </tr>
    </table>
  `;
}

function getStatsTabTemplate(pokemon) {
  return `
    <h3>Stats</h3>
    <p>HP: ${pokemon.stats[0].base_stat}</p>
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${pokemon.stats[0].base_stat / 2}%;"></div>
    </div>
    <p>Attack: ${pokemon.stats[1].base_stat}</p>
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${pokemon.stats[1].base_stat / 2}%;"></div>
    </div>
    <p>Defense: ${pokemon.stats[2].base_stat}</p>
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${pokemon.stats[2].base_stat / 2}%;"></div>
    </div>
    <p>Special Attack: ${pokemon.stats[3].base_stat}</p>
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${pokemon.stats[3].base_stat / 2}%;"></div>
    </div>
    <p>Special Defense: ${pokemon.stats[4].base_stat}</p>
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${pokemon.stats[4].base_stat / 2}%;"></div>
    </div>
    <p>Speed: ${pokemon.stats[5].base_stat}</p>
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${pokemon.stats[5].base_stat / 2}%;"></div>
    </div>
  `;
}

function getEvolutionTabTemplate(evoChain) {
  let htmlFragments = evoChain.map((name) => {
    let pokemonData = getPokemonByName(name);
    return `
      <div class="evo-item">
        <img src="${pokemonData.image}" alt="${pokemonData.name}">
        <p>${pokemonData.name}</p>
      </div>
    `;
  });

  let chainHTML = htmlFragments.join(`<span class="arrow">→</span>`);
  return `
    <h3>Evolution Chain</h3>
    <div class="evo-chain-container">
      ${chainHTML}
    </div>
  `;
}
