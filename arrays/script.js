// let person1 = "abc";
// let person2 = "mlkm";
// let person3 = "kjnklj";

// array -> ordered collection of data 
// let arr = [1, 2, 3, 4, 5];
// let arr2 = ["1", "2", "3", "4", "5"];
// let arr3 = [1, "2", 3, "4", "5"];


// let a = 1;
// let b = 5;
// let c = 6;

// array of variables
// let arr4 = [a, b, c];

// let arr = [];   //empty array

// // creating using constructor func
// let arr1 = new Array(1, 2, 3);
// console.log(arr1)



// accessing data in an array
// let fruits = ['apple', 'orange', 'kiwi', 'banana'];
// console.log(fruits.length)  //how many elements are there in the array
// console.log(fruits[0])  //apple
// console.log(fruits[1])  //orange
// console.log(fruits[2])  //kiwi

// console.log(fruits[3])  //banana
// console.log(fruits[fruits.length - 1])  //banana


// console.log(fruits[10]) //undefined
// console.log(fruits[-1]) //undefined



// updation
// let fruits = ['apple', 'orange', 'kiwi', 'banana'];
// // fruits[1] = 'pinepple'; //[ 'apple', 'pinepple', 'kiwi', 'banana' ]

// // fruits[10] = 'pinepple'; //['apple', 'orange', 'kiwi', 'banana' , 6 x undefined, 'pinepple'];

// // adding element at the end
// fruits[fruits.length] = 'pinepple';

// console.log(fruits);




// function a(){console.log("a")} 
// function b(){console.log("b")} 
// function c(){console.log("c")} 

// let arr = [a , b ,c];
// arr[1]()
// // or
// // let func = arr[1];
// // func();





// let fruits = ['apple', 'orange', 'kiwi', 'banana'];
// // console.log(fruits[0])  //apple
// // console.log(fruits[1])  //orange
// // console.log(fruits[2])  //kiwi
// // console.log(fruits[3])  //banana
// for(let i = 0; i < fruits.length ; i++){
//     console.log(fruits[i])
// }



// let subjects = ['Math', 'Science', 'SST', 'Hindi', 'English']

// task1:
// 1. Math
// 2. Science
// 3. SST
// 4. Hindi
// 5. English

// for(let i=0; i< subjects.length; i++){
//     console.log(`${i + 1}. ${subjects[i]}`)
// }


// task2:
// 1. English
// 2. Hindi
// 3. SST
// 4. Science
// 5. Math

// for(let i=subjects.length-1 ; i>=0 ; i--){
//     console.log(`${subjects.length - i}. ${subjects[i]}`)
// }

// task3 -> replace all even values with "even"
// let arr = [1,2,3,4,5,6] -> [1, "even" , 3 , "even" , 5 , "even"];
let arr = [1 ,2 ,3 ,4 ,5 ,6]
for(let i=0; i<arr.length; i++){
    if(arr[i]%2 == 0){
        arr[i] = "even"
    }
}
// console.log(arr)


// const  arr = [1, 2, 3, 4, 5, 6];
// arr[0] = 0; //[0, 2, 3, 4, 5, 6]
// arr = [2,3,4,5,6];   //error
// console.log(arr);
