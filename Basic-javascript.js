// javascript had datatype but we can't use it during the declaration 
//Declaring variable
var a; // default datatype is default datatype

console.log('value of a is ',a)
console.log("datatype of a is ", typeof a) 
// ',' is used to concate to values 

//assign value
var a=10;
console.log("value of a is ",a)
console.log("datatype of a is ", typeof a);

//assign a string 
a = "Hello"
console.log("value of a is ",a)
console.log("datetype of a is ", typeof a)
//In c we can change only value ,in JavaScript we can change the datatype also  , SO JAVASCRIPT IS A DYNAMIC PROGRAMMING LANGUAGE 
// Java is a statically typed programming language
// In c language if you miss ";" you will get the compile time error , we can use ";" or not  
//assign a boolean 
a = true;
console.log('value of a is ' ,a)
console.log("datatype of a is ",typeof a)


//Student name
var studentName = 'Ramu' // with var we can update or change the value and datatype 
//studentName = "Ramash"

// constant studentName
const studentName1 = "Rmau"
//studentName = "Ramash" //you will get error 
console.log(studentName)

// Age
var age = 18
age = 20
console.log(age)

//Datatype

//In C language we use int as a byte, short ,int , long ,float, double 
//In Javascript we use only number

// Primitive Datatype           Non primitive DataType
// number                         object
// String
//boolen
//BigInt
//null 
// undefined 
//symbol


// = assignment operator
// == equal to operator
// === strict equal to operator (first it compire value and it check datatype)
var a=10
var b="10"
console.log(a==b) // it check value not datatype
console.log(a===b) //it will check value and datatype

var a = 12;
a = a+5
a+=5 //compount expretion

var b  = 12;
console.log(a>10 && a<15)
if  (a>b){
    console.log("a is big")
}
else if(a==b){
    console.log("both are equal")
}
else {
    console.log("b is big")
}

for (var a=1; a<=5;a++){
    console.log("statement")
}

switch (choice){
    case 1: console.log("sum:", a+b)
      break;
    case 2: console.log("diff:", a-b)
      break
    default: console.log("Invalid choice")
}
 if(a>b){

 }
 else{

 }
 var result = a>b ? console.log("a is big"):console.log("b is big")
//condition ? expression-1 : expression-2