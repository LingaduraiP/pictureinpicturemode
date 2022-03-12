const cardArray = [
  {
    name: "briyani",
    img: "images/briyani.jpg",
  },
  {
    name: "hotdog",
    img: "images/hotdog.jpg",
  },
  {
    name: "milkshake",
    img: "images/milkshake.jpg",
  },
  {
    name: "parotta",
    img: "images/parotta.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },
  {
    name: "icecream",
    img: "images/icecream.jpg",
  },
  {
    name: "briyani",
    img: "images/briyani.jpg",
  },
  {
    name: "hotdog",
    img: "images/hotdog.jpg",
  },
  {
    name: "milkshake",
    img: "images/milkshake.jpg",
  },
  {
    name: "parotta",
    img: "images/parotta.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },
  {
    name: "icecream",
    img: "images/icecream.jpg",
  },
];
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.jpg");
    card.setAttribute("data-id", i);

    card.addEventListener("click", flipCard);

    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkforMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId == optionTwoId) {
    alert("You chose the same image");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    cards[optionOneId].setAttribute("src", "images/white.jpg");
    cards[optionTwoId].setAttribute("src", "images/white.jpg");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.jpg");
    cards[optionTwoId].setAttribute("src", "images/blank.jpg");
  }
  cardsChosen = [];
  cardsChosenIds = [];
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);

  //   console.log(cardId, cardsChosen, cardArray, cardsChosenIds);
  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkforMatch, 500);
  }
}
