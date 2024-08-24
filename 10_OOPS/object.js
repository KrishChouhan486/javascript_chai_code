function object(num){
    return num * 5;
   
}
object.power = 2;
console.log(object(5));
console.log(object.power);


function createUser (username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
   this.score++
}
createUser.prototype.print = function(){
    console.log(`this is good ${this.score}`);
}

const user1 = new createUser("krish", 14);
const user2 = new createUser("ponga", 10);

user1.print();