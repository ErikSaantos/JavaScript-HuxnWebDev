// classlist
// add()
// remove()
// toggle()

const h1 = document.querySelector("h1");
// console.log(h1.classList); // Check all the classes that this element has

// Adding class into an element
// h1.classList.add("styles");
// console.log(h1.classList);

// Removing class from an element
// h1.classList.remove("styles");

// Toggling -> If element has that class, will remove. Else, will add that new class
h1.classList.toggle("styles"); // add
h1.classList.toggle("styles"); // remove