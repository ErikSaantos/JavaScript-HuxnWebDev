// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const a = document.querySelector("a");
const input = document.querySelector("input");

// GETTING ATTRIBUTES:
// console.log(a.href); // Shows the href in <a>
// console.log(a.href = "www.youtube.com");

// console.log(input.value); // Value inside input
// console.log(input.type);

// SETTING ATTRIBUTES
a.href = "https://www.youtube.com/@Alanzoka"
// console.log(input.value = "Bye");
// console.log(input.type = "password");

// console.log(input.value = "");
// console.log(input.placeholder = "Please provide a strong password");


// getAttribute(attrName)
console.log(input.getAttribute("type")); //type, value, placeholder...

// setAttribute(attrName, value)
input.setAttribute("value", "new value"); //type, value, placeholder...