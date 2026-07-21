
// while(n>0){
//     n=n/10;
//     n--;
// }

// t.c -> log10(n)

// space complexity-> 


// space complexity

// amount of space algorithm takes as input grows.
// q1:-
// function reverse(arr){
//     let rev=[];

//     for(let i=arr.length-1;i>=0;i--){
//         rev.push(arr[i]);
//     }

// }

// -> o(n)

// q2:-
// let q=2;
// let b =3;
// let c =5;
// o(1)

// there  is ecommerce company which asked two engineer's to design a 
//searching algorithm
// that search for a particular product in their inventory 
// company have inventory of 10^16 products.
// both the engineer's come up with alogrithm first engineer algorithm
// take o(n) to search and other's algorithm takes o(log2(n)) to search
//if computer excute 10^8 operations/sec so how much time both alogrithm will takes
// 

// let arr = [1,2,3,4,5];
// for(let i=0;i<n;i++){
//     if(arr[i]==target){
//         console.log(i);
//         break;
//     }
// }

// Linear Search and T.c-> o(n)


//Binary Search -> o(log2(n))

// array should be sorted

// let arr = [1,2,3,4,5];
// let target = 6;

// let l=0,r=arr.length-1;
// function binarySearch(){
//     while(l<=r){
//         let mid = (l+r)/2;
//         mid=Math.floor(mid);
//         if(arr[mid]==target){
//           return mid;
//         }
//         else if( arr[mid]>target){
//             r=mid-1;
//         }
//         else{
//             l=mid+1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch())


// while(n!=0){
//     n=n/2;
// }

//q1
// given two target t1 and t2 find it's index.

// let arr= [1,2,3,4,5,6,7];
// t1 = 3;
// t2 = 6

// function binarySearch(target){
//     let l =0,r=arr.length-1;
//     while(l<=r){
//         let mid = (l+r)/2;
//         mid=Math.floor(mid);
//         if(arr[mid]==target){
//           return mid;
//         }
//         else if( arr[mid]>target){
//             r=mid-1;
//         }
//         else{
//             l=mid+1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch(t1));
// console.log(binarySearch(t2));


//q2
// first and last position an item 

let arr= [3,3,3,3,3,4,5];
target = 3;


function binarySearchFirst(target){
    let l =0,r=arr.length-1;
    let ans =-1;
    while(l<=r){
        let mid = (l+r)/2;
        mid=Math.floor(mid);
        if(arr[mid]==target){
          ans=mid;
          r=mid-1;
        }
        else if( arr[mid]>target){
            r=mid-1;
        }
        else{
            l=mid+1;
        }
    }
    return ans;
}

console.log(binarySearchFirst(3));










