// ********** DOM SELECTORS **********
// 1. getElementByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);

// 2. getElementById
console.log(document.getElementById("main")); // If it has id and class. will return both

// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"));

// 4. querySelector -> Just return the first one
console.log(document.querySelector("h1")); // Just letters -> tagName
console.log(document.querySelector(".cls")); // . -> class
console.log(document.querySelector("#main")); // # -> id
// console.log(document.querySelector("li"));

// 5. querySelectorAll -> All occurances
console.log(document.querySelectorAll("li"));

// ---------------------
// Storing data in variables
const h1 = document.querySelector("h1");
console.log(h1);

