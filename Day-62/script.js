// Q. 1979 Find Greatest Common Divisor of Array

// function findGCD(nums) {
//   let min = Math.min(...nums);
//   let max = Math.max(...nums);

//   //   function gcd(a, b) {
//   //     if (b === 0) return a;
//   //     return gcd(b, a % b);
//   //   }

//   //   return gcd(min, max);

//   for (let i = min; i >= 1; i--) {
//     if (min % i === 0 && max % i === 0) {
//       return i;
//     }
//   }
//   return 1;
// }
// // Example usage:
// const nums = [2, 5, 6, 9, 10];
// const result = findGCD(nums);
// console.log(result); // Output: 1

/* Q 80.Count of primes Sieve of eratosthenes) */

// function countPrimes(n) {
//   let isPrime = new Array(n + 1).fill(true);
//   for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
//     if (isPrime[i]) {
//       for (let j = i * i; j <= n; j += i) {
//         isPrime[j] = false;
//       }
//     }
//   }
//   //   for (let i = 2; i < isPrime.length; i++) {
//   //     if (isPrime[i]) {
//   //       process.stdout.write(i + " ");
//   //     }
//   //   }
//   let count = 0;
//   for (let i = 2; i < isPrime.length; i++) {
//     if (isPrime[i]) {
//       count++;
//       process.stdout.write(i + " ");
//     }
//   }
//   console.log();
//   console.log(count);
// }

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));
// countPrimes(n);

/* Q 81. 69.Sqrt(x) */

// function mySqrt(x) {
//   let i = 1;
//   for (; i * i <= x; i++) {
//     if (i * i === x) {
//       return i;
//     }
//   }
//   return i - 1;
// }

// let x = 8;
// let result = mySqrt(x);
// console.log(result); // Output: 5

/* Q 82. 50.Pow(x,n) */

function myPow(x, n) {
  if (n === 0) return 1.0;
  return n < 0 ? 1 / temp(x, n) : temp(x, n);
}

let temp = (x, n) => {
  if (n === 0) return 1;
  let ans = temp(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return ans * ans;
  } else {
    return x * ans * ans;
  }
};

let x = 2.0;
let n = 10;
let result = myPow(x, n);
console.log(result); // Output: 1024