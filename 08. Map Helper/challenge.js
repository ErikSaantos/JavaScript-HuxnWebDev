// 1. Create array with random numbers
// 2. Map over each item in that array, & multiply each item by 10

const array = [12, 43.7, 97, 28.2, 14];

const multiplied = array.map((num) => num * 10);
console.log("Me:", multiplied);

// HuXn Solution:
function myFunction(num){
    return num * 10;
}

const newArr = array.map(myFunction);
console.log("HuXn:", newArr);