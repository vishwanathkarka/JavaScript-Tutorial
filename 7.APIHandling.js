// // Object
// [{
//     name:"name",
//     rollno:56,
//     marks: 89,
// }]
  
// // JSON - JavaScriptObjectNotation
// [{
//     "name":"name",
//     "rollno":56,
//     "marks":89,
// }]

//   ---  Fetch Api FLow  ---

fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(response => response.json())  // Promise that resolves with "Response" object
    //.then(apiData=>  console.log(apiData)) // Extract JSON body from Response object and returns a Promise with that data
 .then(apiData=> apiData.map((ele)=> console.log(ele.title)))
    .catch((err)=> console.log("Error"))

 // ---  DOM (Document Object Model) manipulation  ---
 // HTML document  ------> Browser ----> Creating DOM  ---> Rendered/display
 //CSS Parser(apply style to elements of DOM)     JS Engine (Apply interactiveness to element of DOM)
// when we give the code to the browner then the it creates the DOM (like the tree like structure) then it display in browser 
 // document => <html> => => <head> => <title> => => <body> => <h1>  


