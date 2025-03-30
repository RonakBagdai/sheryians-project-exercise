// console.log("Hello 1");
// setTimeout(() => {
//   console.log("Hello 2");
// }, 3000);
// console.log("Hello 3");

// setTimeout(() => {
//   console.log("Hello 1");
// }, 2000);

// setTimeout(() => {
//   console.log("Hello 2");
// }, 4000);

/* let btn = document.querySelector("button");
let h5 = document.querySelector("h5");

let check = 0;

btn.addEventListener("click", () => {
  if (check == 0) {
    h5.innerHTML = "Request Sending...";
    h5.style.color = "gold";
    btn.innerHTML = "Adding...";
    setTimeout(() => {
      h5.innerHTML = "Friends";
      h5.style.color = "green";
      btn.innerHTML = "Remove Friend";
      check = 1;
    }, 3000);
  } else {
    h5.innerHTML = "Stranger";
    h5.style.color = "red";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
}); */

// setInterval(() => {
//   console.log("Hello");
// }, 1000);

// let a = 0;

// setInterval(() => {
//   a++;
//   console.log("value of a is", a);
// }, 1000);

let btn = document.querySelector("button");
let percent = document.querySelector("#percent");
let growth = document.querySelector("#growth");

let grow = 0;

btn.addEventListener("click", () => {
  let int = setInterval(() => {
    grow++;
    percent.innerHTML = grow + "%";
    growth.style.width = grow + "%";
  }, 40);

  setTimeout(() => {
    clearInterval(int);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.5;
  }, 4000);
});
