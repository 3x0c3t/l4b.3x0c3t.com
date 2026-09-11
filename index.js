/* =========================================================
   L4B PROJECT BROWSER
   ========================================================= */

(() => {

    "use strict";


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const projectBrowser =
        document.getElementById(
            "projectBrowser"
        );

    const projectBrowserList =
        document.getElementById(
            "projectBrowserList"
        );

    const projectBrowserClose =
        document.getElementById(
            "projectBrowserClose"
        );


    if (
        !projectBrowser ||
        !projectBrowserList ||
        !projectBrowserClose
    ) {

        console.error(
            "L4B PROJECT BROWSER : éléments HTML introuvables."
        );

        return;
    }


    /* =====================================================
       CATALOGUE DES PROJETS
       ===================================================== */

    const projects = {

        WEB: [

            {
                id: "00",
                name: "LinkTree 3x0c3t",
                path: "00_LinkTree_3x0c3t"
            },

            {
                id: "00.2",
                name: "LinkTree 3x0c3t 2",
                path: "00_LinkTree_3x0c3t_2"
            },

            {
                id: "06",
                name: "CV",
                path: "06_CV"
            },

            {
                id: "07",
                name: "CV",
                path: "07_CV"
            },

            {
                id: "09",
                name: "Template",
                path: "09_TEMPLATE"
            },

            {
                id: "16",
                name: "404",
                path: "16_404_01"
            },

            {
                id: "38",
                name: "Template Responsive",
                path: "38_Template_RESPONSIVE"
            },

            {
                id: "55",
                name: "Menu Accueil",
                path: "55_3x0c3t_MENU_ACCUEIL"
            },

            {
                id: "56",
                name: "Mail Contact",
                path: "56_MailReponseCont4ct"
            },

            {
                id: "60",
                name: "3x0c3t.com TEMP",
                path: "60_3x0c3t.com_TEMP"
            },

            {
                id: "61",
                name: "Burger Menu",
                path: "61_burgerMenu"
            },

            {
                id: "62",
                name: "3x0c3t.com",
                path: "62_3x0c3t.com"
            },

            {
                id: "63",
                name: "Dashboard",
                path: "63_DASHBOARD"
            },

            {
                id: "68",
                name: "Template",
                path: "68_TEMPLATE"
            },

            {
                id: "73",
                name: "App Conteneur",
                path: "73_APP_CONTENEUR"
            },

            {
                id: "75",
                name: "Base App",
                path: "75_BASE_APP"
            },

            {
                id: "84",
                name: "OpenWeather API",
                path: "84_API_OpenWeather"
            }

        ],


        CODE: [

            {
                id: "01",
                name: "API Flags",
                path: "01_API_FLAGS"
            },

            {
                id: "03",
                name: "Prompt Generator",
                path: "03_Prompt_generator"
            },

            {
                id: "05",
                name: "Veille Techno",
                path: "05_Veille_Techno"
            },

            {
                id: "05.2",
                name: "Veille Techno 2",
                path: "05_Veille_Techno2"
            },

            {
                id: "08",
                name: "QR Code",
                path: "08_QRcode"
            },

            {
                id: "08.2",
                name: "QR Code PNG / STL / SVG",
                path: "08.2_QR CODE_PNG_STL_SVG"
            },

            {
                id: "17",
                name: "M0D Switcher",
                path: "17_M0D_Switcher"
            },

            {
                id: "18",
                name: "C0LoRs",
                path: "18_C0LoRs"
            },

            {
                id: "25",
                name: "Générateur de grilles CSS",
                path: "25_Generateur_de_grilles_css"
            },

            {
                id: "26",
                name: "Colors Generator",
                path: "26_ColorsGenerator"
            },

            {
                id: "31",
                name: "Buttons CSS",
                path: "31_Buttons_CSS"
            },

            {
                id: "32",
                name: "Buttons CSS Tester",
                path: "32_Buttons_CSS_Tester"
            },

            {
                id: "34",
                name: "Prompt Test",
                path: "34_Prompt_Test"
            },

            {
                id: "35",
                name: "Theme Switcher",
                path: "35_theme_switcher"
            },

            {
                id: "36",
                name: "Theme Switcher",
                path: "36_theme_switcher"
            },

            {
                id: "40",
                name: "Futuristic Control Panel",
                path: "40_Futuristic_CTRL_P4NEL"
            },

            {
                id: "41",
                name: "Layered Text Challenge V1",
                path: "41_CodePen_LAYERED_TEXT_CHALLENGE_V1"
            },

            {
                id: "42",
                name: "Layered Text Challenge V2",
                path: "42_CodePen_LAYERED_TEXT_CHALLENGE_V2"
            },

            {
                id: "49",
                name: "SCSS Tests",
                path: "49_SCSS_Tests"
            },

            {
                id: "50",
                name: "API Test",
                path: "50_API_TEST"
            },

            {
                id: "52",
                name: "Layer Convertor",
                path: "52_LAYER_CONVERTOR"
            },

            {
                id: "81",
                name: "CSS Builder",
                path: "81_CSS_builder"
            },

            {
                id: "82",
                name: "Interface Ergo",
                path: "82_INTERFACE_ERGO"
            },

            {
                id: "83",
                name: "Interface Editeur",
                path: "83_Interface_Editeur"
            },

            {
                id: "87",
                name: "SPE4Knerd",
                path: "87_SPE4Knerd"
            },

            {
                id: "89",
                name: "Version Selektor",
                path: "89_version_SELEKT0R"
            }

        ],


        DESIGN: [

            {
                id: "10",
                name: "Animation",
                path: "10_Animation"
            },

            {
                id: "11",
                name: "Carousel",
                path: "11_Carousel"
            },

            {
                id: "12",
                name: "Carousel",
                path: "12_Carousel"
            },

            {
                id: "13.01",
                name: "Carousel Events",
                path: "13_01_Carousel_events"
            },

            {
                id: "13",
                name: "Carousel",
                path: "13_Carousel"
            },

            {
                id: "13.2",
                name: "Carousel SCSS",
                path: "13_Carousel_scss"
            },

            {
                id: "14",
                name: "AnimAti0n",
                path: "14_AnimAti0n"
            },

            {
                id: "15",
                name: "Icon Links",
                path: "15_iconLinks"
            },

            {
                id: "21",
                name: "Emojis Page",
                path: "21_EmojisPage"
            },

            {
                id: "27",
                name: "Oskar Litovitch",
                path: "27-1_OSKAR_LITOVITCH"
            },

            {
                id: "27.1",
                name: "Jean Brisy",
                path: "27_Jean_Brisy"
            },

            {
                id: "28",
                name: "Full Calendar",
                path: "28_Full_Calendar"
            },

            {
                id: "29",
                name: "Le SkyLAB",
                path: "29_Le_SkyLAB"
            },

            {
                id: "30",
                name: "3D Animation",
                path: "30_3Danimation"
            },

            {
                id: "33",
                name: "Loading Page",
                path: "33_L04Ding_Page"
            },

            {
                id: "39",
                name: "Cursors",
                path: "39_Cursors"
            },

            {
                id: "48",
                name: "STL Viewer",
                path: "48_STL_viewer"
            },

            {
                id: "51",
                name: "BD",
                path: "51_BD_1"
            },

            {
                id: "53",
                name: "SplashScreen",
                path: "53_SplashScreen"
            },

            {
                id: "54",
                name: "SplashScreen",
                path: "54_SplashScreen"
            },

            {
                id: "57",
                name: "Galerie Brico",
                path: "57_G4LERIE_BRICO"
            },

            {
                id: "58",
                name: "NextGen",
                path: "58_NextGen"
            },

            {
                id: "58.2",
                name: "NextGen 2",
                path: "58_NextGen2"
            },

            {
                id: "69",
                name: "Texture Generator",
                path: "69_TEXTURE_Generator"
            },

            {
                id: "70",
                name: "Texture User",
                path: "70_TEXTURE_User"
            },

            {
                id: "72",
                name: "3D Test",
                path: "72_3D_Test"
            },

            {
                id: "76",
                name: "Visualiser",
                path: "76_ViSuALiSeR"
            },

            {
                id: "86",
                name: "TFT Designer",
                path: "86_TFT_Designer"
            }

        ],


        HARDWARE: [

            {
                id: "22",
                name: "LED Code Simulator",
                path: "22_LED_Code_Simulator"
            },

            {
                id: "23",
                name: "OHM Resistance",
                path: "23_OHM_RESISTANCE"
            },

            {
                id: "29",
                name: "Le SkyLAB",
                path: "29_Le_SkyLAB"
            },

            {
                id: "43",
                name: "Arduino Web Interface",
                path: "43_Arduino_Web_Interface"
            },

            {
                id: "65",
                name: "Drive 3x0c3t",
                path: "65_DRIVE_3X0C3T"
            },

            {
                id: "73",
                name: "App Conteneur",
                path: "73_APP_CONTENEUR"
            },

            {
                id: "85",
                name: "MIC Visualizer",
                path: "85_MiC_VISUALIZER"
            },

            {
                id: "86",
                name: "TFT Designer",
                path: "86_TFT_Designer"
            }

        ],


        GAMES: [

            {
                id: "64",
                name: "Tower Defense Demo",
                path: "64_TOWER_DEFENSE_DEMO/public/index.html"
            },

            {
                id: "66",
                name: "Quiz Musical",
                path: "66_QUIZmusical"
            },

            {
                id: "71",
                name: "SP4CE Program",
                path: "71_SP4CEprogram"
            },

            {
                id: "74",
                name: "Game",
                path: "74_GAME"
            },

            {
                id: "78",
                name: "OFF ROAD FURY",
                path: "78_0FF_RO4D_FURY"
            },

            {
                id: "79",
                name: "Game Interface",
                path: "79_GAMEinterface"
            },

            {
                id: "88",
                name: "AN0THER G4ME",
                path: "88_AN0THER_G4ME"
            },

            {
                id: "89",
                name: "Version Selektor",
                path: "89_version_SELEKT0R"
            }

        ],


        MEDIA: [

            {
                id: "02.1",
                name: "S0und Player",
                path: "02_Sound_Music/01_S0und_PLAYer"
            },

            {
                id: "02.2",
                name: "Synth",
                path: "02_Sound_Music/02_Synth"
            },

            {
                id: "04",
                name: "Films",
                path: "04_FILMS"
            },

            {
                id: "44",
                name: "InstaCutter",
                path: "44_InstaCutter"
            },

            {
                id: "45",
                name: "AMP Player",
                path: "45_3x0c3t_AMP_PLAYER"
            },

            {
                id: "46",
                name: "SinglePage Festival",
                path: "46_SinglePage_Festival"
            },

            {
                id: "47",
                name: "Bandcamp Accounts",
                path: "47_Bandcamp_accounts"
            },

            {
                id: "58",
                name: "NextGen",
                path: "58_NextGen"
            },

            {
                id: "66",
                name: "Quiz Musical",
                path: "66_QUIZmusical"
            },

            {
                id: "67",
                name: "ANiMPAG3",
                path: "67_ANiMPAG3"
            },

            {
                id: "77",
                name: "SHRUTiB0x",
                path: "77_SHRUTiB0x"
            },

            {
                id: "80",
                name: "MP3 Player",
                path: "80_mp3_PL4YER"
            },

            {
                id: "85",
                name: "MIC Visualizer",
                path: "85_MiC_VISUALIZER"
            },

            {
                id: "87",
                name: "SPE4Knerd",
                path: "87_SPE4Knerd"
            }

        ]

    };


    /* =====================================================
       TITRES
       ===================================================== */

    const descriptions = {

        WEB:
            "WEB / ACCESS / NETWORK",

        CODE:
            "CODE / SOURCE / DEVELOPMENT",

        DESIGN:
            "DESIGN / VISUAL / UX",

        HARDWARE:
            "HARDWARE / MAKER / LAB",

        GAMES:
            "GAMES / PLAY / TEST",

        MEDIA:
            "MEDIA / AUDIO / VIDEO"

    };


    /* =====================================================
       CREATION D'UN PROJET
       ===================================================== */

    function createProjectItem(
        project
    ) {

        const link =
            document.createElement(
                "a"
            );

        link.className =
            "project-browser-item";

        link.href =
            "/L4B/" +
            project.path;

        link.target =
            "_blank";

        link.rel =
            "noopener noreferrer";

        link.innerHTML = `

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

        return link;
    }


    /* =====================================================
       OUVERTURE
       ===================================================== */

    function openProjectBrowser(
        category
    ) {

        const categoryProjects =
            projects[category];

        if (
            !categoryProjects
        ) {
            return;
        }


        projectBrowserList.innerHTML =
            "";


        categoryProjects.forEach(
            (project) => {

                const item =
                    createProjectItem(
                        project
                    );

                projectBrowserList.appendChild(
                    item
                );

            }
        );


        const title =
            projectBrowser.querySelector(
                ".project-browser-header h2"
            );


        const kicker =
            projectBrowser.querySelector(
                ".project-browser-kicker"
            );


        if (title) {

            title.textContent =
                category;

        }


        if (kicker) {

            kicker.textContent =
                descriptions[category];

        }


        projectBrowser.classList.add(
            "visible"
        );


        projectBrowser.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "project-browser-open"
        );

    }


    /* =====================================================
       FERMETURE
       ===================================================== */

    function closeProjectBrowser() {

        projectBrowser.classList.remove(
            "visible"
        );


        projectBrowser.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "project-browser-open"
        );

    }


    /* =====================================================
       MODULES WEB / CODE / DESIGN / HARDWARE
       GAMES / MEDIA
       ===================================================== */

    document
        .querySelectorAll(
            ".module[data-module]"
        )
        .forEach(
            (module) => {

                module.addEventListener(
                    "click",
                    () => {

                        const category =
                            module.dataset.module;

                        openProjectBrowser(
                            category
                        );

                    }
                );

            }
        );


    /* =====================================================
       BOUTON FERMER
       ===================================================== */

    projectBrowserClose.addEventListener(
        "click",
        closeProjectBrowser
    );


    /* =====================================================
       CLIC SUR LE FOND
       ===================================================== */

    projectBrowser.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                projectBrowser
            ) {

                closeProjectBrowser();

            }

        }
    );


    /* =====================================================
       TOUCHE ESC
       ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                projectBrowser.classList.contains(
                    "visible"
                )
            ) {

                closeProjectBrowser();

            }

        }
    );


})();