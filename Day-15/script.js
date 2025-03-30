// Data Types in JavaScript

// - Primitive Data Types
//      - Number (int, float)
//      - String ('', "")
//      - Boolean (true, false)
//      - Undefined
//      - Null
//      - Symbol
//      - BigInt

// - Reference Data Types
//      - Array
//      - Object
//      - Function

/* -----  Assignment 1  ----- */

/* 1. Age Category Message - Ask the user for their age. If they are
under 18, print "You are a minor." If they are between 18 and 60,
print "You are an adult." If they are above 60, print "You are a
senior citizen." */

// let user_age = Number(prompt("Enter your Age"));
// console.log(user_age);

// if (user_age < 18) {
//   console.log("You are Minor");
// } else if (user_age >= 18 && user_age < 60) {
//   console.log("You are Adult");
// } else {
//   console.log("You are Senior Citizen");
// }

/* -----  Assignment 2  ----- */

/* 2. Even or Odd Sum - Take two numbers from the user using
prompt. If the sum of both numbers is even, print "Even Sum";
otherwise, print "Odd Sum." */

// let user_num_1 = Number(prompt("Enter number 1"));
// let user_num_2 = Number(prompt("Enter Number 2"));

// let sum = user_num_1 + user_num_2;

// if (sum % 2 == 0) {
//   console.log("Even Sum");
// } else {
//   console.log("Odd Sum");
// }

/* -----  Assignment 3  ----- */

/* 3. Character Case Checker - Ask the user for a single character.
Check if it's uppercase, lowercase, or neither (not a letter). */

// let user_char = prompt("Enter any Character");

// if (user_char >= "A" && user_char <= "Z") {
//   console.log(user_char + " " + "is Uppercase Character");
// } else if (user_char >= "a" && user_char <= "z") {
//   console.log(user_char + " " + "is Lowercase Character");
// } else {
//   console.log(user_char + " " + "Character is not a letter");
// }

/* -----  Assignment 4  ----- */

/* 4. Largest of Three Numbers - Take three numbers as input and
print the largest number among them without using
Math.max0. */

// let user_nums_1 = Number(prompt("Enter Number 1"));
// let user_nums_2 = Number(prompt("Enter Number 2"));
// let user_nums_3 = Number(prompt("Enter Number 3"));
// console.log(user_nums_1, user_nums_2, user_nums_3);

// if (user_nums_1 > user_nums_2 && user_nums_1 > user_nums_3) {
//   console.log("Number 1 is Largest Number");
// } else if (user_nums_2 > user_nums_1 && user_nums_2 > user_nums_3) {
//   console.log("Number 2 is Largest Number");
// } else {
//   console.log("Number 3 is Largest Number");
// }

/* -----  Assignment 5  ----- */

/* 5. Leap Year Checker - Ask the user for a year and determine if
it's a leap year or not. */

// let user_year = Number(prompt("Enter the Year to check if it is Leap Year"));

// if ((user_year % 4 === 0 && user_year % 100 !== 0) || user_year % 400 === 0) {
//   console.log(user_year + " is a Leap Year");
// } else {
//   console.log(user_year + " is not a Leap Year");
// }

/* -----  Assignment 6  ----- */

/* 6. Simple Calculator - Ask the user for two numbers and an
operator (+,,*,/). Perform the operation and display the result. */

// let user_calcu_num_1 = Number(prompt("Enter Number 1!"));
// let user_calcu_num_2 = Number(prompt("Enter Number 2!"));
// let user_operator = prompt("Enter Operator: + , - , * , /");

// if (user_operator == "+") {
//   result = user_calcu_num_1 + user_calcu_num_2;
// } else if (user_operator == "-") {
//   result = user_calcu_num_1 - user_calcu_num_2;
// } else if (user_operator == "*") {
//   result = user_calcu_num_1 * user_calcu_num_2;
// } else {
//   result = user_calcu_num_1 / user_calcu_num_2;
// }

// console.log(
//   `${user_calcu_num_1} ${user_operator} ${user_calcu_num_2} = ${result}`
// );

// 8. User Greeting - Ask for the user's name and time (24-hour
// format). Greet them accordingly:
// 5 AM-12 PM: "Good Morning, [Name]!"
// 12 PM-5 PM: "Good Afternoon, [Name]!"
// 5 PM-9 PM: "Good Evening, [Name]!"
// 9 PM-5 AM: "Good Night, [Name]"
// 9. Traffic Light System - Ask the user for a traffic light color (red,
// yellow, green). Print appropriate messages:
// Red: "Stop!"
// Yellow: "Get Ready!"
// Green: "Go!"

/* -----  Assignment 7  ----- */
/* 7. Positive, Negative, or Zero - Take a number input and check if it
is positive, negative, or zero. */

// let number = Number(prompt("Enter any Positive, Negative or Zero number"));

// if (number >= 1) {
//   console.log("Number is Positive");
// } else if (number < 0) {
//   console.log("Number is Negative");
// } else {
//   console.log("Number is Zero");
// }

/* -----  Assignment 8  ----- */
/* 8. User Greeting - Ask for the user's name and time (24-hour
format). Greet them accordingly:
5 AM-12 PM: "Good Morning, [Name]!"
12 PM-5 PM: "Good Afternoon, [Name]!"
5 PM-9 PM: "Good Evening, [Name]!"
9 PM-5 AM: "Good Night, [Name]" */

// let user_name = prompt("Enter your Name");
// let user_time = Number(prompt("Enter the Time in 24-hour format (HH.MM)"));

// if (user_time >= 5.0 && user_time < 12.0) {
//   console.log(`Good Morning, ${user_name}`);
// } else if (user_time >= 12.0 && user_time < 17.0) {
//   console.log(`Good Afternoon, ${user_name}`);
// } else if (user_time >= 17.0 && user_time < 21.0) {
//   console.log(`Good Evening, ${user_name}`);
// } else {
//   console.log(`Good Night, ${user_name}`);
// }

/* -----  Assignment 9  ----- */
/* 9. Traffic Light System - Ask the user for a traffic light color (red,
yellow, green). Print appropriate messages:
Red: "Stop!"
Yellow: "Get Ready!"
Green: "Go!" */

// let user_light = prompt("Enter the Traffic Light Color : Red, Yellow, Green");

// if (user_light == "Red") {
//   console.log("Stop!🛑🤚");
// } else if (user_light == "Yellow") {
//   console.log("Get Ready!🟡");
// } else if (user_light == "Green") {
//   console.log("GO!🟢");
// } else {
//   console.log("Enter Valid Light");
// }

/* -----  Assignment 10  ----- */
/* 10. Multiplication Table - Ask the user for a number and print its
multiplication table up to 10. */

// let usernum = Number(prompt("Enter the Number"));
// for (let i = 1; i <= 10; i++) {
//   let result = usernum * i;
//   console.log(`${usernum} * ${i} = ${result}`);
// }

/* -----  Assignment 11  ----- */
/* 11. Grade Calculator - Ask the user for their marks (0-100).
// Assign grades based on the range:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F */

// let user_marks = Number(prompt("Enter Your Marks (0-100)"));

// if (user_marks >= 90 && user_marks <= 100) {
//   console.log("You got A Grade 😃");
// } else if (user_marks >= 80 && user_marks <= 89) {
//   console.log("You got B Grade 🙂");
// } else if (user_marks >= 70 && user_marks <= 79) {
//   console.log("You got C Grade 🙁");
// } else if (user_marks >= 60 && user_marks <= 69) {
//   console.log("You got D Grade 🥴");
// } else {
//   console.log("You got FAILED 😢");
// }

/* -----  Assignment 12  ----- */
/* 12. Simple Login System - Set a predefined username and
password. Ask the user to enter their credentials using
prompti. If correct, print "Login Successful"; otherwise, print
"Incorrect username or password." */

// let username = "onlyyy.ro3";
// let userpass = "ronak@123#";

// let username_input = prompt("Enter your Username");
// let userpass_input = prompt("Enter Your Password");

// if (username == username_input) {
//   console.log("Login Successful ✅");
// } else {
//   console.log("Incorrect Username or Password 😞");
// }

// 16. Sum of Digits - Take a number from the user and print the sum
// of its digits. (Example: 123 → 1+2+3 = 6).
// 17. Palindrome Checker - Ask the user for a word. Check if it
// reads the same forward and backward. Print "Palindrome" or
// "Not a Palindrome."
// 18. Reverse Without String Methods - Ask the user for a number
// and reverse it without using split, reverse), or join.
// 19. Find Second Largest - Take three numbers as input and find
// the second largest number (without using sort or Math.maxi)-
// 20. Find First Non-Repeating Character - Ask the user for a word
// and find the first character that does not repeat. Example: hello
// → h (since e, l, and o repeat).

/* -----  Assignment 13  ----- */
/* 13. Swapping Without Third Variable - Take two numbers from the
user and swap their values without using a third variable. */

/* 
let number_1 = Number(prompt("Enter the 1st Number"));
let number_2 = Number(prompt("Enter the 2nd Number"));

console.log(
  "Before Swapping : Number 1 = ",
  number_1,
  ", Number 2 = ",
  number_2
);

number_1 = number_1 + number_2;
number_2 = number_1 - number_2;
number_1 = number_1 - number_2;

console.log(
  "After Swapping : Number 1 = ",
  number_1,
  ", Number 2 = ",
  number_2
); 
*/

/* -----  Assignment 14  ----- */

/* 14. FizzBuzz (Multiple of Both) - Ask the user for a number. If it's a
multiple of both 3 and 5, print "FizzBuzz"; if only 3, print "Fizz"; if
only 5, print "Buzz"; otherwise, print the number itself. */

/* 
let user_number = Number(prompt("Enter the Number"));

if (user_number % 3 == 0 && user_number % 5 == 0) {
  console.log("FizzBuzz");
} else if (user_number % 3 == 0) {
  console.log("Fizz");
} else if (user_number % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(user_number);
}
*/

/* -----  Assignment 15  ----- */

/* 15. Number Reversal - Take a three-digit number from the user
and print its reverse. (Example: 123 → 321). */

/* 
let userinput = Number(prompt("Enter any 3 Digit Number"));
console.log("Number is : ", userinput);

// userinput = 321
let last_digit = userinput % 10; //1
let middle_digit = parseInt(userinput / 10) % 10; //2
let first_digit = parseInt(userinput / 100); //3

let reverse_number = last_digit * 100 + middle_digit * 10 + first_digit; //123

console.log("Reversed Number is : ", reverse_number); //123
 */

/* -----  Assignment 16  ----- */

/* 16. Sum of Digits - Take a number from the user and print the sum
of its digits. (Example: 123 → 1+2+3 = 6). */

let userinput = Number(prompt("Enter any Number"));
let sum = 0;

while (userinput > 0) {
  let num = userinput % 10;
  sum = sum + num;
  console.log(sum);
}
