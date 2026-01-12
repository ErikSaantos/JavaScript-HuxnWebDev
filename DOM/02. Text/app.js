// innertext
// textContent
// innerHTML
const p = document.querySelector("p"); // Take by tagName

// console.log(p.innerText); // it gives pure text (formatted), without extra content like <strong>
// console.log(p.textContent); // it gives unformatted text and console.log("..."), without tags like <script>
// console.log(p.innerHTML); // it gives formatted text with tags like <strong> and <script>

// Changing the value
const h1 = document.querySelector("h1");
h1.innerText = "Text changed";
h1.innerHTML = "<em>123</em>";