// Its the same sintax of spread operator but to other use
// You can pass unlimited number of elements in a parameter of a function

function user(userData, ...hobbies){ // Any hobbies, length undefined
    console.log(userData); // "erik"
    console.log(hobbies); // "programming", "basketball", "playing guitar", ["gamming"]
};

user("erik", "programming", "basketball", "playing guitar", ["gamming"]);