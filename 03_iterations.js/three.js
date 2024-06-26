const arr = [1,2,3,4,5]
for (const iterator of arr) {
    // console.log(iterator);
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(greet);
}

const map = new Map()
map.set('IN', "India")
map.set('America', 'united state ')

// console.log(map);

for (const [key, value]  of map ) {
    // console.log(key, ':-', value);
}