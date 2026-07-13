
// hoisting -> "the declaration" of the variable is moved to the top of its scope

// {
//     console.log(a);
//     var a = 5;
// }
// the above code would look like the below after hoisiting
// {
//     var a;
//     console.log(a);
//     a = 5;
// }


// {
//     let a = 5;
//     console.log(a)
// }






// func();

// function func(){
//     console.log("greet")
// }


console.log("Start");
var a = 5;
function func(num){
    var result = num + 1;
    console.log(result)
}
func(a);
console.log("end")