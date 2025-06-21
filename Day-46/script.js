/* let arr = ["Harsh", "Ravi", "Shivam", "Amit", "Ankit"];
arr.forEach((num, idx) => {
    console.log("Hello " + num, idx);
}); */

// let arr = [
//   {
//     name: "Harsh",
//     age: 22,
//   },
//   {
//     name: "Ravi",
//     age: 23,
//   },
//   {
//     name: "Shivam",
//     age: 24,
//   },
// ];

// let sum = 0;
// arr.forEach((elem) => {
//   sum = sum + elem.age;
// });
// console.log(sum);

let arr = [
  {
    name: "Salman",
    age: 22,
    married: false,
    image:
      "https://images.deccanherald.com/deccanherald%2F2025-02-07%2Fc8g7b6h3%2FSalman-Khan.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2",
  },
  {
    name: "Shahrukh",
    age: 23,
    married: true,
    image:
      "https://static.toiimg.com/thumb/msid-120548004,imgsize-25260,width-400,resizemode-4/srk-k.jpg",
  },
  {
    name: "Aamir",
    age: 24,
    married: true,
    image:
      "https://data.indianexpress.com/election2019/about/images/actor/aamir-khan.jpg?w=330",
  },
];

let sum = "";

arr.forEach((elem) => {
  sum += `<div class="card">
        <img src="${elem.image}" alt="Avatar">
        <div class="container">
        <h4><b>${elem.name}</b></h4>
        <p>Age: ${elem.age}</p>
        <p>Married: ${elem.married}</p>
        </div>
    </div>`;
});

document.body.innerHTML = sum;
