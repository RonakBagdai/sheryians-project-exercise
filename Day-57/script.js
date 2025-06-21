// function cupCake() {
//   this.name = "Chocolate";
// }

// let cupcake1 = new cupCake();
// console.log(cupcake1.name); // Chocolate

// function Toffee(flavor) {
//   this.flavor = flavor;
//   this.price = price;
//   this.expiry = expiry;
// }

// let toffee1 = new Toffee("Vanilla", 10, "2024-12-31");
// let toffee2 = new Toffee("Chocolate", 15, "2025-01-31");

class Toffee {
  constructor(flavor, price, expiry) {
    this.flavor = flavor;
    this.price = price;
    this.expiry = expiry;
  }

  //   getDetails() {
  //     return `Flavor: ${this.flavor}, Price: ${this.price}, Expiry: ${this.expiry}`;
  //   }
}

let toffee1 = new Toffee("Vanilla", 10, "2024-12-31");
let toffee2 = new Toffee("Chocolate", 15, "2025-01-31");
// console.log(toffee1.getDetails()); // Flavor: Vanilla, Price: 10, Expiry: 2024-12-31
// console.log(toffee2.getDetails()); // Flavor: Chocolate, Price: 15, Expiry: 2025-01-31
console.log(toffee1);
console.log(toffee2);