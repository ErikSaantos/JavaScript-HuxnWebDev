// Destructuring allow us to "unpack" values 
// from data-structures (Arrays, objects) into separate distinct variables.

// const foo = ['elem1', 'elem2', 'elem3']

// const [value1, value2, value3, value4, value5] = foo;

// console.log(value1);
// console.log(value5);

// // Setting default values
// let a, b;

// [a = 5, b = 8] = ["new value", "now for b"];
// console.log(a);
// console.log(b);


// ========== Storing or extracting some data from a function: ==========
// function f(){
//     return [3, 8, 23]
// };

// let el, el2;

// [el, el2] = f()

// console.log(el);
// console.log(el2);

// // Ignoring some index
// const [a, , b] = f()
// console.log(a);
// console.log(b);

// ========== Object Destructuring ==========
// In object destructuring order doesn't matter but the name does

// const student = {
//     name: "Erik",
//     position: "Firrst",
//     rollNo: 11
// };

// const {name, rollNo} = student;
// console.log(name);
// console.log(rollNo);

// ========== Object Destructuring and Rest Operator ==========
let {a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500}; // Name does

console.log('Value 1: ', a);
console.log('Value 2: ', b);
console.log('Rest of the values: ', rest);