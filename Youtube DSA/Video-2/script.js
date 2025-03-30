let unit = 700;
let amount = 0;

if (unit > 400) {
  amount = (unit - 400) * 13; //1300
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  amount += (unit - 200) * 8; //1600
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6; //600
  unit = 100;
}
amount += unit * 4; //400
console.log(amount);

/*  */

/*  */

let money = 5234;
if (money >= 500) {
  console.log("500 Notes : " + Math.floor(money / 500));
  money = money % 500;
}
if (money >= 200) {
  console.log("200 Notes : " + Math.floor(money / 200));
  money = money % 200;
}
if (money >= 100) {
  console.log("100 Notes : " + Math.floor(money / 100));
  money = money % 100;
}
if (money >= 50) {
  console.log("50 Notes : " + Math.floor(money / 50));
  money = money % 50;
}
if (money >= 20) {
  console.log("20 Notes : " + Math.floor(money / 20));
  money = money % 20;
}
if (money >= 10) {
  console.log("10 Notes : " + Math.floor(money / 10));
  money = money % 10;
}
if (money >= 5) {
  console.log("5 Notes : " + Math.floor(money / 5));
  money = money % 5;
}
if (money >= 2) {
  console.log("2 Notes : " + Math.floor(money / 2));
  money = money % 2;
}
if (money === 1) {
  console.log("1 Notes : " + money);
}
