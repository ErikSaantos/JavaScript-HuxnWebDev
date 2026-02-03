// ----- BAD WAY -----
// const secondBtn = document.querySelector(".second-btn");
// secondBtn.onmousemove = () => { // Or function () {}
//     console.log("Hello World");
// }

// ----- GREAT WAY -----
const best = document.querySelector(".best");

function greetings(){
    console.log("Hello World!");
}

best.addEventListener("click", greetings); // Or Anonymous Function or Arrow Function

// ----- Event (e) Object -----
const form = document.querySelector("form");
const input = document.querySelector("input"); //It has the value and type equals "Submit"

form.addEventListener("submit", (e) => { // It isn't a parameter, instead this, its an object
    // This method prevent (interrompe) the browser to do default stuffs like reload when press submit
    // Or dont navigate when press a link   
    e.preventDefault();
    console.log(input.value);
})