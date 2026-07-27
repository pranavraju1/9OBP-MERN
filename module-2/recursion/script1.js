// Recursion
// function call itself.

// function check(){

//     check();
// }

// types of Recursion
// Tail  Recursion
// Head Recursion
// Tree Recursion 

// print n to 1 using loop 
// then convertthat code in to the recursion



// for(let i =n ;i>=1;i--){
//     console.log(i);
// }

// tail recursion
// let n =10;
// function check(n){
//   if(n<=0)
//     return;
//   console.log(n);
//   check(n-1);
// }

// check(n);


// let n = 8;
// function check(n){
//   if(n<=2)
//     return;
//   console.log(n);
//   check(n-2);
// }

// check(n);


// find sum of n to 1 using recursion

// let sum =0;
// let n =5;
// function findSum(n){ 
//     if(n<1)
//      return;
//     sum+=n;
//    findSum(n-1);
// }

// findSum(n);

// console.log(sum);


// tail recursion
// print 1 to n using recursion.

// let n = 5;
// function print(i,n){
//  if(i>n)
//    return;
//  console.log(i);
//  print(i+1,n);
// }

// print(1,n);


// Head Recursion

// let n = 5;
// function print(n){
//  if(n<=0)
//    return;
//  print(n-1);
//  console.log(n);
// }

// print(n);


// o/p

// let n = 8;
// function print(n){
//  if(n<=0)
//    return;
//  print(n-2);
//  console.log(n*n);
// }

// print(n);
// let n = 8;
// function print(n){
//  if(n<=0)
//    return;
//  console.log("Hello",n);
//  print(n-2);
//  console.log("Hello",n);
// }

// print(n);


// o/p-

// let n = 8;
// function print(n){
//  print(n-2);
//  console.log(n*n);
// }

// print(n);  // RangeError: Maximum call stack size exceeded

function print(n){
 if(n<0)
  return;
 print(n+2);
 console.log(n*n);
}

print(1);















