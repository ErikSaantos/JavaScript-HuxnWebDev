// The find() method is another built-in array helper in JavaScript
// that allows you to find the first element in an array that matches 
// a specific condition. It returns the value of the first element 
// that satisfies the given testing function, or undefined if no 
// element is found.

const people = [
    { name: "Erik", age: 17 },    
    { name: "Samuel", age: 18 },
    { name: "Neves", age: 20 },
    { name: "Takematsu", age: 30 },
    { name: "Neves", age: 30 }
];

const res = people.find((person) => person.name === "Neves") // First occurrence
console.log(res);


// Second Example:

const posts = [
    {id: 1, content: "Good Post"},
    {id: 2, content: "Funny Post"},
    {id: 3, content: "Sad Post"}
];

console.log(posts.find((post) => post.content === "Funny Post"));