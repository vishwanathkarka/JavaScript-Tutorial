//object it contains primitive datatype // object literal
//complex objects // it contains primitive and non primitive

//complex
let student = {
    sno:100,//primitive
    name:"vishwa",//primitive
    free:1200,
    freePaid :1200, //primitive
    skill:['java','html','javascript'], //non-primitive
    address:{ // non-primitive
        street:"KPHB",
        city: "HYD",

    },
    getFreeStatus: function(){
     if (this.free!==this.freePaid){ //  if we use free or freePaid automatically search value outside of the object
         return "pending" // so we used this.free
     }
     else{
         return "Paid"
     }
    }


}
console.log(student.address) //{ street: 'KPHB', city: 'HYD' }
console.log(student.address.city) //HYD
console.log(student.getFreeStatus())// Paid



//Constructor
//60 student X 10 lines of code  = 600 lines   so we this will be more complex to handle
// we use constructor to use same code for different object which as same properties
let student1 = {
    sno:100,
    name:"vishwa",
    free:1200,
    freePaid :1200, 
    skill:['java','html','javascript'], 
    address:{ 
        street:"KPHB",
        city: "HYD",

    }}
    let student2 = {
        sno:560,
        name:"Ramu",
        free:100,
        freePaid :1200, 
        skill:['java','python','c'], 
        address:{ 
            street:"KPHB",
            city: "HYD",
    
        },}
        let student3 = {
            sno:50,
            name:"Ramu",
            free:1100,
            freePaid :1200, 
            skill:['java','css','javascript'], 
            address:{ 
                street:"KPHB",
                city: "JN",
        
            },}

            ///...........................


// constructor syntax
//syntax:
//function NameOfFunction(params)    // we may use uppercamlcase NameOfFunction not nameOfFunction
//{
// business logic for FUNCTION
// object initalization logic for CONSTRUCTOR
//}


//creating student constructor  function
function StudentInfo(sno,name,free,freePaid,skill,address,getFreeStatus){  // constructor function represents shape of the object or type of object 
    //object intialization logic  //exemple :- famework which they used to make an ideal 
console.log(this)// this refers for current object //StudentInfo {}
this.sno = sno; // this.sno is the properties, sno  is parameter
this.name = name 
this.free = free
this.freePaid =freePaid
this.skill = skill
this.address = address
//this.getFreeStatus = getFreeStatus 
 //removing it for prototype constructor
 this.getFreeStatus
//  this.getFreeStatus = function(){
//         if (this.free!==this.freePaid){ 
//               return "pending" 
//         }
//         else{
//             return "Paid"
//         }
//     }
}

// add function to prototype constructor function 2nd diagram
StudentInfo.prototype.getFreeStatus = function () {
    if (this.free!==this.freePaid){ 
        return "pending" 
  }
  else{
      return "Paid"
  }
}

//create an object exemple:- ideal
// StudentInfo(100,'vishwa') //if we use use normal function
// object initialization Logic
 let std3 = new StudentInfo(100,'vishwa',2000,1200,['java','python'],{street:'KPHB'})//function(){return "paid"}) // we use new keyword for creating constructor
 let std4 = new StudentInfo(200,'Ramesh',3000,1300,['C','C++'],{street:'Ameerpet'})// here we can declare method or  in the constructor function we can declare
 console.log(std3) //StudentInfo { sno: 100, name: 'vishwa', free: 2000, freePaid: 1200 }
 console.log(std4)
 funResult = std3.getFreeStatus()// To access function 
 console.log(funResult)
// each object has it's own data
//  |sno           |        |  sno            |    
//  |name ..       |        |   name ...      |
//  |getFreeStatus()|        | getFreeStatus() |
//Here we are using different function for every object ex:- getFreeStatus


//  |sno           |  <= getFreeStatus =>     |  sno            |    
//  |name ..       |                     |   name ...      |
//  |              |                     |                  |
// This is called Prototype constructor


//Syntax
// class ClassName{
    //constructor(){
  //      obj initalization logic 

//    }
//    other methods
//}


// Es6 new constructor
class Student {
    constructor(sno,name,free,freePaid,skill,address,getFreeStatus){
        //object intialization logic
        this.sno = sno
        this.name = name 
        this.free = free
        this.freePaid =freePaid
        this.skill = skill
        this.address = address
    }
    //getFreeStatus = function () {
        getFreeStatus(){ // we will not use function keyword in method
        if (this.free!==this.freePaid){ 
            return "pending" 
      }
      else{
          return "Paid"
      }
}
}
let std1 = new Student(100,'vishwa',2000,1200,['java','python'],{street:'KPHB'}) // we use new keyword for creating constructor
let std2 = new Student(200,'Ramesh',3000,1300,['C','C++'],{street:'Ameerpet'})
console.log(std1)
console.log(std2)
