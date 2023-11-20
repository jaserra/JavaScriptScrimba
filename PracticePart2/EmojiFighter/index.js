// let person = {
//   name: "Serra",
//   age: 30,
//   country: "Portugal",
// };

// function logData() {
//   console.log(
//     person.name +
//       " is " +
//       person.age +
//       " years old and lives in " +
//       person.country
//   );
// }

// logData();

// let age = Math.floor(Math.random() * 100) + 1;

// function discount() {
//   console.log(age);
//   if (age < 6) {
//     return "free";
//   } else if (age < 18) {
//     return "child discount";
//   } else if (age < 27) {
//     return "student discount";
//   } else if (age < 67) {
//     return "full price";
//   } else {
//     return "senior citizen discount";
//   }
// }

// console.log(discount());

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// console.log("The 5 largest countries in the world:\n");
// largeCountries.forEach((element) => {
//   if (element == "USA") {
//     console.log("- United States\n");
//     return;
//   }
//   console.log("- " + element + "\n");
// });

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// largeCountries.pop();
// largeCountries.push("Pakistan");
// largeCountries.shift();
// largeCountries.unshift("China");

// console.log(largeCountries);

// let dayOfMonth = 13;
// let weekDay = "Friday";

// if (dayOfMonth === 13 && weekDay === "Friday") {
//   console.log("😱");
// }

// let hands = ["rock", "paper", "scissors"];

// function randomHand() {
//   let n = Math.floor(Math.random() * 3);
//   console.log(hands[n]);
// }

// randomHand();

let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🐳",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  let fighter1 = Math.floor(Math.random() * fighters.length);
  let fighter2 = Math.floor(Math.random() * fighters.length);

  stageEl.textContent = fighters[fighter1] + " VS " + fighters[fighter2];
  console.log(fighter1 + " VS " + fighter2);
  console.log(fighters[fighter1] + " VS " + fighters[fighter2]);
});
