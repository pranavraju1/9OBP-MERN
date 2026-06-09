// A function is a reusable block of code designed to perform a specefic task.
// Note: Why do we need fucntions
// 1. Reusability -> Write code once, use it many times
// 2. Organization -> Break complex code into smaller peices
// 3. Maintainability -> Fix bugs in one place instead of many
// 4. Readability -> makes code easier to understand


// let length = 10;
// let width = 10;

// // function declaration
// // here a and b are called parameters
// function area(a, b){
//     console.log("area is", a * b)
// }

// // function call
// // here length and width are called arguments
// area(length, width);




// let length = 10;
// let width = 20;

// // here b = 1 is a defualt parameter which checks if the given parameter is undefined
// // or not, if its undefined it will assign the value here (1) if not the given parameter is assigned
// function area(a, b = 1){  
//     // console.log("area is", a * b)
//     console.log(a)
//     console.log(b)
// }

// area(length);   //10 1
// area(length, width);   //10 20
// area(length, 0);   //10 0
// area(length, undefined);   //10 1







// let length = 10;
// let width = 20;

// function area(length, width){  
//     length = 100
//     width = 200
//     console.log("length inside", length)    //100
//     console.log("width inside", width)      //200
// }

// area(length, width);   

// console.log("length", length)   //10
// console.log("width", width)     //20

// // Note: the parameter are independent from the arguments even if we give them the same name



// write a function that takes the below input and prints "Hi i am pranav raju" 
// let firstName = "pranav";
// let lastname = "raju";

// function greet(fname, lname){
//     console.log("Hi i am" + " " + fname + " " + lastname)
//     console.log(`Hi i am ${fname} ${lastname}`)
// }

// greet(firstName, lastname)






// return

// let length = 10;
// let width = 20;

// function area(a, b){
//     console.log("hello1")  
//     let result = a * b;
//     return result;
//     console.log("hello2")
// }

// let value =  area(length, width);   //hello1
// console.log(value)  //200

// //Note: anything written below return will not be executed 





// function func(){
//     console.log("hello")
// }
// // Note here func is just like a variable that has the value of the function
// let func2 = func;
// func2();    //hello





// function canVote(age){
//     //complete the below function 
//     if(age >= 18){
//         return true
//     }

//     return false
    
// }

// let value = canVote(25) ? "she can vote" : "she cannot vote" 
// console.log(value)


// function declaration
// function func(){
//     console.log("hello")
// }
// func()

// // function expression
// let func2 = function(){
//     console.log("hello")
// }
// func2();





// function declaration
// func(); //hello
// function func(){
//     console.log("hello")
// }


// // function expression
// func2();    //error
// let func2 = function(){
//     console.log("hello")
// }

// // Note: you can call a function created using function declaration before the fucntion is made
// // but if you call a function created using function expression before its creation it gives error
// // this happens due to hoisting (will be covered later) 




// let func2;

// func2 = function(){
//     console.log("hello")
// }
// func2(); 


let age = 25;

let funcExpression = (age >= 18) ? function(){console.log("can vote")} : function(){console.log("cannot vote")}

funcExpression();