//SIMPLE FUNCTION
// function greet(username){
//     return `Hello ${username}`
// }
// console.log(greet("Erik"));

//PASSING TO ARROW FUNCTION
// const greet = (username) => {
//     return `Hello ${username}`
// }
// console.log(greet("Felipe"));

// If we have only one parameter, doesn't necessary use (), 'return', and {}
const greet = username => `Hello ${username}`
console.log("Santos");

// EXERCISE: REFACTOR THIS CODE TO ES6 ARROW FUNCTIONS.

// setTimeout(function () {
//     console.log("Hello");
//     setTimeout(function () {
//         console.log("Hey");
//         setTimeout(function () {
//             console.log("Namaste");
//             setTimeout(function () {
//                 console.log("Hi");
//                 setTimeout(function () {
//                     console.log("Bonjour");
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000);


// MY SOLUTION:

setTimeout(func => {
        console.log("Hello");
        setTimeout(func => {
            console.log("Hey");
            setTimeout(func => {
                console.log("Namaste");
                setTimeout(func => {
                    console.log("Hi");
                    setTimeout(func => {
                        console.log("Bonjour");
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)