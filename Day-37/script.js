// DOM - Document Object Model
// The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of the document as a tree of nodes. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language like JavaScript.

// 4 pillars of DOM
// -- 1. Selecting elements
// -- 2. Changing HTML
// -- 3. Changing CSS
// -- 4. Listening to events

let h = document.querySelector("h1");

h.addEventListener("click", function () {
  h.innerHTML = "Clicked on h1";
  h.style.color = "red";
  h.style.backgroundColor = "yellow";
});

let box = document.getElementById("box");
box.innerHTML = "<h1>This is a box</h1>";
// box.innerText = "This is a box";

let h2 = document.querySelectorAll("h2");
h2[0].innerHTML = "This is 1st h2";
h2[1].innerHTML = "This is 2nd h2";
