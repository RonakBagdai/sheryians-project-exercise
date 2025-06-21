const users = [
  {
    name: "Svetlana Anyukova",
    role: "Mobile Designer",
    rate: "$40/hr",
    status: "available",
    image: "https://i.pravatar.cc/150?img=32",
    istatus: "Stranger",
    tagline:
      "Samantha is an Android and iOS designer with advanced knowledge in coding.",
    skills: ["PHP", "Android", "iOS", "+2"],
  },
  {
    name: "John Carter",
    role: "Web Developer",
    rate: "$35/hr",
    status: "available",
    image: "https://i.pravatar.cc/150?img=47",
    istatus: "Stranger",
    tagline:
      "John specializes in modern full-stack applications with a focus on React and Node.",
    skills: ["JavaScript", "React", "Node.js", "+3"],
  },
  {
    name: "Alice Smith",
    role: "UI/UX Designer",
    rate: "$50/hr",
    status: "available",
    istatus: "Stranger",
    image: "https://i.pravatar.cc/150?img=15",
    tagline:
      "Alice creates seamless and beautiful user experiences for mobile and web apps.",
    skills: ["Figma", "Sketch", "Adobe XD", "+1"],
  },
  {
    name: "David Lee",
    role: "Front-End Developer",
    rate: "$45/hr",
    status: "available",
    istatus: "Stranger",
    image: "https://i.pravatar.cc/150?img=58",
    tagline:
      "David crafts responsive and performant websites using HTML, CSS, and JavaScript.",
    skills: ["HTML", "CSS", "JavaScript", "+2"],
  },
  {
    name: "Emma Johnson",
    role: "Backend Developer",
    rate: "$55/hr",
    status: "available",
    image: "https://i.pravatar.cc/150?img=23",
    istatus: "Stranger",
    tagline:
      "Emma builds robust APIs and scalable backend systems using Node.js and MongoDB.",
    skills: ["Node.js", "MongoDB", "Express", "+3"],
  },
  {
    name: "Liam Brown",
    role: "Full-Stack Developer",
    rate: "$60/hr",
    status: "available",
    istatus: "Stranger",
    image: "https://i.pravatar.cc/150?img=41",
    tagline:
      "Liam is experienced in both frontend and backend technologies for modern web applications.",
    skills: ["React", "Node.js", "PostgreSQL", "+4"],
  },
  {
    name: "Sophia Turner",
    role: "Data Analyst",
    rate: "$48/hr",
    status: "available",
    istatus: "Stranger",
    image: "https://i.pravatar.cc/150?img=11",
    tagline:
      "Sophia turns raw data into actionable insights using tools like Python and SQL.",
    skills: ["Python", "SQL", "Tableau", "+2"],
  },
  {
    name: "James Wilson",
    role: "DevOps Engineer",
    rate: "$52/hr",
    status: "available",
    istatus: "Stranger",
    image: "https://i.pravatar.cc/150?img=36",
    tagline:
      "James ensures smooth CI/CD pipelines and infrastructure stability across projects.",
    skills: ["Docker", "Kubernetes", "AWS", "+3"],
  },
];

const main = document.querySelector("#main");

// Function to render user cards
function heroFunction() {
  let sum = "";

  users.forEach((elem, idx) => {
    sum += `<div class="profile-card">
      <div class="status">${elem.status}</div>
      <div class="rate">${elem.rate}</div>
      <img src="${elem.image}" alt="Profile Image" />
      <div class="name">${elem.name}</div>
      <div class="role">${elem.role}</div>
      <div class="tagline">${elem.tagline}</div>
      <div class="skills">
        <div class="skill">${elem.skills[0]}</div>
        <div class="skill">${elem.skills[1]}</div>
        <div class="skill">${elem.skills[2]}</div>
        <div class="skill">${elem.skills[3]}</div>
      </div>
      <h5 class="${
        elem.istatus === "Stranger" ? "status-red" : "status-green"
      }">
        Status: ${elem.istatus}
      </h5>
      <button id="${idx}" class="${
      elem.istatus === "Stranger" ? "button-blue" : "button-red"
    }">
        ${elem.istatus === "Stranger" ? "Add Friend" : "Remove Friend"}
      </button>
    </div>`;
  });

  main.innerHTML = sum;
}

// Initial rendering of user cards
heroFunction();

// Add event listener to handle button clicks
main.addEventListener("click", function (dets) {
  const user = users[dets.target.id];
  if (user.istatus == "Stranger") {
    user.istatus = "Friends";
  } else {
    user.istatus = "Stranger";
  }
  heroFunction();
});
