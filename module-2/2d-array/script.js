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


let arr = [
    [1, 2, 3, 4],
    [4, 5, 6, 8],
    [8, 9, 10, 11],
    [8, 9, 15, 12]
];

// task 1-> print sum row wise 
// 10
// 23
// 38

for(let row =0;row<arr.length;row++){
    let sum =0;
    for(let col =0;col<arr[row].length;col++){
          sum+=arr[row][col];
    }
    console.log(sum);
}


//task 2-> print the matrix column 

// task 2-> print sum column wise
21

// task 3-> search an item in the matrix 