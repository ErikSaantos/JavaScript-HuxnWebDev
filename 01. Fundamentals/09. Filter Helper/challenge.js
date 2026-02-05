// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater than 18

const ages = [32, 33, 16, 40];

// My Solution:
console.log(ages.filter((age) => age >= 18));

// HuXn Solution:
function checkAdults(age){
    return age >= 18;
}

const res = ages.filter(checkAdults);
console.log(res);

// ========== EXERCISE 2 ==========
// 1. Iterate Over "words" array
// 2. Print only those words which length is greater than 6

const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present"
];

console.log(words.filter((word) => word.length > 6));