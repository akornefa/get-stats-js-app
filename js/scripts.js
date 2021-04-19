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
    return pokemonList.push;
  }

  return {
    getAll: getAll,
    add: add
  };

})();

//forEach Loop with pokemonRepository included

pokemonRepository.getAll().forEach(function(pokemon) {

  if (pokemon.height > 1.5) {
    document.write(pokemon.name + ' (height: ' + pokemon.height +
      '). Wow, that\'s big! <br>')
  } else {
    document.write(pokemon.name + ' (height: ' + pokemon.height + '). <br>')
  }
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
