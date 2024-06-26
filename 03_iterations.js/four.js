const myObject = {
    js : "langauage",
    cpp: "cpp language",

}

for (const key in  myObject) {
    
        console.log(`${key} shortcut is for ${myObject[key]}`);
    }
