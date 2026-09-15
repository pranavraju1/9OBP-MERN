// Object -> 
// object colection of properties(key and value pair) and method.

// let user = {
//     name:"Akash",
//     age:20
// }

// // dot or bracket notation
// console.log(user.name);
// console.log(user["name"]);

// // key is given as variable 
// let key ="age";
// console.log(user[key]);

// 
// user.city="Delhi";
// user["city"]="Delhi";

// console.log(user);

// user.name="Anant";
// console.log(user);

// user["name"]="Anant";
// console.log(user);


// // Object literal
// let obj={
// };

// Object 

// let user = {
//     name:"Akash",
//     age:20,
//     printName(){
//          console.log(user.name);
//     }
// }

// console.log(user.name);

// user.printName();


// let user = {
//     name:"Akash",
//     age:"20",
//     address:{
//         city:"pune",
//         pincode:"410413"
//     }
// }


// // print the city 

// console.log(user.address.city);



// array of object

// let students =[
//     {
//        name:"Vikas",
//        marks:20,
//        age:30
//     },
//     {
//        name:"Anil",
//        marks:30,
//        age:40
//     },
//     {
//        name:"Mukesh",
//        marks:40,
//        age:50
//     }
// ];


// print name of the students whose marks is greater or equal to 30

// function marksFilter(student){
//    return student.marks>=30;
// }
 
// function transform(student){
//     return student.name;
// }

// let filterStudent = students.filter(marksFilter).map(transform);
// console.log(filterStudent);


// let arr = [5,4,3,3,1];
// return the index of first 3

// console.log(arr.indexOf(3));

// print the index of the first item 
// which is less than or equal to 3

// findIndex()
// find Index is higher order function 
// that return the index of first item which satisfy the condition.

// function condition(element){
//    return element<=3;
// }

// let index = arr.findIndex(condition);
// console.log(index);


// find -> find is higher order function that return the first element 
// that satisfy the condition. if none the element matches the condition
// undefined is returned.

// question-
// print the the first item 
// which is less than or equal to 2

// let arr = [5,4,3,7,1];

// function condition(elem){
//     return elem<=2;
// }

// let ans = arr.find(condition);
// console.log(ans);


// map() -> perform operation on each item and then return a new array.
// forEach() -> it does'nt return anything and perform on each item.


// given an array print the twice of each item.
// let arr = [1,2,3,4,5];

// function operation(elem){
//      console.log(2*elem);
// }

// arr.forEach(operation);


// increasing the marks each student by 5 
// let students =[
//     {
//        name:"Vikas",
//        marks:20,
//        age:30
//     },
//     {
//        name:"Anil",
//        marks:30,
//        age:40
//     },
//     {
//        name:"Mukesh",
//        marks:40,
//        age:50
//     }
// ];

// function operation(student){
//     student.marks+=5;
// }

// students.forEach(operation);

// console.log(students);


// this keyword 
// this refer to the object that is calling the method.

// let user = {
//     name:"Vikas",
//     age:20,
//     printUser(){
//         console.log(this.name);
//     }
// }

// console.log(user.name);
// user.printUser();


// Example 2 

// window object 
// console.log(this);

// Example 3 
// let user = {
//    name:"Abhishek",
//    class:"10th",
//    address:{
//      city:"pune",
//      pincode:"410413",
//      printAddress(){
//         console.log(this.city);
//      }
//    }
// }


// user.address.printAddress();


// state management 
let state = {
    isLoggedin:true, 
}

// single source of truth


//  constructor function -> constructor is a javascript 
// that can be used to create blueprint of the object.


// Object literal
// let user1 ={
//     name:"Abhishek",
//     age:30
// }

// let user2 ={
//     name:"Akash",
//     age:30
// }

// let user3 ={
//     name:"Nilesh",
//     age:40
// }

// create 10 user 
// function User(name,age){
//     this.name=name;
//     this.age=age;
// };

//  let user1 = new User("Abhishek",30);
//  let user2 = new User("Akash",30);
//  let user3 = new User("Nilesh",40);

//  console.log(user1,user2);


// define a libaray details using consturctor 
// function (library detials include title,category,noOfCopy)

function Library(title,category,noOfCopy){
    this.title=title;
    this.category=category;
    this.noOfCopy=noOfCopy;
}

let library1= new Library("R.D Sharma","fiction",2);
let library2= new Library("H.C Verma","non fiction",3);

console.log(library1,library2);

// new 

{

}


// instance 
// Global Object 
// proptype
