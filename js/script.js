function fetchCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        const characters = data.results;
        const characterGrid = document.getElementById('character-grid');
  
        characters.forEach(character => {
          const characterCard = document.createElement('div');
          characterCard.classList.add('character-card');
          characterCard.onclick = () => showCharacterDetails(character);
          
          const characterImage = document.createElement('img');
          characterImage.src = character.image;
          characterCard.appendChild(characterImage);
          
          const characterName = document.createElement('p');
          characterName.classList.add('character-name');
          characterName.innerText = character.name;
          characterCard.appendChild(characterName);
          
          const characterOrigin = document.createElement('p');
          characterOrigin.classList.add('character-origin');
          characterOrigin.innerText = character.origin.name;
          characterCard.appendChild(characterOrigin);
          
          characterGrid.appendChild(characterCard);
        });
      })
      .catch(error => console.error(error));
  }
  

  function showCharacterDetails(character) {
    const characterDetails = document.getElementById('character-details');
    const characterImage = document.getElementById('character-image');
    const characterSpecs = document.getElementById('character-specs');
  
 
    characterImage.src = character.image;
  
    characterSpecs.innerHTML = `
      <h2>${character.name}</h2>
      <p><strong>ID:</strong> ${character.id}</p>
      <p><strong>Gênero:</strong> ${character.gender}</p>
      <p><strong>Status:</strong> ${character.status}</p>
      <p><strong>Espécie:</strong> ${character.species}</p>
      <p><strong>Tipo:</strong> ${character.type}</p>
      <p><strong>Localização:</strong> ${character.location.name}</p>
      <p><strong>Origem:</strong> ${character.origin.name}</p>
    `;
  
 
    characterDetails.style.display = 'block';
    document.getElementById('character-grid').style.display = 'none';
  }
  

  function returnToGrid() {
    const characterDetails = document.getElementById('character-details');
    characterDetails.style.display = 'none';
    document.getElementById('character-grid').style.display = 'grid';
  }
  

  document.getElementById('return-button').onclick = returnToGrid;
  
  // Inicia o projeto fazendo a requisição à API e preenchendo o grid de personagens
  fetchCharacters();
  