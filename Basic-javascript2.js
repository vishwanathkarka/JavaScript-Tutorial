//How to write a function
// --Function declaration
// --Function expresstion
// --Arrow function

//1.

// function function_name(parameters){ //function_name = bankAmoutWithDraw and the parameters are ATM card, PIN , after complition ammout will retur to your father not mother 
// //Becourse this task is assigned by father not mother 
// stmt1;
// stmt2;
// return output 
// }

// -- function declaration --
function findBig(first,secound){

    if (first> secound){
        return "First one is big"

    }
    else if (first == secound){
        return "Both are equal"
    }
    else{
        return "secound one is big"
    }
}

// -- calling a function --
var result = findBig(10,20)
console.log(result) //O/P : secound one is big
var marks = findBig(140,110) // reusablity of the same function
console.log(marks)  //O/P: First one is big



//2.
//  --- Function expression  ---

var findBig= function findBig(first,secound){
    if (first> secound){
        return "First one is big"

    }
    else if (first == secound){
        return "Both are equal"
    }
    else{
        return "secound one is big"
    }

}

// --- calling a function   ---
var result = findBig(10,20)
console.log(result) // O/P:  secound one is big
var marks = findBig(140,110) 
console.log(marks)  // O/P:  First one is big

//Anonoumus function
function findBig(first,secound){
    if (first> secound){
        return "First one is big"

    }
    else if (first == secound){
        return "Both are equal"
    }
    else{
        return "secound one is big"
    }

}
// ---  calling a function  ---
var result = findBig(10,20)
console.log(result) // O/P:  secound one is big
var marks = findBig(140,110) // reusablity of the same function
console.log(marks)  // O/P: First one is big

// function declaration to find sum of the two numbers
function findNumberTwoEmement(first,secound) {
// var  sum = first+ secound ; //wrong
return first+secound   //Right
// console.log("Sum of is : ",sum)
}
var sum = findNumberTwoEmement(10,20)
console.log("Sum of is : ",sum) //  O/P: Sum of is : 30 



//function expresstionto find sum of the two number
// It is a anonymous function function not having name 
var findNumberTwoeElement2 = function (first,secount){
   return first+ secound  //10+20 = 30
}



//Arrow function (=> : arrow operator or goto operator)
//It perform same operation like findNumberElement2
var findNumberTwoeElement3 =  (first,secount) =>  first + secound 


//find big num
// In anonymous func
var big1 = function (a,b) {
    return a>b? a: b
    // a>b? a:b

}
var bigNum = big1(11,10)
console.log(bigNum)// O/P: 11
 

// Big num with arrow function
var big2 = (a,b)=> a>b? a:b // O/P: 20
var bigNum2 = big2(20,10)
console.log(bigNum2) // O/P: 20



var arr = []
var arr1 = [22,3,4,6]
console.log(typeof arr) // O/P:  object
console.log(arr1.length)//  O/P: 4

//|              |
//| [10,20 ,30]  |
//|______________|
//    arr 
console.log(arr1[0])//  O/P: 10
console.log(arr1[1])// O/P: 20
console.log(arr1[2])// O/P: 30


// ---  for ---
console.log("Using for loop")
for(var index=0 ;index<arr1.length; index++){
    console.log(arr1[index]) //0 1 2
}
//  -- O/P --:
// Using for loop
// 22
// 3
// 4
// 6

// --- while  ---
var index=0;
console.log("Using while loop")
while(index<arr1.length){
    console.log(index)
    index++
}
// -- O/P  -- :
//Using while loop
// 0
// 1
// 2
// 3

//for 
console.log("Looping with for-of")
for(var v of arr1){ // we use "of" keyword for array only
    console.log(v)
}

// -- O/P --: 
// Looping with for-of
// 22
// 3
// 4
// 6

// -- array unshift -- 
var arr2 =[10,20,30]
arr2.unshift(1,2)// INSERT AT BEGINING
console.log(`unShift: ${arr2}`)  // O/P: unShift: 1,2,10,20,30

arr2.push(40,50)//INSERTED AT END
console.log(`Push: ${arr2}`)  //  O/P:  Push: 1,2,10,20,30,40,50

//splice with this method we can add or delete item at middle with help of the index 
arr2.splice(2,0,123) // O/P: 1,2,123,10,20,30,40,50
//arr.splice(index,remove 1 or add 0 , value)
console.log(`Slice-add: ${arr2}`) // O/P: Slice-add: 1,2,123,10,20,30,40,50


    // --- Deleting ---
//shift() By using this method we can delete only one value
// values: 1,2,123,10,20,30,40,50
arr2.shift()  // deleting from start
console.log(`shift: ${arr2}`) // O/P: shift: 2,123,10,20,30,40,50

// ---  to delete value from last  ---
arr2.pop()
console.log(`pop: ${arr2}`)  // O/P: pop: 2,123,10,20,30,40

arr2.splice(2,1)  // only removing
console.log(`splice-remove : ${arr2}`) // O/P: splice : 2,123,20,30,40

arr2.splice(2,1,3) //for remove and replace
console.log(`splice-replace : ${arr2}`) // O/P: splice-replace : 2,123,3,30,40
