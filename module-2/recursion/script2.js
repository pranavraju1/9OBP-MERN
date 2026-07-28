// if want to pass data from one recursion to another
// two ways
// 1. pass in the function argument 

// function check(i,n){
//     if(i>n)
//       return;
//     check(i+1,n);
// }

// check(1,5);

//2. return from the function call
// find sum of numbers(1 to n)

// function check(n){ 
//     if(n<=0)
//       return 0;
//     return n+check(n-1);
// }

// console.log(check(5));


// recursion without return value

// function check(n){ 
//     if(n<=0)
//       return;
//     return n+check(n-1);
// }

// console.log(check(5)); // Nan


// function check(n){ 
//     if(n<=0)
//       return 0;
//     return n+check(n-1);
// }

// console.log(check(5));


// write facotrial code using recursion

// recurrence realtion
// fact(n) = n*fact(n-1);
 
// code 
// function fact(n){
//    if(n==0)
//      return 1;
//    return n*fact(n-1)
// }

// console.log(fact(5));

// sum of digit of a number using recursion

// function sumOfDigit(n){
//     if(n<10)
//       return n;
//     last_digit=n %10;
//     return last_digit+sumOfDigit(Math.floor(n/10));
// }

// console.log(sumOfDigit(1));


// H.w
// fibonacci number 
// 1 1 2 3 5 

// h.w
// print an array in the reverse order using recursion


// find the sum of the array using recursion
// let arr = [1,2,3,4,5];
// let n = arr.length;

// function arraySum(arr,i,n){
//     if(i==n)
//       return 0;
//     return arr[i]+arraySum(arr,i+1,n);
// }

// console.log(arraySum(arr,0,n));



// find maxiumm element in the array using recursion
// H.w
// let arr = [1,2,3,4,5];
// let n = arr.length;

// function arraySum(arr,i,n){
//     if(i==n)
//       return 0;
//     return max(arr[i]+arraySum(arr,i+1,n));
// }

// console.log(arraySum(arr,0,n));

//find the length of the string using recursion
// let str = "check";

// // approach 1
// function strLength(str,i){
//     if(str.length==i)
//       return 0;
//     return 1+strLength(str,i+1);
// }

// console.log(strLength(str,0));


// approach 2

// let str = "check";

// // approach 1
// function strLength(str,i){
//     if(str.length==i)
//       return i;
//     return strLength(str,i+1);
// }

// console.log(strLength(str,0));


// reverse a string using recursion
let str = "check";
let rev = "kcehc";

let n = str.length;
function reverse(i){
    if(i<0)
      return "";
    return str[i]+reverse(i-1);
}

console.log(reverse(n-1));





































