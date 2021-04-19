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

// For loop to print out all pokemons in Array. First if statement checks for height.
/*for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.5) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height +
      '). Wow, that\'s big! <br>')
  } else {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + '). <br>')
  }

}*/

pokemonList.forEach(function(pokemon){
  document.write('Name: ' + pokemon.name + ', Height: ' + pokemon.height +
  ', Abilities: (' + pokemon.abilities + '), and Type: ' + pokemon.type + '<br>');
});
