// Rest parameter 
function sumOfElement(a,b){
    return a+b
}

console.log(sumOfElement(10,40,50,60)) // In C language we get error becouse of the argus are not eqal tothe paramter

function sumOfElement(...a){ //...a is a rest parameter
    return a.reduce((acc,el)=> acc+el)
}

console.log(sumOfElement(10,40,50,60,50)) 

// Spread systax 
//marge array
let arr1 = [10,20]
let arr2 = [30,40]
let arr3 = [50,60]

let margeArray = [...arr1 ,...arr2,...arr3]


// marge object 
let obj1 = {
    a:10,
    b :20
}
let obj2 = {
    a:30,
    b :40
}
let margeObj = {...obj1,obj2}


//Creating capies
let arr = [10,30]
let copyArr = [...arr]
arr.push(30)
console.log("Initial array",arr)
console.log("copy arr",copyArr)

//Destrucuring 
//array
let numbers =    [10,20,30]

let [a,b,c] = numbers
console.log(a)
console.log(b)
console.log(c)


//object
let person = {
    id : 300,
    salary:30000
}
let {id,salary} = person

//modules
//m1
let username1 = "surya"

//export
export default username1

//main.js
import username1 from './m1.js'

//--------------------

//person.js
class Person {
    constructor(id,name,city){
        this.name = name
        this.id = id
        this.city = city
    }
    printData(){
        console.log("name",this.name)
        console.log("id",this.id)
    }
}

export default Person

// main.js
import Person from "./person.js" // name must be the class name 

var resultValue = new Person(2334,"Vishwa","HYD")
//import {YourChoosenName} from "./location.js"
//for this we can export 
//export Person = () => {
//    logic
//}


// Default export   |       import Person from './person.js'

//  Default export   |       import prs from './person.js'

// named export   |         named export  |  import {smth} from './unility.js'

// named export   |         import {smth as Smth } from './unility.js'

// named export  importing every thing from file  |      import * as bundled from './unility.js'

//*******       CLASS     ********

class Human {
    constructor( ) {//constructor
      this.gender = "Male"
    }
  printGender( ){ //method 
     console.log(this.gender);
  }
}
class Person extends Human( ){
 constructor ( ) {
     super (); //To access the base class
     this.name = 'vishwa';
 }
printMyName ( ){
  console.log ( this.name )
   }
}
const person = new Person( );
person.printMyName()
person.printGender()

//let & const this are newly implemented in ES6
//let is like var
// const is like constant   //once assign no modifiy
var myName = 'Vishwanath'
console.log(myName)
myName = "Manu"
console.log(myName)//Name is changed 

let MyName1 = "Ramu"
console.log(MyName1)
myName1 = "Ramesh"
console.log(myName)


//const 
const myName2 = 'Ramu Kumar'
console.log(myName2)

//myName2 = 'Ramu'  Here to 
