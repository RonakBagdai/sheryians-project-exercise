function Toffee(name) {
  this.name = name;
}

Toffee.prototype.price = 10;

let toffee1 = new Toffee("Choco Toffee");
let toffee2 = new Toffee("Vanilla Toffee");
console.log(toffee1);
console.log(toffee2);
