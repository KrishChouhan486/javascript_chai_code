function setUsername(username){
    this.username = username
}

function createUsername(username, email){
    setUsername.call(this,username);
    this.email= email;
}

const chai = new  createUsername("chai", "krish@");
console.log(chai);