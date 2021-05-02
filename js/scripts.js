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
      showModal(pokemon);
    });

    // Create Modal structure
    let modalContainer = document.querySelector('#modal-container');

    function showModal(pokemon, text) {
      modalContainer.classList.add('is-visible');
      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');

      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'close';
      closeButtonElement.addEventListener('click', hideModal);

      let  modalTitle = document.createElement('h1');
      modalTitle.innerText = pokemon.name;

      let modalContent = document.createElement('p');
      modalContent.innerText = 'Height= ' + pokemon.height;


      let myImage = document.createElement('img');
      myImage.classList.add('sprite-image');
      myImage.src = pokemon.imageUrl;


      modal.appendChild(modalTitle);
      modal.appendChild(modalContent);
      modal.appendChild(myImage);
      modal.appendChild(closeButtonElement);
      modalContainer.appendChild(modal);

    }

    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }
// Close Modal by hitting escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });
// Close modal by clicking outside of it
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    })

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


/* <---forEach Loop with pokemonRepository included.
And addListItem() is called --> */

pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
