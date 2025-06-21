// class Library {
//   constructor() {
//     this.books = [];
//   }

//   addBooks(books) {
//     if (Array.isArray(books)) {
//       this.books.push(...books);
//     } else {
//       this.books.push(books);
//     }
//   }

//   ListBooks() {
//     this.books.forEach((book, index) => {
//       console.log(`${index + 1}. ${book.title} by ${book.author} `);
//     });
//   }
// }

// class Book {
//   constructor(title, isbn, price, author) {
//     this.title = title;
//     this.isbn = isbn;
//     this.price = price;
//     this.author = author;
//     this.readStatus = false;
//   }

//   info() {
//     console.log(
//       `${this.title} is written by ${this.author} and costs $${
//         this.price
//       }. ISBN: ${this.isbn} and you have ${
//         this.readStatus ? "read" : "not read"
//       } this book. ${this.readStatus ? "✅" : "❌"}`
//     );
//   }

//   changeReadStatus() {
//     this.readStatus = !this.readStatus;
//   }
// }

// let library = new Library();
// let book1 = new Book(
//   "The Great Gatsby",
//   "9780743273565",
//   10.99,
//   "F. Scott Fitzgerald"
// );
// let book2 = new Book(
//   "To Kill a Mockingbird",
//   "9780061120084",
//   7.99,
//   "Harper Lee"
// );
// let book3 = new Book("1984", "9780451524935", 8.99, "George Orwell");

// library.addBooks([book1, book2, book3]);
// library.ListBooks();

class MobileShop {
  constructor() {
    this.mobiles = [];
  }

  addMobile(mobile) {
    this.mobiles.push(mobile);
  }

  listMobiles() {
    this.mobiles.forEach((mobile, index) => {
      console.log(
        `${index + 1}. ${mobile.brand} ${mobile.model} - ${mobile.color} - $${
          mobile.price
        }`
      );
    });
  }
}

class Mobile {
  constructor(brand, model, price, color) {
    this.id = Math.floor(Math.random() * 1000);
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
    this.sim = [];
  }

  getMobileInfo() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}, Color: ${this.color} `
    );
  }

  insertSim(sim) {
    if (this.sim.length === 2) {
      console.log("You can only insert 2 SIM cards.");
      return;
    }
    this.sim.push(sim);
  }
}

class Sim {
  constructor(brand, balance) {
    this.brand = brand;
    this.balance = balance;
  }

  addBalance(balance) {
    if (balance < 0) {
      console.log("Balance cannot be negative.");
      return;
    }
    this.balance += balance;
  }
}

let mobileShop = new MobileShop();
let samsung = new Mobile("Samsung", "Galaxy S25 Ultra", 799, "Black");
let tatadocomo = new Sim("Tata Docomo", 500);

samsung.insertSim(tatadocomo);
mobileShop.addMobile(samsung);
mobileShop.listMobiles();
