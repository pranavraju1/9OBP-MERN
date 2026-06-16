// shallow copy and deep copy

//shallow copy
// let arr = [1,2,3,4];
// let subarray=arr.slice();
// subarray.push(5);
// console.log(arr);

// 1 2 3 4 

//shallow copy : - it copy all the item of first level and it share the reference nested object or array
// nested array
//let arr = [1,2,3,[4,5],[2,3,4]];
//console.log(arr[3][1]); //5
// console.log(arr[4][2]); //4

//let copy=arr.slice();
//copy[3].push(6);
//console.log(arr);


//let arr = [1,2,[2,3,4],[5,6]];
//let copy = arr.slice();
//copy[2].push(6);
//console.log(arr);
// [1,2,[2,3,4,6],[5,6]]

//Deep Copy-  copy item from all the nested level
// let arr = [1,2,[2,3,4],[5,6]];
// let copy = structuredClone(arr);
// copy[2].push(6);
// console.log(arr);

//shallow copy - copy  all the items of first level and share the refernce nested array or object.

// let arr = [1,2,[1,2,3]];
// let copy = arr.slice();
// copy.push(4);
// copy[2].push(4);
// console.log(arr);

// Deepy Copy- all the items of all level are copied.No shared reference

// let arr = [1,2,3,4,[3,4,5]];
// let copy = structuredClone(arr);
// copy.push(8);
// copy[4].push(9);
// console.log(arr);


// palindrome
// let arr = [1,2,1];


// spread and rest 
//...

// spread: -  expands iterator in to individual items
// let arr = [1,2,3,4];
// console.log(...arr);
// 1 2 3 4

//merge two array
// let arr1 = [1,2];
// let arr2 = [3,4];
// console.log([...arr1,...arr2]);

// as function argument

// function sum(a,b,c){
//     return a+b+c;
// }

// let arr = [1,2,3];

// console.log(sum(...arr));

// copy array
// let arr = [1,2,3];
// let copy=[...arr];
// console.log(copy);

// let arr = [1,2,3,[4,5]];
// let copy=[...arr]; //shallow copy
// copy[3].push(6);
// console.log(arr);



// Array Destructuring
// let arr=[1,2];
// let a = arr[0];
// let b = arr[1];
// let [a,b]=[1,2];
// console.log(a,b);

// let arr = [1,2,3,4];
// let [,a,b,] = [1,2,3,4];
// console.log(a,b);

// Rest - it pack/collet mutiples value in an array
// let arr = [1,2,3,4,5];
// let [a,b,...pack]=[1,2,3,4,5];
// console.log(a,b,pack);

// function parameter
function sum(...numbers){
  let sum=0;
  for(let i=0;i<numbers.length;i++){
    sum=sum+numbers[i];
  }
  return sum;
}
console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5));


