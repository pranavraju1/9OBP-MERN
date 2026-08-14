// Merge Sort 

// given two sorted array merge it 
// merged array should be in sorted order 

// let arr1 = [1,2,7,9];
// let arr2 = [5,6];
// // let res = [1,2,5,6,7,9]

// let i=0,j=0;
// let res = [];

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//        res.push(arr1[i]);
//        i++;
//     }
//     else{
//         res.push(arr2[j]);
//         j++;
//     }
// }

// while(i<arr1.length){
//     res.push(arr1[i]);
//     i++;
// }

// while(j<arr2.length){
//     res.push(arr2[j]);
//     j++;
// }

// console.log(res);
// let arr = [5,4,7,8,0];

// function merge(l,mid,r){
//     //  l->mid 
//     //  mid+1,r+1
//     let arr1=  arr.slice(l,mid+1);
//     let arr2= arr.slice(mid+1,r+1);
//     let res = [];
//     let i=0,j=0;

//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i]<arr2[j]){
//             res.push(arr1[i]);
//             i++;
//         }
//         else{
//             res.push(arr2[j]);
//             j++;
//         }
//     }

//     while(i<arr1.length){
//         res.push(arr1[i]);
//         i++;
//     }

//     while(j<arr2.length){
//         res.push(arr2[j]);
//         j++;
//     }
    
//     for(let k=0;k<res.length;k++){
//         arr[l+k]=res[k];
//     }
// }

// function mergeSort(arr,l,r){
//     if(l>=r)
//       return;
//     let mid=Math.floor((l+r)/2);
//     mergeSort(arr,l,mid);
//     mergeSort(arr,mid+1,r);
//     console.log(l,mid,r);
//     merge(l,mid,r);
// }


// mergeSort(arr,0,arr.length-1);


// console.log(arr);


// subarrays 
// let arr = [4,5,7,8,9,2];
// //find all the subarrays of arr.


// for(let i=0;i<arr.length;i++){
//     let subArray=[];
//     for(let j=i;j<arr.length;j++){
//        subArray.push(arr[j]);
//        console.log(subArray);
//     }
// }

// T.C ->  o(n^2)
// S.C-> o(n)

// Map and Set 
// Map -> Key and value pair 
 // set ->  o(1)
 // get  -> o(1)
 // has  -> o(1)

// Set -> key 
 // add ->  o(1)
 // get  -> o(1)
 // has  -> o(1)



// store 1 to n in a set and then print it.
// n=5;
// let set = new Set()
// for(let i = 0 ; i < n ; i++){
//     set.add(i)
// }

// for(let elem of set){
//     console.log(elem);
// }

// T.c -> o(n)
// S.c -> o(n)


// q2

let nums = [2,7,11,15]
let target = 9;


function findSum(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(arr[j]==target-arr[i]){
                 console.log(true);
                 return;
            }
        }
    }
    console.log(false);
    return;
}

findSum(nums,target);

// T.c -> o(n^2)
// s.c -> o(1)



// Hashmap 




