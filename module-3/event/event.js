// approach 1 

// function handleClick(){
//     console.log("button is clicked");
// }

// apporach2 
// let button= document.querySelector("button");
// button.onclick = function(){
//     console.log("button is clicked")
// }

// button.onClick= function(){
//     console.log("button is clicked again");
// }

// approach 3 -> addEventListener()
// let button = document.querySelector("button");

// function handleClick() {
//     console.log("button is clicked");
// }

// function handleClick2() {
//     console.log("button is clicked again");
// }

// button.addEventListener("click", handleClick);

// button.addEventListener("click", handleClick2)


// Commonly used events

// onclick, 
// click/input/change/focus/blur/ events

// input 
// let input = document.querySelector("#username");

// function handleInput(e){
//        console.log(e.target.value);
// }

// input.addEventListener("input",handleInput);

// change
// let input = document.querySelector("#cars");

// function handleInput(e){
//     console.log(e.target.value);
// }

// input.addEventListener("change",handleInput);


// 
// let input = document.querySelector("#username");
// function handleFocus(){
//      console.log("focused");
// }
// input.addEventListener("focus",handleFocus);


// function handleBlur(){
//      console.log("blur");
// }
// input.addEventListener("blur",handleBlur);


// Math.random() -> 
// generated pseudo random number from 0<=num<1

// task2 :-