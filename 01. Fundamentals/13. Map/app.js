// TODO: Search all popular commands for this data scructure

// Map is a built-in data structure introduced in (ES6) that allows you to store
// key-value pairs where both the keys and values can be of any data type. It is 
// similar to an object, but with a few key differences:

// → Keys can be of any data type: Unlike objects, where keys are limited to 
// strings and symbols, Map allows you to use any data type as keys, including
// numbers, booleans, objects, and even other Map instances.

// → Maintains insertion order: Map preserves the order of key-value pairs as 
// they were inserted, while object keys may not be guaranteed to be in a specific 
// order.

// → Iteration: Map provides built-in methods for easy iteration over its
// elements.

const map = new Map();

const keyOne = "string";
const keyTwo = {};
const keyThree = function() {};

map.set(keyOne, "Mouse");
map.set(keyTwo, "Keyboard");
map.set(keyThree, "Headphone");

// console.log(map.keys()); // Show all keys
// console.log(map.values()); // Show all values
// console.log(map.delete(keyTwo)); // Have to specified the key
// console.log(map.size);

// console.log(map);


// for (let [key, value] of map) { // Or For Each
//     console.log(`${key} --> ${value}`);
// }

// for (let key of map.keys()) {
//     console.log(key);
// }

// for (let value of map.values()) {
//     console.log(value);
// }