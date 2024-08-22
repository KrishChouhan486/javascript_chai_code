// const promiseOne = new Promise(function(resolve, reject){

//     setTimeout(function(){
//     console.log("this code is execute");

//     resolve();
//     },1000)

// })

// promiseOne.then(function () {
//     console.log("promise consummed")
// })





// new Promise(function(resolve, reject){
//    setTimeout(function () {
//       console.log("asynk wait");
//       resolve();
      
// },1000)
// }).then(function () {
//     console.log("consumed 2 bar")
// })

// const promiseOne = new Promise(function(resolve, reject){

//     setTimeout(function(){
   

//     resolve({username: "krish", email: "krishchouhan@gmail.com"});
//     },1000)

// })

// promiseOne.then(function (user) {
//     console.log(user)
// })



// const promiseFour = new Promise(function(resolve, reject){

//     setTimeout(function(){
   
//         let error = false
//         if(!error){
//     resolve({username: "krish", email: "krishchouhan@gmail.com"});
//         }
//         else{
//         reject("somthing wents wrong")
//         }
//     },1000)

// })

// promiseFour.then(function (user) {
 
//     return user.username;
// }).then(function(username){
//           console.log(username)
// }).catch(function(error){
//     console.log(error);
// }).finally(() => {
//     console.log("finally this line is executed if error resolve or not");
// })



// const promiseFive = new Promise(function(resolve, reject){

//     setTimeout(function(){
   
//         let error = true
//         if(!error){
//     resolve({username: "krish", email: "krishchouhan@gmail.com"});
//         }
//         else{
//         reject("somthing wents js wrong")
//         }
//     },1000)

// })

// async function consumePromiseFive(){
//     try{
//    const response =  await promiseFive;
//    console.log(response);
//     } catch(error){
//         console.log(error)
//     }
// }
// consumePromiseFive()



// const promisesix = new Promise(function(resolve,reject){
//     setTimeout (function(){
//        let error = true;
//        if(!error){
//            resolve({username: "krish"});
//        }
//        else{
//            reject("something wents wrong");
//        }
//     }, 1000)
//    })

//  async function krish (){
//     try{
//    const response =  await promisesix;
//    console.log(response)
//     }
//  catch (error){
//     console.log(error);
//  }
// }
//  krish();


// const promiseSeven = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = false
//         if (!error) {
//             resolve({ username: "krish" });
//         } else {
//             reject("something went wrong");
//         }
//     }, 1000);
// });

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');  // Removed extra space
//         const data = await response.json();
//         console.log(data);  // Logging the parsed data instead of the response
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// getAllUser();

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json(); // Parse the response as JSON
    })
    .then(function(data) {
        console.log(data); // Log the parsed data (array of users)
    })
    .catch(function(error) {
        console.log('Error:', error); // Log any errors that occur
    });







