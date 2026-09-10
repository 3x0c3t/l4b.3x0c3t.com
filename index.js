"use strict";

/* =========================================================
   DOM
   ========================================================= */

const clockElement =
    document.getElementById("clock");

const terminalTimeElement =
    document.getElementById("terminalTime");

const yearElement =
    document.getElementById("year");

const screenInfoElement =
    document.getElementById("screenInfo");

const crtScreen =
    document.getElementById("crtScreen");

const crtContent =
    document.getElementById("crtContent");

const crtImage =
    document.getElementById("crtImage");

const signalState =
    document.getElementById("signalState");

const coreReadout =
    document.getElementById("coreReadout");

const frameNumber =
    document.getElementById("frameNumber");

const frameMessage =
    document.getElementById("frameMessage");

const frequency =
    document.getElementById("frequency");

const signalMode =
    document.getElementById("signalMode");

const cpuValue =
    document.getElementById("cpuValue");

const memValue =
    document.getElementById("memValue");

const edgeCpu =
    document.getElementById("edgeCpu");

const edgeMem =
    document.getElementById("edgeMem");

const latency =
    document.getElementById("latency");

const traffic =
    document.getElementById("traffic");

const uptimeElement =
    document.getElementById("uptime");

const terminalMessage =
    document.getElementById("terminalMessage");

const serverStatus =
    document.getElementById("serverStatus");

const l4bStatus =
    document.getElementById("l4bStatus");

const modules =
    document.querySelectorAll(".module");

/* =========================================================
   INITIALIZATION
   ========================================================= */

yearElement.textContent =
    new Date().getFullYear();

let currentFrame = -1;
let frameCounter = 0;

let subliminalRunning = true;

let serverUptimeSeconds =
    127 * 3600 +
    43 * 60 +
    21;

/* =========================================================
   CLOCK
   ========================================================= */

function updateClock() {

    const now =
        new Date();

    const hours =
        String(now.getHours())
            .padStart(2, "0");

    const minutes =
        String(now.getMinutes())
            .padStart(2, "0");

    const seconds =
        String(now.getSeconds())
            .padStart(2, "0");

    const time =
        `${hours}:${minutes}:${seconds}`;

    clockElement.textContent =
        time;

    terminalTimeElement.textContent =
        time;
}

updateClock();

setInterval(
    updateClock,
    1000
);

/* =========================================================
   SCREEN INFORMATION
   ========================================================= */

function updateScreenInfo() {

    screenInfoElement.textContent =
        `SCREEN ${window.innerWidth}×${window.innerHeight}`;
}

updateScreenInfo();

window.addEventListener(
    "resize",
    updateScreenInfo
);

/* =========================================================
   UTILS
   ========================================================= */

function randomBetween(
    min,
    max
) {
    return Math.random() *
        (max - min) +
        min;
}

function randomInt(
    min,
    max
) {
    return Math.floor(
        randomBetween(
            min,
            max + 1
        )
    );
}

function pad(
    value,
    size
) {
    return String(value)
        .padStart(size, "0");
}

function formatUptime(
    seconds
) {

    const days =
        Math.floor(
            seconds / 86400
        );

    const hours =
        Math.floor(
            (seconds % 86400) /
            3600
        );

    const minutes =
        Math.floor(
            (seconds % 3600) /
            60
        );

    const secs =
        seconds % 60;

    if (days > 0) {

        return `${pad(days, 2)}d ` +
            `${pad(hours, 2)}:` +
            `${pad(minutes, 2)}:` +
            `${pad(secs, 2)}`;
    }

    return `${pad(hours, 2)}:` +
        `${pad(minutes, 2)}:` +
        `${pad(secs, 2)}`;
}

/* =========================================================
   SERVER MONITOR
   ========================================================= */

function updateServerData() {

    const cpu =
        randomInt(8, 34);

    const memory =
        randomInt(37, 48);

    const ping =
        randomInt(11, 34);

    const network =
        randomInt(18, 96);

    cpuValue.textContent =
        `${pad(cpu, 2)}%`;

    memValue.textContent =
        `${pad(memory, 3)}%`;

    edgeCpu.textContent =
        `${pad(cpu, 2)}%`;

    edgeMem.textContent =
        `${pad(memory, 3)}%`;

    latency.textContent =
        `${pad(ping, 3)} MS`;

    traffic.textContent =
        `${pad(network, 3)} KB/S`;

    serverUptimeSeconds++;

    uptimeElement.textContent =
        formatUptime(
            serverUptimeSeconds
        );
}

updateServerData();

setInterval(
    updateServerData,
    1000
);

/* =========================================================
   SUBLIMINAL FRAMES
   ========================================================= */

const subliminalFrames = [

    {
        message: "OBSERVE",
        color: "#00ff99",
        duration: 80,

        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">

                <rect
                    width="800"
                    height="450"
                    fill="#020806"/>

                <circle
                    cx="400"
                    cy="225"
                    r="115"
                    fill="none"
                    stroke="#00ff99"
                    stroke-width="4"/>

                <circle
                    cx="400"
                    cy="225"
                    r="72"
                    fill="none"
                    stroke="#00ff99"
                    stroke-width="2"/>

                <circle
                    cx="400"
                    cy="225"
                    r="25"
                    fill="#00ff99"/>

                <path
                    d="M120 225 H680"
                    stroke="#00ff99"
                    stroke-width="1"/>

                <path
                    d="M400 70 V380"
                    stroke="#00ff99"
                    stroke-width="1"/>

                <text
                    x="400"
                    y="410"
                    text-anchor="middle"
                    fill="#00ff99"
                    font-family="monospace"
                    font-size="22">
                    OBSERVE
                </text>

            </svg>
        `
    },

    {
        message: "WAKE",
        color: "#00eaff",
        duration: 90,

        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">

                <rect
                    width="800"
                    height="450"
                    fill="#02070b"/>

                <ellipse
                    cx="400"
                    cy="225"
                    rx="190"
                    ry="105"
                    fill="none"
                    stroke="#00eaff"
                    stroke-width="4"/>

                <ellipse
                    cx="400"
                    cy="225"
                    rx="85"
                    ry="48"
                    fill="#00eaff"
                    opacity=".18"/>

                <circle
                    cx="400"
                    cy="225"
                    r="26"
                    fill="#00eaff"/>

                <path
                    d="M210 225 H590"
                    stroke="#00eaff"
                    stroke-width="2"/>

                <text
                    x="400"
                    y="90"
                    text-anchor="middle"
                    fill="#00eaff"
                    font-family="monospace"
                    font-size="24">
                    WAKE
                </text>

            </svg>
        `
    },

    {
        message: "SIGNAL LOST",
        color: "#ff315c",
        duration: 70,

        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">

                <rect
                    width="800"
                    height="450"
                    fill="#080204"/>

                <path
                    d="
                        M60 230
                        L125 230
                        L155 130
                        L205 320
                        L250 190
                        L290 230
                        L350 230
                        L390 100
                        L430 350
                        L470 230
                        L540 230
                        L575 170
                        L610 290
                        L650 230
                        L740 230"
                    fill="none"
                    stroke="#ff315c"
                    stroke-width="5"/>

                <text
                    x="400"
                    y="85"
                    text-anchor="middle"
                    fill="#ff315c"
                    font-family="monospace"
                    font-size="20">
                    SIGNAL LOST
                </text>

            </svg>
        `
    },

    {
        message: "MEMORY",
        color: "#a66cff",
        duration: 85,

        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">

                <rect
                    width="800"
                    height="450"
                    fill="#06030b"/>

                <rect
                    x="245"
                    y="100"
                    width="310"
                    height="250"
                    fill="none"
                    stroke="#a66cff"
                    stroke-width="3"/>

                <path
                    d="
                        M280 150 H520
                        M280 190 H480
                        M280 230 H535
                        M280 270 H430
                        M280 310 H510"
                    stroke="#a66cff"
                    stroke-width="4"/>

                <text
                    x="400"
                    y="65"
                    text-anchor="middle"
                    fill="#a66cff"
                    font-family="monospace"
                    font-size="18">
                    MEMORY
                </text>

            </svg>
        `
    },

    {
        message: "LOOK BEHIND",
        color: "#ff9d00",
        duration: 75,

        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">

                <rect
                    width="800"
                    height="450"
                    fill="#0a0702"/>

                <polygon
                    points="400,55 620,380 180,380"
                    fill="none"
                    stroke="#ff9d00"
                    stroke-width="4"/>

                <circle
                    cx="400"
                    cy="245"
                    r="52"
                    fill="none"
                    stroke="#ff9d00"
                    stroke-width="5"/>

                <circle
                    cx="400"
                    cy="245"
                    r="16"
                    fill="#ff9d00"/>

                <text
                    x="400"
                    y="420"
                    text-anchor="middle"
                    fill="#ff9d00"
                    font-family="monospace"
                    font-size="17">
                    LOOK BEHIND
                </text>

            </svg>
        `
    },

    {
        message: "3X0C3T",
        color: "#ffffff",
        duration: 65,

        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">

                <rect
                    width="800"
                    height="450"
                    fill="#050505"/>

                <text
                    x="400"
                    y="255"
                    text-anchor="middle"
                    fill="white"
                    font-family="monospace"
                    font-size="76"
                    font-weight="bold"
                    letter-spacing="15">
                    3X0C3T
                </text>

                <line
                    x1="160"
                    y1="290"
                    x2="640"
                    y2="290"
                    stroke="white"
                    stroke-width="2"/>

            </svg>
        `
    },

    {
        message: "WAKE UP",
        color: "#00ff99",
        duration: 55,

        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">

                <rect
                    width="800"
                    height="450"
                    fill="#010704"/>

                <text
                    x="400"
                    y="250"
                    text-anchor="middle"
                    fill="#00ff99"
                    font-family="monospace"
                    font-size="62"
                    font-weight="bold"
                    letter-spacing="10">
                    WAKE UP
                </text>

            </svg>
        `
    },

    {
        message: "SYSTEM",
        color: "#00eaff",
        duration: 75,

        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">

                <rect
                    width="800"
                    height="450"
                    fill="#02080c"/>

                <g
                    fill="none"
                    stroke="#00eaff"
                    stroke-width="2">

                    <rect
                        x="220"
                        y="105"
                        width="360"
                        height="240"/>

                    <rect
                        x="260"
                        y="145"
                        width="280"
                        height="160"/>

                    <path
                        d="
                            M220 175 H160
                            M220 225 H140
                            M220 275 H160
                            M580 175 H640
                            M580 225 H660
                            M580 275 H640"/>

                </g>

                <text
                    x="400"
                    y="220"
                    text-anchor="middle"
                    fill="#00eaff"
                    font-family="monospace"
                    font-size="30">
                    SYSTEM
                </text>

            </svg>
        `
    }

];

/* =========================================================
   SVG
   ========================================================= */

function svgToDataUri(
    svg
) {

    return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg);
}

/* =========================================================
   FRAME SELECTION
   ========================================================= */

function selectNextFrame() {

    let nextFrame;

    do {

        nextFrame =
            randomInt(
                0,
                subliminalFrames.length - 1
            );

    } while (
        nextFrame === currentFrame &&
        subliminalFrames.length > 1
    );

    currentFrame =
        nextFrame;

    return subliminalFrames[
        currentFrame
    ];
}

/* =========================================================
   SHOW SUBLIMINAL
   ========================================================= */

function showFrame(
    frame
) {

    frameCounter++;

    frameNumber.textContent =
        `FRAME ${pad(frameCounter, 3)}`;

    frameMessage.textContent =
        frame.message;

    signalState.textContent =
        "SUBLIMINAL";

    signalState.style.color =
        frame.color;

    coreReadout.textContent =
        frame.message;

    coreReadout.style.color =
        frame.color;

    signalMode.textContent =
        "SUBLIMINAL";

    terminalMessage.textContent =
        "SIGNAL INTERRUPT";

    crtImage.style.backgroundImage =
        `url("${svgToDataUri(frame.svg)}")`;

    crtImage.style.filter =
        `
        contrast(${randomBetween(1.2, 1.8)})
        brightness(${randomBetween(0.7, 1.15)})
        saturate(${randomBetween(0.7, 1.3)})
        `;

    crtImage.classList.remove(
        "glitch"
    );

    void crtImage.offsetWidth;

    crtImage.classList.add(
        "visible"
    );

    if (
        Math.random() > 0.25
    ) {

        crtImage.classList.add(
            "glitch"
        );
    }

    crtContent.style.opacity =
        "0.08";

    const glitchTime =
        randomInt(
            40,
            110
        );

    setTimeout(
        () => {

            crtImage.classList.remove(
                "glitch"
            );

        },
        glitchTime
    );
}

/* =========================================================
   HIDE SUBLIMINAL
   ========================================================= */

function hideFrame() {

    crtImage.classList.remove(
        "visible"
    );

    crtImage.classList.remove(
        "glitch"
    );

    crtContent.style.opacity =
        "0.9";

    signalState.textContent =
        "SYSTEM";

    signalState.style.color =
        "#00ff99";

    coreReadout.textContent =
        "STANDBY";

    coreReadout.style.color =
        "#00eaff";

    signalMode.textContent =
        "MONITOR";

    terminalMessage.textContent =
        "MONITORING ACTIVE";
}

/* =========================================================
   SUBLIMINAL CYCLE
   ========================================================= */

function subliminalCycle() {

    if (
        !subliminalRunning
    ) {
        return;
    }

    const frame =
        selectNextFrame();

    /*
     * Long idle period.
     * The CRT normally displays the
     * server / L4B monitoring interface.
     */

    const idleBefore =
        randomInt(
            4500,
            12000
        );

    setTimeout(
        () => {

            if (
                !subliminalRunning
            ) {
                return;
            }

            showFrame(
                frame
            );

            setTimeout(
                () => {

                    hideFrame();

                    const idleAfter =
                        randomInt(
                            1800,
                            6000
                        );

                    setTimeout(
                        subliminalCycle,
                        idleAfter
                    );

                },
                frame.duration
            );

        },
        idleBefore
    );
}

subliminalCycle();

/* =========================================================
   MODULE INTERACTION
   ========================================================= */

modules.forEach(
    (module) => {

        module.addEventListener(
            "mouseenter",
            () => {

                const name =
                    module.dataset.module;

                coreReadout.textContent =
                    name;

                coreReadout.style.color =
                    "#00eaff";

                signalState.textContent =
                    "LINK";

                signalState.style.color =
                    "#00ff99";

                terminalMessage.textContent =
                    `MODULE ${name} ACTIVE`;
            }
        );

        module.addEventListener(
            "mouseleave",
            () => {

                if (
                    crtImage.classList.contains(
                        "visible"
                    )
                ) {
                    return;
                }

                coreReadout.textContent =
                    "STANDBY";

                signalState.textContent =
                    "SYSTEM";

                signalState.style.color =
                    "#00ff99";

                terminalMessage.textContent =
                    "MONITORING ACTIVE";
            }
        );
    }
);

/* =========================================================
   CRT POINTER PARALLAX
   ========================================================= */

let pointerX = 0.5;
let pointerY = 0.5;

window.addEventListener(
    "pointermove",
    (event) => {

        pointerX =
            event.clientX /
            window.innerWidth;

        pointerY =
            event.clientY /
            window.innerHeight;
    }
);

setInterval(
    () => {

        const offsetX =
            (pointerX - 0.5) * 2;

        const offsetY =
            (pointerY - 0.5) * 2;

        crtImage.style.transform =
            `
            translate(
                ${offsetX * 0.7}px,
                ${offsetY * 0.4}px
            )
            scale(1.03)
            `;

    },
    80
);

/* =========================================================
   CRT FLICKER
   ========================================================= */

setInterval(
    () => {

        if (
            Math.random() < 0.08
        ) {

            crtScreen.style.opacity =
                String(
                    randomBetween(
                        0.76,
                        0.96
                    )
                );

            setTimeout(
                () => {

                    crtScreen.style.opacity =
                        "1";

                },
                randomInt(
                    20,
                    80
                )
            );
        }

    },
    600
);

/* =========================================================
   KEYBOARD
   ========================================================= */

window.addEventListener(
    "keydown",
    (event) => {

        /*
         * SPACE :
         * force une image subliminale.
         */

        if (
            event.code === "Space"
        ) {

            event.preventDefault();

            const frame =
                selectNextFrame();

            showFrame(
                frame
            );

            setTimeout(
                hideFrame,
                frame.duration
            );
        }

        /*
         * S :
         * active / désactive
         * le canal subliminal.
         */

        if (
            event.key.toLowerCase() === "s"
        ) {

            subliminalRunning =
                !subliminalRunning;

            if (
                !subliminalRunning
            ) {

                hideFrame();

                frameMessage.textContent =
                    "PAUSED";

                coreReadout.textContent =
                    "PAUSED";

                signalState.textContent =
                    "OFF";

                signalState.style.color =
                    "#ff315c";

                signalMode.textContent =
                    "PAUSED";

            } else {

                signalState.textContent =
                    "SYSTEM";

                signalState.style.color =
                    "#00ff99";

                signalMode.textContent =
                    "MONITOR";

                terminalMessage.textContent =
                    "MONITORING ACTIVE";

                subliminalCycle();
            }
        }
    }
);