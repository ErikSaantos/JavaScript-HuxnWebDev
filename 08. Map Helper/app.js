// The map() method creates a new array populated with the results
// of calling a provided function on every element in the calling
// array.

// ForEach() will modify the item in the original array, 
// while Map() will modify and return a value, could be added in a new variable/array

const numbers = [1, 2, 3, 4, 5];

const double = numbers.map((num) => num * 2)

console.log(double);