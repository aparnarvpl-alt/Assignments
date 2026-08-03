// Syntax : declaration variable : data;


// Operators in JavaScript
// Operators are nothing but set of special charcters used in javascript to perform different types of operators.


// There are mainly 5 different types of operators we are using in javascript.
// 1. Arthimetic Operators
// 2. Assignment Operators
// 3. Comparision Operators
// 4. Logical Operators
// 5. Ternary Operator

// 1. Arthimetic Operators => The special characters used to perform mathematical operations. (+, -, *, /, %, ++, --)
// +  Addition 
// -  Subtraction
// *  Multiplication
// /  Division
// %  Modules/remainder
// ++ Increment (increase the previous value by 1.)
// -- Decrement  (decrease the previous value by 1.)

let a = 10
let b = 20 
console.log(a++)
console.log(a)
console.log(b--)
console.log(b)


// a++ => post-increment (post execution of this line, increase the value by 1)
// b++ => post-decrement (post execution of this line, decrease the value by 1)

console.log(++a)
console.log(--b)

// ++a => pre-increment (before execution of this line, increase the value by 1)
// --b => pre decrement (before execution of this line, decrease the value by 1)

let i = 10
console.log("Intial value of i is :" + i);
i+=10
console.log("After using the += value of i is :" + i);
i-=10
console.log("After using the -= value of i is :" + i);
i*=10
console.log("After using the *= value of i is :" + i);
i/=10
console.log("After using the /= value of i is :" + i);
i%=10
console.log("After using the %= value of i is :" + i);

let x = 20;
let y = "20";
let z = 20;

console.log(x==y);
console.log(x==z);


console.log(x===y);
console.log(x===z);


let p = 10;
let q = 20;
let r = 30;

console.log(p<q && p<r);
console.log(p>q || p<r);
console.log(!(p<q));


let age = 12.5;


let result = (age >= 18) ? "true" : "false" ;

console.log(result);

