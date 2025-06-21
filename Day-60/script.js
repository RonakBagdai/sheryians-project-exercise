/* Q 73.Print hello n times using recursion */

function printHello(n) {
  if (n <= 0) {
    return;
  }
  console.log("Hello");
  printHello(n - 1);
}
printHello(5);

/* Print 1 to n using recursion */
function printNumbers(n) {
  if (n <= 0) {
    return;
  }
  printNumbers(n - 1);
  process.stdout.write(n + " ");
}
printNumbers(5);

console.log();

/* Print n to 1 using recursion */
function printNumbersReverse(n) {
  if (n <= 0) {
    return;
  }
  process.stdout.write(n + " ");
  printNumbersReverse(n - 1);
}
printNumbersReverse(5);

console.log();

/* Print sum of first n natural numbers using recursion */
function sumOfNaturalNumbers(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumOfNaturalNumbers(n - 1);
}
console.log(sumOfNaturalNumbers(5));

/* Print factorial of n using recursion */

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

/* Print Fibonacci series using recursion */

// function fibonacci(n, a = 0, b = 1) {
//   if (n === 0) {
//     return;
//   }

//   let c = a + b;
//   process.stdout.write(c + " ");
//   fibonacci(n - 1, b, c);
// }

// let n = 10;
// let a = 0,
//   b = 1;
// process.stdout.write(a + " " + b + " ");
// fibonacci(n - 2, a, b);

function fibonacciSeries(n, a = 0, b = 1) {
  if (n === 0) {
    return;
  }
  process.stdout.write(a + " ");
  fibonacciSeries(n - 1, b, a + b);
}

function fibonacciSum(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacciSum(n - 1) + fibonacciSum(n - 2);
}
console.log(fibonacciSeries(10));
console.log(fibonacciSum(10));
