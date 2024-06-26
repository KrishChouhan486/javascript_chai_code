const myObject = {
    js : "langauage",
    cpp: "cpp language",

}

for (const key in  myObject) {
    
        console.log(`${key} shortcut is for ${myObject[key]}`);
    }


const programming = ["js", 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    console.log(programming[key]);
}
