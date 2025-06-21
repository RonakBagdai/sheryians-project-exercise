function openFeatures() {
  let allElems = document.querySelectorAll(".elem");
  let fullElemsPage = document.querySelectorAll(".fullElem");
  let allFullElemsBackbtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach((elem) => {
    elem.addEventListener("click", () => {
      fullElemsPage.forEach((fullElem) => {
        fullElemsPage[elem.id].style.display = "block";
      });
    });
  });

  allFullElemsBackbtn.forEach((backBtn) => {
    backBtn.addEventListener("click", () => {
      fullElemsPage[backBtn.id].style.display = "none";
    });
  });
}

openFeatures();

function todoList() {
  var currentTask = [];

  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  }

  function renderTasks() {
    let allTask = document.querySelector(".allTask");
    let sum = "";
    if (currentTask.length === 0) {
      allTask.innerHTML = '<div class="task-list-heading">Task List</div>';
      allTask.innerHTML +=
        "<h2 style='color: #27374d;'>No tasks available</h2>";
      return;
    }

    currentTask.forEach((elem, idx) => {
      sum += `
      <div class="task-list-heading">Task List</div>
        <div class="task" data-idx="${idx}" style="cursor:pointer;">
          <h3>${elem.task} <span class=${elem.imp}>imp</span></h3>
          <button data-btn-idx="${idx}">Mark as Completed</button>
        </div>
      `;
    });
    allTask.innerHTML = sum;
    localStorage.setItem("currentTask", JSON.stringify(currentTask));

    // Show details modal on task click
    document.querySelectorAll(".task").forEach((taskDiv) => {
      taskDiv.addEventListener("click", function (e) {
        // Prevent click on button from opening modal
        if (e.target.tagName.toLowerCase() === "button") return;
        const idx = this.getAttribute("data-idx");
        const task = currentTask[idx];
        document.getElementById("modal-task-title").textContent = task.task;
        document.getElementById("modal-task-details").textContent =
          task.details || "No details provided.";
        document.getElementById("task-details-modal").style.display = "flex";
      });
    });

    // Mark as completed
    document.querySelectorAll(".task button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const idx = btn.getAttribute("data-btn-idx");
        currentTask.splice(idx, 1);
        localStorage.setItem("currentTask", JSON.stringify(currentTask));
        renderTasks();
      });
    });
  }

  // Modal close handler
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("task-details-modal");
    const closeBtn = document.getElementById("close-task-details");
    if (modal && closeBtn) {
      closeBtn.onclick = () => (modal.style.display = "none");
      modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
      };
    }
  });

  renderTasks();

  let form = document.querySelector(".addTask form");
  let input = document.querySelector(".addTask form input");
  let taskDetailsInput = document.querySelector(".addTask form textarea");
  let taskCheckbox = document.querySelector(".addTask form #check");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value === "" || taskDetailsInput.value === "") {
      alert("Please fill in all fields");
      return;
    }
    currentTask.push({
      task: input.value,
      details: taskDetailsInput.value,
      imp: taskCheckbox.checked,
    });
    renderTasks();
    input.value = "";
    taskDetailsInput.value = "";
    taskCheckbox.checked = false;
  });
}

todoList();

function dailyPlanner() {
  var dayPlanner = document.querySelector(".day-planner");

  var dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};

  var hours = Array.from(
    { length: 18 },
    (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`
  );

  var wholeDaySum = "";
  hours.forEach(function (elem, idx) {
    var savedData = dayPlanData[idx] || "";

    wholeDaySum =
      wholeDaySum +
      `<div class="day-planner-time">
  <p>${elem}</p>
  <input id=${idx} type="text" placeholder="..." value=${savedData}>
</div>`;
  });

  dayPlanner.innerHTML = wholeDaySum;

  var dayPlannerInput = document.querySelectorAll(".day-planner input");

  dayPlannerInput.forEach(function (elem) {
    elem.addEventListener("input", function () {
      console.log("hello");
      dayPlanData[elem.id] = elem.value;

      localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData));
    });
  });
}

dailyPlanner();

function motivationalQuote() {
  var motivationalQuoteContent = document.querySelector(".motivation-2 h1");
  var motivationAuthor = document.querySelector(".motivation-3 h2");

  async function fetchQuote() {
    let response = await fetch("https://api.realinspire.live/v1/quotes/random");
    let data = await response.json();

    const quoteObj = data[0];

    motivationalQuoteContent.innerHTML = `"${quoteObj.content}"`;
    motivationAuthor.innerHTML = `- ${quoteObj.author}`;
  }

  fetchQuote();
}

motivationalQuote();

function pomodoroTimer() {
  let pomodoroTimer = document.querySelector(".pomo-timer h1");
  let startBtn = document.querySelector(".pomo-timer .start-timer");
  let pauseBtn = document.querySelector(".pomo-timer .pause-timer");
  let resetBtn = document.querySelector(".pomo-timer .reset-timer");
  let session = document.querySelector(".pomodoro-timer-full-page .session");
  let isWorkSession = true;

  let totalSeconds = 25 * 60;
  let timerInterval = null;

  function updateTimer() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    pomodoroTimer.innerHTML = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
  }

  function startTimer() {
    clearInterval(timerInterval);

    if (isWorkSession) {
      timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          isWorkSession = false;
          clearInterval(timerInterval);
          pomodoroTimer.innerHTML = "05:00";
          session.innerHTML = "Break Time!";
          session.style.backgroundColor = "#f44336";
          totalSeconds = 5 * 60;
        }
      }, 5);
    } else {
      timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
          totalSeconds--;
          updateTimer();
        } else {
          isWorkSession = true;
          clearInterval(timerInterval);
          pomodoroTimer.innerHTML = "25:00";
          session.innerHTML = "Work Session!";
          session.style.backgroundColor = "#4caf50";
          totalSeconds = 25 * 60;
        }
      }, 5);
    }
  }

  function pauseTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    totalSeconds = 25 * 60;
    clearInterval(timerInterval);
    pomodoroTimer.innerHTML = "25:00";
    session.innerHTML = "Work Session!";
    session.style.backgroundColor = "#4caf50";
    isWorkSession = true;
    updateTimer();
  }

  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);
}

pomodoroTimer();

function weatherFunctionality() {
  // I have removed API key for security purpose
  var apiKey = "d5e75d78308943d992455557252006";
  var city = "Gondal";

  var header1Time = document.querySelector(".header1 h1");
  var header1Date = document.querySelector(".header1 h2");
  var header2Temp = document.querySelector(".header2 h2");
  var header2Condition = document.querySelector(".header2 h4");
  var precipitation = document.querySelector(".header2 .precipitation");
  var feelLike = document.querySelector(".header2 .humidity");
  var wind = document.querySelector(".header2 .wind");
  var location = document.querySelector(".header1 .location");

  var data = null;

  async function weatherAPICall() {
    var response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );
    data = await response.json();
    console.log(data);

    location.innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
    header2Temp.innerHTML = `${data.current.temp_c}°C`;
    header2Condition.innerHTML = `${data.current.condition.text}`;
    wind.innerHTML = `Wind: ${data.current.wind_kph} km/h (${data.current.wind_dir})`;
    feelLike.innerHTML = `Feels Like: ${data.current.feelslike_c}°C`;
    precipitation.innerHTML = `Precipitation: ${data.current.precip_mm} mm`;
  }

  weatherAPICall();

  function timeDate() {
    const totalDaysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var date = new Date();
    var dayOfWeek = totalDaysOfWeek[date.getDay()];
    var hours = date.getHours();
    var minutes = date.getMinutes();

    var tarik = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();

    header1Date.innerHTML = `${tarik} ${month}, ${year}`;

    if (hours > 12) {
      header1Time.innerHTML = `${dayOfWeek}, ${String(hours - 12).padStart(
        "2",
        "0"
      )}:${String(minutes).padStart("2", "0")} PM`;
    } else {
      header1Time.innerHTML = `${dayOfWeek}, ${String(hours).padStart(
        "2",
        "0"
      )}:${String(minutes).padStart("2", "0")} AM`;
    }
  }

  setInterval(() => {
    timeDate();
  }, 1000);
}

weatherFunctionality();

const themes = [
  // {
  //   "--pri": "#222222",
  //   "--sec": "#6d4c41",
  //   "--tri1": "#c7b198",
  //   "--tri2": "#f5f5f5",
  // },
  // {
  //   "--pri": "#232d23",
  //   "--sec": "#7d9778",
  //   "--tri1": "#e9e5d6",
  //   "--tri2": "#f7f7f2",
  // },
  // {
  //   "--pri": "#3e2c41",
  //   "--sec": "#a26769",
  //   "--tri1": "#d5b9b2",
  //   "--tri2": "#f6f6f6",
  // },
  // {
  //   "--pri": "#2d2424",
  //   "--sec": "#b85c38",
  //   "--tri1": "#e0c097",
  //   "--tri2": "#f8f1e5",
  // },
  // {
  //   "--pri": "#3a3a2c",
  //   "--sec": "#b5a642",
  //   "--tri1": "#e5e3c9",
  //   "--tri2": "#faf9f6",
  // },
  // {
  //   "--pri": "#4e342e",
  //   "--sec": "#bc6c25",
  //   "--tri1": "#e9c46a",
  //   "--tri2": "#f4f1ee",
  // },
  // {
  //   "--pri": "#232f23",
  //   "--sec": "#6b705c",
  //   "--tri1": "#ffe8d6",
  //   "--tri2": "#f5f5f5",
  // },
  // {
  //   "--pri": "#2d142c",
  //   "--sec": "#a72693",
  //   "--tri1": "#f7cac9",
  //   "--tri2": "#f9f6f7",
  // },
  {
    "--pri": "#2e1f27", // Deep Aubergine
    "--sec": "#ff6f3c", // Vivid Orange
    "--tri1": "#ffd460", // Warm Yellow
    "--tri2": "#f9f9f9", // Clean White
  },
  {
    "--pri": "#222823", // Charcoal
    "--sec": "#a3f7bf", // Neo Mint
    "--tri1": "#f7fff7", // Mint White
    "--tri2": "#f1f1f1", // Light Gray
  },
  {
    "--pri": "#2b2d42", // Charcoal Purple
    "--sec": "#ef233c", // Coral Red
    "--tri1": "#ffd6e0", // Blush Pink
    "--tri2": "#f8f9fa", // Soft White
  },
  {
    "--pri": "#222222", // Jet Black
    "--sec": "#faae2b", // Citrus Orange
    "--tri1": "#e7e247", // Lemon Yellow
    "--tri2": "#fffbe7", // Pale Lemon
  },
  {
    "--pri": "#1a1a1a", // Dark Slate
    "--sec": "#ff6b6b", // Coral Red
    "--tri1": "#ffe66d", // Soft Yellow
    "--tri2": "#f8f9fa", // Light Gray
  },
  {
    "--pri": "#2c3e50", // Midnight Blue
    "--sec": "#e74c3c", // Bright Red
    "--tri1": "#ecf0f1", // Light Gray
    "--tri2": "#bdc3c7", // Silver
  },
  {
    "--pri": "#34495e", // Dark Blue Gray
    "--sec": "#e67e22", // Pumpkin Orange
    "--tri1": "#f1c40f", // Bright Yellow
    "--tri2": "#ecf0f1", // Off-White
  },
  {
    "--pri": "#2c3e50", // Dark Blue
    "--sec": "#8e44ad", // Purple
    "--tri1": "#f1c40f", // Bright Yellow
    "--tri2": "#ecf0f1", // Off-White
  },
  {
    "--pri": "#1a1a1a", // Deep Charcoal
    "--sec": "#c0392b", // Crimson Red
    "--tri1": "#f39c12", // Bright Orange
    "--tri2": "#ecf0f1", // Soft White
  },
  {
    "--pri": "#2d3436", // Dark Gray
    "--sec": "#00cec9", // Teal
    "--tri1": "#dfe6e9", // Light Gray
    "--tri2": "#ffffff", // Pure White
  },
  {
    "--pri": "#3b3b58", // Dark Indigo
    "--sec": "#ff7675", // Light Coral
    "--tri1": "#74b9ff", // Sky Blue
    "--tri2": "#dfe6e9", // Light Gray
  },
  // ✨ Neutral Elegance (Notion-like)
  {
    "--pri": "#1a1a1a", // Text / Primary
    "--sec": "#ffffff", // Background
    "--tri1": "#f0f0f0", // Cards
    "--tri2": "#3a3a3a", // Headings
  },

  // 🟣 Linear (Dark theme)
  {
    "--pri": "#0d0d0d",
    "--sec": "#1a1a1a",
    "--tri1": "#2e2e2e",
    "--tri2": "#ffffff",
  },

  // 🟦 Stripe-style Blue Modern
  {
    "--pri": "#0f172a", // Dark navy
    "--sec": "#1e293b", // Slate
    "--tri1": "#38bdf8", // Sky blue accent
    "--tri2": "#f8fafc", // Light text
  },

  // 🟢 Soft Green Minimal
  {
    "--pri": "#1a2e2b", // Forest green
    "--sec": "#f0fdfa", // Light mint
    "--tri1": "#a7f3d0", // Accent
    "--tri2": "#0f172a", // Headings
  },

  // 🖤 Black & Gold Premium
  {
    "--pri": "#0e0e0e",
    "--sec": "#1a1a1a",
    "--tri1": "#d4af37", // Gold
    "--tri2": "#ffffff",
  },

  // 🟣 Purple & Soft Blue (Vercel vibes)
  {
    "--pri": "#1e1b4b",
    "--sec": "#312e81",
    "--tri1": "#7c3aed",
    "--tri2": "#e0e7ff",
  },

  // 🧊 Frosted Glass Blue
  {
    "--pri": "#1e3a8a", // Royal blue
    "--sec": "#f1f5f9", // Light background
    "--tri1": "#cbd5e1", // Soft border
    "--tri2": "#111827", // Heading
  },

  // 🧼 Apple-like Soft Gray & Blue
  {
    "--pri": "#1d1d1f",
    "--sec": "#f5f5f7",
    "--tri1": "#e5e5ea",
    "--tri2": "#0071e3", // Blue accent
  },

  // 🧪 Modern Contrast
  {
    "--pri": "#121212",
    "--sec": "#242424",
    "--tri1": "#3f3f46",
    "--tri2": "#e4e4e7",
  },
];

function applyTheme(theme) {
  const root = document.documentElement;
  for (let variable in theme) {
    root.style.setProperty(variable, theme[variable]);
  }
}

function changeTheme() {
  const themeBtn = document.querySelector(".theme");
  let lastIndex = parseInt(localStorage.getItem("lastThemeIndex")) || -1;

  themeBtn.addEventListener("click", () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * themes.length);
    } while (randomIndex === lastIndex);

    const selectedTheme = themes[randomIndex];
    applyTheme(selectedTheme);

    localStorage.setItem("lastThemeIndex", randomIndex);
  });
}

// Apply last saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const lastIndex = parseInt(localStorage.getItem("lastThemeIndex"));
  if (!isNaN(lastIndex) && themes[lastIndex]) {
    applyTheme(themes[lastIndex]);
  }
});

changeTheme();
