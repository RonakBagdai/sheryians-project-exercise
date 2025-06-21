// document.querySelector("button").addEventListener("click", () => {
//   fetch("https://api.github.com/users/RonakBagdai")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
//   const pTag = document.querySelector("p");
//   pTag.innerHTML = `
//       <h2>${data.name}</h2>
//       <p>${data.bio}</p>
//       <img src="${data.avatar_url}" alt="Avatar" />
//     `;
// });

// const button = document.querySelector("button");
// const pTag = document.querySelector("p");
// const url = "https://api.github.com/users/RonakBagdai";
// button.addEventListener("click", () => {
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       pTag.innerHTML = `
//         <h2>${data.name}</h2>
//         <p>${data.bio}</p>
//         <p>${data.location}</p>
//         <p><a href="${data.repos_url}">link</a></p>
//       `;
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//       pTag.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
//     });
// });

const submitButton = document.querySelector("button");
const userInfo = document.querySelector("#user-info");

submitButton.addEventListener("click", () => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userInfo.innerHTML = `<img src="${
        data.avatar_url
      }" alt="Profile Picture" />
        <h2>${data.name || "No name provided"}</h2>
        <p><strong>Username:</strong> ${data.login}</p>
        <p>${data.bio || "No bio available"}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <a href="${data.html_url}" target="_blank">View GitHub Profile</a>
        <h3>Public Repositories</h3>
        <ul id="repos-list">Loading...</ul>`;

      document.querySelector("#user-info").style.display = "block";

      return fetch(data.repos_url);
    })
    .then((response) => response.json())
    .then((repos) => {
      const reposList = document.querySelector("#repos-list");
      reposList.innerHTML = "";

      // show only latest 5 repos
      const latestRepos = repos.slice(0, 5);
      latestRepos.forEach((repo) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        reposList.appendChild(listItem);
      });
    });
});
