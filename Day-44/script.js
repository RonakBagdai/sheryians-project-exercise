// let h = document.querySelector("h1");
// let id = h.getAttribute("id");
// let className = h.getAttribute("class");
// console.log(id);
// console.log(className);

// h.setAttribute("id", "heroine");

// let img = document.querySelector("img");
// // console.log(img.getAttribute("src"));
// img.setAttribute(
//   "src",
//   "https://plus.unsplash.com/premium_photo-1676977396095-07e0648d92df?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// );
// console.log(img.getAttribute("src"));
// console.log(img.getAttribute("alt"));

// let btn = document.querySelector("button");
// let img1 = document.querySelector("#img1");
// let img2 = document.querySelector("#img2");

// btn.addEventListener("click", function () {
//   let img1Src = img1.getAttribute("src");
//   let img2Src = img2.getAttribute("src");

//   img1.setAttribute("src", img2Src);
//   img2.setAttribute("src", img1Src);
// });

// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello From JavaScript";
// document.body.appendChild(h1);

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let x = Math.random() * 90;
  let y = Math.random() * 90;
  let rotation = Math.random() * 360;
  let img = document.createElement("img");
  img.setAttribute("src", "./chutki.png");
  // img.style.width = "100px";
  img.style.height = "100px";
  img.style.position = "absolute";
  img.style.left = x + "%";
  img.style.top = y + "%";
  img.style.transform = `rotate(${rotation}deg)`;
  document.body.appendChild(img);
});
