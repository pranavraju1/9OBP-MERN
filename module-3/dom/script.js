// console.log(document);

// console.log(document.body)
// console.log(document.head);
// console.log(document.title);
// console.log(document.querySelector("p"))

// console.log(document.querySelector(".check"));

// console.log(document.querySelector(".check p"));
// document.querySelector([type="text"]);

// let paragraphs = document.querySelectorAll("p");

// for (let paragraph of paragraphs) {
//     console.log(paragraph);
// }

// let intro = document.querySelector(".intro");
// console.log(intro);
// console.log(intro.textContent)

//  intro.textContent= "My name is Abhishek Kumar";

// let intro = document.querySelector(".check");
// console.log(intro.textContent);
// console.log(intro.innerHTML);

// intro.textContent = "<b>My name is Abhishek Kumar</b>";

// intro.innerHTML="<b>My name is Abhishek Kumar</b>";

// attribute 

// getAttribute setAttribute deleteAttribute hasAttribute

 let input=document.querySelector("input");
 console.log(input.getAttribute("type"));
 console.log(input.getAttribute("id"))
 console.log(input.getAttribute("value"));

// setAttribute->update attribute 
input.setAttribute("type","passowrd");
console.log(input.getAttribute("type"));

// create new attribute -> setAttribute
input.setAttribute("class","first name");


// removeßAttribute 
// input.removeAttribute("class");

// hasAttribute
console.log(input.hasAttribute("type"))


// 

console.log(input.id);

console.log(input.className)


// fix the link in the anchor tag by adding https:// infront it if not present.
// let anchor = document.querySelector("a");
// let link=anchor.getAttribute("href");

// if(link.substring(0,8)!="https://"){
//     let updatedLink="https://"+link;
//     anchor.setAttribute("href",updatedLink);
// }


// update the class from bg to background

let about = document.querySelector("div");
console.log(about.className)

console.log(about.getAttribute("class"));


// classList property-> return an array of class names 

// add 
// remove 
// toggle 
// replace 

console.log(about.classList);
about.classList.add("active");

about.classList.remove("intro");

// if  class already  remove it otherwise add
// about.classList.toggle("bg")


about.classList.replace("bg","background")
