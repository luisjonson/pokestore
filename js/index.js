const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=3";
const foto = "./img/Pokemon_XY_Sprites"
const next = ''
const cardsContainer = document.querySelector("#cards");
let data = [];


async function fetchCards() {
  let response = await fetch(apiUrl)
  return await response.json()
}

function renderCards(cardsResults) {
  cardsContainer.innerHTML = "";
  cardsResults.map(renderCard);
  }

function renderCard(card, cont) {

  const div = document.createElement("div");
  div.style.width = "10rem";
  div.style.margin = "0.5rem";
  div.className = "card";
  div.innerHTML = `
  <h5 class="card-title">  Nº ${cont + 1} </h5>
  <img src="${foto}/${cont + 1}.png" class="card-img-top" alt="${card.name}" />
  <div class="card-body">
  <h6>
    <h5 class="card-title">${card.name} </h5>
    <h5 class="card-title"> R$ 200,00</h5>
    <p class="card-text">
      Tipo: 
    </p>
  <a href="#" class="btn btn-primary">Add no carrinho</a>
  </div>
`;
  cardsContainer.appendChild(div);
}



async function main() {
  data = await fetchCards();

  renderCards(data.results, data.cont);
}

main();
