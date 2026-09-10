/* =========================================================
   3x0c3t / L4B
   LABORATORY INTERFACE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const modules =
        document.querySelectorAll(".lab-module");

    const activeModule =
        document.getElementById("active-module");

    const terminalText =
        document.getElementById("terminal-text");

    const screenSize =
        document.getElementById("screen-size");

    const clock =
        document.getElementById("system-clock");

    const cpuValue =
        document.getElementById("cpu-value");

    const footerYear =
        document.getElementById("footer-year");


    /* =====================================================
       CLOCK
       ===================================================== */

    function updateClock() {

        const now =
            new Date();

        const hours =
            String(now.getHours()).padStart(2, "0");

        const minutes =
            String(now.getMinutes()).padStart(2, "0");

        const seconds =
            String(now.getSeconds()).padStart(2, "0");

        if (clock) {

            clock.textContent =
                `${hours}:${minutes}:${seconds}`;

        }

    }

    updateClock();

    setInterval(
        updateClock,
        1000
    );


    /* =====================================================
       SCREEN SIZE
       ===================================================== */

    function updateScreenSize() {

        if (!screenSize) {
            return;
        }

        screenSize.textContent =
            `${window.innerWidth} × ${window.innerHeight}`;

    }

    updateScreenSize();

    window.addEventListener(
        "resize",
        updateScreenSize
    );


    /* =====================================================
       YEAR
       ===================================================== */

    if (footerYear) {

        footerYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       CPU SIMULATION
       ===================================================== */

    function updateCpu() {

        if (!cpuValue) {
            return;
        }

        const value =
            Math.floor(
                8 +
                Math.random() * 17
            );

        cpuValue.textContent =
            `${value}%`;

    }

    updateCpu();

    setInterval(
        updateCpu,
        2200
    );


    /* =====================================================
       MODULE STATE
       ===================================================== */

    function activateModule(module) {

        const name =
            module.dataset.module ||
            "UNKNOWN";

        const code =
            module.dataset.code ||
            "MOD-00";

        const description =
            module.dataset.description ||
            "";

        if (activeModule) {

            activeModule.textContent =
                `${code} / ${name}`;

            activeModule.style.color =
                getComputedStyle(module)
                    .getPropertyValue("--module-color");

        }

        if (terminalText) {

            terminalText.textContent =
                `${code} // ${name} // ${description}`;

        }

    }


    function resetModule() {

        if (activeModule) {

            activeModule.textContent =
                "STANDBY";

            activeModule.style.color =
                "";

        }

        if (terminalText) {

            terminalText.textContent =
                "SYSTEM READY // SELECT MODULE";

        }

    }


    /* =====================================================
       MOUSE / KEYBOARD
       ===================================================== */

    modules.forEach((module) => {

        module.addEventListener(
            "mouseenter",
            () => {

                activateModule(module);

            }
        );


        module.addEventListener(
            "mouseleave",
            () => {

                resetModule();

            }
        );


        module.addEventListener(
            "focus",
            () => {

                activateModule(module);

            }
        );


        module.addEventListener(
            "blur",
            () => {

                resetModule();

            }
        );


        module.addEventListener(
            "click",
            () => {

                activateModule(module);

            }
        );

    });


    /* =====================================================
       POINTER POSITION
       ===================================================== */

    document.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (
                    event.clientX /
                    window.innerWidth
                ) * 100;

            const y =
                (
                    event.clientY /
                    window.innerHeight
                ) * 100;

            document.documentElement.style
                .setProperty(
                    "--pointer-x",
                    `${x}%`
                );

            document.documentElement.style
                .setProperty(
                    "--pointer-y",
                    `${y}%`
                );

        }
    );


    /* =====================================================
       CONSOLE
       ===================================================== */

    console.log(
        "%c3x0c3t / L4B",
        "color:#00eaff;font-size:18px;font-weight:bold;"
    );

    console.log(
        "%cDIGITAL LABORATORY ONLINE",
        "color:#00ff99;font-size:11px;"
    );

});