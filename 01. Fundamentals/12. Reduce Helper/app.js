// often used to perform calculations or aggregations on array 
// elements and simplify the array into a single value.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((p, c) => {
    console.log(`Previous: ${p}`);
    console.log(`Current: ${c}`);
    return p + c; // Do the sum and store into `p` => previous 
}, 0) //Initial value

console.log(`=== The sum is ${sum} ===`);


// Second Example:

const people = [
    {
        name: "Kara",
        age: 16
    },
    {
        name: "Connor",
        age: 29
    },
    {
        name: "Markus",
        age: 40
    }
];

const oldestAge = people.reduce((p, c) => (c.age > p ? c.age : p), 0)
console.log('===', oldestAge, '===');


// Third Example: 

const words = [
    'apple',
    'banana',
    'orange',
    'banana',
    'apple',
    'orange',
    'apple',
    'grape'
];

const wordFrequency = words.reduce((frequencyMap, word) => {
    frequencyMap[word] = (frequencyMap[word] || 0 + 1);
    return frequencyMap;
}, {})

console.log(wordFrequency);