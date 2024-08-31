// class User {
//     constructor(name,email,pass){
//         this.name = name ;
//         this.email=email;
//         this.pass = pass;
//     }

//     encrptPassword(){
//         return `${this.pass} abc`
//     }
// }
// const chai = new User("chai","krish@", "123")
// console.log(chai.encrptPassword());


function username(name, email,pass)
{
    this.name = name ;
        this.email=email;
        this.pass = pass;
}
 username.prototype.krish= function(){
     return `${this.pass} abc`
 }


 const tea = new username("krish", "krish$$$", "123");
 console.log(tea.krish())
