let myHero = ["papa","mom"];


const power ={
    papa : "grandFather",
    mom : "grandMother",

    getPower : function (){
        console.assertlog(`this is krish parent ${this.papa}`)
    }
}

Object.prototype.krish = function (){
    console.log(`krish is present in al string`)
}
// power.krish();

// myHero.krish();

// ab power array ko dege but conndition string access nhi kr skta 

// Array.prototype.hii = function(){
//     console.log(` hii krish`)
// }

// myHero.hii();


// ak chij ko dusri chij ka asix 
const user = {
    name: "chai",
    email: "chai@gmail.com"
}
const Teacher ={
    makevideo :true
}

Object.setPrototypeOf(user,Teacher)



let another = "krish"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(` thrue length${this.trim().length}`);

    
}

another.trueLength();

"krish".trueLength();