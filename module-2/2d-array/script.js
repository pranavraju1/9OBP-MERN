// 2d matrix 

// 2d arrays


// array of object
// object inside array 
// let obj = [1,2,3,4,{address:"pune"}];

// console.log(obj[1]); // 2

// console.log(obj[4].address); //pune

// 2d arrays
// array inside array

// let arr = [[1,2,3,4],
//            [4,5,6],
//            [8,9,10,11]
//         ];

// console.log(arr[1][2]);

// console.log(arr[2][1]);

// //task 1-> find no of rows

// console.log(arr.length);

// // task 2:- print 1st row in form array
// console.log(arr[0]);

// // second row
// console.log(arr[1]);

// //third row 
// console.log(arr[2]);


// // task 2-> find no of items in the first , second and third row
// console.log(arr[0].length);


// console.log(arr[1].length);

// console.log(arr[2].length);

// let arr = [[1,2,3,4],
//            [4,5,6],
//            [8,9,10,11]
//         ];

// task 3 -> update 

// arr[row][col]

// arr[1][2] = 9;
// arr[2][2] = 12;

// console.log(arr);

// let arr = [[1,2,3,4],
//            [4,5,6,8],
//            [8,9,10,11]
//         ];

// //print all the items of the matrix 



// let arr = [[1, 2, 3, 4],
// [4, 5, 6],
// [8, 9, 10, 11]
// ];


// let n = arr.length;
// for (let row = 0; row < n; row++) {
//     for (let col = 0; col < arr[row].length; col++) {
//         console.log(arr[row][col]);
//     }
// }


// let arr = [
//     [1, 2, 3, 4],
//     [4, 5, 6, 8],
//     [8, 9, 10, 11],
//     [8, 9, 15, 12]
// ];

// task 1- find the diagnol items of matrix -> 1 5 10 12

// for(let row=0;row<arr.length;row++){
//     for(let col =0;col<arr[0].length;col++){
//           if(row== col){
//             console.log(arr[row][col]);
//           }
//     }
// }


// for(let row=0;row<arr.length;row++){
//      console.log(arr[row][row]);
// }

// task 2 -> find the diagnol item of the matrix 
// from the bottom to top. -> 12 10 5 1

// let arr = [
//     [1, 2, 3, 4],
//     [4, 5, 6, 8],
//     [8, 9, 10, 11],
//     [8, 9, 15, 12]
// ];

// for(let row=arr.length-1;row>=0;row--){
//    console.log(arr[row][row]);
// }
// 3rd task -> print the items of right diagonal or secondary diagonal
// 4 6 9 8

// let n =arr[0].length;
// for(let row =0;row<arr.length;row++){
//     for(let col=0;col<arr[0].length;col++){
//           if(row+col == n-1){
//                console.log(arr[row][col]);
//           }
//     }
// }


// let arr = [
//     [1, 2, 3, 4],
//     [4, 5, 6, 8],
//     [8, 9, 10, 11],
//     [8, 9, 15, 12]
// ];

// task 1-> print sum row wise 
// 10
// 23
// 38

// for(let row =0;row<arr.length;row++){
//     let sum =0;
//     for(let col =0;col<arr[row].length;col++){
//           sum+=arr[row][col];
//     }
//     console.log(sum);
// }

// h.w
//task 2-> print the matrix column 

// task 2-> print sum column wise
21

// task 3-> search an item in the matrix 


// 1st way
// let arr = [ [1,2,3,4],
//             [5,6,7,8],
//             [9,10,11,12],
//            [13,14,15,16]
//         ];

// 2nd way
// let arr = [];

// let mat = [[1,2,3,4],[4,5,6,7],[8,9,10,11]];

// arr.push([1,2,3,4]);
// arr.push([4,5,6,7]);
// arr.push([8,9,10,11]);

// console.log(arr);


//sum of column wise

// let mat = [[1, 2, 3, 4],
// [4, 5, 6, 7],
// [8, 9, 10, 11],
// [12, 13, 14, 15]
// ];

// // 1 4 8 12-> 25
// // 2 5 9 13-> 29
// // 3 6 10 14 -> 33
// // 4 7 11 15-> 37


// for (let row = 0; row < mat.length; row++) {
//     let sum = 0;
//     for (let col = 0; col < mat[row].length; col++) {
//         sum += mat[col][row]; // column wise sum
//         console.log(mat[col][row]); // column wise traversal

//     }
//     console.log(sum);
// }


// // print  column wise 
// let mat = [
// [1, 2, 3, 4],
// [4, 5, 6, 7],
// [8, 9, 10, 11]
// ];

// for (let row = 0; row < mat[0].length; row++) {
//     let sum = 0;
//     for (let col = 0; col < mat.length; col++) {
//         sum += mat[col][row]; // column wise sum
//         console.log(mat[col][row]); // column wise traversal

//     }
//     console.log(sum);
// }


//matrix -> zig zag traversal
// let mat = [
// [1, 2, 3, 4],
// [4, 5, 6, 7],
// [8, 9, 10, 11]
// ];


// for (let row = 0; row < mat.length; row++) {
//     let sum = 0;
//     if(row%2==0){
//          for (let col = 0; col < mat[row].length; col++) {
//             console.log(mat[row][col]); 

//         }
//     }
//     else{
//         for (let col = mat[row].length-1; col >=0; col--) {
//             console.log(mat[row][col]); 

//         }
//     }

// }

// find maximum element in the matrix
// let mat = [
// [1, 2, 3, 4],
// [4, 5, 6, 7],
// [8, 9, 10, 11]
// ];

// let max = -Infinity;

// for(let row=0;row<mat.length;row++){
//     for(let col =0;col<mat[0].length;col++){
//         if(mat[row][col]>max){
//             max=mat[row][col];
//         }
//     }
// }

// console.log(max);


// find the target in the mat and print the row and column of it
// let mat = [
// [1, 2, 3, 4],
// [4, 5, 6, 7],
// [8, 9, 10, 11]
// ];



// let target = 5;
// for(let row=0;row<mat.length;row++){
//     for(let col =0;col<mat[0].length;col++){
//         if(mat[row][col]==target){
//             console.log(row,col);
//         }
//     }
// }


// spiral order traversal
// let mat = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 17, 18, 19, 22]
// ]

// let mat = [
//     [1, 2, 3, 11],
//     [4, 5, 6, 12],
//     [7, 8, 9, 13]
// ]

// let top = 0, left = 0, right = mat[0].length - 1, bottom = mat.length - 1;
// let ans = [];
// while (left <= right && top <= bottom) {
//     // left to right(top row)
//     for (let i = left; i <= right; i++) {
//         ans.push(mat[top][i]);
//     }
//     top++;
//     // top to bottom 
//     for (let i = top; i <= bottom; i++) {
//         ans.push(mat[i][right]);
//     }
//     right--;
//     // right to left
//     for (let i = right; i >= left && top <= bottom; i--) {
//         ans.push(mat[bottom][i]);
//     }
//     bottom--;
//     // bottom to top
//     for (let i = bottom; i >= top && left <= right; i--) {
//         ans.push(mat[i][left]);
//     }
//     left++;
// }

// console.log(ans);

// H.w 

// q1

// transpose of a matrix

// Given a square matrix.find it's transpose
// let mat = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// transpose matrix
// [


// ]

// q2: rotate matrix by 90 degree clockwise and anticlockwise 



// substring and subarray

// str = "abcdef";

// substring/subarray -> continous part (cannot skip)
// -> order Perserve 


let arr = [1,4,5,6,7];
// find subarrays of length 2 

let k=2;
for(let i=0;i<arr.length-k+1;i++){
    let subArray=[];
    for(let j=i;j<i+k;j++){
        subArray.push(arr[j]);
    }
    console.log(subArray);
}

// [ 1, 4 ]
// [ 4, 5 ]
// [ 5, 6 ]
// [ 6, 7 ]


//let say using inbuild function is allowed(slice)


//h.w
// given a string find the substring of a given length k=2


//h.w
//given an array print all it's subarray


// count all the substring of a given string 