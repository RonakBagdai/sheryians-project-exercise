// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   // location.href = "https://github.com/RonakBagdai";
//   // opem above link in new tab
//   window.open("https://github.com/RonakBagdai", "_blank");
// });

// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");

// btn1.addEventListener("click", function () {
//   history.back();
// });

// btn2.addEventListener("click", function () {
//   history.forward();
// });

// localStorage.clear();
// localStorage.setItem();
// localStorage.getItem();
// localStorage.removeItem();

/* Task - make a webpage with a feature of light and dark mode with the help of classlist and localstorage */

let btn = document.querySelector("button");
let body = document.querySelector("body");
let mode = localStorage.getItem("mode");
if (mode === "dark") {
  body.classList.add("dark");
}
btn.addEventListener("click", function () {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});