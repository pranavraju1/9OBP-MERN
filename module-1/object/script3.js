
// let person = {
//     firstName:"akshay",
//     lastName:"bhardwaj",
//     age:35
// }

// traversal
// for in

//  print all the keys 
// for(let key in person){
//     console.log(key); 
// }

//o/p- firstName lastName age

// print all the value

// console.log(person["age"]);

// for(let key in person){
//     console.log(person[key]); // akshay bhardwaj 35
// }



// let person = {
//     firstName:"akshay",
//     lastName:"bhardwaj",
//     age:35
// }

// find the no of keys present in an object

// let count = 0;
// for(let key in person){
//  count++;
// }
// console.log(count);  //3


// Object.keys() -> return array consisting of  keys  of the object

// console.log(Object.keys(person)); // ['firstName','lastName','age']

// Object.values() -> return an array consisting of values of the object

// console.log(Object.values(person)); // ['akshay','bhardwaj,35]


//given an object person having name as key and age  as value.find the name of oldest person.
// let person = {
//     "akshay":20,
//     "sangam":30,
//     "abhishek":10,
//     "pankaj":15
// }


// let maxAge =0;
// let oldest = "";
// for(let name in person){
//     let age = person[name];
//     if(age>maxAge){
//         maxAge=age;
//         oldest = name;
//     }
// }

// console.log(oldest,maxAge); // sangam 30

// task 2 - print the person whose name is the  longest 
// const person = {
//    1:"Tarun",
//    2:"Ani",
//    3:"Jaydeep",
//    4:"Tushar",
//    5:"adlfcvsfleordljersfovj"
// };

// let longestName = "";
// for(let sr in person){
//     let name = person[sr];
//     if(longestName.length<name.length){
//         longestName = name;
//     }
// }
// console.log(longestName);  //adlfcvsfleordljersfovj



// find the average age
// let person = {
//     "akshay":20,
//     "sangam":30,
//     "abhishek":10,
//     "pankaj":15
// }

// let sum=0;
// let count=0;
// for(let name in person){
//      let age = person[name];
//      sum+=age;
//      count++;
// }

// console.log(sum/count);

// task 5:-

// let person = {
//     "akshay":20,
//     "sangam":30,
//     "abhishek":10,
//     "pankaj":15
// }

// // o/p-
// // akshay-sangam-abhishek-pankaj

// let names=Object.keys(person);
// console.log(names.join("-"));   //akshay-sangam-abhishek-pankaj

//Task 6-
// const person = {
//    1:"Tarun",
//    2:"Ani",
//    3:"Jaydeep",
//    4:"Tushar"
// };

// // o/p Tarun|Ani|Jaydep|Tushar

// let names= Object.values(person);
// console.log(names.join('|')); //Tarun|Ani|Jaydeep|Tushar

// this keyword- this keywrod refer to the object that is calling the method.
// let person ={
//     firstName:"Tarun",
//     secondName:"Pandey",
//     fullName: function(){
//         console.log(this.firstName+this.secondName);
//     }
// }

// person.fullName();  

// Nested Object -> object inside object
// let person = {
//     name:"Ajay",
//     age:10,
//     address:{
//         city:"Pune",
//         pune:"411001"
//     }
// }

// //name of the person
// console.log(person.name);

// console.log(person.address.city);

//array of objects
// let person = [ 
//    {
//     name:"Akshay",
//     city:"Delhi"
//    },
//    {
//     name:"Mangal",
//     city:"Pune"
//    },
//    {
//     name:"Bharat",
//     city:"Hyderabad"
//    }
// ];

// Akshay Managal Bharat

// for(let i=0;i<person.length;i++){
//     console.log(person[i].name);
// }

// for(let i=0;i<person.length;i++){
//     console.log(person[i]["name"]);
// }

// task 7- create a datastructure to store book details of multiple books.
// Book have id, title and author.

// book1 - 
id - 1
title - think and grow rich 
author- napolin hill 

// book2-
id - 2
title - Atomic Habits
author - james 

// book3-
id - 3
title- wings of Fire 
author - a.p
   

let books = [
  {
    id:1,
    title:"Think and Grow Rich",
    author:"Napolin Hil"
  },
  {
    id:2,
    title:"Atomic habit",
    author:"James"
  },{
    id:3,
    title:"Wings of Fire",
    author:"A.P.J"
  }
]