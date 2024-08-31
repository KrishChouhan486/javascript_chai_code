class User{
    constructor(username){
        this.username = username
    }
    log(){
        console.log(`this is c1 ${this.username}`)
    }
}
class teacher extends User{
    constructor(username, email, pass){
        super(username);
        this.email = email;
        this.pass = pass;
    }

    cricket(){
        console.log(`course add b the teacher ${this.username}`)
    }
}

const chai = new teacher ("chai", "krish@", "123");
chai.cricket();

const chaie = new User("chaie");
chai.log();
console.log(chai instanceof teacher);