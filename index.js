"use strict";

/* ============================================================
   L4B // PROJECT DATABASE
   ============================================================ */

const projects = {

    WEB: [
        {
            id: "87",
            name: "SPE4Knerd",
            path: "87_SPE4Knerd/"
        },
        {
            id: "88",
            name: "AN0THER_G4ME",
            path: "88_AN0THER_G4ME/"
        },
        {
            id: "89",
            name: "version_SELEKT0R",
            path: "89_version_SELEKT0R/"
        }
    ],

    CODE: [
        {
            id: "01",
            name: "Development",
            path: "01_DEVELOPMENT/"
        },
        {
            id: "02",
            name: "Arduino",
            path: "02_Arduino/"
        }
    ],

    DESIGN: [
        {
            id: "01",
            name: "UX / UI",
            path: "03_DESIGN/"
        }
    ],

    HARDWARE: [
        {
            id: "01",
            name: "3x0c3t BO4RD",
            path: "04_HARDWARE/"
        },
        {
            id: "02",
            name: "Embedded Lab",
            path: "05_EMBEDDED/"
        }
    ],

    GAMES: [
        {
            id: "88",
            name: "AN0THER_G4ME",
            path: "88_AN0THER_G4ME/"
        },
        {
            id: "89",
            name: "version_SELEKT0R",
            path: "89_version_SELEKT0R/"
        }
    ],

    MEDIA: [
        {
            id: "01",
            name: "Audio",
            path: "06_AUDIO/"
        },
        {
            id: "02",
            name: "Video",
            path: "07_VIDEO/"
        }
    ]

};


/* ============================================================
   DOM HELPERS
   ============================================================ */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];


/* ============================================================
   CLOCK
   ============================================================ */

function updateClock() {

    const now = new Date();

    const time =
        now.toLocaleTimeString(
            "fr-FR",
            {
                hour12: false
            }
        );

    const clock =
        $("#clock");

    const terminalTime =
        $("#terminalTime");

    if (clock) {
        clock.textContent = time;
    }

    if (terminalTime) {
        terminalTime.textContent = time;
    }
}

setInterval(updateClock, 1000);

updateClock();


/* ============================================================
   YEAR
   ============================================================ */

const year = $("#year");

if (year) {
    year.textContent =
        new Date().getFullYear();
}


/* ============================================================
   SCREEN SIZE
   ============================================================ */

function updateScreenInfo() {

    const target =
        $("#screenInfo");

    if (!target) {
        return;
    }

    target.textContent =
        `SCREEN ${String(window.innerWidth).padStart(4, "0")}×${String(window.innerHeight).padStart(4, "0")}`;
}

window.addEventListener(
    "resize",
    updateScreenInfo
);

updateScreenInfo();


/* ============================================================
   PROJECT COUNT
   ============================================================ */

function updateProjectCount() {

    const count =
        Object.values(projects)
            .reduce(
                (total, list) =>
                    total + list.length,
                0
            );

    const target =
        $("#projectCount");

    if (target) {
        target.textContent =
            String(count).padStart(2, "0");
    }
}

updateProjectCount();


/* ============================================================
   PROJECT ITEM
   ============================================================ */

function createProjectItem(project) {

    const item =
        document.createElement("a");

    item.className =
        "project-browser-item";

    item.href =
        `/L4B/${project.path}`;

    item.target =
        "_blank";

    item.rel =
        "noopener noreferrer";

    item.innerHTML = `
        <span class="project-number">
            ${project.id}
        </span>

        <span class="project-name">
            ${project.name}
        </span>

        <span class="project-path">
            /L4B/${project.path}
        </span>
    `;

    return item;
}


/* ============================================================
   PROJECT BROWSER
   ============================================================ */

function openProjectBrowser(category) {

    const browser =
        $("#projectBrowser");

    const title =
        $("#projectBrowserTitle");

    const list =
        $("#projectBrowserList");

    if (!browser || !list) {
        return;
    }

    list.innerHTML = "";

    const categoryProjects =
        projects[category] || [];

    categoryProjects.forEach(
        project => {

            list.appendChild(
                createProjectItem(project)
            );
        }
    );

    if (title) {
        title.textContent =
            category;
    }

    browser.classList.add(
        "visible"
    );

    browser.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "project-browser-open"
    );
}


function closeProjectBrowser() {

    const browser =
        $("#projectBrowser");

    if (!browser) {
        return;
    }

    browser.classList.remove(
        "visible"
    );

    browser.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "project-browser-open"
    );
}


/* ============================================================
   MODULES
   ============================================================ */

$$(".module[data-module]")
    .forEach(module => {

        const category =
            module.dataset.module;

        module.addEventListener(
            "click",
            () => {

                openProjectBrowser(
                    category
                );
            }
        );
    });


/* ============================================================
   CLOSE
   ============================================================ */

const closeButton =
    $("#projectBrowserClose");

if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeProjectBrowser
    );
}


const browser =
    $("#projectBrowser");

if (browser) {

    browser.addEventListener(
        "click",
        event => {

            if (
                event.target === browser
            ) {
                closeProjectBrowser();
            }
        }
    );
}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            const browser =
                $("#projectBrowser");

            if (
                browser &&
                browser.classList.contains(
                    "visible"
                )
            ) {
                closeProjectBrowser();
            }
        }
    }
);


/* ============================================================
   TELEMETRY
   ============================================================ */

function random(min, max) {

    return Math.floor(
        Math.random() *
        (max - min + 1)
    ) + min;
}


function updateTelemetry() {

    const cpu =
        random(12, 28);

    const mem =
        random(38, 47);

    const latency =
        random(12, 26);

    const traffic =
        random(25, 80);

    const temp =
        random(38, 44);

    const cpuTarget =
        $("#cpuValue");

    const memTarget =
        $("#memValue");

    const latencyTarget =
        $("#latency");

    const trafficTarget =
        $("#traffic");

    const tempTarget =
        $("#tempValue");

    if (cpuTarget) {
        cpuTarget.textContent =
            `${String(cpu).padStart(3, "0")}%`;
    }

    if (memTarget) {
        memTarget.textContent =
            `${String(mem).padStart(3, "0")}%`;
    }

    if (latencyTarget) {
        latencyTarget.textContent =
            `${String(latency).padStart(3, "0")} MS`;
    }

    if (trafficTarget) {
        trafficTarget.textContent =
            `${String(traffic).padStart(3, "0")} KB/S`;
    }

    if (tempTarget) {
        tempTarget.textContent =
            `${String(temp).padStart(3, "0")}°C`;
    }
}

setInterval(
    updateTelemetry,
    2500
);

updateTelemetry();


/* ============================================================
   FRAME
   ============================================================ */

let frame = 0;

function updateFrame() {

    frame++;

    const target =
        $("#frameNumber");

    if (target) {

        target.textContent =
            String(frame).padStart(3, "0");
    }
}

setInterval(
    updateFrame,
    1000
);


/* ============================================================
   MESSAGES
   ============================================================ */

const messages = [
    "MONITORING ACTIVE",
    "NETWORK LINK ESTABLISHED",
    "L4B CORE NOMINAL",
    "ALL MODULES READY",
    "SYSTEM TELEMETRY ACTIVE",
    "SIGNAL LOCKED"
];

let messageIndex = 0;

function updateMessage() {

    const target =
        $("#terminalMessage");

    if (!target) {
        return;
    }

    messageIndex =
        (messageIndex + 1) %
        messages.length;

    target.textContent =
        messages[messageIndex];
}

setInterval(
    updateMessage,
    5000
);


/* ============================================================
   UPTIME
   ============================================================ */

let uptime =
    (127 * 3600) +
    (43 * 60) +
    21;


function updateUptime() {

    uptime++;

    const hours =
        Math.floor(
            uptime / 3600
        );

    const minutes =
        Math.floor(
            (uptime % 3600) / 60
        );

    const seconds =
        uptime % 60;

    const target =
        $("#uptime");

    if (target) {

        target.textContent =
            `${String(hours).padStart(3, "0")}:` +
            `${String(minutes).padStart(2, "0")}:` +
            `${String(seconds).padStart(2, "0")}`;
    }
}

setInterval(
    updateUptime,
    1000
);


/* ============================================================
   FREQUENCY
   ============================================================ */

function updateFrequency() {

    const target =
        $("#frequency");

    if (!target) {
        return;
    }

    target.textContent =
        `${(8.1 + Math.random() * .8).toFixed(2)} Hz`;
}

setInterval(
    updateFrequency,
    1400
);