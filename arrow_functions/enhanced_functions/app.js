// Enhanced object literals, introduced in ES6, are a set of 
// enhancements to the syntax for defining objects in JvaScript. These enhancements 
// make it more convenient and concise to define object properties and methods

function user(name, age, work){
    return {
        name, // Or name: name
        age,
        work,

        intro(){
     // intro: () => {}
     // intro: function() {}
     // intro: () {}
            console.log(`My name is ${name} & I'm ${age} years old & I'm a ${work}`);
        }
    }
}

const person1 = user("Sam", 16, "Data Engineer")
// console.log(person1);
person1.intro();

// CHALLENGE (first part): REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 CODE
//var a = 1;
//var b = 2;
//var c = 3;

//var obj = {
//  a: a
//  b: b
//  c: c
//}

// SOLUTION
const a = 1;
const b = 2;
const c = 3;

const obj = { a, b, c };

console.log(obj);

// CHALLENGE (second part): ES5 CODE
// var lib = {
//      sum: function (a, b) {
//          return a + b;
//      },
//      mult: function (a, b) {
//          return a * b;
//      },
// };

// console.log(lib.sum(2, 3)); //5
// console.log(lib.mult(2, 3)); //6

//CONVERTED TO ES6
const lib = {
    sum: (a, b) => a + b,

    mult: (a, b) => a * b,
}

console.log(lib.mult(14, 23));
console.log(lib.sum(14, 23));


const multiply = (a, b = 1) => a * b

console.log(multiply(4, 9));