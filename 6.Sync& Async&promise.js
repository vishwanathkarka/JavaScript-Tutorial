//  ---  synchronous (Blocking)  --- 

// test-1 ---> test-2 ---> test-3
// 10 min       5min       3min   = 18min

console.log("Statement-1")

//blocking the code execution of the other code ofter this for loop
for(let i =1;i<10000000000;i++){ 

}
console.log("Statement-2") // THis stmt will execute ofter the the for loop 
console.log("Statement-3")
function test() {
    console.log("test is called")
}
test() // ofter all the this get executed then this function will execute out



//  ---  Asynchronous JS  ---

// test-1   10min 
// test-2   5mins
// test-3   3min
//         ----
//         10min larger program or test is test-1

//  ---  Timer function   --- 
// Syntax:
// setTimeout(callback function,timeout)

console.log("statement-1")//first print
console.log("statement-2")// second prints

setTimeout(()=>{
console.log("statement-3") //fourth prints because it takes 3 sec delay
},3000)
console.log("Statement-4")// third prints

// O/P 
// statement-1
// statement-2
// Statement-4
// statement-3


//3 customers with 3 times 

//customer-1
console.log("custromer-1 ordered biryani")
setTimeout(()=> {
    console.log("custromer-1 received biryani")

},10000) //lets assume 10000= 10min

//customer-2
console.log("customer-2 ordered curd rice")
setTimeout(()=>{
    console.log("customer-2 received curd rice")
},5000)

// //customer -2

console.log("customer -3 ordered water bottle")
setTimeout(()=>{
    console.log("Customer-3 received water bottle")
},2000)

// O/P :- 
// customer-1 ordered biryani
//customer-2 ordered curd rice
//customer -3 ordered water bottle
//Customer-3 received water bottle
//customer-2 received curd rice
//customer-1 received biryani

//  ---  SetIntervals  --- 

setInterval(()=> {
    console.log("3 secs completed")
},3000);

// O/P: 
// 3 secs completed
//3 secs completed
//3 secs completed
//3 secs completed
//.........


//  ---   Promise -future activity   ---

// Ex : I will call you later
// I will meet you on tomorrow
// I promise two types are there 
// fulfilled or rejected

//  ---  create a promise   ---  

 // syntax:
    // let promiseObject = new Promise(()=>{})

let isAmBusy = true;
//I will call you in 10 min
// we used new keyword because it is a constructor
let callYouPromise = new Promise((fulfilled,rejected)=>{ //Promise is a constructor and first letter is capilize
    if(isAmBusy==false){
    setTimeout(() => {
        fulfilled("Hello...frnd..How r u")
    }, 10000);
    }
    else{
        setTimeout(() => {
            rejected("Sorry frnd...call you later")
        }, 10000);

    }
})
      .then((message)=>{console.log("message is ",message)}) //consume the promise // callYouPromise
      .catch((err)=> {console.log("err is ",err)}) // O/P : err is  Sorry frnd...call you later


// consume a promise
// -----------
// promiseObject.then().catch()