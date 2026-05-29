// console.log(Boolean(1)) //true
// console.log(Boolean(-1)) //true

// console.log(Boolean(0)) //false
// console.log(Boolean(NaN))   //false

// console.log(Boolean("ob")) //true
// console.log(Boolean("false"))   // true
// console.log(Boolean(" "))   //true

// console.log(Boolean("")) //false


// console.log(Boolean([1,2,3,4]));    //true
// console.log(Boolean([]));   //true

// console.log(Boolean({name: "pranav"})) //true
// console.log(Boolean({})) //true



// console.log(Boolean(undefined));    //false
// console.log(Boolean(null));    //false

// let a = null;
// console.log(Boolean(a));

// Note: undefined and null both represent empty values
// undefined is assigned automatically when you do not initialize a variable
// null is an empty value ie. deliberately assigned to a variable  


// if statements

// if(true){
//     console.log("hello")
// }

// if(true)console.log("hello")


// if(1)console.log("hello")   //hello
// if(0)console.log("hello2") 

// if(2 > 3)console.log("hello2")   
// if(3 > 2)console.log("hello2")   //hello2

// if(" ")console.log("hello")

// ex1
// let name = "kjhkjh"
// if(name){
//     console.log("user has entered a value")
// }else{
//     console.log("user has not entered a value")
// }

// ex2
// let age = 20;

// if(age >= 18){
//     console.log("can vote")
// }else{
//     console.log("cannot vote")
// }



// task: entry -> 18  above and you are not stag
// let age = 17;
// let stag = false;

// if(age >= 18){
//     if(stag){
//         console.log("cannot enter")
//     }else{
//         console.log("enter")
//     }
// }else{
//     console.log("cannot enter")
// }


// task: the user variable can only have values "student" or "teacher"
// if the person is a teacher and isAdmin only then can he/she update the marks
// otherwise they cannot
// you only have to print "can update marks" and "connot update marks"
// let user = "teacher"    //"student" or "teacher"
// let isAdmin = true;


// if(user == "teacher"){
//     if(isAdmin){
//         console.log("can update")
//     }else{
//         console.log("cannot update")
//     }
// }else{
//     console.log("cannot update")
// }


// let num = 100;
// positive
// negetive
// zero 

// if(num > 0){
//     console.log("positive")
// }else if(num < 0){
//     console.log("negetive")
// }else{
//     console.log("zero")
// }

// Note: else if block comes to play when you you have multiple 
// if condtions and you want to chain them 


// for a given number check if its even, odd and not a integer
// if its not a decimal dont check for even and odd
// let num = 4

// if(num === Math.floor(num)){
//     if(num % 2 === 0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }else{
//     console.log("not an integer")
// }








// if(num !== Math.floor(num)){
//     console.log("not an integer")
// }else if(num % 2 ==0){
//     console.log("even")
// }else{
//     console.log("odd")
// }