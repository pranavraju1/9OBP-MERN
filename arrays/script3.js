//slice(start?:number,end?:)->Return the subarray from start to end(excluding end)

// let arr = [1,2,3,4,5];
// console.log(arr.slice());
// [1,2,3,4,5]
// console.log(arr.slice(1,3))
// [2,3]
//get last 3 item
//  console.log(arr.slice(-3,0));  
//  console.log(arr.slice(3));
//  console.log(arr.slice(2,5));
//  console.log(arr.slice(-3));
//  console.log(arr.slice(2));

// splice(stat,deleteCount?,...items?)
//let arr = [1,2,3,4];
//delete second item from the array
//arr.splice(1,1);
//delete all the items after first two items
//arr.splice(2,2);

//delete third item and insert 99 in place of third item
//console.log(arr.splice(1,2,99,100));

//console.log(arr);
//[1,3,4]

// indexOf(searchItem,startFrom?:number) -> it search for first index where value is strictly equal to searchIItem.
//If not found return -1;
// let arr = [1,2,3,4,5];
// console.log(arr.indexOf(4));

// let arr = [1,2,3,3,6,4,3,5];
// console.log(arr.indexOf(3,4));

// let arr = [1,2,3,3,6,4,3,5];
// console.log(arr.indexOf(8));

//We want to get last item 
// let arr = [1,2,3,3,6,4,3,5];
//  console.log(arr.lastIndexOf(3));

// includes()-> it check if a element exist in the array then return true other false;

// let arr = [1,2,3,4,5];
// console.log(arr.includes(7));

// concat

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7];
// let arr3 = arr1.concat(arr2);
// // let arr3 = [8,9];
// let arr4 = arr1.concat(arr2,8,9);
// console.log(arr4);


// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,9,10];
// let arr3 = arr1.concat(arr2);
// let arr4 = arr1.concat(arr2,arr3);
// console.log(arr4);

// reverse
// let arr = [1,2,3,4,5]; // reverse the array
// arr.reverse();
// console.log(arr);

// 5 4 3 2 1
//let arr = [1,2,1] //check for the palindrome if it's palindrome then print true other false

// let arr = [1,2,1,3]
// let a = arr.reverse();
// console.log(a);
// if(arr === a ){
//     console.log(true)
// }else{
//     console.log(false)
// }


// array with const
// const a =2;
// a=3;
// console.log(a);

// const a = [1,2,3,4];
// // a.splice(1,1,3);
// a[1]=3;
// // a = [1,3,2];
// a.push(4);
// console.log(a);