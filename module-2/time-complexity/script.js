// // transpose



// // subarrays/ substring

// //

// // let arr = [1,2,3,4,5];

// // find all the subarrays of length k
// // let k=2;
// // for(let i=0;i<arr.length-k+1;i++){
// //     let res = [];
// //     for(let j=i;j<i+k;j++){
// //         res.push(arr[j])
// //     }
// //     console.log(res);
// // }

// //find  all the subarrays of the arr
// // let arr = [1,2,3,4];
// // let k=2;
// // for(let i=0;i<arr.length;i++){
// //     let res = [];
// //     for(let j=i;j<arr.length;j++){
// //         res.push(arr[j])
// //         console.log(res);
// //     }
// // }


// // for(let i=0;i<n;i++){
// //     for(let j=i;j<i;j+=i){

// //     }
// // }

// // time complexity
// How run time of an alogrithm changes when input size grows.


// // q1:-
// for(let i=0;i<5;i++){
//     console.log("Hello world");
// }

// // no of iterations - 5 (constant)
// // o(1)

// // q2:-
// for(let i=0;i<n;i++){
//     console.log("Hello world");
// }
// // no of iteration = n times
// T.C-> o(n)


// // q3:-

// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         console.log("Hello world");
//     }
// }

// // T.c -> o(n^2)

// // q4:-

// for(let i=0;i*i<=n;i++){
//   console.log("Hello world");
// }

// // no of iteration= o(sqrt(n))
// // T.c = o(sqrt(n))


// // q 5

// while(n!=1){
//     n=n/10;
// }

// // t.c-> o(log10(n))

// // q 6 

// while(n!=1){
//     n=n/2;
// }
// // t.c-> log2(n)

// // q7

// for(let i =0;i<n;i++){
//     for(let j=0;j<10000;j++){
//        console.log("Hello world");
//     }
// }

// // no of iteration -> O(10000*n)
// // t.c -> o(n)

// // q9

// for(let i =0;i<n;i++){
//     for(let j=0;j<i;j++){
//        console.log("Hello world");
//     }
// }

// // o(n^2)


// // q 10
// for(let i =0;i<n;i++){
//     for(let j=0;j<n;j++){
//         for(let k=0;k<n;k++){
//           console.log("Hello world");
//         }
//     }
// }

// //T.c-> o(n^3)


// // Best average worst case time complexity

// let arr = [1,2,3,4,5];
// let target;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==target){
//         console.log("element found");
//     }
// }

// Best case T.c-> o(1)
// Average case t.c-> o(n)
// Worst case t.c -> o(n)



// o(1) ->  Constant 
// o(n) -> linear 
// o(n^2) -> quardatic

