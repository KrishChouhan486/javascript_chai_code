// const mySym  = Symbol("key33");

// const jsUser = {
//     name: "krish",
//     age: 20,
//     [mySym] : "key44",
//     email: "krish@gmail.com",
//     isLoggedIn : false
// }
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym])

// jsUser.email = "krish.com"
// Object.freeze(jsUser);
// jsUser.email = "krsmnsish.com"
// console.log(jsUser.email)


// jsUser.greeting = function(){
//     console.log("krish is don")
// }
// console.log(jsUser.greeting())

// jsUser.greetingTwo = function(){
//     console.log(`krish is xzcxdon , ${this.age}`)
// }
// console.log(jsUser.greetingTwo())


// -------------object part 2-----------------------

// const tin = new Object();
const tin = {}
tin.id = "123abc",
tin.name = "krish",
tin.isLoggeddIN = false
// console.log(tin);

// const person = {
//     email:"krishchouhan4@gmail.com",
//     fullname:{
//         userfullname : {
//             firstName: "krish",
//             lastName: " chouhan",
//         }
//     }
// }
// console.log(person.fullname.userfullname.firstName)

// const obj1 = {1: "1", 2: "b"}
// const obj2 = {name: "krish", age: 18}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)
// const obj3 = {...obj1, ...obj2 }
// console.log(obj3);

// const person = [
//     {
//         name: "krish",
//         age: 24
//     }
// ]
// console.log(person[0].age)

// console.log(tin)
// console.log(Object.keys(tin))
// console.log(Object.values(tin))
// console.log(Object.entries(tin))
// console.log(tin.hasOwnProperty('isLoggeddIN'));


// -----------part 3-------------------

const course = {
    coursename: "js ",
    price : "999",
    courseInstructor: " krish"
}
// course.courseInstructor

const {courseInstructor: teacher}= course;
console.log(teacher)


