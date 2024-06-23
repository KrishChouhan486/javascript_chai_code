//  if 

// const isuserloggedIn = true

// if (2 != 3) {
//     console.log("executed")
// }

// <, >, <=, >=, !=, ==, === also check type strick checking we can use, !== also strick check

// const temp  = 41

// if (temp === 41) {
//     console.log("less than 40")
// }
// else{
// console.log("temp is grater than 50")
// }

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }


// const balance = 1000

// if(balance > 500) {
// console.log("test")
// console.log("raja")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFormEmail  = false

if(userLoggedIn && debitCard ){
    console.log("allow to  buy course")
}

if(loggedInFromGoogle || loggedInFormEmail){
console.log("user logged in")
}