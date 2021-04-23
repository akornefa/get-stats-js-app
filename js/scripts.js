//ARRAY WRAPPED IN IIFE FUNCTION
let pokemonRepository = (function() {
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
    button.addEventListener('click', function(event){
      showDetails(pokemon);
    });
  }
  //<--- Once click is registered, pokemon is logged in console -->
  function showDetails(pokemon){
    console.log(pokemon);
  };

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };

})();

//added new object as an example to use the add() function.
pokemonRepository.add({
  name: 'Nidoking',
  height: 1.4,
  abilities: ['Poison-point', 'Rivalry', 'Sheer-force'],
  type: ['ground', 'poison']
});

/* <---forEach Loop with pokemonRepository included.
And addListItem() is called --> */

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
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
