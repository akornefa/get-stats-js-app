//ARRAY WRAPPED IN IIFE FUNCTION
let pokemonRepository = (function() {
  let pokemonList = [];

  /* [{
      name: 'Charmeleon',
      height: 1.1,
      abilities: ['Blaze', ' Solar-power'],
      type: ['Fire'],
    },
    {
      name: 'Squirtle',
      height: 0.5,
      abilities: ['Rain-dish', ' Torrent'],
      type: ['Water'],
    },
    {
      name: 'Arbok',
      height: 3.5,
      abilities: ['Intimidate', ' Shed-skin', ' Unnerve'],
      type: ['Poison'],
    }
  ];
*/
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
    let pokemonListUl = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    pokemonListUl.appendChild(listItem);
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }
  //<--- Once click is registered, pokemon is logged in console -->
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      console.log(pokemon);
    });
  }

  // <---Pokemon API url--->
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

// <---Fetch data from pokedex --->
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

// <--- Load detailed data for a given Pokemon. --->
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.abilities = details.abilities;
    }).catch(function (e) {
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

//added new object as an example to use the add() function.
/* pokemonRepository.add({
  name: 'Nidoking',
  height: 1.4,
  abilities: ['Poison-point', 'Rivalry', 'Sheer-force'],
  type: ['ground', 'poison']
});
*/
/* <---forEach Loop with pokemonRepository included.
And addListItem() is called --> */

pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});








/*
// ORIGINAL pokemonList Array
let pokemonList = [{
    name: 'Charmeleon',
    height: 1.1,
    abilities: ['Blaze', ' Solar-power'],
    type: ['Fire'],
  },
  {
    name: 'Squirtle',
    height: 0.5,
    abilities: ['Rain-dish', ' Torrent'],
    type: ['Water'],
  },
  {
    name: 'Arbok',
    height: 3.5,
    abilities: ['Intimidate', ' Shed-skin', ' Unnerve'],
    type: ['Poison'],
  }
];
*/

// For loop to print out all pokemons in Array. First if statement checks for height.
/*for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.5) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height +
      '). Wow, that\'s big! <br>')
  } else {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + '). <br>')
  }

}*/
