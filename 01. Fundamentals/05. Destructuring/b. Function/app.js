// const person = {
//     name: "john doe",
//     age: 30,
//     country: "USA"
// };

// function printPersonInfo( {name: namess, age, country} ) { // The variable name has to be equal in the object, or rename
//     // console.log(`Name: ${person.name}`); // Without destructuring
//     console.log(`Name: ${namess}`);
//     console.log(`Age: ${age}`);
//     console.log(`Country: ${country}`);
// };

// printPersonInfo(person);

// ========== Other example: ==========
const options = {
    title: "My menu",
    items: ['banana', 'apple']
};

function showMenu( {title, width: w = 100, height: h = 200, items: [item1, item2]} ) {
    console.log(`${title} ${w} ${h}`);
    console.log(`${item1}`);
    console.log(`${item2}`);
};

showMenu(options);