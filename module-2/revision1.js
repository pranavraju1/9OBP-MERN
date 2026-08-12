
// let students = [
//     {name:"Abhshek",grade:"A"},
//     {name:"Abhinav",grade:"A"},
//     {name:"Mahesh",grade:"C"},
//     {name:"Suresh",grade:"B"}, 
//     {name:"Narsh",grade:"C"}
// ]

// // approach 1

// let accum = {};
// for(let curr of students){
//     if(curr.grade in accum){
//        accum[curr.grade].push(curr.name);
//     }else{
//         accum[curr.grade] =[curr.name];
//     } 
// }
 
// console.log(accum);

// // approach 2
// function groupBy(accum,curr){
//     if(curr.grade in accum){
//        accum[curr.grade].push(curr.name);
//     }else{
//         accum[curr.grade] =[curr.name];
//     }
//     return accum;
// }

// let res = students.reduce(groupBy,{});
// console.log(res);


// 
// let libraries = [
//     {
//         name: "accio1",
//         location: "Pune",
//         books: [
//             {
//                 subject: "physics",
//                 author: "H.C verma",
//                 price: 500
//             },
//             {
//                 subject: "math",
//                 author: "R.D Sharma",
//                 price: 200
//             },
//             {
//                 subject: "math2",
//                 author: "R.D Sharma",
//                 price:200
//             }
//         ]
//     },
//     {
//         name: "accio2",
//         location: "Delhi",
//         books: [
//             {
//                 subject: "Geography",
//                 author: "M.k bharti",
//                 price: 600,
//             },
//             {
//                 subject: "math",
//                 author: "R.D Sharma",
//                 price: 500
//             }
//         ]
//     },
//      {
//         name: "accio3",
//         location: "Delhi",
//         books: [
//             {
//                 subject: "Geography",
//                 author: "M.k bharti",
//                 price: 600,
//             },
//             {
//                 subject: "math",
//                 author: "R.D Sharma",
//                 price: 600
//             }
//         ]
//     }
// ]


// return name of all the library 
// in which 
// total 
// price of the books is greater 1000

//  transform the data in following format
// ["accio2"]

// function findTotalPrice(accum,curr){
//    return accum+curr.price
// }

// function filterByTotalPrice(library){
//     let totalPrice=library.books.reduce(findTotalPrice,0)
//     return totalPrice>1000;
// }

// function transform(library){
//     return library.name;
// }

// let res = libraries
// .filter(filterByTotalPrice)
// .map(transform);

// console.log(res);


// start pattern 

// odd series ->
// 1. 2*i-1
// i=0   -> -1
// i=1   -> 1
// i=2   -> 3

// 2. 2*i+1
// i=0 -> 1
// i=1 -> 3
// i=2 -> 5
// i=3 -> 7

 // even series 
//  2*i.     
// i=0 -> 0
// i=1 -> 2
// i=2 -> 4
// i=3 -> 6

//  2*i+2
// i=0 -> 2
// i=1 -> 4
// i=2 -> 6


// let n =7;
// for(let row =0;row<n;row++){
//     let str ="";
//     //space
//     for(let col=0;col<n-row-1;col++){
//        str+=" ";
//     } 
//     //star
//     for(let col=0;col<2*row+1;col++){
//         str+="*";
//     }
//     console.log(str);
// }


// Matrix

// Q1:-
// 2D array
// let matrix = [
//    [1,2,3,4],
//    [3,4,5,6],
//    [7,8,9,10],
//    [7,8,9,10]
// ]

// let n = matrix.length;
// let m = matrix[0].length;
// // find the sum of boundry items 

// let sum =0;
// for(let row=0;row<n;row++){
//     for(let col=0;col<m;col++){
//         if(row==0||row==n-1||col==0||col==m-1)
//         sum+=matrix[row][col];
//     }
// }
// console.log(sum);


//


// Q2:-
// Matrix Transpose 

// given a matrix with n rows and m cols 
// find transpose of it 

let mat = [
   [1,2,3,5],
   [8,9,10,11],
   [12,15,10,1]
];


let transpose =[];

// column wise matrix 

for(let col =0;col<mat[0].length;col++){
    let temp = [];
    for(let row=0;row<mat.length;row++){
       temp.push(mat[row][col]);
    }
    transpose.push(temp);
}

console.log(transpose);











