const userEmail = []

// if(userEmail){
//     console.log("Got User Email");
// }
// else {
//     console.log("Don't have user email")
// }


// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}, 


// ______________________Array_______________________________________

if(userEmail.length === 0){
    console.log("Array is empty")
}

//  __________________object___________________________\\

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("this object is empty")
}


// -----------------------Nullish Coalescing Operater (??): null undefined

let val1;
// val1 = 5 ?? 10
// val2 = null ?? 10
// val2 = undefined ?? 10
val2 = null ?? 10 ?? 30

console.log(val2);


// _______________________________ Terniar Operator________________________

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <=80 ?  console.log("less then 80"): console.log("more than 80")