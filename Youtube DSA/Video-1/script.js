let a = 10;
let b = 20;
console.log("a: " + a + " b: " + b);

console.log("sum of a and b is " + (a + b));
console.log(a + b + " is the sum of a and b");

console.log("1" + 1);

// swap two variables via 3 methods

// Method 1
let temp = a;
a = b;
b = temp;
console.log("a: " + a + " b: " + b);

// Method 2
a = a + b;
b = a - b;
a = a - b;
console.log("a: " + a + " b: " + b);

// Method 3
[a, b] = [b, a];
console.log("a: " + a + " b: " + b);

// Method 4
a = a * b;
b = a / b;
a = a / b;
console.log("a: " + a + " b: " + b);

let i = 11;
i = i++ + ++i;
console.log(i);
// explanation: i++ will return 11 and then increment i to 12
// ++i will increment i to 13 and then return 13
// 11 + 13 = 24

let j = 11,
  k = 22;

let l = j + k + j++ + k++ + ++j + ++k;
console.log(l);
// explanation: 11 + 22 + 11 + 22 + 13 + 24 = 103

// all math methods
console.log(Math.abs(-10));
console.log(Math.ceil(10.1));
console.log(Math.floor(10.9));
console.log(Math.trunc(10.9));
console.log(Math.round(10.5));
console.log(Math.max(10, 20, 30));
console.log(Math.min(10, 20, 30));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(25));
console.log(Math.random());

// give random number between 1 and 50
console.log(Math.floor(Math.random() * 20) + 1);

// calculate area and perimeter of a rectangle
let length = 10;
let breadth = 20;
let area = length * breadth;
let perimeter = 2 * (length + breadth);
console.log("Area: " + area + " Perimeter: " + perimeter);

// generate otp
let otp = Math.floor(Math.random() * 1000000);
console.log("OTP: " + otp);

// area of triangle by heron's formula
let side1 = 3;
let side2 = 4;
let side3 = 5;
let s = (side1 + side2 + side3) / 2;
let areaTriangle = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log("Area of triangle: " + areaTriangle);

// circumference of a circle
let radius = 5;
let circumference = 2 * Math.PI * radius;
console.log("Circumference of circle: " + Number(circumference.toFixed(2)));
