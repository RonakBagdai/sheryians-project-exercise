//  Problem 1

console.log("Hello, Javascript!");
console.warn("Hello, Javascript!");
console.error("Hello, Javascript!");
console.info("Hello, Javascript!");
console.table({ name: "Ronak", age: 26 });

// Problem 2

console.log(35 * 2 - 10 / 2 + 7);

// Problem 3

console.log(typeof "123");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof null);

// Problem 4

let a = 10;
let b = 20;
console.log("Before Swapping: a = " + a + " b = " + b);

[a, b] = [b, a];
// a = a + b;
// b = a - b;
// a = a - b;

console.log("After Swapping: a = " + a + " b = " + b);

// Problem 5

console.groupCollapsed("User Details");
console.log("Name: Ronak");
console.log("Age: 26");
console.log("City: Ahmedabad");
console.groupCollapsed("Address");
console.log("Street: 123");
console.log("Area: ABC");
console.log("Pincode: 123456");
console.groupEnd();
console.groupEnd();

// Problem 6

const obj = {
  name: "Ronak",
  age: 26,
  city: "Ahmedabad",
};

console.log(obj);

obj.age = 23;
obj.name = "Ronak Bagdai";

console.log(obj);

// Problem 7

let num = "50";
console.log(parseInt(num));
console.log(parseFloat(num));
console.log(Number(num));
console.log(+num);

// Problem 8

let str = "JavaScript";
// Check if "JavaScript" contains "Script" without using .includes().

console.log(str.indexOf("Script") !== -1);

console.log(str.search("Script") !== -1);

// Problem 9

let arr = [1, 2, 3, 4, 5];
//sum of all elements of array

let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Problem 10

// Explain the difference between undefined, null, and NaN with examples.

// undefined: A variable is undefined if it has been declared but not assigned any value.
let aaa;
console.log(aaa); // undefined

// null: A variable is null if it has been assigned a value of null.
let bbb = null;
console.log(bbb); // null

// NaN: NaN is a property of the global object. In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number — the same as the value of Number.NaN.
let ccc = "Hello" / 5;
console.log(ccc); // NaN
