const myNums = [1,2,3,4,5,6]
// const newNums = myNums.filter(num =>{
// return num > 4
// })
// console.log(newNums)


// const newNums = []

// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const book = [
    {
        title:'book one', genre: 'Non-Fiction', publish: 1989, edition: 2010},
        {title:'book two', genre: 'Fiction', publish: 2000, edition: 2014},
        {title:'book three', genre: 'Fiction', publish: 2489, edition: 2040}

]

let bookNew = book.filter(item => {return item.publish >= 2000 && item.genre === "Fiction" })

console.log(bookNew)