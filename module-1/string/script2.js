// // string- template literal and interpolation
// ;
// let reactVersion = 16;

// console.log(`We are learning react${reactVersion} with node`);


// let nodeVersion = 22;

// console.log(`we are learning react ${reactVersion} with node ${nodeVersion}`);

// // 

// console.log(`my name is tarun and my score in mathematics is 10 and economics is 20 so total is ${10 + 20}`);


// question 1 
// count no of vowel in a string

// let str = "Testing is the process";

// let count = 0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//         count++;
//     }
// }

// console.log(count);


// for of 

// let str = "tarun";

// for (let ch of str) {
//     console.log(ch);
// }


//indexOf - return the index of first character 
// let str = "testing";
// console.log(str.indexOf('t')); //0


// 
// let str = "testingt";
// console.log(str.indexOf('t', 4));

// includes - check if the string is present return true otherwise false
// let str = "check";
// console.log(str.includes('e')); // true

// let str1 = "morning is the refreshing.";
// console.log(str1.inlcudes("the")). // true

// let str1 = "morning is the refreshing.";
// console.log(str1.includes("the "))


//StartsWith -> check if a string start with string then return true otherwise false 
// take two argument startWith(searchValue,position)
// let str1 = "practice is the key to success";
// console.log(str1.startsWith("practice"));

//question 2
// given a string check if the 2nd character is  e then print true otherwise false;

// let str = "chheck";
// console.log(str[1] == 'e');

// if (str[1] === 'e')
//     console.log(true);
// else
//     console.log(false);

// console.log(str.startsWith('e', 1));

// let str = "etnois"; //check if third character is o using startsWith function


// endsWith(searchString,position)- check if the string ends with searched string 
// let str = "file.xl";
// console.log(str.endsWith(".xl"))

// string immutability -> can'not update the string.
// let str = "check";
// // console.log(s[1]);
// str[1] = 'd';
// console.log(str);

// let str1 = "check";
// str1 = "cdeck";
// console.log(str1);

// given a string print the reverse the string
// let str = "reverse";

// let rev = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     rev = rev + str[i];
// }

// console.log(rev);