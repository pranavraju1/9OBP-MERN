// for(let i = 1 ;i<= 10 ; i++){
//     console.log(i);
//     if(i==5){
//         break;
//     }
// }
// //     1 2 3 4 5

// for(let i = 1 ;i<= 10 ; i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }
// //  1 2 3 4 6 7 8 9 

// // break -> exits the loop
// // continue -> goes to the next iteration (code written after continue will not execute in that condition)


// for(let i = 1; i<= 5; i++){
//     if(i == 3){
//         continue
//     }
//     if( i == 4 ){
//         break
//     }
//     console.log(i)
// }

// 1 2



// task1 -> find the number of digits in n 
// let n = 85921 -> 5

// let count = 0;
// let n = 85921;

// while(n>0){
//     count++;
//     n = Math.floor(n/10)
// }
// console.log(count)

// task2 -> reverse a number n
// let n = 85921 -> 12958

// let n = 85921;
// let reverse = 0;
// while( n>0 ){
//     let digit = n % 10;
//     reverse = reverse * 10 + digit
//     n = Math.floor(n/10); 
// }
// console.log(reverse)

// n = 85921
// rev = 0 * 10 + 1

// n = 8592
// rev = 1 * 10 + 2

// n = 859
// rev = 12 * 10 + 9






// task3 -> check if the nuber is palindrome
// 121 -> true
// 1331 -> true
// 13231 -> true
// 123 -> false

// let n = 123;
// let m = n;
// let reverse = 0;
// while( n>0 ){
//     let digit = n % 10;
//     reverse = reverse * 10 + digit
//     n = Math.floor(n/10); 
// }
// if(reverse == m){
//     console.log(true)
// }else{
//     console.log(false)
// }

// task 4 -> print divisors
// let n = 12 -> 1, 2, 3, 4, 6, 12

// let n = 12;
// for(let i = 1; i <= n ;i++){
//     if(n % i == 0){
//         console.log(i)
//     }
// }


// task 5 -> check if the number is prime
// let n = 7 -> true
// let n = 29 -> true
// let n = 24 -> false

// let n = 24;
// let isPrime = true;

// if(n == 1){
//     isPrime = false;
// }else{
//     for(let i=2 ; i < n; i++){
//         if(n % i == 0){
//             isPrime = false;
//             break;
//         }
//     }
// }
// console.log(isPrime);




// task 6 -> print * pattern according to the value of n
// let n = 5 -> *****
// let n = 2 -> **
// let n = 7 -> *******

let line = "";
let n = 7;
for(let i = 0; i < 7; i++){
    line = line + "*"
}
console.log(line)


// i=0
// line = "" + "*" -> "*"

// i=1
// line = "*" + "*" -> "**"

// i=2
// line = "**" + "*" -> "***"








// task 7 -> find the lowest digit in a number
// let n = 85927 -> 2
// let n = 859 -> 5