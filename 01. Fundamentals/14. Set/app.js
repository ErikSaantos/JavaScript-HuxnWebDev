// Set is a built-in data structure introduced in (ES6) that represents a
// collection of unique values. Unlike arrays, Set allows you to store only unique
// values, which means duplicate values are automatically removed. Each value can
// occur only once within a Set.

// Set objects are useful when you need to store a list of unique elements and
// quickly check for the existence of a specific value.

/////////////////////////////////////////////////////////////////////////////////

// const initialValues = [1, 2, 2, 2, 2, 2, 2, 3, 3, 3];
// const mySet = new Set(initialValues);
// console.log(mySet);


const mySet = new Set();
mySet.add("apple");
mySet.add("banana");
mySet.add("apple");
mySet.add("apple");
mySet.add("orange");
mySet.add("banana");

// Some Commands: 
console.log(mySet.has("banana"));
mySet.delete("banana");
mySet.clear();

console.log(mySet);

// To see the values in Set, just make a for of