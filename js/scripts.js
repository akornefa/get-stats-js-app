//ARRAY WRAPPED IN IIFE FUNCTION
let pokemonRepository = (function() {
  let pokemonList = [];

  function getAll() {
    return pokemonList;
  }

  function add(item) {
    if (typeof item === 'object') {
      pokemonList.push(item);
    }
  }

  //<---- Creating buttons and adding event listener to buttons --->
  function addListItem(pokemon) {
    let pokemonListUl = document.querySelector('.list-group');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn-block', 'btn', 'btn-info');
    button.setAttribute('data-target', '#pokemonModal');
    button.setAttribute('data-toggle', 'modal');
    listItem.classList.add('list-group-item', '.list-group-item-action');
    listItem.appendChild(button);
    pokemonListUl.appendChild(listItem);
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }
  //<--- Bootstrap Modal-->
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      let modalBody = $('.modal-body');
      let modalTitle = $('.modal-title');

      modalTitle.empty();
      modalBody.empty();
      let pokemonName = $('<h1>' + pokemon.name + '</h1>');
      let pokemonImage = $('<img class="modal-img" style="width:50%">');
      pokemonImage.attr('src', pokemon.imageUrl);
      let pokemonHeight = $('<p> Height: ' + pokemon.height + 'm<p>');
      modalBody.append(pokemonImage);
      modalBody.append(pokemonHeight);
      modalTitle.append(pokemonName);
      const pokemonAbilities = pokemon.abilities.map(function(item) {
        return item.ability.name;
      }).join(', ');
      let createAbilities = $('<p> Abilities: ' + pokemonAbilities + '</p>');
      modalBody.append(createAbilities);
    });
  }

  // <---Pokemon API url--->
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // <---Fetch data from pokedex --->
  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    })
  }

  // <--- Load detailed data for a given Pokemon. --->
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.abilities = details.abilities;
    }).catch(function(e) {
      console.error(e);
    });
  }

  return {
    getAll: getAll,
    add: add,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
    showDetails: showDetails
  };

})();


/* <---forEach Loop with pokemonRepository included.
And addListItem() is called --> */

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
