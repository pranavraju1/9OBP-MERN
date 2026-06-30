// sorting algorithms:-  
//inbuilt


// sorting method in javascript sort the items of the array lexicographically.
// let arr = ["apple","able","ball","boll","sun","son"];
// arr.sort();
// console.log(arr);

// let arr = [101,202,1000,10];
// arr.sort();
// console.log(arr); // 10 1000 101 202


// let arr = [200,300,202,2000]
// arr.sort();
// console.log(arr); //200 2000 202 300

// custom sort 
//  let arr = [200,300,202,2000];
//  // asceding order
// sort(comparatorFunction);


// sort function

// sort(comparatorFunction); -> by default lexicographical order
// comp function -> custom sorting 

// let arr = [1,4,3,2];
// arr.sort();

// console.log(arr); // 1 2 3 4

// let arr = [100,4,300,2000,3002];
// arr.sort();

// console.log(arr); // 100 2000 300 3002 4

// sort the number in ascending order
// let arr = [100,4,300,2000,3002];

// function comp(a,b){
//     return a-b;
// }

// arr.sort(comp);

// console.log(arr); // [4 100 300 2000 3002]
// comp(a,b)->
// negative->  a first then b
// positive-> b first then a
// zero -> as it is 

// sort it in descending order
// let arr = [100,4,300,2000,3002];
// function comp(a,b){
//     return b-a;
// }

// arr.sort(comp);

// console.log(arr); //[ 3002, 2000, 300, 100, 4 ]

// let arr = ["Artel","idea","jio","at&t"];
// // sort in ascending based on length of the string 
// // ["jio","at&t","idea","Airtel"];
// function comp(a,b){
//    return a.length-b.length;
// }

// arr.sort(comp);

// console.log(arr); // [ 'jio', 'idea', 'at&t', 'Artel' ]


// sort in descending  based on marks 
// let students = [
//    {name:"Prem",marks:20},
//    {name:"Akshay",marks:15},
//    {name:"Naman",marks:25},
//    {name:"Bhupnesh",marks:40},
// ];

// function comp(a,b){
//       return b.marks-a.marks;
// }

// students.sort(comp);

// console.log(students);


// sort  in ascending based on age of the students
// let students = [
//    {name:"Prem",age:20},
//    {name:"Akshay",age:15},
//    {name:"Naman",age:25},
//    {name:"Bhupnesh",age:40},
// ];

// function comp(a,b){
//     return a.age-b.age;
// }

// students.sort(comp);
// console.log(students);


// sort in descending order based on salary
// let employees = [
//    {
//     name:"Prem",
//     salary:{
//        amount:2000
//        }
//     },
//     {
//     name:"Suresh",
//     salary:{
//        amount:1000
//        }
//     },
//     {
//     name:"Ramesh",
//     salary:{
//        amount:3000
//        }
//     }
// ];

// function comp(a,b){
//     return b.salary.amount-a.salary.amount;
// }
// employees.sort(comp);
// console.log(employees);


// sort in ascending based on total salary
// let employees = [
//     {
//         name: "Prem",
//         salary: {
//             base: 2000,
//             ta: 1000,
//             da: 500,
//             extra: 100
//         }
//     },
//     {
//         name: "Suresh",
//         salary: {
//             base: 2000,
//             ta: 1000,
//             da: 500
//         }
//     },
//     {
//         name: "Ramesh",
//         salary: {
//             base: 2000,
//             da: 500,
//             extra: 100
//         }
//     }
// ];

// function sumValues(salary){
//     let sum =0;
//     for(let key in salary){
//        let value=salary[key];
//        sum+=value;
//     }
//     return sum;
// }
 

// function comp(a,b){
//    return sumValues(a.salary)-sumValues(b.salary);
// }

// employees.sort(comp);

// console.log(employees);


//h.w1
// yaad krne ka sideeffect

// sort the students array based on marks in asceding order if the two students 
// have equal marks print acording to their name in lexicographical order
 let students = [
   {name:"Prem",marks:20},
   {name:"Akshay",marks:15},
   {name:"Naman",marks:25},
   {name:"Bhupnesh",marks:40},
   {name:"Avnesh",marks:40}
];

// h.w2
let str = ["avinash","vikash","taras","manas"];

// sort it in reverse lexicographical order
