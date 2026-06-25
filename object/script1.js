// object
// real life anything around us is object
// object
// --> property. 
// --> method 

// Bike 
// -- property -> color model 
// --- method -> move accelerate lightturn 


//javascript
// object-> object is collection of data stored in the form key and value pair .
// name-> key 
// value -> gt650 

// let bike = {
//     name:"gt650",
//     color:"grey"
// }

// console.log(bike);

// create a object person having firstName,LastName and Age and then print on the console.

// let person = {
//    firstName : "Tarun",
//    secondName: "Pandey",
//    age: 10
// }

// console.log(person);


// empty object
// let obj = {};
// console.log(typeof obj)


// accessing a property
// dot
// square bracket
// let person = {
//    firstName : "Tarun",
//    secondName: "Pandey",
//    age: 10
// }

// console.log(person.firstName); //Tarun
// console.log(person.secondName); //Pandey

//square brackets
// console.log(person["secondName"]);

//property
// in javscript property can be anything 

// it can be null
// let person = {
//    firstName : "Tarun",
//    secondName: "Pandey",
//    age: null
// }

// console.log(person.age); //null

// it can be undefined

// let person = {
//    firstName : "Tarun",
//    secondName: "Pandey",
//    age: undefined
// }

// console.log(person.age); // undefined

// it can be boolean

// let person = {
//    firstName : "Tarun",
//    secondName: "Pandey",
//    age: undefined,
//    isHandicaped:false
// }

// console.log(person.isHandicaped); //false

// it can be array  
// object of array

// let person ={
//     firstName:"Tarun",
//     secondName:"Pandey",
//     skills: ["Node.js","React.js","Redis","mongodb"]
// }

// console.log(person.skills);  // ["Node.js","React.js","Redis"]

// check whether this person is skilled in mongodb if yes then print true otherwise false

// console.log(person.skills.includes("mongodb")); //true


// check whether this person is skilled in mongodb if yes then print index otherwise -1
// console.log(person.skills.indexOf("mongodb")); //3

// object can have function 

// const person = {
//    firstName: "Tarun",
//    secondName: "Pandey",
//    fullName:function (){
//       console.log("full name is tarun pandey");
//    }
// }

// person.fullName();

// task :- create a function running and then print peson can run

const person = {
   firstName: "Tarun",
   secondName: "Pandey",
   running: function(){
    console.log("person can run");
   }
}

person.running();

// key - types of keys

let person = {
    name:"Tarun Pandey",
    age:10,
    age:20
}

console.log(person.age); // 20

