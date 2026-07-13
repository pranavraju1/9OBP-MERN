// {
//     let a = 5;
// }
// console.log(a);     //error

// if(true){
//     let a = 5
// }
// console.log(a)  //error

// for(let i=0;i<5;i++){}
// console.log(i)   //error

//1. variables declared using let are block scope 


// let a = 5;
// a = 6;  // updating/reassigning the variable

// // let a = 7;
// // console.log(a)  //error
// {
//     let a = 7;
// }
// console.log(a)  //6

//2. we can reassign/update a let variable but we cannot redeclare it (in the same scope) 



// let a = 5;  //global scope variable

// if(true){
//     // here your global variable is updating
//     a = 7;
//     if(true){
//         console.log(a)  //7
//     }
// }
// console.log(a)  //5

// function func(a){
//     // here a inside the function is different from the a in global
//     a = 7
//     console.log(a)  //7]]
// }
// func(a)
// console.log(a)  //5



// let b = 5;
// function func(b){
//     b = 6;
// }
// console.log(b)  //5
// func(b);
// console.log(b)  //5



// let b = 5;
// function func(){
//     b = 6;
// }
// console.log(b)  //5
// func();
// console.log(b)  //6


// {
    // let a = 5
    // console.log(a)
// }
// {
    // let a = 6;
    // console.log(a)
// }




// 1. const variables cannot be redecalred inside same scope
// {
//     const a = 4;
//     {
//         const a = 5;
//     }
// }

// const a = 5;
// a = 6;  //error
// // 2. const varialbes cannot be reassigned

// const sum = 0;
// for(let i=1 ; i<=5; i++){
//     sum += i
//     // sum = sum + i;
// }
// console.log(sum)//error bc sum += i is reassigning const variable

// let sum = 0;
// for(const i=1 ; i<=5; i++){
//     sum += i
//     // sum = sum + i;
// }
// console.log(sum)//error bc i++ is reassigning const variable



// var varible
// 1. var variables can be reasigned
// var a = 5;
// a = 6
// console.log(a)   //6

// 2. var variables can be redeclared
// var a = 5;
// var a = 6
// console.log(a)   //6

// 3. var variables scope is either global or function
// function func(){
//     var a = 5
// }
// func();
// console.log(a)  //error


// console.log(a)  //undefined
// var a = 6;
// console.log(a)  //6


// if(true){
//     var b = 5 
// }
// console.log(b); //5 


// for(var i = 0; i<5; i++){}
// console.log(i); //5





// function sayHi(){
//     if(true){
//         var phrase = "hello"
//     }
//     console.log(phrase) //hello
// }
// sayHi();
// console.log(phrase) //error



// function func(a){
//     a = 100
//     console.log(a)
// }
// func(a);
// var a = 10;



// Note: 
// by default this is a var variable
// a = 5;
// console.log(a)


// hoisting -> "the declaration" of the variable is moved to the top of its scope

// {
//     console.log(a);
//     var a = 5;
// }
// // the above code would look like the below after hoisiting
// {
//     var a;
//     console.log(a);
//     a = 5;
// }










// var x = 1;
// function demo(){
//     console.log(x)
//     var x = 2;
//     console.log(x)
// }
// demo();
