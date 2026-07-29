// check if an array is palindrome or not using recursion

// let arr = [1,2,2,1];
// function isPalindrome(i,j){
//     if(arr[i] != arr[j])
//       return false;
//     if(i>=j)
//       return true;
//     return isPalindrome(i+1,j-1);
// }

// console.log(isPalindrome(0,arr.length-1));


// 
// const organization = [
//   {
//     id: 1,
//     name: "John Smith",
//     role: "CEO",
//     children: [
//       {
//         id: 2,
//         name: "Sarah Johnson",
//         role: "CTO",
//         children: [
//           {
//             id: 3,
//             name: "Michael Brown",
//             role: "Engineering Director"
//           },
//           {
//             id: 21,
//             name: "Ava Carter",
//             role: "QA Director",
//             children: [
//               {
//                 id: 22,
//                 name: "Logan Evans",
//                 role: "QA Manager",
//                 children: [
//                   { id: 23, name: "Ella Foster", role: "QA Engineer", children: [] },
//                   { id: 24, name: "Mason Reed", role: "Automation Tester", children: [] },
//                   { id: 25, name: "Harper Cook", role: "Performance Tester", children: [] }
//                 ]
//               }
//             ]
//           }
//         ]
//       },
//     ]
//   }
// ];


// CEO-> 7
// CTO-> 6


// Tree Recursion

// find nth term of fibonnaci number using recursion

// 1 1 2 3 5 8

function fibo(n){
    if(n==1)
      return 1;
    if(n==2)
      return 1;
    return fibo(n-1)+fibo(n-2);
}

console.log(fibo(5));















 