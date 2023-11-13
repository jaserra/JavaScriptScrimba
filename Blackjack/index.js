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

let age = Math.floor(Math.random() * 200);
console.log(age);

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"
if (age < 100) {
  console.log("Not elegible");
} else if (age === 100) {
  console.log("Here is your birthday card from the king!");
} else {
  console.log("Not elegible, you already have a gotten one");
}
