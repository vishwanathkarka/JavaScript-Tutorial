// ---   Accessing element from DOM
let h1 = document.getElementById("heading")
let para = document.getElementById("para")
let para2 = document.querySelector('p')// Accessing with the particular paragraph
let para3 = document.querySelector('.para-class')  

//Provide dynamic content
 // we are changing the text with javascript
para.textContent ="This is a paragraph"

let btn = document.querySelector('button')
btn.addEventListener('click',()=>{
    h1.textContent="DOM DEMO"
    // ---  Dynamic styling
   h1.style.color="white"
   h1.style.background="blue"
   h1.style.textAlign="center"
})
console.log(h1)
console.log(para)
console.log(para2)
console.log(para3.textContent) // This prints the p tag text value
