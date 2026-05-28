// Math.round -> this rounds to the nearest integer
// console.log(Math.round(4.4)) //4
// console.log(Math.round(4.5)) //5
// console.log(Math.round(4.7)) //5

// console.log(Math.round(-4.4))   //-4 
// console.log(Math.round(-4.5))   //-4
// console.log(Math.round(-4.7))   //-5

// Example
// let price = 299.67
// let roundedPrice = Math.round(price);
// console.log(roundedPrice)


// Math.floor -> rounds the number DOWN to the nearest integer 
// console.log(Math.floor(4.4))    //4 
// console.log(Math.floor(4.5))    //4
// console.log(Math.floor(4.7))    //4

// console.log(Math.floor(-4.4))   //-5
// console.log(Math.floor(-4.5))   //-5
// console.log(Math.floor(-4.7))   //-5

// Example
// let age = 25.8;
// let actualAge = Math.floor(age)


// Math.ceil() -> rounds the number UP to the nearest integer
// console.log(Math.ceil(4.4))   //5  
// console.log(Math.ceil(4.5))    //5
// console.log(Math.ceil(4.7))    //5

// console.log(Math.ceil(-4.4))   //-4
// console.log(Math.ceil(-4.5))   //-4
// console.log(Math.ceil(-4.7))   //-4

// example
// let people = 26;
// let seatsPerTable = 3;
// let totalTables = Math.ceil(people / seatsPerTable);


// typeof -> tells the data type of the data
// console.log(typeof 3);  //number
// console.log(typeof "3");  //string


// toFixed -> formats the number to a specified number of decimal places
// and returns a string

// let num = 5.56729
// console.log(num.toFixed(0)) //6
// console.log(num.toFixed(1)) //5.6
// console.log(num.toFixed(2)) //5.57
// console.log(num.toFixed(3)) //5.567
// console.log(num.toFixed(4)) //5.5673
// console.log(num.toFixed(10)) //5.5672900000

// let tofixedResult = num.toFixed(0);
// console.log(Number(tofixedResult) + 1)  //1



// parseInt -> parses a string and returns a integer (whole number)

// console.log(parseInt("45")) //45
// console.log(parseInt("45.96"))  //45
// console.log(parseInt("-45.96")) //-45
// console.log(parseInt("45px"))   //45 
// console.log(parseInt("px45"))   //Nan
// console.log(parseInt("px"))   //Nan
// console.log(parseInt(""))   //Nan
 




// parseFloat -> parses a string and returns a the number (including decimals)
// console.log(parseFloat("45"))   //45 
// console.log(parseFloat("45.96")) //45.96 
// console.log(parseFloat("-45.96")) //-45.96
// console.log(parseFloat("45.456456546px"))   //45.456456546    
// console.log(parseFloat("px45"))   //Nan
// console.log(parseFloat("px"))   //Nan
// console.log(parseFloat(""))   //Nan


// Math.random() -> returns a random number from 0 to 1 
// console.log( Math.floor(Math.random() * 10)) // 0 to 9
// console.log( Math.floor(Math.random() * 10) + 1)    // 1 to 10  




// let maxValue =  Math.max(12, 52, 68, 100, 5444);
// let minValue =  Math.min(12, 52, 68, 100, 5444);
// console.log(maxValue)   //5444
// console.log(minValue)   //12

// console.log(Math.pow(2 , 3))


// task1: you have 157 students and each bus holds 45 students
// how many buses do you need ? write the code to exaplain this 

let students = 157;
let studentsPerBus = 45;
let totalBuses = Math.ceil(students / studentsPerBus)


// task2: generate a random integer betwenn 1 and 100 (both included)

console.log(Math.floor(Math.random() * 100) + 1)