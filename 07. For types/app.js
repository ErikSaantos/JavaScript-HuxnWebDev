// for (let key in object)

const person = {
    name: "Erik",
    age: 16,
    work: "Programmer"
};

for (let key in person){ // Always takes the key from an object/dictionary
    console.log(`key: ${key} | value: ${person[key]}`);
};

// ===== In an Array/List =====

// for (let idx in array)

let words = ['banana', 'pineapple', 'grape'];

for (let idx in words){
    console.log(`index: ${idx} | value: ${words[idx]}`);
}