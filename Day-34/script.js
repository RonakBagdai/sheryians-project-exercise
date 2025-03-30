/* 
    Q 37.
    A
    A B
    A B C
    A B C D
    A B C D E
*/
let prompt = require("prompt-sync")();
let n = prompt("Enter a number: ");

/* for (let i = 65; i <= 69; i++) {
  for (let j = 65; j <= i; j++) {
    process.stdout.write(String.fromCharCode(j) + " ");
  }
  console.log();
} */

/* ------------------------------------------------------------------------------------- */

/* 
Q 39.
        *
      * *
    * * *
  * * * *
* * * * *
*/

/* for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  for (let k = 1; k <= i; k++) {
    process.stdout.write("* ");
  }
  console.log();
} */

/* ------------------------------------------------------------------------------------- */

// Triangle
/* for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= i; k++) {
    process.stdout.write("* ");
  }
  console.log();
} */

/* ------------------------------------------------------------------------------------- */
// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number: ");

//inverted traingle like above
/* for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  for (let k = 1; k <= i; k++) {
    process.stdout.write("* ");
  }
  console.log();
} */

/* ------------------------------------------------------------------------------------- */

/* X Pattern */

/* for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (j == i || j == n - i + 1) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
} */

/* ------------------------------------------------------------------------------------- */

/* V pattern */

/* for (let i = 1; i <= n; i++) {
  for (let j = 1;   j <= 2 * n; j++) {
    if (j == i || j == 2 * n - i) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
} */

/* ------------------------------------------------------------------------------------- */

/* Butterfly Pattern */
/* for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    process.stdout.write("⭐ ");
  }
  console.log();
}
 */

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(" *");
  }
  for (let j = 1; j <= 2 * (n - i); j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write(" *");
  }
  console.log();
}

for (let i = n - 1; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(" *");
  }
  for (let j = 1; j <= 2 * (n - i); j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write(" *");
  }
  console.log();
}
