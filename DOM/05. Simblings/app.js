
// ===== Parent =====

// let firstEl = document.querySelector("li");
// console.log(firstEl); // <li>
// console.log(firstEl.parentElement); // <ul>
// console.log(firstEl.parentElement.parentElement); // <body>
// console.log(firstEl.parentElement.parentElement.parentElement); // <html>
// console.log(firstEl.parentElement.parentElement.parentElement.parentElement); // null


// ===== Children =====

// const ul = document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[0].innerText); 
// console.log(ul.children[0].innerText = "one"); 


// ===== Siblings =====

// let firstEl = document.querySelector("li");
// console.log(firstEl.nextElementSibling.textContent); // Or innerText
// console.log(firstEl.nextElementSibling.nextElementSibling.textContent);
// console.log(firstEl.nextElementSibling.nextElementSibling.nextElementSibling.textContent);


// ===== Previous Sibling =====
let fourthEl = document.querySelector(".fourth");
console.log(fourthEl.textContent);
console.log(fourthEl.previousElementSibling.textContent);