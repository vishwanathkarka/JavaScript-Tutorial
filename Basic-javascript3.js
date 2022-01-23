function test1(){ // In the Javascript can use call back function
    return "test1 called" // It is not a High order function because it is not sending or recevieing function as a arg or return function
}
function test2(a){
    console.log(a()) // It is the Higher order function
//call back function

}

test2(test1)
//test1 is a callback function --A function which can either receive another function as a arg or return function

//1.people    2.food waiter    3.chef
// Data         call back fun    function like map,....

//chef  do nothing until waiter give an order
//if  person1 give an order to the waiter the waiter will transfer the order to the chef the he will cook the food and transfers to the waiter
// where the person1 don't have an contact with chef ,only waiter can contact with the chef
// waiter controls the chef
//customer don't have access to kitchen or chef 
//chef is an call back function because waiter will call will as per the orders
// callback function is not executed automatically it executes when an outsider is called


// ---  Array function(Es6)  ---
//Filter or selection (it is used to filter the data(removing unwanted data and getting the requred data) )

let arr = [12,14,2,78,98,45]
//filter(callback function)
//method is a outside method   
//[10,20,30,40] -> method( => [40,30,20,10](call the callback function ever for 4(arrays length) timers it sends values one by one )=> callbackfunction)
// customer       waiter                     chef
arr.filter(function(element){//function(){//it is an anonymous function
//filter method is like waiter
//No need of the name for the callback function ex :- person1  No need to find  name of the chef 
//Only filter method nedd to know the name of the person (ex :- waiter only needto know the name of the chefnot for the person1 or customer) 
return element<50
} )// call back function and it is the anonymous function 
let dataLessThan55 =arr.filter(function(element){
    return element<50
}) 
console.log(dataLessThan55)

//  ---  Arrow function  ---

//way-01
let dataLessThan50 = arr.filter((element) => {return element<50})
//way-02
let dataLessThan60 = arr.filter(element =>  element<50)// filter method is used to select the value not for modifing the array


// ---  Map   ---

var arr2 =[30,40,50,60,70,80,90]
var result = arr2.map((element)=> element+10) //map is used to modify data
console.log(result)
console.log(arr2)

//  ---  For of  ---

var arr3 = [20,40,45,67,8,3,7,9,44]
for(i of arr3){
    console.log(i)//20,40,45,67,8,3,7,9,44
}//  for of we can't perform action on with index

// so we use foreach 
arr3.forEach(element => {
    console.log(element)
}) //20,40,45,67,8,3,7,9,44
 console.log("---------------")
arr3.forEach((element,index)=> 
console.log(`value of the index is ${index} and value is ${element}`)) //0,1,2,3,4,5,6,7,8,9,}


//  --- Reduce  ---

//find sum of element of array
let sum =arr3.reduce((acc,element)=>acc+element)
//60,105...
console.log(sum) 

let firstsLargest = arr3.reduce((acc,element)=> acc>element?acc:element)
console.log(firstsLargest)


// ---  Find   ---

//find 250
let arr4 = [50,45,6,889,544,3,250,445,32,46,356,]
let result = arr4.find(element=> element ==250)
if (result ==  undefined){
    console.log("enter not found")
    console.log(result)
}
else{
console.log(("element found"))
console.log(result)
}


// ---  find index of searching   ---

let index = arr4.findIndex(element => element == 544)
console.log(index) // if not found it return -1 if true it return index of the vlaue of 544


//filter , map ,foreach ,reducer,find ,findindex this all are high order function
//Because all the function reserving as a arguments




// Array  -- it contains homogeneous data
// object -- it contains key value pair


//  ----  Object literal   ----

let student ={
    sno:100,
    name: 'ram',
    age : 21,
    city: 'hyderabad'
}


//---  adding ---

student.mobile=999999
console.log(student)

// ---  removing   ---

delete student.age
console.log(student)

// ---  modifying   ---

student.city = "chennai"
console.log(student)

console.log(student.sno) // O/P : 100
console.log(student['name'])//same concept to above in some cases we use this method


// ---  for-in  ---

for(let k in student){
    console.log(k)
}
