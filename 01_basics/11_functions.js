function krish() {
    console.log("krish")
}
// krish();


// function add(num1, num2){
//     console.log(num1 + num2);
// }
// add(2,4);    //2,4 arguments

// function add (num1, num2){
//     let result = num1 + num2
//     return result;
// }
function add (num1, num2){
    return num1 + num2
    
}
const result = add(3,5);
console.log("result", result);


// function log(username){
//     return `${username} just logged in`
// }
// console.log(log("krish"))


// function log(username){
//     if(username == undefined){
//         console.log("please enter a name");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(log())


// function log(username){
//     if(!username){
//         console.log("please enter a name");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(log("krish"))


// function calculate(...num1){
//     return num1
// }
// console.log(calculate(200, 400, 500))

// --------------->method 1------------------

// const user = {
//     username : "krish",
//     price: 144
// }

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user);

// ----------------------method 2------------------

// without object we can creater we can directly pass  the object

// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject({
//     username : "krish",
//     price: 144
// });


// =====================Array=======================

const myNewArray = [200,400,500,100]
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))

