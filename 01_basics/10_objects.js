const mySym  = Symbol("key33");

const jsUser = {
    name: "krish",
    age: 20,
    [mySym] : "key44",
    email: "krish@gmail.com",
    isLoggedIn : false
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym])

jsUser.email = "krish.com"
// Object.freeze(jsUser);
jsUser.email = "krsmnsish.com"
console.log(jsUser.email)


jsUser.greeting = function(){
    console.log("krish is don")
}
console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`krish is xzcxdon , ${this.age}`)
}
console.log(jsUser.greetingTwo())