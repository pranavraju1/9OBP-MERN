
//  Task 1
// let n= 5;
// *****

// approach 1
// for(let i =0;i<n;i++){
//     process.stdout.write("*");  ////*****
// }

//approach 2

// let str = "";
//*****


// Task 2
// *****
// *****
// *****

//nested loop
// let n = 5;
// for (let i = 0; i < 3; i++) {
//     let str = "";
//     for (let i = 0; i < n; i++) {
//         str += "*";
//     }
//     console.log(str);
// }


// Task 3-
// print # n*m times in rectange form
// Teastcase 1:-
// n=3 
// m =5

// #####
// #####
// #####
// let n=3,m=5;
// for(let row=0;row<n;row++){
//     let str = "";
//     for(let col=0;col<m;col++){
//         str+="#";
//     }
//     console.log(str);
// }

// Dry Run:- 
//      01234
//   0  #####
//   1  #####
//   2  #####


//   i(row)=1, j(col)=2 

//   i(row)=2 j(col)=4

// remote inner for loop and use while loop instead 
// let n=3,m=5;
// for(let row=0;row<n;row++){
//     let str = "";
//     let col =0;
//     while(col<m){
//         str+="#";
//         col++;
//     }
//     console.log(str);
// }


// task 4
 //n and m
// 0 #####
// 1 *****
// 2 #####
// 3 *****


// let n=5,m=6
// for(let row=0;row<n;row++){
//    let  pat="";
//     for(let col=0;col<m;col++){
//         if(row%2==0){
//             pat+="#";
//         }
//         else{
//            pat+="*";
//         } 
//     }
//     console.log(pat);
// }


// task 5
// n,m

// *#*#*#
// *#*#*#
// *#*#*# 
// *#*#*# 

// task 6

// let n=5,m=6;
// for(let i=0;i<n;i++){
//     for(let j=0;j<m;j++){
//         console.log("hello");
//     }
// }

// n*m
// how many time hello will be printed->30 times

// for(let i=0;i<n;i++){
//     for(let j=0;j<i;j++){
//         console.log("hello");
//     }
// }



//task 9
// print 12345 n time 

// 12345
// 12345 
// 12345
// 12345
// let n =4;
// for(let row =0;row<n;row++){
//     let str="";
//     for(let col=0;col<5;col++){
//         str+=col+1;
//     }
//     console.log(str);
// }

// print table from 1 to 5 in the following pattern

// 1*1 =1
// 1*2=2
// 1*3=3
// --
// ---
// ---
// 1*10=10
// 2*1=2
// 2*2=4


// for(let i=1;i<=5;i++){
//     for(let j=1;j<=10;j++){
//         console.log(`${i}*${j}=${i*j}`);
//     }
// }


// print traingle
// n rows
// *
// **
// ***
// ****
// *****

// let n=5;
// for(let row =0;row<n;row++){
//     let str="";
//     for(let col =0;col<row+1;col++){
//         str+="*";
//     }
//     console.log(str);
// }


// n=5
// *****
// ****
// ***
// **
// *
// let n=6;
// for(let row =0;row<n;row++){
//     let str="";
//     for(let col =0;col<n-row;col++){
//         str+="*";
//     }
//     console.log(str);
// }


// A
// AB 
// ABC 
// ABCD 
// ABCDE


// A
// BC
// DEF 
// GHIJ
// kLMNO


// let cCode = 65;
// let n=5;
// for(let row=0;row<n;row++){
//     let str="";
//     for(let col=0;col<=row;col++){
//         str+=String.fromCharCode(cCode);
//         cCode++;
//     }
//     console.log(str);
// }


//       *
//      **
//     ***
//    ****

let n=4;
for(let row=0;row<n;row++){
    let str="";
    //space first
    for(let col =0;col<n-row-1;col++){
      str+=" ";
    }
    // star
    for(let col=0;col<row+1;col++){
     str+="*";
    }
    console.log(str);
}

//H.w
//    ****
//     ***
//      **
//       *



    *
   ***
  *****
 *******


l
 for(let row =0;row<n;row++){
    let str="";
    for(let col=0;col<n-row-1;col++){
        //space
    }
    for(let col=0;col<2*row+1;i++){
        // start
    }
 }