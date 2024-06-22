let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b)
// console.log(a)


// function one(){
//     const username = "krish"
//     function two (){
//         const website = " youtube"
//         console.log(username);
//     }
// // console.log(website); error not access
// two()
// }
// one()


if(true){
    const username = "hitesh"
    if(username == "hitesh"){
        const website = "youtube"
        console.log(username + website)
    
        // console.log(website); error we can't access
}
}
// console.log(username)


// +++++++++++++++++++++++++++++intresting++++++++++++++++

// function add(num){
//      return num + 1
// }
// console.log(add(5))


// ______________________techneque_____________________

const addTwo = function add(num){
    return num + 1
}
console.log(addTwo(5))