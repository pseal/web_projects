//console.log("Page successfully loaded script.js");

//const name = "Prasenjit Seal";
//let profession = "Researcher";

//JavaScript data types

/*const str = "A string"; //This is a string
const num = 3; //number
const flt = 3.14; //float
const bool = true; //or false
const list = ["Item 1", 2, "Three", 3.14, []] // Array = list
const thing = null; //piece of memory allocated to thing; has nothing in it
const notDefined = undefined; //currently holds no value
const getAge = function() { return 43; } //This is a function
cont obj ={
    'name' : 'Prasenjit',
    'profession' : 'Researcher'
} //Object: can be accessed with obj ['name']*/

//Conditional statements

//const twitter = "@KalobTaulien";
/*const twitter = "@ElonMusk";

if(twitter == "@KalobTaulien") {
    //Execute the code in here
    console.log("Twitter handle is @KalobTaulien"); 
} else {
    // Execute this code if not @KalobTaulien
    console.log(twitter, "is the Twitter handle");
}*/

/*const age = 18;
if(age >=18) {
    console.log("I am allowed to vote");
}
if(age>=21) {
    console.log("I can drink alcohol");
} else {
    console.log("Not old enough to drink alcohol"); 
}


const nam = "Rayan";
if(nam == "Romy") {
    console.log("Welcome Romy");
} else if(nam == "Prasenjit") {
    console.log("Hello Prasenjit")
} else {
    console.log("Hello, Guest")
}
const elems = document.querySelectorAll(".this-class");
console.log(elems.innerText)*/
//function addNumbers() {
    //Logic
    //300 logics for example and return with an answer
   // return "an answer";
//}

//const total = addNumbers(); //an answer

function addNumbers(num1, num2) {
    const total = Number(num1) + Number(num2);
    return total;
}

const addedTotal = addNumbers("1122131321", "93134141514");



