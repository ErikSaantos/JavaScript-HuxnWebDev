// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
const red = document.getElementsByTagName("h4");

// 2. Select div with the class of "green" which holds text (Green) by using getElementsByClassName
const green = document.getElementsByTagName("div");

// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsById
const blue = document.getElementsById("blue");

// 4. Select div which has the class & Id of "yellow" by using querySelector()
const yellow = document.querySelector(".yellow"); // Or #yellow

// 5. Select all the elements which has the class of "teal" by using querySelectorAll
const allTeals = document.querySelectorAll(".teal");