// https://www.w3schools.com/jsref/obj_keyboardevent.asp

// keypress
// keyup
// keydown

const input = document.querySelector("input");

input.addEventListener("keypress", () => {
    console.log("Key pressed!");
});


/// USEFULL PROPERTIES AND METHODS
input.addEventListener("keypress", (e) => {
    // console.log(e.charCode); // Returns the character code
    // console.log(e.code);
    // console.log(e.ctrlKey); // Hold ctrl and press any key
    // console.log(e.shiftKey);
    // console.log(e.key);
});