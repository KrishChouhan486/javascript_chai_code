// const user = {
//     username : "krish",
//     age : 21,

//     getuserDetail : function(){
//         console.log(`the user ${this.age}`)
//         console.log(this);

//     }
// }

// console.log(user.username)
// console.log(user.getuserDetail());




function user (username, login, logout){
   this.userna = username;
   this.login =login;
   this.usern = logout;

   this.guru = function(){
    console.log(`this is ${this.login}`)
   }
   return this;

//    return this totally depend on you it is use or not by default its return

}

const userOne = new user("krish", 28, 30)
const user2= new  user("kriskkh", 2, 0)
console.log(userOne);
console.log(user2);