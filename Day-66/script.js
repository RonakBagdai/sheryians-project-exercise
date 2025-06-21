// function step1(cb) {
//   return new Promise((resolve, reject) => {
//     console.log("step 1...");
//     resolve();
//   });
// }

// function step2(cb) {
//   return new Promise((resolve, reject) => {
//     console.log("step 2...");
//     resolve();
//   });
// }

// function step3(cb) {
//   return new Promise((resolve, reject) => {
//     console.log("step 3...");
//     resolve();
//   });
// }

// step1()
//   .then(step2)
//   .then(step3)
//   .then(() => {
//     console.log("All steps completed.");
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });

// ✅ 1. Simulate a Food Delivery

// Task: Create a function orderFood that reutrns a Promise. It should resolve after 2 seconds with "🍕 Pizza Delivered!".

// Bonus: Add a chance to reject with "🚫 Delivery Failed!".

/* function orderFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.7; // 80% chance to succeed
      if (success) resolve();
      else reject();
    }, 2000);
  });
}

orderFood()
  .then(() => {
    console.log("🍕 Pizza Delivered!");
  })
  .catch(() => {
    console.error("🚫 Delivery Failed!");
  }); */

// ✅ 2. Chained Promises: User → Posts → Comments

// Task:
// 1. Create a function getUser that returns a Promise. It should resolve with { id: 1, name: "Harsh" }.
// 2. Create a function getPosts that takes a userId and returns a Promise. It should resolve with a list of post titles.
// 3. Create a function getComments that takes a postId and returns a Promise. It should resolve with comments.
// 4. Chain them together using .then() and log the final output.

/* function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Harsh" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

function getComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Comment 1", "Comment 2"]);
    }, 1000);
  });
}

getUser()
  .then((user) => {
    console.log("User:", user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return getComments(posts[0]);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .finally(() => {
    console.log("All done!");
  });
 */

// ✅ 3. Fake API Delay

// Task:
// Write a function fakeApiCall(endpoint) that:
//   -   Accepts a string like "users" or "posts"
//   -   Resolves with some dummy data after a random delay (1-3 seconds)

function fakeApiCall(endpoint) {
  const data = {
    users: ["John Doe", "Jane Smith", "Alice Johnson"],
    posts: ["Post 1", "Post 2", "Post 3"],
  };
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000) + 1000; // Random delay between 1-3 seconds
    setTimeout(() => {
      if (data[endpoint]) {
        resolve(data[endpoint]);
      } else {
        reject(new Error("Invalid endpoint"));
      }
    }, delay);
  });
}

fakeApiCall("users")
  .then((data) => {
    console.log("Users:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
fakeApiCall("posts")
  .then((data) => {
    console.log("Posts:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
