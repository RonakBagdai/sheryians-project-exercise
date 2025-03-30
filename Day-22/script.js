// forEach Loop:
// forEach Loop ek array method hai jo ek array ke har element par ek function ko call karta hai. forEach method ek return value nahi deta hai.

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1.forEach(function (item) {
  console.log(item);
});

// Map :
// Map ek array method hai jo ek array ke har element par ek function ko call karta hai aur us function ke return value ko ek naye array me store karta hai. Map method ek naye array ko return karta hai jo ki original array ke length ke equal hota hai.

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ans = arr.map(function (item) {
  return item;
});

// Filter:
// Filter ek array method hai jo ek array ke har element par ek function ko call karta hai aur us function ke return value true hota hai to us element ko naye array me store karta hai. Filter method ek naye array ko return karta hai.

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ans = arr2.filter(function (item) {
  return item % 2 === 0;
});
console.log(ans);

// Reduce:
// Reduce ek array method hai jo ek array ke har element par ek function ko call karta hai aur us function ke return value ko ek single value me store karta hai. Reduce method ek single value ko return karta hai.

var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ans = arr3.reduce(function (acc, item) {
  return acc + item;
}, 0);