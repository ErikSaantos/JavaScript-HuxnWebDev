// --------------------
// createElement()
// appendChild()
// insertBefore(what, where)
// append()
// prepend()

/* insertAdjacentElement(
    'beforebegin'
    'afterbegin'
    'beforeend'
    'afterend'
    element
) */

// removeChild()
// remove()

// --------------------
// Creating Element
// const h1 = document.createElement("h1"); // Still not in body
// const body = document.body

// h1.textContent = "Hello guys";
// h1.classList.add("greetings");
// body.appendChild(h1); //Append at the bottom of the list / final

// --------------------
// insertBefore()
// const ul = document.querySelector("ul");
// const newLi = document.createElement("li");
// newLi.innerText = "im <li> tag";
// ul.appendChild(newLi);

// const firstLi = document.querySelector("li"); //takes the first occurance
// // selector.insertBefore(what, where);
// ul.insertBefore(newLi, firstLi);

// --------------------
// insertAdjacentElement()
// const firstP = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "im italics";
// i.style.color = "skyblue";

// selector.insertAdjacentElement(where, what)
// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("afterbegin", i);
// firstP.insertAdjacentElement("beforeend", i);
// firstP.insertAdjacentElement("afterend", i);

// --------------------
// append & prepend
// const b = document.createElement("b");
// b.innerText = "im bold";
// b.style.color = "orange";

// const span = document.createElement("span");
// span.innerText = "blablabla";
// span.style.color = "purple";

// const section = document.querySelector("section");
// section.append(b, span);
// section.prepend(b, span);

// -------------------
// removeChild()
const newList = document.querySelector(".new-list");
const fourth = document.querySelector(".fourth");
newList.removeChild(fourth);
newList.remove();