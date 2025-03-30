let btn = document.querySelector("button");
let box = document.querySelector("#box");

btn.addEventListener("click", function () {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  console.log(c1, c2, c3);
  box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
});

let arr = ["CSK", "MI", "RCB", "KKR", "DC", "RR", "SRH", "PBKS", "GT", "LSG"];
let guessbtn = document.querySelector("button");
let h1 = document.querySelector("h1");

guessbtn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * arr.length);
  let winner = arr[random];
  h1.innerHTML = winner;
});

let array = [
  {
    team: "CSK",
    primaryColor: "Yellow",
    secondaryColor: "Green",
  },
  {
    team: "MI",
    primaryColor: "Blue",
    secondaryColor: "Yellow",
  },
  {
    team: "RCB",
    primaryColor: "Red",
    secondaryColor: "Black",
  },
  {
    team: "KKR",
    primaryColor: "Purple",
    secondaryColor: "Gold",
  },
  {
    team: "DC",
    primaryColor: "Blue",
    secondaryColor: "Red",
  },
  {
    team: "RR",
    primaryColor: "Pink",
    secondaryColor: "Blue",
  },
  {
    team: "SRH",
    primaryColor: "Orange",
    secondaryColor: "Black",
  },
  {
    team: "PBKS",
    primaryColor: "Red",
    secondaryColor: "White",
  },
  {
    team: "GT",
    primaryColor: "darkblue",
    secondaryColor: "lightpink",
  },
  {
    team: "LSG",
    primaryColor: "darkblue",
    secondaryColor: "lightblue",
  },
];

let teambtn = document.querySelector("button");
let teamh1 = document.querySelector("h1");

teambtn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * array.length);
  let winner = array[random];

  teamh1.innerHTML = winner.team;
  teamh1.style.backgroundColor = winner.primaryColor;
  teamh1.style.color = winner.secondaryColor;
});
