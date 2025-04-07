// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello", you + "!");
//    }

//    sayHello();


//    function tester(para1, para2){
//     return para1 + " " + para2;
//    }
//    const arg1 = "argument 1";
//    const arg2 = "argument 2";
//   console.log( tester(arg1, arg2));


// -------------------------------------------------------
// let varContainingFunction = function() {
//     let varInFunction = "I'm in a function.";
//     console.log("hi there!", varInFunction);
//    };

//    varContainingFunction();

// ---------------------------------------------------------------

// let x=parseInt (prompt("Enter first number: "));
// let y=parseInt (prompt("Enter second number: "));
// function addTwoNumbers(x, y) {
//     console.log(x + y);
//    }

// addTwoNumbers(x, y);


// ------------------------

// let arr = [];
// arr.push("argument");

// console.log(arr[0]);

// ---------------------------------------------   

// Default or unsuitable parameters

// function addTwoNumbers(x = 2, y = 3) {
//     console.log(x + y);
//    }

// addTwoNumbers(5, 7); // 12
// addTwoNumbers(5); // 8
// addTwoNumbers(); // 5
// addTwoNumbers(0); // 3
// addTwoNumbers(0, 0); // 5
// addTwoNumbers(1, 2 , 3 , 4); // 3

// ------------------------------------------------------------------------------------

// Special functions and operators
// Arrow functions

// let doingArrowStuff = x => console.log(x);

// doingArrowStuff("Great!");


// let addTwoNumbers = (x, y) => console.log(x + y);
// addTwoNumbers(5, 3);


// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));


// Spread operator

// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very",
//  "powerful"];
// console.log(message);

// function addTwoNumbers(x, y) {
//     console.log(x + y); 
//    } 
//    let arr = [5, 9];
//    addTwoNumbers(...arr);


//    function addFourNumbers(x, y, z, a) { 
//     console.log(x + y + z + a); 
//    } 
//    let arr = [5, 9];
//    let arr2 = [6, 7];
//    addFourNumbers(...arr, ...arr2);

//    -------------------------------------------------------

// Rest parameter

// function someFunction(param1, param2) {
//     console.log(param1, param2);
//    }
//    someFunction("hi", "there!", "How are you?");


//    function someFunction(param1, ...param2) {
//     console.log(param1, param2);
//    }
//    someFunction("hi", "there!", "How are you?");


//    Returning function values

// function addTwoNumbers(x, y) {
//     return x + y;
//    }

//    let result = addTwoNumbers(4, 5);
// console.log(result);


// let resultsArr = [];
// for(let i = 0; i < 10; i ++){
//  let result = addTwoNumbers(i, 2*i);
//  resultsArr.push(result);
// }
// console.log(resultsArr);
// -----------------------------------------------------------
// Returning with arrow functions

// let addTwoNumbers = (x, y) => x + y;
// let result = addTwoNumbers(12, 15);
// console.log(result);

// let addTwoNumbers = (x, y) => {
//     console.log("Adding...");
//     return x + y;
//    }

// Variable scope in functions

// Local variables in functions
// function testAvailability(x) {
//     console.log("Available here:", x);
//    }
//    testAvailability("Hi!");
//    console.log("Not available here:", x);

//    let versus var variables

// function doingStuff() {
//     if (true) {
//     var x = "local";
//     }
//     console.log(x);
//    }
//    doingStuff();