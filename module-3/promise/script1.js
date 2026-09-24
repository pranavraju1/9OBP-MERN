<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        // const promise = new Promise((resolve, reject) => {
        //     // resolve("Asynchornous task is resolved");
        //     reject("Promise rejected successfully");
        // })

        // console.log(promise);

        // fullfilled -> 
        // when asyncronous task complete succesfully then resolve() called.

        // promise.then((result)=>{
        //      console.log(result);
        // })

        // lifecycle of promise 
        // pending -> resolved -> fullfilled 


        // rejected 
        // promise.then((result) => {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // })

        // pending -> recject-> rejected 



        // create a function isEven that will return a promise if the no is even 
        // promise will after 2second with message that no is even and if no is odd promise will
        // reject with message no is odd after 2 seconds



        // function isEven(n) {
        //     return checkPromise = new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             if (n % 2 == 0) {
        //                 resolve("no is even");  //when operation is successfull
        //             } else {
        //                 reject("no is odd"); // when operation is not succesfull
        //             }
        //         }, 2000)
        //     })
        // }

        // isEven(6).then((result) => {
        //     // when promise is resolved 
        //     console.log(result);
        // }).catch((error) => {
        //     // when promise is rejected 
        //     console.log(error);
        // })


        // create function isEligible that will take student age and return a promise  if student is greater than 18 year old 
        // resolve the promise with message that eligible other wise 
        // reject with message not eligible after 2 seconds



        function isEligible(age) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age > 18) {
                        resolve("Eligible");
                    }
                    else {
                        reject("Not Eligible")
                    }

                },2000)

            })
        }


        isEligible(17).then((result)=>{
              console.log(result);
        }).catch((err)=>{
             console.log(err);
        });



















    </script>
</body>

</html>