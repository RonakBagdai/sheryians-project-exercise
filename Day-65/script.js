// function getDetails(username, cb) {
//   setTimeout(() => {
//     console.log("sending the request to instagram...");
//   }, 1000);
//   setTimeout(() => {
//     console.log("Fetching the data from instagram...");
//   }, 3000);
//   setTimeout(() => {
//     console.log("Data fetched successfully");
//     cb();
//   }, 5000);
// }

// getDetails("John", function () {
//   console.log("Data is ready to be used");
//   console.log("Name: John Doe");
//   console.log("Age: 30");
//   console.log("Location: New York");
//   console.log("Followers: 1000");
//   console.log("Following: 500");
// });

// function step1(cb) {
//   console.log("Step 1");
//   cb();
// }

// function step2(cb) {
//   console.log("Step 2");
//   cb();
// }

// function step3(cb) {
//   console.log("Step 3");
//   cb();
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All steps completed");
//     });
//   });
// });

// const pr = new Promise((resolve, reject) => {
//   console.log("Instagram jao Data laao");
//   console.log("Instagram me data collect ho raha hai");
//   console.log("Instagram me data collect me error nahi aaya");
//   console.log("Instagram data...");
//   resolve();
// });

// pr.then(() => {
//   console.log("resolved");
// }).catch((err) => {
//   console.log("rejected");
// });

function step1() {
  return new Promise((resolve, reject) => {
    console.log("Step 1");
    resolve();
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    console.log("Step 2");
    resolve();
  });
}

function step3() {
  return new Promise((resolve, reject) => {
    console.log("Step 3");
    resolve();
  });
}

step1()
  .then(step2)
  .then(step3)
  .then(() => {
    console.log("All steps completed");
  })
  .catch((err) => {
    console.log("Error occurred:", err);
  });
