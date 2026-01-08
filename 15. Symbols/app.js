// Symbol is a unique and immutable primitive data type introduced
// in ECMAScript 6 (ES6). A symbol is often used as an identifier for
// object properties to avoid potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to be unique.
// When you create a symbol, it is unique and cannot be recreated or
// changed. This uniqueness ensures that symbols will not collide with
// other property names, even if they have the same string
// representation.

////////////////////////////////////////////////////////////////////////

// const mySymbol = Symbol("This is a symbol!");
// console.log(mySymbol);


// Comparing Symbols

const mySymbol1 = Symbol("Name");
const mySymbol2 = Symbol("Name");

// console.log(mySymbol1 === mySymbol2); // False 'cause the symbol value is always unique

const obj = {};
obj.ugly = true;
obj[mySymbol1] = "Value 1";
obj[mySymbol2] = "Value 2";

console.log(obj);