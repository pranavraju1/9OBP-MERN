// let a = 4;
// let b = 2;

// let result = a - b;

// console.log(result);
// -, / ,* works normally when you are using it with numbers
// but if any value is a string then these 3 would convert them into a number
// and then perfom the mathematical operations on them

// console.log(3 * 3) //9
// console.log("3" * 3) //9

// console.log(Nan * 3) //Nan
// any operation with Nan will give you Nan


// console.log(3 / 0); //Infinity


// modulus operator (%) -> gives the reminder
// console.log(7 % 2);

// console.log(65656 % 7) // 0, 1 , 2, 3 ,4, 5, 6

// exponential operator
// console.log(3 ** 2) //9
// console.log(2 ** 2) //4

// console.log(16 ** (1/2))    //4


// console.log(5 + 5)
// console.log("5" + 5)
// console.log(5 + "6")

// // hello i am pranav
// let str1 = "hello i";
// let str2 = "am pranav";

// console.log(str1 + " " +str2);

// console.log(1 + 1)  //2
// console.log(1 + "1")    //11
// console.log(1 + 1 + "2")    //22
// console.log("1" + 1 + 2)    //112

// // + works normally when you are dealing with numbers
// // + is also used for string concatination
// // but if either one of them is a string it will convert the rest to 
// // string and concat


// console.log( 2 +  3 + 5 )

// console.log("5" - 1 + 0)


// let a = 4;

// a = a + 4;   //8
// a += 4       //8
// a -= 4       //4
// a /= 2       //2



// console.log(a)



// let a = 10;
// a += 5;
// a -= 3;
// a *= 2;
// console.log(a)  //24
 

// let a = -10;
// console.log(-a); // 10

// console.log( +true )    //1
// console.log( +false )   //0
// console.log( 5 + true ) //6

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);   

// console.log(a)  //3
// console.log(c)  //0



// let a , b ,c;
// a = b = c = 2 + 2;

// let n = 2;
// n *= 3 + 5
// console.log(n) //16


// increment and decrement operator

// let c = 2
// c = c + 1;
// c++; // 3
// c--; //1
// ++c // 3
// console.log(c)

// let c = 1
// let a = c++; 
// console.log(a)  //1
// // console.log(c)  //2

// let a = ++c; // 2
// console.log(a)
// // // Note: c++ return the value first and then increments it
// // // Note: ++c increments the value first and then returns it


// let a = 0;
// console.log(a++) //0
// console.log(++a) //1

// Note: increment and decrement operators have higher priority than other
// mathematical operators

// let c = 1
// console.log( 2 * ++c);   //4
// console.log( 2 * c++);   //2



// let items = 4;
// let pricePerItem = 100;
// let discountPercentage = 25;
// task: write the code to calculate the total price

// let priceWithoutDiscout = items * pricePerItem;
// let totalPrice =  priceWithoutDiscout - (priceWithoutDiscout * discountPercentage/100);
// console.log(totalPrice)


// you have lunch in a fancy restaurant and the food was ₹10000
// swiggy gives you 75% discount on the totalbill
// the total bill is food and 10% tip on the food

// how much did you pay


// let food = 10000;
// let timAmount = (10/100) * food;
// let totalbill = food + timAmount;

// let amountToBePaid =  totalbill - (totalbill*(75/100))
// console.log(amountToBePaid)

