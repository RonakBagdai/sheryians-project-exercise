// the difference b/w var let and const

// var old js mein tha
// let and const new js mein aya

// var ka scope function level ka hota hai => var apne parent function mein kahi bhi use ho sakta hai
// var adds itself to the window object

function abcd() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

abcd();

// let ka scope block level ka hota hai => let apne parent block mein kahi bhi use ho sakta hai
// let and const braces ke andar hi rehta hai
// let and const do not add themselves to the window object

function abc() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //   console.log(i); // this log will give an error because i is defined as let and its scope is only inside the for loop
}

abc();

// Execution Context and Lexical Environment
// execution context is a box, container or a wrapper which stores variables and in which a piece of code is evaluated and executed and its created whenever a function is called, it contains 3 things => variable, function and lexical environment
// lexical environment hota hai ek chart jisme ye likha hota hai ke apka particular function ki cheejo ko access kar sakta hai and kin kin cheejo ko access nahi kar sakta, matlab ki it holds its scope and scope chain

function ab() {
  var a = 10;
  function cd() {
    var b = 20;
  }
  console.log(b); // this will give an error because b is defined inside the function cd and it is not accessible outside the function
}

// copy of array elements
// Spread operator
// Spread operator is used to copy the elements of an array

let arr = [1, 2, 3, 4, 5];
let arr1 = [...arr];
console.log(arr1);

// Spread operator is also used to merge two arrays

let arr2 = [6, 7, 8, 9, 10];
let arr3 = [...arr, ...arr2];
console.log(arr3);

// Spread operator is also used to copy the elements of an object

let obj = {
  name: "John",
  age: 20,
};

let obj1 = { ...obj };
console.log(obj1);
obj1.name = "Doe";
console.log(obj1);

// forEach and forin loop

let arr4 = [1, 2, 3, 4, 5];
arr4.forEach((element) => {
  console.log(element - 1);
});

let obj2 = {
  name: "John",
  age: 20,
};

for (let key in obj2) {
  console.log(key, ":", obj2[key]);
}
