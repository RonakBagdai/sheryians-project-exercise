/* Sum of a digits of a number using recursion */
function sumOfDigits(num) {
  let sum = 0;
  if (num < 10) {
    return num;
  } else {
    sum = (num % 10) + sumOfDigits(Math.floor(num / 10));
    return sum;
  }
}
console.log(sumOfDigits(1234)); // 10

/* Reverse of a mumber using recursion */
function reverseNumber(num, reversed = 0) {
  if (num === 0) {
    return reversed;
  } else {
    reversed = reversed * 10 + (num % 10);
    return reverseNumber(Math.floor(num / 10), reversed);
  }
}
console.log(reverseNumber(1234)); // 4321

/* GCD */

/* let a = 56;
let b = 98;
for (let i = Math.min(a, b) / 2; i >= 1; i--) {
  if (a % i === 0 && b % i === 0) {
    console.log(i);
    break;
  }
} */

/* GCD using recursion */

/* function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
console.log(gcd(56, 98)); // 14 */

/* GCD by using Euclidean algorithm */

/* let a = 16,
  b = 24;

while (a !== b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}
console.log(a); // 8

function gcd(a, b) {
  if (a == b) return a;
  if (a > b) return gcd(a - b, b);
  return gcd(a, b - a);
}
console.log(gcd(16, 24)); // 8 */

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}
console.log(gcd(16, 24)); // 8
