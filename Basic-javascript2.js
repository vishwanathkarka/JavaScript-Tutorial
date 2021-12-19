//How to write a function
// -Function declaration
// -Function expresstion
// -Arrow function

//1.

// function function_name(parameters){ //function_name = bankAmoutWithDraw and the parameters are ATM card, PIN , after complition ammout will retur to your father not mother 
// //Becourse this task is assigned by father not mother 
// stmt1;
// stmt2;
// return output 
// }

//function declaration
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

// calling a function
var result = findBig(10,20)
console.log(result)
var marks = findBig(140,110) // reusablity of the same function
console.log(marks)



//2.
//Function expression

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

// calling a function
var result = findBig(10,20)
console.log(result)
var marks = findBig(140,110) 
console.log(marks)

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
// calling a function
var result = findBig(10,20)
console.log(result)
var marks = findBig(140,110) // reusablity of the same function
console.log(marks)

// function declaration to find sum of the two numbers
function findNumberTwoEmement(first,secound) {
// var  sum = first+ secound ; //wrong
return first+secound   //Right
// console.log("Sum of is : ",sum)
}
var sum = findNumberTwoEmement(10,20)
console.log("Sum of is : ",sum)



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
console.log(bigNum)// 11
 

// Big num with arrow function
var big2 = (a,b)=> a>b? a:b //20
var bigNum2 = big2(20,10)
console.log(bigNum2)



var arr = []
var arr1 = [22,3,4,6]
console.log(typeof arr) // object
console.log(arr1.length)//4

//|              |
//| [10,20 ,30]  |
//|______________|
//    arr 
console.log(arr1[0])//10
console.log(arr1[1])//20
console.log(arr1[2])//30


//for
for(var index=0;index<arr.length;length++){
    console.log("Using for loop")
    console.log(arr[index]) //0 1 2
}


//while
var index=0;
while(index<arr.length){
    console.log(index)
    index++
}


//for 
for(var v of arr){ // we use "of" keyword for array only
    console.log(v)
}


//array unshift
var arr2 =[10,20,30]
arr2.unshift(1,2)//1,2,10,20,30  INSERT AT BEGINING
arr2.push(40,50)//1,2,10,20,30,40,50 INSERTED AT END
//splice with this method we can add or delete item at middle with help of the index 
arr2.splice(2,0,123) // 1,2,123,10,20,30,40,50
//arr.splice(index,remove 1 or add 0 , value)

//shift() By using this method we can delete only one value
arr2.shift()//2,123,10,20,30,40 // from start
var removiedElement = arr2.shift()
console.log(removiedElement) //1
//to delete value from last
arr2.pop()//1,2,123,10,20,30,40 // from end
arr2.splice(2,1)// 1,2,10,20,30,40 //from middle
arr2.splice(2,1,3)//1,2,3,20,30,40 //for replace