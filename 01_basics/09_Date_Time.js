let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString())


let myCreatedDate = new Date(2024, 5, 20, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())


// timestamp for quiz winner

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear())

const ew = newDate.toLocaleString('default',{
    weekday: "narrow",
    
})
console.log(ew)
