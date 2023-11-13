// document.getElementById("count-el").innerText = 5;

// let count = 0;

// function increment() {
//   count++;
//   document.getElementById("count-el").innerText = count;
// }

// function forty2() {
//   console.log(42);
// }

// forty2();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLapTime() {
//   let total = lap1 + lap2 + lap3;
//   console.log(total);
// }

// totalLapTime();

// let lapsCompleted = 0;

// function incrementLapsCompleted() {
//   lapsCompleted += 1;
//   console.log(lapsCompleted);
// }

// incrementLapsCompleted();
// incrementLapsCompleted();
// incrementLapsCompleted();

// let count = 0;

// function increment() {
//   count++;
//   console.log(count);
//   document.getElementById("count-el").innerText = count;
// }

// let username = "per";

// let message = "You have three new notifications";

// console.log(username + ", " + message);

// let messageToUser = username + ", " + message;

// console.log(messageToUser);

// let name = "Serra";
// let name = 42;
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;
// console.log(myGreeting);

// let points = 4;
// let bonusPoints = "10";
// let totalPoints = points + bonusPoints;

// let welcomeEl = document.getElementById("welcome-el");
// let name = "Serra";
// let greeting = "Welcome back ";

// welcomeEl.innerText = greeting + name;
// welcomeEl.innerText += "🖐";

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let total = 0;

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  saveEl.textContent += count + " - ";
  console.log(count);
  total += count;
  totalEl.textContent = "Total entries: " + total;
  count = 0;
  countEl.textContent = count;
}
