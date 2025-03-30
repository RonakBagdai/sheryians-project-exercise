// cbs hofs closures

// cb fnc => ek aisa function jo aap kisi aur function me pass karte ho future me chalane k liye

// hofs => ek aisa function jo accept kare doosra function in parameter ya fir return kare ek aur function, aise function ko hofs bolte hain

// closures => ek aisa function jo return kare doosra function and jo fnc return huva hai wo use kare parent fnc ka koi variable ya parameter, aise function ko closure bolte hain

// closure function

function outer() {
  let outerVar = 10;

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

let innerFn = outer();
innerFn();

// Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback)

/* function callerfnc(fn) {
  setTimeout(fn, 3000);
}

callerfnc(function () {
  console.log("Hello World");
}); */

// Implement your own version of .map() as a higher-order function

function myMap(array, fn) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr.push(fn(array[i])); // fn(array[i]) => value * 2
    // fn(1) => 1 * 2 => 2  => newArr = [2]
    // fn(2) => 2 * 2 => 4  => newArr = [2, 4]
    // fn(3) => 3 * 2 => 6  => newArr = [2, 4, 6]
    // fn(4) => 4 * 2 => 8  => newArr = [2, 4, 6, 8]
    // fn(5) => 5 * 2 => 10   => newArr = [2, 4, 6, 8, 10]
  }

  return newArr;
}

let ans = myMap([1, 2, 3, 4, 5], function (value) {
  return value * 2;
});

console.log(ans);

// Write a function that uses closures to create a counter

function counter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }
  return increment;
}

let countFn = counter();
countFn();
countFn();
countFn();
countFn();

// Implement a function that limits how many times another function can be called (Closure + HOF)

function fnlimiter(fn, n) {
  let count = 0;

  return function () {
    if (count < n) {
      count++;
      fn();
    } else {
      console.warn("Limit reached");
    }
  };
}

let limitedFn = fnlimiter(function () {
  console.log("Hello World");
}, 2);

limitedFn();
limitedFn();
limitedFn();
