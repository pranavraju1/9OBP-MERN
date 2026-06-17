// string -> sequence of characters used to represent text.
// wrapped in "",'',``

// let str = 'Tarun';
// console.log(typeof(str)); // string

// let str = "Tarun";
// console.log(typeof(str)); //string

// let str = `Tarun`;
// console.log(typeof(str)); // string

// accesing a character in the string

// let str = "tarun";
// console.log(str[1]); //a
// console.log(str.charAt(1)) //a

// task 1- create a string and store you name in the string and then print it


//task 2- create two string firstName and lastName and store the first and lastname and then print it
// let firstName="Tarun";
// let secondName="Pandey";
// console.log(firstName,secondName);

// i have to multiline string
// let str  = `
//     This paragraph
//     is about React;
// ;`
// console.log(str);

//task 3- "Tarun" 

// let name = '"Tarun"';
// console.log(name); //"Tarun"

// task4 - 'Tarun'
// let name ="'Tarun'";
// console.log(name)

// escaping character
// \ backslash
// let name = "\"tarun\"";
// console.log(name);


// task 5 - "Tarun"`
// let name = "\"Tarun\"\`"
// console.log(name);

//length property
// let str = "tarun";
// console.log(str.length);

// string traversal (for loop,, for of)
// let str = "tarun";
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }

// complex task1-  
 let str = "my name is tarun";
//result = "mynameistarun"
let result="";
for(let i=0;i<str.length;i++){
    if(str[i]!==" ")
     result=result+str[i];
}
console.log(result);





// string concatenation
// let str1 = "Tarun";
// let str2 = "Pandey";
// console.log(str1+str2); //TarunPandey

// string con
// let str1 = "Tarun";
// let str2 = "Pandey";
// console.log(str1+str2+"check");


