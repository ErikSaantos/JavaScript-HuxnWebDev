
// const colors = ["blue", "green", "red", "purple"];

// colors.forEach(color => console.log(color)); //Arrow function


const words = ["hello", "bird", "table", "football", "pipe", "code"];

const capWords = words.forEach((word, idx, arr) => {
    arr[idx] = word[0].toUpperCase() + word.substring(1);
});

console.log(words);