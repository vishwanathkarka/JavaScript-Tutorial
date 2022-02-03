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
console.log(student.address) // O/P: { street: 'KPHB', city: 'HYD' }
console.log(student.address.city) // O/P: HYD
console.log(student.getFreeStatus())// O/P: Paid


// Insert of wring same code for multiple time we can use constructor
//60 student X 10 lines of code  = 600 lines   so we this will be more complex to handle
// we use constructor to use same code for different object which as same properties
let student1 = {
    sno:100,
    name:"vishwa", //String
    free:1200,
    freePaid :1200,  // numbers
    skill:['java','html','javascript'],  //array
    address:{   // object
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

            ///..
            //.......
            //..................

// --- Normal Function ---
//function NameOfFunction(params)    // we may use uppercamlcase(NameOfFunction) NameOfFunction not nameOfFunction
//{
// business logic for FUNCTION
// }

// --- constructor function & prototype   ---
//syntax:
//function NameOfFunction(params)    // we may use uppercamlcase ==> (NameOfFunction) NameOfFunction not nameOfFunction
//{
// business logic for FUNCTION
// object initialization logic for CONSTRUCTOR
//}

//creating student constructor function
function StudentInfo(sno,name,free,freePaid,skill,address,getFreeStatus){  // constructor function represents shape of the object or type of object 
    //object initialization logic  //example :- framework which they used to make an ideal 
console.log(this) // O/P: StudentInfo {} // this refers for current object 
this.sno = sno; // this.sno is the properties, sno  is parameter
this.name = name 
this.free = free
this.freePaid =freePaid
this.skill = skill
this.address = address
this.getFreeStatus= function(){
    if(this.free == this.freePaid){
        return 'paid'
    }
    else{
         return 'pending'
}
}
// Here we are using same logic function for every object instead of the we can use prototype 
}

// each object has it's own data
//  |sno           |        |  sno            |    
//  |name ..       |        |   name ...      |
//  |getFreeStatus()|        | getFreeStatus() |
//Here we are using different function for every object for same operation ex:- getFreeStatus

// new is a keyword is used to create a constructor function 
let Student = new StudentInfo(20,"Ram",5000,5000,['python','java','javascript'],{location:"HYD",pin:5001,mondal:"HYD",},)//function(){return "Paid"})
console.log(`Name is  ${Student.name}`) // O/P : Name is  Ram
console.log(`Skill is  ${Student.skill}`) // O/P : Skill is  python,java,javascript
console.log(`address is  ${Student.address.location}`) // O/P : address is  HYD
console.log(`address is  ${Student.values}`) // O/P : address is  HYD
console.log(student.getFreeStatus()) //  O/P :  Paid


// ---  prototype  ---
StudentInfo.prototype.getFreeStatusProto = function () {
    if (this.free!==this.freePaid){ 
        return "pending" 
  }
  else{
      return "Paid"
  }
}

//create an object example:- ideal
// StudentInfo(100,'vishwa') //if we use use normal function
// object initialization Logic
 let std3 = new StudentInfo(100,'vishwa',2000,1200,['java','python'],{street:'KPHB'})// we can use function here  :- function(){return "paid"}) // we use new keyword for creating constructor
 let std4 = new StudentInfo(200,'Ramesh',3000,1300,['C','C++'],{street:'Ameerpet'})// here we can declare method or  in the constructor function we can declare
 console.log(std3) //O/P : StudentInfo { sno: 100, name: 'vishwa', free: 2000, freePaid: 1200, skill: [ 'java', 'python' ], address: { street: 'KPHB' }, getFreeStatus: [Function (anonymous)] }
 console.log(std4) // O/P: StudentInfo { sno: 200, name: 'Ramesh', free: 3000, freePaid: 1300, skill: [ 'C', 'C++' ], address: { street: 'Ameerpet' }, getFreeStatus: [Function (anonymous)]}
 funResult = std3.getFreeStatusProto() // we are accessing Prototype function
 console.log(funResult)


 //  Here we are using the proto type function 

//  |  sno           |  <= getFreeStatusProto =>     |   sno            |    
//  |  name ..       |                               |    name ...      |
//  |               |                               |                  |
// This is called Prototype constructor
// we used same getFreeStatusProto for two or more objects


// Alternative for the Prototype
// By using class concept

//Syntax
// class ClassName{
    //constructor(){
  //      obj initalization logic 

//    }
//    other methods
//}


// Es6 new constructor
class Student1 {
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
let std1 = new Student1(100,'vishwa',2000,1200,['java','python'],{street:'KPHB'}) // we use new keyword for creating constructor
let std2 = new Student1(200,'Ramesh',3000,1300,['C','C++'],{street:'Ameerpet'})
console.log(std1) // Student1 { sno: 100, name: 'vishwa', free: 2000,  freePaid: 1200, skill: [ 'java', 'python' ],  address: { street: 'KPHB' }  }
console.log(std2) //Student1 { sno: 200, name: 'Ramesh', free: 3000, freePaid: 1300, skill: [ 'C', 'C++' ],  address: { street: 'Ameerpet' } }
console.log(std1.getFreeStatus()) // O/P :- pending
