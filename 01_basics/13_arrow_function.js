// const person ={
//     username : "krish",
//     age : 20,

//     welcome: function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this)
//     }
// }
// person.welcome()
// person.username = "sam"
// person.welcome()

// console.log(this)

// function chai(){
//     let username = "krish"
//     console.log(this.username);
// }
// chai()

// this keyword run only object it is not working in function

// const chai = function(){
//     let username = "krish"
//     console.log(this.username)
// }
// chai()


// ==================== arrow function =============
// this keyword give empty function
// const chai = () =>{
//     let username = "krish"
//     console.log(this.username)
// }

// const add = (num, num2) =>{
//     return num + num2
// }

// console.log(add(3,4))

// const add = (num, num2) => num + num2
// const add = (num, num2) => (num + num2)

// console.log(add(3,4))

const add = (num, num2) => ({
   username : "krish" 
})
  
console.log(add(3,4))
