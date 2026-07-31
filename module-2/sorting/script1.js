// selection sort 

// let arr = [1,2,3,4,7,3];

// for(let i=0;i<arr.length;i++){
//     let minIndex = i;
//     for(let j=i+1;j<arr.length;j++){
//        if(arr[j]<arr[minIndex])
//          minIndex=j;
//     }
//     // swap the item 
//     let t = arr[minIndex];
//     arr[minIndex]=arr[i];
//     arr[i] =t;
// }

// console.log(arr);

// stable - 
// t.c- best case -> o(n^2), Average case-> o(n^2) , worst case-> o(n^2)
// s.c- o(1)
// inplace -> true


// bubble sort ->


// let arr = [6,7,8,9];

// for(let i=0;i<arr.length;i++){
//     isSwapped = false;
//     for(let j=0;j<arr.length-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//             isSwapped= true;
//         }
//    }
//    if(isSwapped== false)
//       break;
// }


// console.log(arr);

//  stable -> 
//  T.c -> BC(o(n)) -> when array is already sorted 
//  A.C_> o(n^2)
//   W.C-> o(n^2)
// Space Complexity -> o(1)



// Insertion Sort 


let arr = [10,9,8,7,6];

for(let i=1;i<arr.length;i++){
  let key = arr[i];
  let j =i-1;
  while(j>=0 && arr[j]>key){
    arr[j+1]=arr[j];
    j--;
  }
  arr[j+1] = key;
}

console.log(arr);


stable :- 
T.C -> 
B.C ->(o(n))
A.c-> o(n^2)
W.C -> o(n^2)

S.C-> o(1)






























