// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 3)
// console.log(myTotal)


// const myNums = [1,2,3]
// const myTotal = myNums.reduce( (acc, currval) =>{
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 3)
// console.log(myTotal)

const course = [
    {
        item : "js course",
        price : 200
    },
    {
        item : "c++ course",
        price : 200
    },
    {
        item : "python",
        price : 500
    }

]

const price =course.reduce((acc, cur) => acc + cur.price, 0)

console.log(price)