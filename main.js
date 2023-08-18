
const elCards = document.querySelector(".cards");
const elSearchInput = document.querySelector("#search-input"); 
const elSearchBtn = document.querySelector("#search-btn"); 


function renderPokemon(array,parent){
    parent.innerHTML = ""
    
    array.forEach((element) => {
    
        const newCard = document.createElement("div");
        newCard.className = "card";
        newCard.style.width = "18rem";
    
        newCard.innerHTML = `
        <div class="card" style="width: 18rem; border-radius: 8px; ">
        <img src=" ${element.img}" class="card-img-top" alt="${element.img}">
        <div class="card-body">
        <hr>
        <img src="./img/heart.jpg" alt="" class="img2">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text"> ${element.type} </p>
          <p class="card-text text2">${element.weight} </p>
          <p class="card-text text3">${element.height} </p>
          <button data-id="${element.id}" id="delete-btn" class="btn btn-danger btn2">Delete</button>
        </div>
      </div>
        `
        parent.appendChild(newCard)
    })
}

renderPokemon(pokemons,elCards);


elCards.addEventListener("click", function ( evt ) {
  
    if(evt.target.id === "delete-btn"){
    
    const id = Number(evt.target.dataset.id)
    const newArray = [ ];
    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      if (pokemon.id !== id) {
        newArray.push(pokemon);
      }
      
    }
    pokemons = newArray
    
    renderPokemon(pokemons,elCards)
    
    }
    })
    
    



    elSearchBtn.addEventListener("click", evt => {

        const newArray = []

        pokemons.forEach((pokemons) => {
           
           

            if (pokemons.name.toLowerCase().includes(elSearchInput.value.toLowerCase())) {
                newArray.push(pokemons)
               console.log(pokemons.name);
            }

        })
        renderPokemon(newArray,elCards); 
    })
    
    renderPokemon(pokemons,elCards);
   