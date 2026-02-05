// 1. Select the anchor tag
const a = document.querySelector("a");

// 2. Use getAttribute(attrName) to check the attribute.
console.log(a.getAttribute("href")); // Returns URL

// 3. Select "a-two" & set "href" attribute
// setAttribute(attrName, value)
const a2 = document.querySelector(".a-two");
a2.setAttribute("href", "https://youtube/@Alanzoka");
console.log(a2.href);