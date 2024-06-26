// const myNumbers = [1,2,3,4,5,6,7,8,9]

// const newr = myNumbers.map(item =>item  + 10)
// console.log(newr);

const myNumbers = [1,2,3,4,5,6,7,8,9]

const newr = myNumbers
                     .map(item =>item  * 10)
                     .map(item => item + 1 )
                     .filter(num => num >=40)
console.log(newr);