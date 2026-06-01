// if(true){
//     console.log("true block")
// }else{
//     console.log("false block")
// }

// ternary operator -> its a shorter form of if-else that returns a value
// let result = false ? "true block" : "false block";
// console.log(result)    //false block

// let age = 20;
// let result2 = (age >= 18) ? "can vote " : "cannot vote";
// console.log(result2)    //can vote

// task1: check even or odd using ? operator
// let num = 3
// let result = (num % 2 === 0) ? "even" : "false"

// if(num % 2 === 0){
//     console.log("even")
// }

// let result = (num % 2 === 0) ? "even" : ""

// let age = 20

// if(age > 60){
//     console.log("old")
// }else if(age > 18){
//     console.log("adult")
// }else{
//     console.log("minor")
// }

// let result = (age > 60) ? "old" : (age > 18) ? "adult" : "minor"
// console.log(result)

// task solve using ternary operator
// ṃarks less than 30 is "Fail"
// ṃarks greater than 30 is "C"
// ṃarks greater than 60 is "B"
// ṃarks greater than 90 is "A"

// let marks = 50;
// if(marks > 90){
//     console.log("A")
// }else if(marks > 60){
//     console.log("B")
// }else if(marks > 30){
//     console.log("C")
// }else{
//     console.log("Fail")
// }

// let result = (marks > 90) ? "A" : (marks > 60) ? "B" : (marks > 30) ? "C" : "Fail";

// console.log(result)

// Switch

// let day = 1;

// if(day == 1){
//     console.log("Mon")
// }else if(day == 2){
//     console.log("Tue")
// }else if(day == 3){
//     console.log("Wed")
// }else if(day == 4){
//     console.log("Thur")
// }else if(day == 5){
//     console.log("Fri")
// }else if(day == 6){
//     console.log("Sat")
// }else if(day == 7){
//     console.log("Sun")
// }else{
// console.log("invalid")
// }

// let day = 5;

// switch (day) {
//     case 1:
//         console.log("Mon")
//         break;
//     case 2:
//         console.log("Tue")
//         break;
//     case 3:
//         console.log("Wed")
//         break;
//     case 4:
//         console.log("Thur")
//         break;
//     case 5:
//         console.log("Fri")
//         break;
//     case 6:
//         console.log("Sat")
//         break;
//     case 7:
//         console.log("Sun")
//         break;
//     default:
//          console.log("Invalid")
//         break;
// }

// task find the largest between 3 numbers using conditions
// let a = 10 ,b = 20, c = 30;

// if(a > b && a > c){
//     console.log("A")
// }else if(b > a && b > c){
//     console.log("B")
// }else if( c > a && c > b){
//     console.log("C")
// }else{
//     console.log("Tie")
// }

// // task2 for a given year check if its a leap year or not
// the year is divisible by 400 or
// the year is divisible by 4 but not by 100

// let year = 2000

// if(year % 400 == 0){
//     console.log("leap year")
// }else if(year % 4 == 0 && year % 100 !== 0){
//     console.log("leap year")
// }else{
//     console.log("not leap year")
// }

// check the type type of triangle, a, b and c are the sides of the triangle
// for it to be a valid triangle the values of a,b and c should be greater than 0
// and sum of any 2 sides should be greater than the third
// if all 3 sides are same then its "equilateral"
// if any 2 sides are same then its "isoceles"
// else its "scalene"

// let a = 1;
// let b = 2;
// let c = 3;

// if (a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b) {
//   if (a == b && b == c) {
//     console.log("equilateral");
//   } else if (a == b || b == c || c == a) {
//     console.log("isoceles");
//   } else {
//     console.log("scalene");
//   }
// } else {
//   console.log("not a triangle");
// }



// task: 1 print in ascending order 
// output -> 2 5 9
let a = 2, b = 5, c = 9;

let first, second, third;

if(a <= b &&  a<= c){
    first = a;
    if(b <= c){
        second = b
        third = c
    }else{
        second = c
        third = b
    }
}else if(b <= c && b <= a){
    first = b;
    if(a <= c){
        second = a;
        third = c;        
    }else{
        second = c;
        third = a;
    }
}else{
    first = c;
    if(a <= b){
        second = a;
        third = b;
    }else{
        second = b;
        third = a;
    }
}



console.log(first, second, third)