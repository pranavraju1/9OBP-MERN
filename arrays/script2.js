//task1 calculate the sum of the elements in the array
//task2 calculate tha average of the elements in the array
// let arr = [1, 2, 3, 4, 5];

// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log("sum", sum)
// console.log("avg", sum/arr.length)

// array methods

// push() -> adds the element at the end and also returns the length of the new array

// let fruits = ["apple", "banana"];

// fruits.push("kiwi")    //["apple", "banana", "kiwi"]
// console.log(fruits.push("oranage")) //4 -> length of the new array

// fruits.push("papaya", "water melon"); //we can also add multiple element
// console.log(fruits) //[ 'apple', 'banana', 'kiwi', 'oranage', 'papaya', 'water melon' ]

//task3 insert all the odd numbers from 1 to 30 inside the below array
// let arr = []

// for(let i=1; i<=30; i++){
//     if(i % 2 !== 0){
//         arr.push(i)
//     }
// }
// console.log(arr)


// pop() -> removes the element from the end and return the element that is removed
// let fruits = ["apple", "banana", "papaya"];
// fruits.pop();   //["apple", "banana"];
// console.log(fruits.pop())   //"banana"
// console.log(fruits) //["apple"];

// fruits.pop();   //[]
// console.log(fruits.pop());
// console.log(fruits) 


// let arr = [1, 2, 3, 4, 5];
// for(let i=0; i<arr.length; i++){
//     arr.pop();
// }
// console.log(arr);// [1, 2]

// i = 0
// arr = [1,2,3,4]

// i = 1
// arr = [1,2,3]

// i = 2
// arr = [1,2]
// arr.length = 2


// shift() -> removes the element from start and returns that element
// let fruits = ["apple", "banana", "papaya"];
// fruits.shift(); //[ 'banana', 'papaya' ]
// console.log(fruits.shift());    //banana


// Note: shift methods is morem expensive thatn pop method as the other elements
// will shift/move 1 index less


// unshift -> adds elements at the start of the array and returns the new length
// let fruits = ["apple", "banana", "papaya"];
// fruits.unshift("kiwi"); //["kiwi","apple", "banana", "papaya"]
// console.log(fruits.unshift("orange")) // 5
// fruits.unshift("water melon", "grapes") //['water melon','grapes','orange','kiwi','apple','banana','papaya']

// let arr = [1,2,3,4,5];
// let ele = arr.pop();
// arr.unshift(ele);
// console.log(arr)


// slice() -> arr.slice(<start index>, <end index> );
//<start index> is included
//<end index> is not included


// let fruits = ["apple", "banana", "papaya", "water melon"];
// // let result = fruits.slice(1)    //[ 'banana', 'papaya', 'water melon' ]
// // let result = fruits.slice(2)    //[ 'papaya', 'water melon' ]    
// let result = fruits.slice(1, 2)    //[ 'banana' ]




// console.log(result)
// console.log(fruits)     //does not effect the original array



// let arr = [10, 20, 30, 40, 50, 60, 70]
//          0   1   2   3   4   5   6
//         -7  -6  -5  -4  -3  -2  -1 

// let result = arr.slice(1, 6)    //[ 20, 30, 40, 50, 60 ]
// let result = arr.slice(4)   //[ 50, 60, 70 ]

// let result = arr.slice(2,3) //[30]
// let result = arr.slice(2,2) //[]
// let result = arr.slice(6)    //[70]


// let result = arr.slice(-3);

// console.log(result)



// splice()
// let arr = [10, 20, 30, 40, 50, 60, 70]
//          0   1   2   3   4   5   6

// arr.splice(<start index>, <delete count>, <item1, item2, item3>)

// removing elements using splice method
// arr.splice(1,2); //[ 10, 40, 50, 60, 70 ]
// arr.splice(3)   //[ 10, 20, 30 ] -> removes all the elements from the array

// console.log(arr.splice(1,2))    //[20, 30] returns the element that has been deleted

// arr.splice(7, 0, 80,90) //[10, 20, 30, 40, 50, 60, 70, 80, 90]


// console.log(arr)

// let num = [1, 2, 3, 4, 5];
// for(let i=0; i < num.length; i++){
//     if(num[i] % 2 == 0 ){
//         num.splice(i,1);
//     }
// }
// console.log(num);// [1 ,3, 5]

// i=0
// num = [1,2,3,4,5]

// i=1
// num = [1,3,4,5]
// num.length = 4

// i=2
// num = [1,3,5]
// num.length = 3



// replace "banana" with "mango" using splice method
let fruits = ["apple", "banana", "water melon"];

fruits.splice(1,1,"mango")  //[ 'apple', 'mango', 'water melon' ]
console.log(fruits)