/* 
    Q 70.Swap two integers without using third variable
*/

/* 
let a = 5;
let b = 10;
console.log("Before swapping: a =", a, ", b =", b);
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("After swapping: a =", a, ", b =", b); 
*/

/* 
    Q 71.check even or odd using bitwise operator and memory concept
*/

/* 
let prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: "));

console.log((num & 1) === 0 ? "Even" : "Odd"); 
*/

/* 
    Q 72.check if the is power of 2
*/

let prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: "));
let isPowerOfTwo = (num & (num - 1)) === 0 && num > 0;
console.log(
  isPowerOfTwo ? `${num} is a power of 2` : `${num} is not a power of 2`
);
