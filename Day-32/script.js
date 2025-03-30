// 3. Do-While Loops

/* Q.sum of digit */

/* let n = Number(prompt("Enter a number: "));
let sum = 0;

do {
  sum += n % 10;
  n = Math.floor(n / 10);
} while (n > 0);

console.log(sum); */

/* ---------------------------------------------------------------------------- */

/* Q. Repeat hello */

/* let n = 5;
do {
  console.log("Hello");
  n--;
} while (n > 0); */

/* ---------------------------------------------------------------------------- */

/* Q. Guess the number */

/* let n = Math.floor(Math.random() * 100) + 1;
let guess;

do {
  guess = Number(prompt("Guess the number: 1-100"));
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Invalid Input");
    continue;
  }
  if (guess < n) {
    console.log("Too Low");
  } else if (guess > n) {
    console.log("Too High");
  } else {
    console.log("Congratulations! You guessed the number." + n);
  }
} while (guess != n); */

/* ---------------------------------------------------------------------------- */

/* Q. sasta Calculator */

/* let n1, n2, op;

do {
  n1 = Number(prompt("Enter first number: "));
  n2 = Number(prompt("Enter second number: "));
  op = prompt("Enter operator: + - * /");

  switch (op) {
    case "+":
      console.log(n1 + n2);
      break;
    case "-":
      console.log(n1 - n2);
      break;
    case "*":
      console.log(n1 * n2);
      break;
    case "/":
      if (n2 !== 0) console.log(n1 / n2);
      else console.log("Division by zero is not possible.");
      break;
    default:
      console.log("Invalid Operator");
  }
} while (confirm("Do you want to continue?")); */

/* ---------------------------------------------------------------------------- */

/* Q.Project restruant */

/* --------------- Assignments ---------------- */

/* 1. ISBN Number Description: An ISBN (International Standard Book Number) is a unique 10-digit number assigned to books. The ISBN is valid if the sum of its digits, each multiplied by its position (1 to 10), is divisible by 11.

Example 
Input: 02013145 Output: Invalid ISB 
Explanation: The sum of the digits multiplied by their positions is not divisible by 11 

Input: 047195869 Output: Valid ISB Explanation: (0×1 + 4×2 + 7×3 + … + 7×10) is divisible by 11. 

Hint: Use a loop to multiply each digit by its respective position and check divisibility by 11. */

/* let n = prompt("Enter 10 digit ISBN: "); //020131452
let sum = 0;

for (let i = 0; i < n.length; i++) {
  // i = 0,1,2,3,4,5,6,7,8
  sum += parseInt(n[i]) * (i + 1); // sum = 0 + 4 + 0 + 1 + 243 + 1 + 16384 + 390625 + 512
}
console.log("Sum:", sum);
if (sum % 11 == 0) {
  console.log("Valid ISBN");
} else console.log("Invalid ISBN"); */

/* ------------------------------------------------------------------------------------ */

/* 2. HCF/GCD Description: The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two numbers is the largest number that divides both numbers without leaving a remainder. 

Example 
Input: a = 12, b = 18 Output: 6
Explanation: 
Factors of 12: {1,2,3,4,6,12}, 
Factors of 18: {1,2,3,6,9,18}. 
Common factors: {1,2,3,6}. The highest is 6. 
Hint: Use the Euclidean algorithm: GCD(a, b) = GCD(b, a % b). */

/* let a = Number(prompt("Enter 1st Number"));
let b = Number(prompt("Enter 2nd Number"));

while (b != 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
console.log("HCF:", a); */

/* ------------------------------------------------------------------------------------ */

/* 3. Harshad Number Description: A number is a Harshad number if it is divisible by the sum of its digits. 
Example Input: 1 Output: Harshad Number 
Explanation: Sum of digits (1 + 8) = 9, and 18 is divisible by 9. 
Hint: Extract digits using modulo (%) and integer division */

/* let n = Number(prompt("Enter a number: "));
let sum = 0,
  copy = n;

while (n > 0) {
  let rem = n % 10;
  sum += rem;
  n = Math.floor(n / 10);
}

if (copy % sum == 0) console.log("Harshad Number");
else console.log("Not a Harshad Number"); */

/* ------------------------------------------------------------------------------------ */

/* 4. Perfect Square Description: A number is a perfect square if it is the square of an integer. Example Input: 2 Output: Perfect Squar Explanation: 5 × 5 = 25. Hint: Use sqrt(N), check if it’s an integer */

/* let n = Number(prompt("Enter a number: "));

if (Math.sqrt(n) % 1 == 0) console.log("Perfect Square");
else console.log("Not a Perfect Square");
 */

/* ------------------------------------------------------------------------------------ */

/* 5. Abundant Number Description: A number is abundant if the sum of its proper divisors is greater than the number itself. Example Input: 1 Output: Abundant Numbe Explanation: Proper divisors: 1, 2, 3, 4, 6 → Sum = 16 (greater than 12). Hint: Use a loop to find proper divisors. */

/* let n = Number(prompt("Enter a number: "));
let sum = 0;
let s = "";

for (let i = 1; i <= n / 2; i++) {
  if (n % i == 0) sum += i;
  s += i + " ";
}
console.log("Proper Divisors:", s);
console.log("Sum:", sum);

if (sum > n) console.log("Abundant Number");
else console.log("Not an Abundant Number");
 */

/* ------------------------------------------------------------------------------------ */

/* 6. Fibonacci Series using Loop Description: Print Fibonacci series up to N terms using a loop. Example Input: N = Output: 0, 1, 1, 2, 3, 5 Hint: Use a loop and store previous two numbers. */

/* let n = Number(prompt("Enter a number: "));

let a = 0,
  b = 1,
  c;

for (let i = 1; i <= n; i++) {
  console.log(a);
  c = a + b;
  a = b;
  b = c;
}
 */

/* ------------------------------------------------------------------------------------ */

/* 7. Find Numbers with Exactly X Divisors (Java) Description: Find numbers that have exactly X divisors. 

Example Input: X = 3
Output: 4, 9, 25, 49
Explanation: These numbers have exactly three divisors. 
Hint: Use prime factorization. */

/* let n = Number(prompt("Enter a number: "));
let x = Number(prompt("Enter X divisor: "));
let count = 0;

for (let i = 1; i <= n; i++) {
  let div = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) div++;
  }
  if (div == x) {
    console.log(i);
    count++;
  }
}
if (count == 0) console.log("No such numbers found."); */

/* ------------------------------------------------------------------------------------ */

/* 8. Prime Factors
Description: Find all prime factors of a number.
Example/
Input: 30
Output: 2, 3, 5
Hint: Use division method. */

/* let n = Number(prompt("Enter a number: "));

for (let i = 2; i <= n / 2; i++) {
  if (n % i === 0) {
    let isPrime = true;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(i);
  }
} */

/* ------------------------------------------------------------------------------------ */

/* 9. Calculate Area using Switch Statement
Description: Find the area of a circle, rectangle, or triangle using switch.
Example(
& Input: Choice = Circle, Radius = M
& Output: Area = 78.5
Hint: Use switch with case statements. */

/* let choice = prompt(
  "Enter your choice: Circle, Rectangle, Triangle"
).toLowerCase();
let area;

switch (choice) {
  case "circle":
    let r = Number(prompt("Enter radius: "));
    area = Math.PI * r * r;
    break;
  case "rectangle":
    let l = Number(prompt("Enter length: "));
    let breadth = Number(prompt("Enter breadth: "));
    area = l * breadth;
    break;
  case "triangle":
    let base = Number(prompt("Enter base: "));
    let h = Number(prompt("Enter height: "));
    area = 0.5 * base * h;
    break;
  default:
    console.log("Invalid Choice");
}

console.log("Area:", area.toFixed(2)); */

/* ------------------------------------------------------------------------------------ */

/* 10. Neon Number
Description: A number where the sum of digits of its square equals the
number itself.
Example(
& Input: 
& Output: Neon Numbe;
& Explanation: 92 = 81, sum of digits = 9.
Hint: Find square, sum digits, compare. */

/* let n = Number(prompt("Enter a number: "));
let sum = 0;
let square = n * n;

while (square > 0) {
  sum += square % 10;
  square = Math.floor(square / 10);
}

if (sum == n) console.log("Neon Number");
else console.log("Not a Neon Number"); */

/* ------------------------------------------------------------------------------------ */

/* 11. Sum of Even Indexed Fibonacci Numbers
Description: Find the sum of Fibonacci numbers at even indices up to the 2Nth
Fibonacci number.
Example(
& Input: N = 4
& Output: 33
Hint: Use a loop and maintain a sum for even-indexed elements. */

/* let n = Number(prompt("Enter a number: "));
let a = 0,
  b = 1,
  c,
  sum = 0;

for (let i = 0; i <= 2 * n; i++) {
  if (i % 2 == 0) sum += a;
  c = a + b;
  a = b;
  b = c;
}

console.log("Sum for even indexed Fibonacci numbers:", sum); */

/* ------------------------------------------------------------------------------------ */

/* 12. Find the Largest Digit in a Number
Description: Find the largest digit in a given number.
Example5
i Input: 54829.
i Output: 9
Hint: Extract digits using modulo (% 10) and compare. */

/* let n = Number(prompt("Enter a number: "));
let max = 0;

while (n > 0) {
  let rem = n % 10;
  if (rem > max) max = rem;
  n = Math.floor(n / 10);
}
console.log("Largest Digit in a Number:", max); */

/* ------------------------------------------------------------------------------------ */

/* 13. Find LCM of Two Numbers
Description: Find the Least Common Multiple (LCM) of two numbers.
Example5
i Input: a = 12, b = 1S
i Output: 60
Hint: LCM can be found using the formula: LCM(a, b) = (a × b) / GCD(a, b). */

/* let a = Number(prompt("Enter 1st Number"));
let b = Number(prompt("Enter 2nd Number"));

let x = a,
  y = b;
while (y != 0) {
  let temp = y;
  y = x % y;
  x = temp;
}
let gcd = x;

let lcm = (a * b) / gcd;
console.log("LCM:", lcm); */

/* ------------------------------------------------------------------------------------ */

/* 14. Find the Sum of Even Digits in a Number
Description: Find the sum of all even digits in a given number.
Example5
i Input: 2382
i Output: 14
Hint: Extract digits using % 10, check if even (digit % 2 == 0), add to sum. */

/* let n = Number(prompt("Enter a number: "));
let sum = 0;

while (n > 0) {
  let rem = n % 10;
  if (rem % 2 == 0) sum += rem;
  n = Math.floor(n / 10);
}

console.log("Sum of Even Digits:", sum); */

/* ------------------------------------------------------------------------------------ */

/* 15. Number of Days in a Month
Description: Find the number of days in a given month and year (to handle leap
years).
Example
 Input: Month = 2, Year = 202
 Output: 29
Hint: Use conditions
 31 Days: Jan, Mar, May, Jul, Aug, Oct, Dec$
 30 Days: Apr, Jun, Sep, Nov$
 February: 28 or 29 (check for leap year using year % 4 == 0 but not year %
100 != 0 unless year % 400 == 0). */

/* let month = Number(prompt("Enter month number: "));
let year = Number(prompt("Enter year: "));
let days = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    if (year % 4 == 0 && year % 100 != 0) days = 29;
    else days = 28;
    break;
  default:
    console.log("Invalid Month");
}

console.log("Number of days:", days); */
