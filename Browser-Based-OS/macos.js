// Real-Time Clock
function updateClock() {
  const date = document.getElementById("date");
  const clock = document.getElementById("clock");
  const now = new Date();
  let time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  time = time.replace(/am|pm/i, (match) => match.toUpperCase());
  clock.textContent = time;
  date.textContent = now.toLocaleDateString([], {
    weekday: "short",
    month: "long",
    day: "numeric",
  });
}
setInterval(updateClock, 1000);
updateClock();

// --- DRAGGABLE LOGIC ---
function makeDraggable(element, handleSelector = null) {
  const handle = handleSelector
    ? element.querySelector(handleSelector)
    : element;
  let isDragging = false,
    offsetX = 0,
    offsetY = 0;

  function onMouseMove(e) {
    if (!isDragging) return;
    element.style.left = `${e.clientX - offsetX}px`;
    element.style.top = `${e.clientY - offsetY}px`;
  }

  function onMouseUp() {
    isDragging = false;
    element.style.cursor = "grab";
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  handle.addEventListener("mousedown", (e) => {
    // For folders, prevent drag if renaming
    if (
      e.target.classList.contains("folder-name") ||
      e.target.tagName === "INPUT"
    )
      return;

    isDragging = true;
    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;
    element.style.cursor = "grabbing";
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    onMouseMove(e); // Move instantly
    bringToFront(element); // Bring to front on drag start
  });
}

// --- WINDOW LOGIC ---
function createWindow(appName) {
  const win = document.createElement("div");
  win.classList.add("window");
  win.style.top = "100px";
  win.style.left = "100px";

  let content;

  // --- Finder Window Logic ---
  if (appName === "Finder") {
    content = `
      <div class="finder-header">
        <div class="finder-traffic-lights">
          <span class="traffic-light close"></span>
          <span class="traffic-light minimize"></span>
          <span class="traffic-light maximize"></span>
        </div>
        <span class="finder-title">ronak</span>
        <div class="finder-toolbar">
          <button class="toolbar-btn"><img src="assets/app-icons/grid.svg" alt="grid"></button>
          <button class="toolbar-btn"><img src="assets/app-icons/list.svg" alt="list"></button>
          <button class="toolbar-btn"><img src="assets/app-icons/columns.svg" alt="column"></button>
          <button class="toolbar-btn"><img src="assets/app-icons/gallery.svg" alt="gallery"></button>
          <button class="toolbar-btn"><img src="assets/app-icons/share.svg" alt="share"></button>
          <button class="toolbar-btn"><img src="assets/app-icons/tag.svg" alt="tag"></button>
          <button class="toolbar-btn"><img src="assets/app-icons/more.svg" alt="more"></button>
        </div>
      </div>
      <div class="finder-body">
        <aside class="finder-sidebar">
          <div class="sidebar-section">
            <div class="sidebar-title">Favourites</div>
            <div class="sidebar-item">AirDrop</div>
            <div class="sidebar-item">Recents</div>
            <div class="sidebar-item">Applications</div>
            <div class="sidebar-item">Desktop</div>
            <div class="sidebar-item">Documents</div>
            <div class="sidebar-item">Downloads</div>
            <div class="sidebar-item">ScreenShot</div>
            <div class="sidebar-item active-home">ronak</div>
          </div>
          <div class="sidebar-section">
            <div class="sidebar-title">iCloud</div>
            <div class="sidebar-item">iCloud Drive</div>
            <div class="sidebar-item">Shared</div>
          </div>
          <div class="sidebar-section">
            <div class="sidebar-title">Locations</div>
            <div class="sidebar-item">Ronak’s MacBook Air</div>
            <div class="sidebar-item">Macintosh HD</div>
          </div>
        </aside>
        <main class="finder-main">
          <div class="finder-files">
            <div class="finder-file"><img src="assets/app-icons/icon_256x256.png"><span>Applications</span></div>
            <div class="finder-file"><img src="assets/app-icons/icon_256x256.png"><span>Day-48</span></div>
            <div class="finder-file"><img src="assets/app-icons/icon_256x256.png"><span>Desktop</span></div>
            <div class="finder-file"><img src="assets/app-icons/icon_256x256.png"><span>Documents</span></div>
            <div class="finder-file"><img src="assets/app-icons/icon_256x256.png"><span>Downloads</span></div>
            <div class="finder-file"><img src="assets/app-icons/icon_256x256.png"><span>Movies</span></div>
            <div class="finder-file"><img src="assets/app-icons/icon_256x256.png"><span>Music</span></div>
            <div class="finder-file"><img src="assets/app-icons/icon_256x256.png"><span>node_modules</span></div>
            <div class="finder-file"><img src="assets/app-icons/icon_256x256.png"><span>package-lock.json</span></div>
            <div class="finder-file"><img src="assets/app-icons/icon_256x256.png"><span>package.json</span></div>
            <div class="finder-file"><img src="assets/app-icons/icon_256x256.png"><span>Pictures</span></div>
            <div class="finder-file"><img src="assets/app-icons/icon_256x256.png"><span>Public</span></div>
          </div>
          <div class="finder-footer">
            <span>12 items, 391.21 GB available</span>
            <div class="finder-path">Macintosh HD &gt; Users &gt; ronak</div>
          </div>
        </main>
      </div>
    `;
    win.classList.add("finder-window");
    win.innerHTML = content;
    makeDraggable(win, ".finder-header");
    document.getElementById("desktop").appendChild(win);
    bringToFront(win);

    // Finder window controls
    const closeBtn = win.querySelector(".close");
    if (closeBtn) closeBtn.addEventListener("click", () => win.remove());
    const minimizeBtn = win.querySelector(".minimize");
    if (minimizeBtn)
      minimizeBtn.addEventListener("click", () => (win.style.display = "none"));
    const maximizeBtn = win.querySelector(".maximize");
    if (maximizeBtn)
      maximizeBtn.addEventListener("click", () => {
        if (win.style.width === "100%" && win.style.height === "100%") {
          win.style.width = "900px";
          win.style.height = "600px";
        } else {
          win.style.width = "100%";
          win.style.height = "100%";
        }
      });
    return;
  }

  // --- Terminal Window Logic ---
  if (appName === "Terminal") {
    content = `
      <div class="terminal-header">
        <div class="traffic-lights">
          <span class="traffic-light close"></span>
          <span class="traffic-light minimize"></span>
          <span class="traffic-light maximize"></span>
        </div>
        <div class="terminal-title">
          <img src="assets/app-icons/icon_256x256.png" class="folder-icon" alt="folder">
          ronak — zsh — 80×24
        </div>
      </div>
      <div class="terminal-body" id="terminal-body">
        <div class="terminal-line">Last login: Wed Jun 25 15:12:31 on console</div>
        <div class="terminal-line" id="input-line">
          <span class="user">ronak@Ronaks-MacBook-Air</span> <span class="path">~</span> <span class="symbol">%</span>
          <span class="typed-text" id="typed-text"></span>
          <span class="blinking-cursor"></span>
        </div>
      </div>
    `;
    win.classList.add("window", "terminal-window");
    win.innerHTML = content;
    makeDraggable(win, ".terminal-header");
    document.getElementById("desktop").appendChild(win);
    bringToFront(win);

    // --- Terminal Input Logic ---
    const terminalBody = win.querySelector("#terminal-body");
    const typedText = win.querySelector("#typed-text");
    const inputLine = win.querySelector("#input-line");
    let currentInput = "";

    // Focus terminal on click for input
    inputLine.tabIndex = 0;
    inputLine.focus();

    win.addEventListener("mousedown", () => {
      inputLine.focus();
    });

    // Attach keydown only when this terminal is focused
    inputLine.addEventListener("keydown", (e) => {
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        currentInput += e.key;
        typedText.textContent = currentInput;
        e.preventDefault();
      }
      if (e.key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        typedText.textContent = currentInput;
        e.preventDefault();
      }
      if (e.key === "Enter") {
        handleCommand(currentInput);
        currentInput = "";
        typedText.textContent = "";
        e.preventDefault();
      }
    });

    function handleCommand(cmd) {
      if (!cmd) return;
      const newLine = document.createElement("div");
      newLine.className = "terminal-line";
      newLine.innerHTML = `<span class="user">ronak@Ronaks-MacBook-Air</span> <span class="path">~</span> <span class="symbol">%</span> ${cmd}`;
      terminalBody.insertBefore(newLine, inputLine);

      // Mock response
      const responseText = getCommandOutput(cmd);
      if (responseText) {
        const response = document.createElement("div");
        response.className = "terminal-line";
        response.textContent = responseText;
        terminalBody.insertBefore(response, inputLine);
      }

      // Auto scroll to bottom
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function getCommandOutput(cmd) {
      if (cmd.trim() === "clear") {
        // Clear previous lines except input line
        const lines = Array.from(
          terminalBody.querySelectorAll(".terminal-line")
        );
        lines.forEach((line) => {
          if (line.id !== "input-line") line.remove();
        });
        return "";
      }
      if (cmd.trim() === "help") {
        return "Available commands: help, clear, about";
      }
      if (cmd.trim() === "about") {
        return "This is a simulated macOS Terminal by Ronak.";
      }
      return `zsh: command not found: ${cmd}`;
    }

    // Make inputLine focusable and auto-focus
    setTimeout(() => inputLine.focus(), 0);

    // Close, Minimize, Maximize logic
    const closeBtn = win.querySelector(".close");
    if (closeBtn) closeBtn.addEventListener("click", () => win.remove());
    const minimizeBtn = win.querySelector(".minimize");
    if (minimizeBtn)
      minimizeBtn.addEventListener("click", () => (win.style.display = "none"));
    const maximizeBtn = win.querySelector(".maximize");
    if (maximizeBtn)
      maximizeBtn.addEventListener("click", () => {
        if (win.style.width === "100%" && win.style.height === "100%") {
          win.style.width = "600px";
          win.style.height = "300px";
        } else {
          win.style.width = "100%";
          win.style.height = "100%";
        }
      });

    return; // Terminal window logic ends here
  }

  // --- Non-terminal windows ---
  content = `<div class="window-content">Welcome to ${appName}!</div>`;
  win.innerHTML = `
    <div class="title-bar">
      <span class="traffic-light close"></span>
      <span class="traffic-light minimize"></span>
      <span class="traffic-light maximize"></span>
      <span class="window-title">${appName}</span>
    </div>
    ${content}
  `;
  makeDraggable(win, ".title-bar");
  document.getElementById("desktop").appendChild(win);
  bringToFront(win);

  // Close, Minimize, Maximize logic
  const closeBtn = win.querySelector(".close");
  if (closeBtn) closeBtn.addEventListener("click", () => win.remove());
  const minimizeBtn = win.querySelector(".minimize");
  if (minimizeBtn)
    minimizeBtn.addEventListener("click", () => (win.style.display = "none"));
  const maximizeBtn = win.querySelector(".maximize");
  if (maximizeBtn)
    maximizeBtn.addEventListener("click", () => {
      if (win.style.width === "100%" && win.style.height === "100%") {
        win.style.width = "600px";
        win.style.height = "300px";
      } else {
        win.style.width = "100%";
        win.style.height = "100%";
      }
    });
}
// --- FOLDER LOGIC ---
function createFolder() {
  folderCount++;
  const folder = document.createElement("div");
  folder.classList.add("desktop-item");
  folder.style.left = `${contextMenu.offsetLeft}px`;
  folder.style.top = `${contextMenu.offsetTop}px`;

  const folderName =
    folderCount === 1 ? "New Folder" : `New Folder ${folderCount}`;
  folder.innerHTML = `
    <img src="assets/app-icons/icon_256x256.png" alt="Folder" draggable="false">
    <div class="folder-name">${folderName}</div>
  `;

  desktop.appendChild(folder);
  makeDraggable(folder); // Drag anywhere on folder
  addRenameLogic(folder);
}

// --- RENAME LOGIC ---
function addRenameLogic(folder) {
  const nameDiv = folder.querySelector(".folder-name");
  nameDiv.addEventListener("click", () => {
    const currentName = nameDiv.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentName;
    input.className = "rename-input";
    nameDiv.replaceWith(input);
    input.focus();
    input.select();

    function finishRename() {
      const newName = input.value.trim() || currentName;
      const newDiv = document.createElement("div");
      newDiv.className = "folder-name";
      newDiv.textContent = newName;
      input.replaceWith(newDiv);
      addRenameLogic(folder); // Re-bind click
    }

    input.addEventListener("blur", finishRename);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") input.blur();
      if (e.key === "Escape") {
        input.value = currentName;
        input.blur();
      }
    });
  });
}

// --- Z-INDEX MANAGEMENT ---
function bringToFront(win) {
  win.addEventListener("mousedown", () => {
    document.querySelectorAll(".window").forEach((w) => (w.style.zIndex = "1"));
    win.style.zIndex = "9999"; // Bring this window to the front
  });
}

function setupContextMenus() {
  const desktop = document.getElementById("desktop");
  const desktopMenu = document.getElementById("context-menu");
  const finderMenu = document.getElementById("finder-context-menu");

  function hideMenus() {
    desktopMenu.style.display = "none";
    finderMenu.style.display = "none";
  }

  // Desktop right-click (only on empty desktop, not on Finder window)
  desktop.addEventListener("contextmenu", (e) => {
    // If right-click is inside a Finder window, do nothing
    if (e.target.closest && e.target.closest(".finder-window")) return;
    e.preventDefault();
    hideMenus();
    desktopMenu.style.left = `${e.pageX}px`;
    desktopMenu.style.top = `${e.pageY}px`;
    desktopMenu.style.display = "block";
  });

  // Two-finger tap (touch) for both desktop and Finder
  document.addEventListener("touchstart", function (e) {
    if (e.touches.length === 2) {
      const [touch1, touch2] = e.touches;
      const centerX = (touch1.pageX + touch2.pageX) / 2;
      const centerY = (touch1.pageY + touch2.pageY) / 2;
      const target = document.elementFromPoint(centerX, centerY);

      hideMenus();

      // Robust: climb up to .finder-window if needed
      const finderWin =
        target && target.closest && target.closest(".finder-window");
      if (finderWin) {
        finderMenu.style.left = `${centerX}px`;
        finderMenu.style.top = `${centerY}px`;
        finderMenu.style.display = "block";
      } else if (target && target.closest && target.closest("#desktop")) {
        desktopMenu.style.left = `${centerX}px`;
        desktopMenu.style.top = `${centerY}px`;
        desktopMenu.style.display = "block";
      }
    }
  });

  // Hide menus on single tap or click
  document.addEventListener("touchstart", function (e) {
    if (e.touches.length === 1) hideMenus();
  });
  document.addEventListener("click", hideMenus);
}

// --- DOCK LOGIC ---
function setupDock() {
  const dockIcons = document.querySelectorAll(".dock-icon");
  dockIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      createWindow(icon.getAttribute("data-app"));
    });
  });
}

// --- APPLE MENU LOGIC ---
function setupMenu() {
  const menus = [
    { trigger: "apple-logo", menu: "apple-menu" },
    { trigger: "finder", menu: "finder-menu" },
    { trigger: "file", menu: "file-menu" },
    { trigger: "edit", menu: "edit-menu" },
    { trigger: "view", menu: "view-menu" },
    { trigger: "go", menu: "go-menu" },
    { trigger: "window", menu: "window-menu" },
    { trigger: "help", menu: "help-menu" },
  ];

  function hideAllMenus() {
    menus.forEach(({ menu }) => {
      const el = document.getElementById(menu);
      if (el) el.classList.add("hidden");
    });
  }

  menus.forEach(({ trigger, menu }) => {
    const triggerEl = document.getElementById(trigger);
    const menuEl = document.getElementById(menu);
    if (!triggerEl || !menuEl) return;

    triggerEl.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = !menuEl.classList.contains("hidden");
      hideAllMenus();
      if (!isOpen) {
        menuEl.classList.remove("hidden");
      }
      // If isOpen, we just hid it (so it closes)
    });
  });

  document.addEventListener("click", hideAllMenus);
}

// --- CONTROL CENTER LOGIC ---
function setupControlCenter() {
  const controlIcon = document.getElementById("control-icon");
  const controlCenter = document.getElementById("control-center");
  controlIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    controlCenter.style.display =
      controlCenter.style.display === "block" ? "none" : "block";
  });
}

// --- INIT ---
let folderCount = 0;
const desktop = document.getElementById("desktop");
const createFolderBtn = document.getElementById("create-folder");
const contextMenu = document.getElementById("context-menu");

if (createFolderBtn) {
  createFolderBtn.addEventListener("click", () => {
    createFolder();
    contextMenu.style.display = "none";
  });
}

setupDock();
setupMenu();
setupControlCenter();
setupContextMenus();
