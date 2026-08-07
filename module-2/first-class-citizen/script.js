// selection sort ->  
// continously select minimum item  and place it  at it's right place
// Best case :- o(n^2)  
// Average Case:- o(n^2)
// worst case:- o(n^2)
// s.c-> o(1)
// inplace -> yes

// bubble sort -
// compare adjacent element 
//Best Case-> o(n) when array is already sorted
// Average Case-> o(n^2)
// worst case-> o(n^2)
// s.c-> o(1)
// inplace -> yes


// insertion sort-> 
// Best Case-> o(n) -> when array is already sorted 
// Average Case-> o(n^2)
// worst case-> O(n^2)
// s.c-> o(1)
// inplace -> yes


//Merge sort:-
// o(nlogn)-> in all three cases 
// space complexity-o(n)
// inplace -> no

//quick sort
// T.c 
// Best -> o(nlogn)
// Average -> o(nlogn)
// worst -> o(n^2) -> sorted or reverse sorted 
// s.c- o(logn) worstcase-> o(n)
//inplace -> yes 


// time complexity

// while(n<=0){
//     n=n/10;
// }
// T.c-> o(log10(n))

// for(let i =0;i<n;i++){
//     for(let j =0;j<10000;j++){
      
//     }
// }
// T.c -> o(n)
// s.c-> o(1)


// for(let i=0;i<n;i++){
//     for(let j=0;j*j<n;j++){
//         console.log("Hello");
//     }
// }

// n*sqrt(n)


// let i=0,j=5;
// let arr = [];
// while(i<=j){
//     arr.push(...[i,j]);
//     i++;
//     j--;
// }
// console.log(arr);
// T.c -> o(n)
// S.c -> o(n)


// Binary Search -> o(logn)
// non increasing 
//  non decreasing 

// sorted array 
// [1,2,3,4,5];

// [1,2,2,3,3,3,4,5]

// [5,5,4,4,2,1]

// 

// Arrays 
// [1,2,3,4];
// push -> o(1)

// pop-> o(1)

// shift ->o(n)
// unshift-o(n)

// slice(start?,end?.)-> o(end-start)
// splice()->


// Map and Set 

// Map-> Best Case-> o(1) Average Case-> O(1) worst case -> o(n)
// set -> o(1)
// get -> o(1)
// has -> o(1)
// delete -> o(1)


// size -> o(1)
// clear -> o(n)



// named function 

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(1,2))

//  function expression 
// let a = function sum(a,b){
//     return a+b;
// }

// console.log(a(1,2));


// function are first class citizen in javscript 
// function is a like a variable in javascript (string ,number).
// It means 
// function can be stored inside a variable,object and array .
//  can also be passed as argument.
// can also be returned from a function.

// function can be stored as a variable
// function sum(a,b){
//     return a+b;
// }

// let newSum = sum;
// console.log(newSum(1,2));

// function can be store object 
// let student ={
//     name:"tarun",
//     printName(){
//         console.log(this.name);
//     }
// }

// student.printName();

// function can be stored inside an array

// function  printName(){
//     console.log("My name is Abhishek");
// }

// function printAddress(){
// console.log("I am from Lucknow");
// }

// let print = [printName,printAddress];

// print[0]();
// print[1]();


// function can be passed as argument 

// function sum(a,b){
//     console.log(a+b);
// }

// function product(a,b){
//    console.log(a*b);
// }

// function operation(callback){
//   callback(1,2);
// }

// // operation(sum);
// operation(product);


// Example
// make calculator with operation sum product and substraction

// function sum(a,b){
//     console.log(a+b);
// }

// function product(a,b){
//     console.log(a*b);
// }

// function substraction(a,b){
//     console.log(a-b);
// }

// function operation(callback){
//     callback(1,2);     
// }

// operation(sum);
// operation(product);
// operation(product);


//callback function ->
// callback is the function that is passed to another function as an argument.

// function successful(){
//   console.log("order delivered successfuly");
// }

// function delivery(callback){
//     let delivery = false;
//     if(delivery = true)
//         callback();
// }

// call delivery successful

// delivery(successful)



//Higher Order function -> 
// callback is the function that is passed to another function as an argument.

// Higher order function is the function that take another function as parameter
// or return a function 

// function successful(){
//   console.log("order delivered successfuly");
// }

// function delivery(callback){
//     let delivery = false;
//     if(delivery = true)
//         callback();
// }

// // call delivery successful

// delivery(successful)

// delivery -> higher order function
// successful-> callback function  


// function operation(){
//     let a = 10,b=20;
//     return function sum(){
//         console.log(a+b);
//     }
// }

// let op = operation();
// op();

// Higher order function -> operation
// function returned function 
// function operation(){
//     return function sum(){
//         console.log("operation is higher order function.because it returing fn")
//     }
// }

// //approach 1
// // let op = operation(); //sum
// // op();

// // approach 2
// //  direct 
// operation()();


// predict the output 
// function operation(){
//     return function product(){
//         console.log("Hello product is 2");
//     }
// }
// let a = operation()();
// console.log(a);

// Hello product is 2 
// undfined 

// predict the output

function operation(){
    return function  artithmatic(){
        return function product(){
            let a =1,b=2;
            return a*b;
        }
    }
}

console.log(operation()());
console.log(operation()()())



































