// indexOf-
// lastIndexOf 
// startsWith
// endsWIth

// slice(start,end)-> return the part of the string from start to end(excluded).
// let str = "paragraph";
// console.log(str.slice(0,4)); //para

// let str = "Paragraph";
// console.log(str.slice());

// let str1 = "paragraph";
// console.log(str1.slice(-3));


// toLowerCase() and toUpperCase()
// let str = "ABCD";
// console.log(str.toLowerCase());

// let str ="abcd";
// console.log(str.toUpperCase());

// task1- given a string in lowercase enlish letter convert 
// it's first alphabet to upper case

// let str = "tiger is running.";
// let str1 = str.slice(0,1);
// let str2 = str.slice(1);
// console.log(str1.toUpperCase()+str2); //Tiger is running.

// replace and replaceAll
//repalce(str1,str2) -> it replace the first occur of str1 with str2. and return a new string.

// let str = "Cricket is very time consuming game."
// console.log(str.replace('e','t'));  //Cricktt is very time consuming game.

// let str1 = "text";
// console.log(str1.replace('t','n')); //next

// let str2 = "Next class is 10OBP"; // replace Next with Next of Next
// console.log(str2.replace("Next","Next of Next")); //Next of Next class is 10OBP

// repalceAll(str1,str2) -> repalce all the occurance of str1 with str2.
// let str = "tiger is running"; // repalce all the i with t.
// console.log(str.replaceAll('i','t')); //ttger ts runntng

// split() -> it split the string in to array of substring based on provided arguement.
// let str = "tiger is running";
// console.log(str.split(""));

// let str1= "tigerick";
// console.log(str1.split('i'));


// let sentense = "testing is the process of validation and verifying"; // print random two words each time run the program
// testing isFinite
// validating and 

// join(seperator?) -> join the elements of the array
// let str = ['t','i','g','e','r'];
// let str1=str.join();
// console.log(typeof(str1)); // string
// console.log(str1) //t,i,g,e,r

// seperator
// let str = ['t','i','g','e','r'];
// console.log(str.join("")); //tiger

// task1
// count the no of words in the sentense
// let str = "tiger is running in the garden . Testing is done .";
// let words= str.split(" ");
// let count=0;
// for(let i=0;i<words.length;i++){
//     if(words[i]!='.')
//           count++;
// }
// console.log(count);

// split(seperator,limit?)
// let str = "tiger is running. and check is "
// console.log(str.split(" ",2));


// let str = "His name is akshay";
//o/p-> His-name-is-akshay
// let words=str.split(" ");
// console.log(words.join("-"));

// //replaceAll
// console.log(str.replaceAll(" ","-"));

// 
// let str ="Tiger is running"
// regit si gninnur
// o/p-> gninnur si regit

// let words=str.split(" ");
// words.reverse();

// let result=[];
// for(let i=0;i<words.length;i++){
//     result.push(words[i].split("").reverse().join(""));
// }

// console.log(result.join(" "));



// console.log(str.split("").reverse().join(""));


//  given a character check it is in lowercase or upper case
// let ch = "A";

// if(ch.toUpperCase()==ch){
//     console.log("Upper Case");
// }
// else {
//     console.log("Lower Case");
// }

//ASCII (Americal standard code for information interchange)
// computer stroe data in 1 and 0

// 'A'- > convert it to number
// standad that i can use to convert character in to numbers


// 0 -31  -> control
// 32. space
// "0"--"9" --  48 to 57
// A -- Z 65 to 90
// a -- z 97 to 122


// console.log("A".charCodeAt(0)); // 65
// console.log("Z".charCodeAt(0)); // 90
// console.log("ABC".charCodeAt(1)); //66

// given a character check it is in lower case or uppercase
// let ch = "a";
// let code= ch.charCodeAt(0)
// if(65<=code && code <=90){
//     console.log("Upper case");
// }
// else{
//     console.log("Lower Case");
// }

// console.log("a".charCodeAt()); //97
// console.log("z".charCodeAt()); /122

// console.log("0".charCodeAt());
// console.log("9".charCodeAt());

// find character from it's ascci code
// 65->'A'
// console.log(String.fromCharCode(122));


// task 1- given a lowercase character convert it to upper case using ascii value
// lowercase->upppercase
// (97-122)->(65->90)
// 97-65=32

// upper case = lower case -32
// lower case = upper case +32

// let ch = 'b';
// let code = ch.charCodeAt()-32;
// console.log(String.fromCharCode(code));

// desing toLowerCase() 
// TARUN -> tarun
// Tarun -> tarun
// Ta@run -> not a valid string 

// function toLowerCase(str){
//     let res = "";
//     for(let ch of str){
//        let code = ch.charCodeAt()+32;
//        res+=String.fromCharCode(code);
//     }
   
//     return res;

// }

// console.log(toLowerCase("Tarun"));


// trim
// remove the space from start and end

// let str  = " Hello ";
// // console.log(str.trim());

// console.log("["+str+"]") //[ Hello ]
// console.log("["+str.trim()+"]");

// // trimStart
// console.log("["+str.trimStart()+"]"); // [Hello ]

// // trimEnd
// console.log("["+str.trimEnd()+"]") // [ Hello]

// padStart padEnd

//padStart

// let str = "1"; 
// console.log(str.padStart(4,'0'));
// console.log(str.padStart(5,"00"));


// console.log(str.padStart(4,"00"));

// let str1 = "1111";
// console.log(str1.padStart(2,"0"));


// let str = "abcd";
// console.log(str.substring(1,3)); //bc
// console.log(str.substring(1));
// console.log(str.substring());


// given a string(more than 4 character) print all the substring length 2;
// let str = "Tarun";
// //Ta ar ru un

// for(let i=0;i<str.length-1;i++){
//     console.log(str.substring(i,i+2));
// }

// given a string str.  calacualte total no of substring of str
//  str -> n -> n*(n+1)/2

function totalSubString(str){
    let n = str.length;
    return n*(n+1)/2; 
}

console.log(totalSubString("Tar"));