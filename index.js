"use strict";

const clockElement = document.getElementById("clock");
const yearElement = document.getElementById("year");
const screenInfoElement = document.getElementById("screenInfo");

const crtScreen = document.getElementById("crtScreen");
const crtImage = document.getElementById("crtImage");

const signalState = document.getElementById("signalState");
const coreReadout = document.getElementById("coreReadout");
const frameNumber = document.getElementById("frameNumber");
const frameMessage = document.getElementById("frameMessage");
const frequency = document.getElementById("frequency");

const cpuValue = document.getElementById("cpuValue");
const memValue = document.getElementById("memValue");

const modules = document.querySelectorAll(".module");

yearElement.textContent = new Date().getFullYear();

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clockElement.textContent =
        `${hours}:${minutes}:${seconds}`;
}

function updateScreenInfo() {
    screenInfoElement.textContent =
        `SCREEN ${window.innerWidth}×${window.innerHeight}`;
}

updateClock();
updateScreenInfo();

setInterval(updateClock, 1000);
window.addEventListener("resize", updateScreenInfo);

/* =========================================================
   SUBLIMINAL CRT ENGINE
   ========================================================= */

const subliminalFrames = [

    {
        message: "OBSERVE",
        color: "#00ff99",
        duration: 90,
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">
                <rect width="800" height="450" fill="#020806"/>
                <circle cx="400" cy="225" r="115"
                        fill="none"
                        stroke="#00ff99"
                        stroke-width="3"/>
                <circle cx="400" cy="225" r="72"
                        fill="none"
                        stroke="#00ff99"
                        stroke-width="2"/>
                <circle cx="400" cy="225" r="28"
                        fill="#00ff99"/>
                <path d="M140 225 H660"
                      stroke="#00ff99"
                      stroke-width="1"
                      opacity=".7"/>
                <path d="M400 80 V370"
                      stroke="#00ff99"
                      stroke-width="1"
                      opacity=".7"/>
                <text x="400" y="410"
                      text-anchor="middle"
                      fill="#00ff99"
                      font-family="monospace"
                      font-size="20">
                    OBSERVE
                </text>
            </svg>
        `
    },

    {
        message: "WAKE",
        color: "#00eaff",
        duration: 120,
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">
                <rect width="800" height="450" fill="#02070b"/>
                <ellipse cx="400" cy="225"
                         rx="190" ry="105"
                         fill="none"
                         stroke="#00eaff"
                         stroke-width="4"/>
                <ellipse cx="400" cy="225"
                         rx="85" ry="48"
                         fill="#00eaff"
                         opacity=".18"/>
                <circle cx="400" cy="225"
                        r="26"
                        fill="#00eaff"/>
                <path d="M210 225 H590"
                      stroke="#00eaff"
                      stroke-width="2"/>
                <text x="400" y="90"
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
        message: "NO SIGNAL",
        color: "#ff315c",
        duration: 75,
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">
                <rect width="800" height="450"
                      fill="#080204"/>
                <path d="
                    M70 230
                    L130 230
                    L160 130
                    L205 320
                    L250 190
                    L290 230
                    L350 230
                    L390 100
                    L430 350
                    L470 230
                    L540 230
                    L570 170
                    L610 290
                    L650 230
                    L730 230"
                    fill="none"
                    stroke="#ff315c"
                    stroke-width="5"/>
                <text x="400" y="85"
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
        duration: 110,
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">
                <rect width="800" height="450"
                      fill="#06030b"/>
                <rect x="245" y="100"
                      width="310"
                      height="250"
                      fill="none"
                      stroke="#a66cff"
                      stroke-width="3"/>
                <path d="M280 150 H520
                         M280 190 H480
                         M280 230 H535
                         M280 270 H430
                         M280 310 H510"
                      stroke="#a66cff"
                      stroke-width="4"/>
                <text x="400" y="65"
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
        duration: 85,
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">
                <rect width="800" height="450"
                      fill="#0a0702"/>
                <polygon
                    points="400,55 620,380 180,380"
                    fill="none"
                    stroke="#ff9d00"
                    stroke-width="4"/>
                <circle cx="400" cy="245"
                        r="52"
                        fill="none"
                        stroke="#ff9d00"
                        stroke-width="5"/>
                <circle cx="400" cy="245"
                        r="16"
                        fill="#ff9d00"/>
                <text x="400" y="420"
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
        duration: 100,
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">
                <rect width="800" height="450"
                      fill="#050505"/>
                <text x="400"
                      y="255"
                      text-anchor="middle"
                      fill="white"
                      font-family="monospace"
                      font-size="76"
                      font-weight="bold"
                      letter-spacing="15">
                    3X0C3T
                </text>
                <line x1="160"
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
        duration: 70,
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">
                <rect width="800" height="450"
                      fill="#010704"/>
                <text x="400"
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
        duration: 95,
        svg: `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 800 450">
                <rect width="800" height="450"
                      fill="#02080c"/>
                <g fill="none"
                   stroke="#00eaff"
                   stroke-width="2">
                    <rect x="220" y="105"
                          width="360"
                          height="240"/>
                    <rect x="260" y="145"
                          width="280"
                          height="160"/>
                    <path d="M220 175 H160
                             M220 225 H140
                             M220 275 H160
                             M580 175 H640
                             M580 225 H660
                             M580 275 H640"/>
                </g>
                <text x="400"
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

let currentFrame = -1;
let frameCounter = 0;
let subliminalRunning = true;

function svgToDataUri(svg) {
    return "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(svg);
}

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(
        randomBetween(min, max + 1)
    );
}

function selectNextFrame() {

    let nextFrame;

    do {
        nextFrame = randomInt(
            0,
            subliminalFrames.length - 1
        );
    } while (
        nextFrame === currentFrame &&
        subliminalFrames.length > 1
    );

    currentFrame = nextFrame;

    return subliminalFrames[currentFrame];
}

function updateCRTReadout(frame) {

    frameCounter++;

    frameNumber.textContent =
        `FRAME ${String(frameCounter).padStart(3, "0")}`;

    frameMessage.textContent =
        frame.message;

    signalState.textContent =
        "ACTIVE";

    signalState.style.color =
        frame.color;

    coreReadout.textContent =
        frame.message;

    coreReadout.style.color =
        frame.color;

    frequency.textContent =
        `${randomBetween(7.2, 14.8).toFixed(2)} Hz`;
}

function showFrame(frame) {

    updateCRTReadout(frame);

    crtImage.style.backgroundImage =
        `url("${svgToDataUri(frame.svg)}")`;

    crtImage.style.filter =
        `
        contrast(${randomBetween(1.15, 1.7)})
        brightness(${randomBetween(0.65, 1.1)})
        saturate(${randomBetween(0.65, 1.2)})
        `;

    crtImage.classList.remove("glitch");

    void crtImage.offsetWidth;

    crtImage.classList.add("visible");

    if (Math.random() > 0.35) {
        crtImage.classList.add("glitch");
    }

    const glitchTime =
        randomInt(45, 140);

    setTimeout(() => {
        crtImage.classList.remove("glitch");
    }, glitchTime);
}

function hideFrame() {

    crtImage.classList.remove("visible");
    crtImage.classList.remove("glitch");

    signalState.textContent =
        "STANDBY";

    signalState.style.color =
        "#54727c";

    coreReadout.textContent =
        "WAITING";

    coreReadout.style.color =
        "#00eaff";

    frameMessage.textContent =
        "NO SIGNAL";
}

function subliminalCycle() {

    if (!subliminalRunning) {
        return;
    }

    const frame = selectNextFrame();

    const idleBefore =
        randomInt(700, 2800);

    setTimeout(() => {

        if (!subliminalRunning) {
            return;
        }

        showFrame(frame);

        setTimeout(() => {

            hideFrame();

            const idleAfter =
                randomInt(250, 1300);

            setTimeout(
                subliminalCycle,
                idleAfter
            );

        }, frame.duration);

    }, idleBefore);
}

subliminalCycle();

/* =========================================================
   AMBIENT SYSTEM DATA
   ========================================================= */

function updateSystemData() {

    const cpu =
        randomInt(7, 38);

    const memory =
        randomInt(120, 890);

    cpuValue.textContent =
        `${String(cpu).padStart(2, "0")}%`;

    memValue.textContent =
        String(memory).padStart(3, "0");
}

updateSystemData();

setInterval(
    updateSystemData,
    900
);

/* =========================================================
   MODULE INTERACTION
   ========================================================= */

modules.forEach((module) => {

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
        }
    );

    module.addEventListener(
        "mouseleave",
        () => {

            coreReadout.textContent =
                "WAITING";

            signalState.textContent =
                "SIGNAL";

            signalState.style.color =
                "#00ff99";
        }
    );

});

/* =========================================================
   POINTER / CRT INTERFERENCE
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

setInterval(() => {

    const offsetX =
        (pointerX - 0.5) * 2;

    const offsetY =
        (pointerY - 0.5) * 2;

    crtImage.style.transform =
        `
        translate(
            ${offsetX * 0.8}px,
            ${offsetY * 0.5}px
        )
        scale(1.03)
        `;

}, 80);

/* =========================================================
   RANDOM CRT FLICKER
   ========================================================= */

setInterval(() => {

    if (Math.random() < 0.12) {

        crtScreen.style.opacity =
            String(randomBetween(0.72, 0.96));

        setTimeout(() => {

            crtScreen.style.opacity =
                "1";

        }, randomInt(25, 90));
    }

}, 500);

/* =========================================================
   KEYBOARD CONTROL
   ========================================================= */

window.addEventListener(
    "keydown",
    (event) => {

        if (event.code === "Space") {

            event.preventDefault();

            const frame =
                selectNextFrame();

            showFrame(frame);

            setTimeout(
                hideFrame,
                frame.duration
            );
        }

        if (event.key.toLowerCase() === "s") {

            subliminalRunning =
                !subliminalRunning;

            if (!subliminalRunning) {

                hideFrame();

                frameMessage.textContent =
                    "PAUSED";

                coreReadout.textContent =
                    "PAUSED";

                signalState.textContent =
                    "OFF";

                signalState.style.color =
                    "#ff315c";

            } else {

                signalState.textContent =
                    "ACTIVE";

                signalState.style.color =
                    "#00ff99";

                subliminalCycle();
            }
        }
    }
);