// types of keys

// keys with space,operator or key is a variable then use square bracket for accessing property
// let person = {
//     "first name":"tarun",
//     age:10
// }

// can access property using . or []
// console.log(person["first name"]); // Tarun

// let person = {
//     "first-name" : "tarun" ,
// }

// console.log(person["first-name"]); // Tarun

// let person = {
//     age:10
// }

// let key = "age";

// console.log(person[key]); //10

// Dynamic key - when key is variable or expression 
// let key = "gender";

// let person = {
//     [key]:"Male"
// }

// console.log(person[key]); //Male

// key can be number
// let teacher = {
//     1:"Tarun",
//     2:"pranav sir"
// }

// console.log(teacher[1]); // Tarun
// console.log(teacher["2"]); // Pranav Sir

//H.W
// Can key be object or array ??


// existance of key
// let person = {
//     firstName:"Tarun",
//     secondName:"Pandey",
//     age:10
// }

// gender key exit in the person object or not -> in hasOwnProperty()
// console.log("gender" in person); //false

// // check for age
// console.log("age" in person); //true


//hasOwnProperty()
// age
// console.log(person.hasOwnProperty("age")); //true

// gender
// console.log(person.hasOwnProperty("gender")); //false

//add, update and delete peroperty

// let person = {
//     firstName:"Tarun",
//     lastName:"Pandey",
//     age:10,
// }

// // add new property contactNo
// person.contactNo="882699999";
// console.log(person); 

// // add a new proeprty gender using square bracket 

// person["gender"]="Male";
// console.log(person);


//update
//update the age of person object to 15
// person.age = 15;
// console.log(person); //using dot 

// //update the first name to akshay using square bracket
// person["firstName"] = "akshay";
// console.log(person);


// create a counter object having count property intially having value zero. 
// Each time counter function is called count is increased by one

// let counter = {
//     count:0
// };

// function increment(){
//   counter.count=counter.count+1;
// }

// increment();
// increment();

// console.log(counter.count);

// // given an array find the frequencey of each item of the array
// let arr = [2,2,3,4,5,5,3,3,5,5,5]
// let freq = {

// };

// for(let i=0;i<arr.length;i++){
//     if(arr[i] in freq){
//         freq[arr[i]]=freq[arr[i]]+1;
//     } 
//     else{
//         freq[arr[i]]=1;
//     }
// }

// console.log(freq);

// delete key in a object-> delete keyword
// let person = {
//      name:"Akshay",
//      age:10,
//      work:"unemployed"
// }

// delete person.work;

// console.log(person);

// // delete age property as well
// delete person.age;


// given an object delete all it's property
// let person = {
//      name:"Akshay",
//      age:10,
//      work:"unemployed"
// }

// // delete person.name;
// // delete person.age;
// // delete person.work;

// person = {};
// console.log(person); //{}

// if a object decleared with const you can'nt reassign a new object to it

const person = {
     name:"Akshay",
     age:10,
     work:"unemployed"
}

// person = {};  // produce error can'nt assign to const
person.age=20;

console.log(person);