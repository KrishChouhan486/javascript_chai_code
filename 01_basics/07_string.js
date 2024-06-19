// const name = "krish";
// const last = "chouhan";

// console.log(`my name is ${name} last name ${last}`);
const lit = "kri"
const gameName = new String('krish_chouhan');
console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
const substrin = gameName.substring(0,4)
console.log(substrin);

const Slice = gameName.slice(-8,2);
console.log(Slice)


const newStringOne = "     krish    ";
console.log(newStringOne);
console.log(newStringOne.trim())

const Replace = "raja%bhiya";
console.log(Replace.replace('%', '_'))

console.log(Replace.includes('raja'));


console.log(gameName.split('_'));