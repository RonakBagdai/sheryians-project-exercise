// 2. While Loop

/* Q.sum of digit */

/* let n = Number(prompt("Enter a number: "));
let sum = 0;

while (n > 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}

console.log(sum); */

/* ------------------------------------------------------------------- */

/* Q. reverse of a number */

/* let n = Number(prompt("Enter a number: "));
let reverse = 0;

while (n > 0) {
  let rem = n % 10;
  reverse = reverse * 10 + rem;
  n = Math.floor(n / 10);
}

console.log(reverse); */

/* ------------------------------------------------------------------- */

/* Automorphic Number */

/* let n = Number(prompt("Enter a number: "));
let copy = n;
let square = n * n;

let count = 0;
while (n > 0) {
  count++;
  n = Math.floor(n / 10);
}

if (square % Math.pow(10, count) == copy) {
  console.log("Automorphic Number");
} else {
  console.log("Not Automorphic Number");
} */
