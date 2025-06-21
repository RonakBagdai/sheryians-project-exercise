function getProfileData(username) {
  const url = `https://api.github.com/users/${username}`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

function getRepos(username) {
  const url = `https://api.github.com/users/${username}/repos`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
}

function profileData(data) {
  let userHtml = `
        <img
          src="${data.avatar_url}"
          alt="User Avatar"
          class="avatar"
          />
          <h2>${data.name || "No name provided"}</h2>
          <p><strong>Username:</strong> ${data.login}</p>
          <p>${data.bio || "No bio available"}</p>
          <p><strong>Followers:</strong> ${data.followers}</p>
          <p><strong>Following:</strong> ${data.following}</p>
          <p><strong>Location:</strong> ${
            data.location || "No location provided"
          }</p>
          <p><strong>Public Repos:</strong> ${data.public_repos}</p>
          <p><strong>Profile:</strong>
          <a href="${data.html_url}" target="_blank">github.com/${
    data.login
  }</a>
          </p>
          <p><strong>Repositories:</strong></p>
          <ul id="repos-list"></ul>
          `;
  let userInfo = document.querySelector("#user-info");
  userInfo.innerHTML = userHtml;
  userInfo.style.display = "block";
  let reposList = document.querySelector("#repos-list");
  reposList.innerHTML = "Loading...";
}

let searchBtn = document.querySelector("#search-button");
let userInfo = document.querySelector("#username");

searchBtn.addEventListener("click", (event) => {
  const username = userInfo.value.trim();
  if (username) {
    getProfileData(username)
      .then((data) => {
        profileData(data);
        return getRepos(username);
      })
      .then((repos) => {
        let reposList = document.querySelector("#repos-list");
        reposList.innerHTML = "";
        const latestRepos = repos.slice(0, 3);
        latestRepos.forEach((repo) => {
          let repoItem = document.createElement("li");
          repoItem.innerHTML = `
              <a href="${repo.html_url}" target="_blank">
                ${repo.name}
              </a>
            `;
          reposList.appendChild(repoItem);
        });
      });
  } else {
    alert("Please enter a username");
  }
});
