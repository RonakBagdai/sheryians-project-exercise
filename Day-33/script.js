for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    process.stdout.write("⭐ ");
  }
  console.log();
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("⭐ ");
  }
  console.log();
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("⭐ ");
  }
  console.log();
}

for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("⭐ ");
  }
  console.log();
}

let prompt = require("prompt-sync")();
let n = prompt("Enter a number: ");
for (let i = 1; i <= n; i++) {
  for (let j = n; j >= i; j--) {
    process.stdout.write("⭐ ");
  }
  console.log();
}

// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number: ");
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("⭐ ");
//   }
//   console.log();
// }

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}
