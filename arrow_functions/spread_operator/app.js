// Basically its a way to separate the elements for an array. After do this, you can concat with another element or just copy him

function giveMe4(a, b, c, d){
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
};

const colors = ['green', 'red', 'blue', 'yellow'];

// giveMe4(colors) //Parameter 'a' will be an array
giveMe4(...colors); //Spreading the values in array to be four parameters


// You can clone or concat some arrays or objects

let array1 = ['Erik', 'Santos', 'Enzo'];
let array2 = ['Abacate', 'Felipe'];

let concatedArrays = [...array1, ...array2];
console.log(concatedArrays);

let clonedArray = [...concatedArrays, 'Something else'];
console.log(clonedArray);

// Objects

const obj1 = {x: 2, y: 4};
const obj2 = {z: 9};

const bigObj = {...obj1, ...obj2};
console.log(bigObj);


const person = {
    name: "erik",
    age: 16,
    working: true
};

const otherPerson = {...person, extra: "idk"};
console.log(otherPerson);



// CHALLENGE:
// 1. Make a clone of "arr, arr2" using spread operator
// 2. Make a clone of "user" object using spread operator
let arr = [1, 2, 3];
let arr2 = [4, 5];

const user = {
    name: "Jen",
    age: 22
};

//My solution
let clonedArr = [...arr, ...arr2];
let clonedUser = {...user};

console.log(clonedUser);