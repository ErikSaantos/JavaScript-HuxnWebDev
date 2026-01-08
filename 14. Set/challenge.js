// 1. Create a Set name (letters)
// 2. Add ("a", "b", "c") as values
// 3. Iterate over Set & log the values

const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");

for (let value of letters){
    console.log(value);
}