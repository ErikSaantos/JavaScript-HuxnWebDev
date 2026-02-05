// /////////////////////////////////

// The every() and some() are two built-in array methods in
// JavaScript that allow you to check the elements of an array based
// on a given condition. Both methods take a callback function as an
// argument, which is applied to each element of the array.

// The every() method tests whether all elements in the array pass
// the condition specified by the provided callback function. It
// returns true if the callback function returns true for every
// element, and false if any element fails the condition.

// The some() method tests whether at least one element in the
// array passes the condition specified by the provided callback
// function. It returns true if the callback function returns true for
// at least one element, and false if no element passes the condition.

// /////////////////////////////////

const people = ['Erk', 'Felipe', 'Sans'];

const res1 = people.every((person) => person.length == 4) // Every length element has to be equal 4
console.log(res1);

const res2 = people.some((person) => person.length <= 3) // Some length element has to be less or equal 3
console.log(res2);