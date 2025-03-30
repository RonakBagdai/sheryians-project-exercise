/* --------------- Loops Questions ---------------- */

// 1. For Loop

/* Q. Accept an integer and Print hello world n times */

/* 
let n = Number(prompt("Enter a number: "));

let i;
for (i = 1; i <= n; i++) {
  console.log("Hello World");
}
console.log("fail at " + i);

 */

/* ------------------------------------------------------------------- */

/* 
Q. Print natural number up to n. 
Q. Reverse for loop. Print n to 1.
*/

// let n = Number(prompt("Enter a number: "));

/* for (let i = 1; i <= n; i++) {
  console.log(i);
} */

/* for (let i = n; i >= 1; i--) {
  console.log(i);
} */

/* ------------------------------------------------------------------- */

/* 
Q. Take a number as input and print its table
     5 * 1 = 5
     5 * 2 = 10 ... up to 10 terms 
*/

/* let n = Number(prompt("Enter a number: "));

for (let i = 1; i <= 10; i++){
    console.log(`${n} ❌ ${i} = ${n * i}`);
} */

/* ------------------------------------------------------------------- */

/* Q. Sum up to n terms. */

/* let n = Number(prompt("Enter a number: "));
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum); */

/* ------------------------------------------------------------------- */

/* Q. Factorial of a number */

/* let n = Number(prompt("Enter a number: "));
let fact = 1;

for (let i = 1; i <= n; i++) {
  fact *= i;
}

console.log(fact); */

/* ------------------------------------------------------------------- */

/* Q. Print the sum of all even & odd numbers in a range seperately. */

/* let n = Number(prompt("Enter a number: "));
let sumEven = 0,
  sumOdd = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}

console.log(`Sum of Even Numbers: ${sumEven}`);
console.log(`Sum of Odd Numbers: ${sumOdd}`); */

/* ------------------------------------------------------------------- */

/* Q. Print all the factors of a number. */

/* let n = Number(prompt("Enter a number: "));

for (let i = 1; i <= n/2; i++) {
    if (n % i === 0) {
        console.log(i);
    }
}

console.log(n); */

/* ------------------------------------------------------------------- */

/* Q. Check if the number is Prime or not. */

/* let n = Number(prompt("Enter a number: "));
let isPrime = true;

for (let i = 2; i <= n / 2; i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? `${n} is a Prime Number` : `${n} is not a Prime Number`); */

/* ------------------------------------------------------------------- */

/* Q. Write a program to take two inputs a, b & find the value of a  raised to the power of b.
     Ex - a = 2, b = 5 
     OP - 2^5 = 32 */

// let a = Number(prompt("Enter a number: "));
// let b = Number(prompt("Enter b number: "));
// let result = 1;

// for (let i = 1; i <= b; i++) {
//   result *= a;
// }

// console.log(`${a}^${b} = ${result}`);

/* ------------------------------------------------------------------- */