// const person =  [1, 2];
// console.log(person[0])
// console.log(typeof person[0])


// let person = {
//     name : "krish",
//     uid : 2

// }
// console.log(person['uid']);

// let person = function () {
//     console.log("person")
// }
// console.log(typeof person);

// const id = Symbol('123');
// const idd = Symbol('123');

// console.log(id === idd);


// =============stack memory , heap memory-------------
// primitive copy ceate object
// let you = "krish"
// let another = you;
// another = "chouhan"
// console.log(you);
// console.log(another);



// non primitive referance change in original value
let user = {
email : "krish",
upi : "userybl"
}
let user2 = user;
user2.email = "chouhan"

console.log(user.email);
console.log(user2.email);



