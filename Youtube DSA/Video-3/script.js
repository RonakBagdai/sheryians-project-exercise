// sum of n natural numbers
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

/* ----- */

// Factorial of a number
let n1 = 5;
let fact = 1;
for (let i = 1; i <= n1; i++) {
  fact *= i;
}
console.log(fact);

/* ----- */

// factors of a number

let n2 = 36;
for (let i = 1; i <= Math.floor(n2 / 2); i++) {
  if (n2 % i === 0) {
    console.log(i);
  }
}
console.log(n2);

/* ----- */

// prime number

let n3 = 17;
let isPrime = true;
for (let i = 2; i <= Math.floor(Math.sqrt(n3)); i++) {
  if (n3 % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);