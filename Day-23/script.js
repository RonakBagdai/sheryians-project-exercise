//motivated quote about learning;
console.log(
  "Day-23 : Learning is a treasure that will follow its owner everywhere."
);

// write a javascript program to find the most frequent item of an array

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 1, 2];

let obj = {};

arr.forEach((item) => {
  if (obj[item]) {
    obj[item]++;
  } else {
    obj[item] = 1;
  }
});

console.log(obj);

let max = 0;
let frequentItems = [];

for (let key in obj) {
  if (obj[key] > max) {
    max = obj[key];
    frequentItems = [`${key} : ${obj[key]}`]; // Reset array
  } else if (obj[key] === max) {
    frequentItems.push(`${key} : ${obj[key]}`); // Add to array
  }
}

console.log("The most frequent item is : ", frequentItems.join(", "));

