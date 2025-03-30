// Q.Accept a year and check if it a leap year or not (google to find out what's a leap year)
// Leap year is a year that is exactly divisible by 4 except for years that are exactly divisible by 100 but these years that are divisible by 400 are leap years.

// let year = Number(prompt("Enter a year: "));
// let isLeapYear = false;

// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       isLeapYear = true;
//     } else {
//       isLeapYear = false;
//     }
//   } else {
//     isLeapYear = true;
//   }
// } else {
//   isLeapYear = false;
// }

// console.log(
//   isLeapYear ? `${year} is a leap year` : `${year} is not a leap year`
// );

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   isLeapYear = true;
// } else {
//   isLeapYear = false;
// }

// console.log(
//   isLeapYear ? `${year} is a leap year` : `${year} is not a leap year`
// );

/* ------------------------------------------------------------------------ */

/* .Shop discount 

amount 0-5000 discount 0%
amount 5001-7000 discount 5%
amount 7001-9000 discount 10%
more than 9000 discount 20%
*/

// let amount = Number(prompt("Enter the amount: "));
// let discount = 0;

// if (amount >= 0 && amount <= 5000) {
//   discount = 0;
// } else if (amount > 5000 && amount <= 7000) {
//   discount = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   discount = 10;
// } else if (amount > 9000) {
//   discount = 20;
// } else {
//   console.log("Invalid amount");
// }

// console.log(amount - (amount * discount) / 100);

/* ------------------------------------------------------------------------ */

/* .Electricity bill
0-100 units - 4.2/unit
101-200 units - 6/unit
201-400 units - 8/unit
more than 400 units - 13/unit
*/

// let unit = Number(prompt("Enter the unit: "));
// let amount = 0;

// Ghatiya way
// if (unit>0 && unit <= 100) {
//   amount = unit * 4.2;
// } else if (unit > 100 && unit <= 200) {
//   amount = 100 * 4.2 + (unit - 100) * 6;
// } else if (unit > 200 && unit <= 400) {
//   amount = 100 * 4.2 + 100 * 6 + (unit - 200) * 8;
// } else if (unit > 400) {
//   amount = 100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13;
// } else {
//   console.log("Invalid unit");
// }

// Good way
/* if (unit > 400) {
  amount = (unit - 400) * 13;
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  amount += (unit - 200) * 8;
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6;
  unit = 100;
}
amount += unit * 4;

console.log(amount); */

/* ------------------------------------------------------------------------ */

/* You need to write a program where the user inputs an amount in Indian
Rupees, and the program should output the number of currency notes
required to make up that amount using the largest denominations first.
Denominations Available (Indian Rupees): 2000, 500, 200, 100, 50,
20,10,5, 2, 1 */

/* let money = Number(prompt("Enter the amount: ")); // 5234

if (money >= 2000) {
    console.log("2000 Notes : " + Math.floor(money / 2000)); // 2
    money = money % 2000; 
}
if (money >= 500) {
    console.log("500 Notes : " + Math.floor(money / 500)); // 4
    money = money % 500;
}
if (money >= 200) {
    console.log("200 Notes : " + Math.floor(money / 200)); // 1
    money = money % 200;
}
if (money >= 100) {
    console.log("100 Notes : " + Math.floor(money / 100)); // 1
    money = money % 100;
}
if (money >= 50) {
    console.log("50 Notes : " + Math.floor(money / 50)); // 0
    money = money % 50;
}
if (money >= 20) {
    console.log("20 Notes : " + Math.floor(money / 20)); // 1
    money = money % 20;
}
if (money >= 10) {
    console.log("10 Notes : " + Math.floor(money / 10)); // 1
    money = money % 10;
}
if (money >= 5) {
    console.log("5 Notes : " + Math.floor(money / 5)); // 0
    money = money % 5;
}
if (money >= 2) {
    console.log("2 Notes : " + Math.floor(money / 2)); // 2
    money = money % 2;
}
if (money === 1) {
    console.log("1 Notes : " + money); // 1
}
 */

/* ------------------------------------------------------------------------ */

/* 
2. Write a program to accept rating of the movie as double and Movie
name as String.
Check and print the category of movie based on rating.
Example -
INPUT
4.9
RRR
OP -RRRis a Super Hit. 
*/

/* 
let rating = Number(prompt("Enter the rating: "));
let movieName = prompt("Enter the movie name: ");

if (rating > 4.5 && rating <= 5) {
    console.log(`${movieName} is a Super Hit.`);
} else if (rating >= 3.5 && rating <= 4.5) {
    console.log(`${movieName} is a Hit.`);
} else if (rating >= 2.1 && rating < 3.5) {
    console.log(`${movieName} is a Semi-hit.`);
} else {
    console.log(`${movieName} is a Flop.`);
} 
*/

/* 
Write a program to calculate the salary as per the following table
*/

/* 
let salary = 0;
let gender = prompt("Enter the gender: (male, female)");
let experience = Number(prompt("Enter the years of experience: "));
let qualification = prompt("Enter the qualification: (PG, UG)");

if (gender == "male") {
    if (experience >= 10) {
        if (qualification == "PG") {
            salary = 15000;
        } else {
            salary = 10000;
        }
    } else {
        if (qualification == "PG") {
            salary = 10000;
        } else {
            salary = 7000;
        }
    }
} else {
    if (experience >= 10) {
        if (qualification == "PG") {
            salary = 12000;
        } else {
            salary = 9000;
        }
    } else {
        if (qualification == "PG") {
            salary = 10000;
        } else {
            salary = 6000;
        }
    }
}

console.log(`The salary is: ${salary}`); 
*/