// Create a function that takes a callback and executes it after every `n` seconds indefinitely

/* function callerfnc(fn, time) {
  setInterval(fn, time * 1000);
}

callerfnc(function () {
  console.log("Hello World");
}, 3); */

// Implement a function that returns a function with a preset greeing (Closure)

function greet(greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}

let indianGreeter = greet("Hi");
indianGreeter("John");

let germanGreeter = greet("Hallo");
germanGreeter("John");

let spanishGreeter = greet("Hola");
spanishGreeter("John");

// Implement a function that takes a callback and only executes it once (HOF + Closure)

function once(fn) {
  let done = false;

  return function () {
    if (!done) {
      // done === false
      done = true;
      fn();
    } else {
      console.error("Function already executed once");
    }
  };
}

let onceFn = once(function () {
  console.log("Hello World");
});

onceFn();
onceFn();
onceFn();

// Implement a function that throttles another function (HOF + Closure)

function throttle(fn, delay) {
  let last = 0;

  return function () {
    let now = new Date().getTime();

    if (now - last >= delay) {
      last = now;
      fn();
    }
  };
}

let throttledFn = throttle(function () {
  console.log("Hello World");
}, 3000);

throttledFn();
