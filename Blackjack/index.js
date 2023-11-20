// let firstCard = Math.floor(Math.random() * 10 + 2);
// console.log(firstCard);
// let secondCard = Math.floor(Math.random() * 10 + 2);
// console.log(secondCard);
// let sum = firstCard + secondCard;

// console.log(sum);

// if (sum < 21) {
//   console.log("Do you want to draw a new card?");
// } else if (sum === 21) {
//   console.log("Wohoo! You've got Blackjack!");
// } else {
//   console.log("You're out of the game! 😭");
// }

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 20;

// // if less than 21 -> "You can not enter the club!"
// // else            -> "Welcome!"

// if (age < 21) {
//   console.log("You can not enter this club!");
// } else {
//   console.log("Welcome!");
// }

// Check if the person is elegible for a birthday card from the King! (100)

// let age = Math.floor(Math.random() * 200);
// console.log(age);

// // if less than 100    -> "Not elegible"
// // else if exactly 100 -> "Here is your birthday card from the King!"
// // else                -> "Not elegible, you have already gotten one"
// if (age < 100) {
//   console.log("Not elegible");
// } else if (age === 100) {
//   console.log("Here is your birthday card from the king!");
// } else {
//   console.log("Not elegible, you already have a gotten one");
// }

let firstCard;
let secondCard;
let sum = 0;
let cards = [];
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  name: "Serra",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let n = Math.floor(Math.random() * 13 + 1);
  if (n === 1) {
    return 11;
  } else if (n > 10) {
    return 10;
  } else {
    return n;
  }
}

function startGame() {
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = cards[0] + cards[1];
  isAlive = true;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  cards.forEach((element) => {
    cardsEl.textContent += element + " ";
  });
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  // CASH OUT
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && hasBlackjack != true) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
