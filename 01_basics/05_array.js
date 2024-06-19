// const arr= [1,2,3,4];
// console.log(arr[1]);


const  arra = new Array(1,2,3,49);


// arra.push(39);
// arra.unshift(22);
// arra.shift();
// arra.pop();
// console.log(arra.includes(22));
// console.log(arra.indexOf(2));

const newArray = arra.join();
// console.log(typeof newArray);

// console.log("A" , arra );

// const newArr = arra.slice(1, 3);
// console.log(newArr);

// console.log("b" , arra );

// const newArr2= arra.splice(1, 3);
// console.log(newArr2);
// console.log(newArr);
// Using slice
const arr1 = [1, 2, 3, 4, 5];
const newArr1 = arr1.slice(1, 3); // [2, 3]
console.log(arr1); // [1, 2, 3, 4, 5]

// Using splice
const arr2 = [1, 2, 3, 4, 5];
const removed = arr2.splice(1, 3, 'a', 'b'); // Removes [2, 3], adds ['a', 'b']
console.log(arr2); // [1, 'a', 'b', 4, 5]
