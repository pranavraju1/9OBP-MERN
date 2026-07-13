// question 1 

// create an array of object person consisting of firstname and lastname age and sort
//  based on the age in ascending
// if two person have same age then sort acording to the firstname 
// in lexicographical order

// let persons = [
//     {
//         firstName: "Tarun",
//         lastName: "Pandey",
//         age: 15,
//     },
//     {
//         firstName: "Nilay",
//         lastName: "Patel",
//         age: 12,
//     },
//     {
//         firstName: "Yash",
//         lastName: "Kulkarani",
//         age: 11,
//     },
//     {
//         firstName: "Rutuj",
//         lastName: "Kulkarani",
//         age: 11,
//     }
// ]

// function comp(a,b){
//     if(a.age == b.age){
//        return a.firstName.localeCompare(b.firstName);
//     }else{
//        return a.age-b.age;
//     }
// };

// persons.sort(comp);

// console.log(persons);

//localeCompare-> 

// lexigraphically a < b return -1
// lexigraphically a>b return 1;
// strings are same return 0

// let a = "Check";
// let b = "Chuck";
// let ans = a.localeCompare(b);
// console.log(ans);  // -1


// let a = "banana";
// let b = "apple";
// let ans = a.localeCompare(b);
// console.log(ans);  // 1



// let a = "apple";
// let b = "apple";
// let ans = a.localeCompare(b);
// console.log(ans);  //0



// let arr = ["Brijesh","Mahesh","Ramesh","Gukesh"];
// // sort array in reverse lexicoraphical order

// function comp(a,b){
//     return b.localeCompare(a);
// }

// arr.sort(comp);
// console.log(arr);


// let persons = [
//     {
//         firstName: "Tarun",
//         lastName: "Pandey",
//         age: 15,
//     },
//     {
//         firstName: "Nilay",
//         lastName: "Patel",
//         age: 12,
//     },
//     {
//         firstName: "Yash",
//         lastName: "Kulkarani",
//         age: 11,
//     },
//     {
//         firstName: "Rutuj",
//         lastName: "Kulkarani",
//         age: 11,
//     },
//     {
//         firstName: "Rutuj",
//         lastName: "Ingale",
//         age: 11,
//     }
// ]


// create an array of object person consisting of firstname and lastname age and sort
//  based on the age in ascending
// if two person have same age then sort acording to the firstname 
// in lexicographical order if firstname is same then sort it based on lastName


// function comp(a,b){
//     if(a.age == b.age){
//         if(a.firstName.localeCompare(b.firstName)==0){
//             return a.lastName.localeCompare(b.lastName);
//         }
//         else{
//             return a.firstName.localeCompare(b.firstName);
//         }
//     }else{
//        return a.age-b.age;
//     }
// };

// persons.sort(comp);

// console.log(persons);


// print the second most frequent digit in a number.
// let a = 12344555;

// let obj = {};

// while(a>0){
//   let last_digit = a%10;
//    if(last_digit in obj){
//     obj[last_digit]+=1;
//    }else{
//     obj[last_digit]=1;
//    }
//   a=parseInt(a/10);
// }

// console.log(obj);

//H.w
// frequencey already find second most frequent


// conver the given object to an array of object 
let obj={ '1': 1, '2': 1, '3': 1,  '5': 3,'4': 2};

// res = [
//     {
//         '1':1
//     },
//     {
//         '2':1
//     },
//     {
//         '3':1
//     },
//     {
//         '4':2
//     },
//     {
//         '5':3
//     }
// ];


let res = [];
for(let key in obj){
    let temp= {[key]:obj[key]};
    res.push(temp);
}

console.log(res);

// question 6
// a virus infected a person at h=1.now after first hour every hour a 
// infected person infect k new person. Now after h hours how many person 
// will be infected.



// h=1 -> 1
// h=2 -> k new person infected = k+1 total
// h=3 -> k*(k+1) new person infected = k+1 + k*(k+1) total

// h=1 -> 1 =  2^0. = 4^0
// h=2 -> 3 new perosn = 4 total =  4^1 
// h=3 -> 12 new person  = 16 person total =  4^2
// h=4 -> 16*3+16 = 64 person =. 4^3

// let h =5 , k = 3;
// let total =1;
// for(let i =1;i<h;i++){
//     total = 3*total+total;
// }
// console.log(total);



// console.log((k+1)**(h-1));

// fizz buzz -> 
// first check group 1  three conditions if none of them is 
//  is true only then check condition from group 2.

// group 1
// condition 1 print fizz if no is divisble 3 
// condition 2 print buzz if no is divisble 5 
// condition 3 if no divisble by both 3 && 5 then print fizz buzz

//group 2
// condition 4 if no contains digit 3 then also print fizz
// condition 5 if no contains digit 5 then also print buzz
// condition 6 if no contains digit 3 and 5 both then print fizz buzz


