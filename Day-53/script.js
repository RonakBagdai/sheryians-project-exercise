let numJewelsInStones = function (jewels, stones) {
  let jewelSet = new Set(jewels);
  let count = 0;

  for (let stone of stones) {
    if (jewelSet.has(stone)) {
      count++;
    }
  }

  return count;
};
let jewels = "aA";
let stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones)); // Output: 3

let isHappy = function (n) {
  let set = new Set();
  while (true) {
    let sum = 0;
    while (n > 0) {
      let rem = n % 10;
      sum += rem * rem;
      n = Math.floor(n / 10);
    }
    if (sum === 1) return true;
    if (set.has(sum)) return false;
    set.add(sum);
    n = sum;
  }
  return false;
};

let n = 45;
console.log(isHappy(n)); // Output: true

let arr = [1, 10, 2, 4, 1, 2, 6, 10, 4, 3, 9];
let map = new Map();

for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    map.set(arr[i], 1);
  }
}
console.log(map);
