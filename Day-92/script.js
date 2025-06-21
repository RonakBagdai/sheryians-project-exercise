let prompt = require("prompt-sync")();

// class CabService {
//   constructor() {
//     this.car_type = "";
//     this.km = this.bill = 0.0;
//   }

//   accept(car_type, km) {
//     this.car_type = prompt("Enter the type of car (AC/NON-AC): ");
//     this.km = prompt("Enter the distance traveled (in km): ");
//   }

//   calculate() {
//     if (this.car_type === "AC") {
//       if (this.km <= 5) {
//         this.bill = 150;
//       } else {
//         this.bill = 150 + (this.km - 5) * 10;
//       }
//     } else if (this.car_type === "NON-AC") {
//       if (this.km <= 5) {
//         this.bill = 120;
//       } else {
//         this.bill = 120 + (this.km - 5) * 8;
//       }
//     }
//   }

//   display() {
//     console.log(`Car Type: ${this.car_type}`);
//     console.log(`Distance Traveled: ${this.km} km`);
//     console.log(`Total Bill: ₹${this.bill.toFixed(2)}`);
//   }
// }

// let cabService = new CabService();
// cabService.accept();
// cabService.calculate();
// cabService.display();

class RailwayTicket {
  constructor() {
    this.name = "";
    this.coach = "";
    this.mob_no = 0;
    this.amt = 0;
    this.total_amt = 0;
  }

  accept(name, coach, mob_no, amt) {
    this.name = prompt("Enter passenger name: ");
    this.coach = prompt("Enter coach type (1st AC/2nd AC/3rd AC/Sleeper): ");
    this.mob_no = prompt("Enter mobile number: ");
    this.amt = Number(prompt("Enter ticket amount: "));
  }

  update() {
    if (this.coach === "1st AC") {
      this.total_amt = this.amt + 700;
    } else if (this.coach === "2nd AC") {
      this.total_amt = this.amt + 500;
    } else if (this.coach === "3rd AC") {
      this.total_amt = this.amt + 250;
    } else if (this.coach === "Sleeper") {
      this.total_amt = this.amt;
    }
  }

  display() {
    console.log(`Passenger Name: ${this.name}`);
    console.log(`Coach Type: ${this.coach}`);
    console.log(`Mobile Number: ${this.mob_no}`);
    console.log(`Total Amount: ₹${this.total_amt}`);
  }
}

let railwayTicket = new RailwayTicket();
railwayTicket.accept();
railwayTicket.update();
railwayTicket.display();
