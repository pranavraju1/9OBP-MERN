// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)



// while -> while the condition is truthy the code inside the block keeps executing
// ex 
// if condition -> body executes
// if condition -> body executes
// if condition -> body executes
// if condition -> body executes





// i is to count the number of iterations
// let i = 1;
// let a = 0

// while ( i <= 100) {
//     console.log(i);
//     i++;
// }


// task print table of 7 like below
// 7 X 1 = 7 
// 7 X 2 = 14 
// 7 X 3 = 21
// .
// .
// .
// 7 X 10 = 70

// let i = 1;

// while(i <= 10){
//     console.log(`7 X ${i} = ${i * 7}`)
//     i++;
// }

// task print all even numbers from 1 to 30

// let i = 1;
// while(i<=30){
//     if(i%2 == 0){
//         console.log(i)
//     }
//     i++;
// }

// task to calculate the sum of first n natural numbers
// let n = 5;
// let i = 1;
// let sum = 0;
// while(i <= n){
//     sum = sum + i
//     i++;
// }
// console.log(sum)
// i=0
// sum = 1

// i = 1
// sum = 2

// i = 3
// sum = 5



// task to calculate the multiple of first n natural numbers
//  1 * 2 * 3 * 4 * 5 
// let n = 5;
// let i = 1;
// let mul = 1;
// while(i <= n){
//     mul = mul * i
//     i++;
// }
// console.log(mul)


// do {
//     console.log("hello")
// } while (false);

// do while loop -> this loop runs atleast one time bc here the body is executed
// first and then the codition is checked
// body executes -> if condition
// body executes -> if condition
// body executes -> if condition
// body executes -> if condition


// task: print first 5 powers of 2 using do while loop
// console.log( 2 ** 1)
// console.log( 2 ** 2)
// console.log( 2 ** 3)
// console.log( 2 ** 4)
// console.log( 2 ** 5)

// let i = 1
// do {
//     console.log( 2 ** i)
//     i++;
// } while ( i <= 5);

// let pow = 0
for(let i = 1 ; i <= 5 ; i++){
    //  console.log( 2 ** i)
    pow = 2 ** i;
}

// let i = 1;

// if conditon -> body executes -> i++
// if conditon -> body executes -> i++
// if conditon -> body executes -> i++
// if conditon -> body executes -> i++
// if conditon -> body executes -> i++


// let condition = true
// for(let i = 0; condition; i++){
//     console.log("hello world")
// }


// Note:
// when you want to run a peice of code n number of times -> for loop
// when you dont know how many times you want to run your code -> while loop
// when you want to run your code atleast 1 time -> do while loop



// task print all the numbers between 1 and 100 that 
// are divisible by 7 and 5

// for(let i = 1; i <= 100; i++){
//     if(i % 7 == 0 && i % 5 ==0){
//         console.log(i)
//     }
// }






// task: calculate the sum of all the digits of a number
// let n = 526 
// output = 13

// hint
// console.log(526 % 10) //6
// console.log(52 % 10) //2
// console.log(5 % 10) //5

let n = 526;
let sum = 0;
while(n > 0){
    let digit = n % 10;
    sum = sum + digit;
    // method 1
    n = Math.floor(n /10)

    // method 2
    // n = n - digit
    // n = n / 10
}
console.log(sum);