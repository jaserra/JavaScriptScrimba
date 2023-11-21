// // SETTING THE STAGE
// const player = "Per";
// const opponent = "Nick";
// const game = "AmazingFighter";
// let points = 0;
// let hasWon = false;

// // PLAYING THE GAME
// points += 100;
// hasWon = true;

// // ANNOUNCING THE WINNER
// if (hasWon) {
//     console.log(`${player} got ${points} points and won the ${game} game!`);
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`);
// }

// let myCourses = [
//     "Learn CSS Animations",
//     "UI Design Fundamentals",
//     "Intro to Clean Code",
// ];

// // Create a function that takes a single parameter, an array,
// // and logs all the items of the array to the console.
// function printArr(arr) {
//     arr.forEach((element) => {
//         console.log(element);
//     });
// }
// // Call the function while passing in myCourses as an argument

// printArr(myCourses);

// Save a value to localStorage
// localStorage.setItem("myCredits", "100");
// Delete your code and refresh the page
// commented code
// Fetch your value from localStorage and log it out
// let myCredits = localStorage.getItem("myCredits");
// console.log(myCredits);

// let data = [
//     {
//         player: "Jane",
//         score: 52,
//     },
//     {
//         player: "Mark",
//         score: 41,
//     },
// ];

// // Fetch the button from the DOM, store it in a variable
// const logScoreBtn = document.getElementById("logScore-btn");
// // Use addEventListener() to listen for button clicks
// // Log Jane's score when the button is clicked (via data)
// logScoreBtn.addEventListener("click", function () {
//     console.log(data[0].score);
// });

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"
// const description = "best fruits";
// const elements = ["Apples", "Bananas"];

// // Use both a for loop and a template string to solve the challenge
// function generateSentence(desc, arr) {
//     let str = `The ${arr.length} ${desc} are `;
//     for (let i = 0; i < arr.length; i++) {
//         str += arr[i];
//         if (i + 1 < arr.length) {
//             str += ", ";
//         }
//     }
//     return str;
// }

// console.log(generateSentence(description, elements));

// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

// const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

// const container = document.getElementById("container");

// function renderImages(arr) {
//     arr.forEach((element) => {
//         container.innerHTML += `<img class="team-img" src="${element}">`;
//     });
// }

// renderImages(imgs);

// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455;
const btn = document.getElementById("purchase-btn");
btn.textContent = `Buy ${totalPrice.toFixed(2)} €`;
