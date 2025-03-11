function getPokemonCardTemplate(pokemon) {
  let typeClass = getTypeClass(pokemon);
  return `
    <div 
      class="pokemon-card"
      onclick="openModal(${pokemon.id})"
      onmouseover="this.querySelector('img').src='${pokemon.imageArtwork}'"
      onmouseout="this.querySelector('img').src='${pokemon.imageDream}'"
    >
      <div class="pokemon-card-header">
        <h2>${pokemon.name} (#${pokemon.id})</h2>
      </div>
      <div class="pokemon-card-img ${typeClass}">
        <img 
          src="${pokemon.imageDream}" 
          alt="${pokemon.name}"
        >
      </div>
      <div class="pokemon-card-type">
        ${getPokemonTypeIcons(pokemon.types)}
      </div>
    </div>
  `;
}

function getPokemonModalTabsTemplate(pokemon, mainTab, statsTab, evoTab) {
  return `
    <div class="pokemon-modal" onclick="event.stopPropagation()">
      <div class="modal-header">
        <h2>${pokemon.name} (#${pokemon.id})</h2>
        <img 
  src="${pokemon.imageDream}" 
  onmouseover="this.src='${pokemon.imageArtwork}'" 
  onmouseout="this.src='${pokemon.imageDream}'" 
  alt="${pokemon.name}"
>
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
      
      <div class="nav-buttons">
        <button class="nav-btn" onclick="previousPokemon()">Back</button>
        <button class="close-btn" onclick="closeModal()">Close</button>
        <button class="nav-btn" onclick="nextPokemon()">Next</button>
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
  setTimeout(animateProgressBars, 2000);

  return `
    <h3>Stats</h3>
    <p>HP: ${pokemon.stats[0].base_stat}</p>
    <div class="progress-bar">
      <div class="progress-fill" data-width="${
        pokemon.stats[0].base_stat / 2
      }"></div>
    </div>
    <p>Attack: ${pokemon.stats[1].base_stat}</p>
    <div class="progress-bar">
      <div class="progress-fill" data-width="${
        pokemon.stats[1].base_stat / 2
      }"></div>
    </div>
    <p>Defense: ${pokemon.stats[2].base_stat}</p>
    <div class="progress-bar">
      <div class="progress-fill" data-width="${
        pokemon.stats[2].base_stat / 2
      }"></div>
    </div>
    <p>Special Attack: ${pokemon.stats[3].base_stat}</p>
    <div class="progress-bar">
      <div class="progress-fill" data-width="${
        pokemon.stats[3].base_stat / 2
      }"></div>
    </div>
    <p>Special Defense: ${pokemon.stats[4].base_stat}</p>
    <div class="progress-bar">
      <div class="progress-fill" data-width="${
        pokemon.stats[4].base_stat / 2
      }"></div>
    </div>
    <p>Speed: ${pokemon.stats[5].base_stat}</p>
    <div class="progress-bar">
      <div class="progress-fill" data-width="${
        pokemon.stats[5].base_stat / 2
      }"></div>
    </div>
  `;
}

function getEvolutionTabTemplate(evoChain) {
  let chainHTML = buildEvoChainHTML(evoChain);

  return `
    <h3>Evolution Chain</h3>
    <div class="evo-chain-container">
      ${chainHTML}
    </div>
  `;
}

function buildEvoItemWithHover(pokemonData) {
  return `
    <div class="evo-item"
      onmouseover="this.querySelector('img').src='${pokemonData.imageArtwork}'"
      onmouseout="this.querySelector('img').src='${pokemonData.imageDream}'"
    >
      <img src="${pokemonData.imageDream}" alt="${pokemonData.name}">
      <p>${pokemonData.name}</p>
    </div>
  `;
}

function buildEvoItemFallbackHTML() {
  return `
    <div class="evo-item">
      <p>???</p>
    </div>
  `;
}
