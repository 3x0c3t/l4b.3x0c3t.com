"use strict";


/* ============================================================
   L4B PROJECT DATABASE
============================================================ */

const L4B_ROOT = "/L4B/";


const projects = [

    {
        id: "00",
        folder: "00_LinkTree_3x0c3t",
        category: "WEB",
        date: "2024-10-25",
        summary: "LinkTree inspired personal portal and experimental web interface.",
        preview: true
    },

    {
        id: "00B",
        folder: "00_LinkTree_3x0c3t_2",
        category: "WEB",
        date: "2024-11-25",
        summary: "Second iteration of the 3x0c3t LinkTree interface.",
        preview: true
    },

    {
        id: "01",
        folder: "01_API_FLAGS",
        category: "CODE",
        date: "2024-05-22",
        summary: "Experimental API and flag interface.",
        preview: true
    },

    {
        id: "02",
        folder: "02_Sound_Music",
        category: "MEDIA",
        date: "2024-06-01",
        summary: "Sound and music experimentation project.",
        preview: false
    },

    {
        id: "03",
        folder: "03_Prompt_generator",
        category: "CODE",
        date: "2024-05-25",
        summary: "Prompt generation and experimentation interface.",
        preview: true
    },

    {
        id: "04",
        folder: "04_FILMS",
        category: "MEDIA",
        date: "2024-05-28",
        summary: "Film and audiovisual experimentation archive.",
        preview: true
    },

    {
        id: "05A",
        folder: "05_Veille_Techno",
        category: "TOOLS",
        date: "2024-06-03",
        summary: "Technology watch and research interface.",
        preview: true
    },

    {
        id: "05B",
        folder: "05_Veille_Techno2",
        category: "TOOLS",
        date: "2024-06-07",
        summary: "Second technology watch and experimentation interface.",
        preview: true
    },

    {
        id: "06",
        folder: "06_CV",
        category: "WEB",
        date: "2024-06-13",
        summary: "CV and personal professional presentation project.",
        preview: true
    },

    {
        id: "07",
        folder: "07_CV",
        category: "WEB",
        date: "2024-07-02",
        summary: "Second CV interface and presentation experiment.",
        preview: true
    },

    {
        id: "08A",
        folder: "08.2_QR CODE_PNG_STL_SVG",
        category: "DESIGN",
        date: "2025-04-25",
        summary: "QR code generation and export experiments using PNG, STL and SVG formats.",
        preview: true
    },

    {
        id: "08B",
        folder: "08_QRcode",
        category: "DESIGN",
        date: "2024-07-19",
        summary: "QR code generation and visual experimentation.",
        preview: true
    },

    {
        id: "09",
        folder: "09_TEMPLATE",
        category: "WEB",
        date: "2024-06-05",
        summary: "Reusable web template and interface foundation.",
        preview: true
    },

    {
        id: "10",
        folder: "10_Animation",
        category: "DESIGN",
        date: "2024-06-11",
        summary: "CSS and web animation experiments.",
        preview: true
    },

    {
        id: "11",
        folder: "11_Carousel",
        category: "WEB",
        date: "2024-06-13",
        summary: "Carousel interface experimentation.",
        preview: true
    },

    {
        id: "12",
        folder: "12_Carousel",
        category: "WEB",
        date: "2024-06-17",
        summary: "Second carousel implementation and interaction tests.",
        preview: true
    },

    {
        id: "13A",
        folder: "13_01_Carousel_events",
        category: "WEB",
        date: "2024-12-10",
        summary: "Event-oriented carousel interface.",
        preview: true
    },

    {
        id: "13B",
        folder: "13_Carousel",
        category: "WEB",
        date: "2024-06-18",
        summary: "Carousel and navigation experiment.",
        preview: true
    },

    {
        id: "13C",
        folder: "13_Carousel_scss",
        category: "CODE",
        date: "2024-06-20",
        summary: "Carousel implementation using SCSS experimentation.",
        preview: true
    },

    {
        id: "14",
        folder: "14_AnimAti0n",
        category: "DESIGN",
        date: "2024-06-19",
        summary: "Experimental animation and motion interface.",
        preview: true
    },

    {
        id: "15",
        folder: "15_iconLinks",
        category: "DESIGN",
        date: "2024-07-02",
        summary: "Icon based navigation and link interface.",
        preview: true
    },

    {
        id: "16",
        folder: "16_404_01",
        category: "WEB",
        date: "2024-07-09",
        summary: "Custom 404 error page experiment.",
        preview: true
    },

    {
        id: "17",
        folder: "17_M0D_Switcher",
        category: "CODE",
        date: "2024-07-23",
        summary: "Interface mode switching and theme experimentation.",
        preview: true
    },

    {
        id: "18",
        folder: "18_C0LoRs",
        category: "DESIGN",
        date: "2024-07-25",
        summary: "Color and visual identity experimentation.",
        preview: true
    },

    {
        id: "19",
        folder: "19_TEMPL4TE",
        category: "WEB",
        date: "2024-07-25",
        summary: "Experimental reusable web template.",
        preview: true
    },

    {
        id: "21",
        folder: "21_EmojisPage",
        category: "WEB",
        date: "2024-08-02",
        summary: "Emoji exploration and interactive web page.",
        preview: true
    },

    {
        id: "22",
        folder: "22_LED_Code_Simulator",
        category: "HARDWARE",
        date: "2024-08-09",
        summary: "Browser based LED and electronic code simulator.",
        preview: true
    },

    {
        id: "23",
        folder: "23_OHM_RESISTANCE",
        category: "HARDWARE",
        date: "2024-08-29",
        summary: "Ohm resistance calculator and electronics experiment.",
        preview: true
    },

    {
        id: "25",
        folder: "25_Generateur_de_grilles_css",
        category: "CODE",
        date: "2024-10-03",
        summary: "CSS grid generation and layout experimentation tool.",
        preview: true
    },

    {
        id: "26",
        folder: "26_ColorsGenerator",
        category: "DESIGN",
        date: "2024-10-03",
        summary: "Interactive color generation and palette experimentation.",
        preview: true
    },

    {
        id: "27A",
        folder: "27-1_OSKAR_LITOVITCH",
        category: "MEDIA",
        date: "2024-11-03",
        summary: "Experimental project and digital archive dedicated to Oskar Litovitch.",
        preview: true
    },

    {
        id: "27B",
        folder: "27_Jean_Brisy",
        category: "MEDIA",
        date: "2024-10-31",
        summary: "Digital project and visual archive dedicated to Jean Brisy.",
        preview: true
    },

    {
        id: "28",
        folder: "28_Full_Calendar",
        category: "WEB",
        date: "2024-09-12",
        summary: "Full screen calendar interface.",
        preview: true
    },

    {
        id: "29",
        folder: "29_Le_SkyLAB",
        category: "WEB",
        date: "2024-10-22",
        summary: "Experimental digital laboratory interface.",
        preview: true
    },

    {
        id: "30",
        folder: "30_3Danimation",
        category: "DESIGN",
        date: "2024-10-22",
        summary: "3D animation and browser graphics experiment.",
        preview: true
    },

    {
        id: "31",
        folder: "31_Buttons_CSS",
        category: "DESIGN",
        date: "2024-10-23",
        summary: "CSS button design and interaction experiments.",
        preview: true
    },

    {
        id: "32",
        folder: "32_Buttons_CSS_Tester",
        category: "TOOLS",
        date: "2024-10-23",
        summary: "Interactive tester for CSS buttons.",
        preview: true
    },

    {
        id: "33",
        folder: "33_L04Ding_Page",
        category: "WEB",
        date: "2024-10-25",
        summary: "Loading page and visual loading sequence experiment.",
        preview: true
    },

    {
        id: "34",
        folder: "34_Prompt_Test",
        category: "CODE",
        date: "2024-10-25",
        summary: "Prompt testing and experimentation environment.",
        preview: true
    },

    {
        id: "35",
        folder: "35_theme_switcher",
        category: "CODE",
        date: "2024-10-26",
        summary: "Theme switching and interface customization.",
        preview: true
    },

    {
        id: "36",
        folder: "36_theme_switcher",
        category: "CODE",
        date: "2024-10-29",
        summary: "Alternative theme switching experiment.",
        preview: true
    },

    {
        id: "37",
        folder: "37_Police_ACAB",
        category: "MEDIA",
        date: "2024-11-04",
        summary: "Graphic and political visual experimentation.",
        preview: true
    },

    {
        id: "38",
        folder: "38_Template_RESPONSIVE",
        category: "WEB",
        date: "2024-11-05",
        summary: "Responsive web template experimentation.",
        preview: true
    },

    {
        id: "39",
        folder: "39_Cursors",
        category: "DESIGN",
        date: "2024-11-08",
        summary: "Custom cursor and pointer interaction experiments.",
        preview: true
    },

    {
        id: "40",
        folder: "40_Futuristic_CTRL_P4NEL",
        category: "DESIGN",
        date: "2024-11-18",
        summary: "Futuristic control panel interface.",
        preview: true
    },

    {
        id: "41",
        folder: "41_CodePen_LAYERED_TEXT_CHALLENGE_V1",
        category: "DESIGN",
        date: "2024-11-18",
        summary: "Layered text visual experiment inspired by CodePen challenges.",
        preview: true
    },

    {
        id: "42",
        folder: "42_CodePen_LAYERED_TEXT_CHALLENGE_V2",
        category: "DESIGN",
        date: "2024-11-18",
        summary: "Second iteration of layered text experimentation.",
        preview: true
    },

    {
        id: "43A",
        folder: "43_Arduino_Web_Interface",
        category: "HARDWARE",
        date: "2024-11-18",
        summary: "Web interface intended for Arduino hardware interaction.",
        preview: false
    },

    {
        id: "43B",
        folder: "43_DASHBOAR",
        category: "WEB",
        date: "2025-07-30",
        summary: "Dashboard interface and data visualization experiment.",
        preview: false
    },

    {
        id: "44",
        folder: "44_InstaCutter",
        category: "TOOLS",
        date: "2024-11-23",
        summary: "Image and media preparation tool for Instagram formats.",
        preview: true
    },

    {
        id: "45",
        folder: "45_3x0c3t_AMP_PLAYER",
        category: "MEDIA",
        date: "2024-12-02",
        summary: "3x0c3t audio player interface.",
        preview: true
    },

    {
        id: "46",
        folder: "46_SinglePage_Festival",
        category: "WEB",
        date: "2024-12-10",
        summary: "Single page festival website experiment.",
        preview: true
    },

    {
        id: "47",
        folder: "47_Bandcamp_accounts",
        category: "MEDIA",
        date: "2024-12-11",
        summary: "Bandcamp account and music related interface.",
        preview: true
    },

    {
        id: "48",
        folder: "48_STL_viewer",
        category: "3D",
        date: "2024-12-17",
        summary: "Browser based STL 3D model viewer.",
        preview: true
    },

    {
        id: "49",
        folder: "49_SCSS_Tests",
        category: "CODE",
        date: "2024-12-22",
        summary: "SCSS experiments and stylesheet architecture tests.",
        preview: true
    },

    {
        id: "50",
        folder: "50_API_TEST",
        category: "CODE",
        date: "2024-12-26",
        summary: "API experimentation and testing interface.",
        preview: true
    },

    {
        id: "51",
        folder: "51_BD_1",
        category: "CODE",
        date: "2024-12-26",
        summary: "Database experimentation project.",
        preview: true
    },

    {
        id: "52",
        folder: "52_LAYER_CONVERTOR",
        category: "TOOLS",
        date: "2025-01-11",
        summary: "Layer conversion and graphic processing experiment.",
        preview: false
    },

    {
        id: "53",
        folder: "53_SplashScreen",
        category: "DESIGN",
        date: "2025-01-11",
        summary: "Splash screen and application startup interface.",
        preview: true
    },

    {
        id: "54",
        folder: "54_SplashScreen",
        category: "DESIGN",
        date: "2025-01-11",
        summary: "Second splash screen experimentation.",
        preview: true
    },

    {
        id: "55",
        folder: "55_3x0c3t_MENU_ACCUEIL",
        category: "WEB",
        date: "2025-01-13",
        summary: "3x0c3t home menu and navigation interface.",
        preview: true
    },

    {
        id: "56",
        folder: "56_MailReponseCont4ct",
        category: "WEB",
        date: "2025-01-23",
        summary: "Contact and email response interface.",
        preview: true
    },

    {
        id: "57",
        folder: "57_G4LERIE_BRICO",
        category: "MEDIA",
        date: "2025-02-07",
        summary: "DIY and fabrication gallery interface.",
        preview: true
    },

    {
        id: "58A",
        folder: "58_NextGen",
        category: "WEB",
        date: "2025-02-11",
        summary: "Next generation interface experimentation.",
        preview: true
    },

    {
        id: "58B",
        folder: "58_NextGen2",
        category: "WEB",
        date: "2025-02-11",
        summary: "Second generation of the NextGen interface experiment.",
        preview: true
    },

    {
        id: "59",
        folder: "59_BUZZER-TONE_TESTER",
        category: "HARDWARE",
        date: "2025-06-03",
        summary: "Buzzer tone and frequency testing tool.",
        preview: false
    },

    {
        id: "60",
        folder: "60_3x0c3t.com_TEMP",
        category: "WEB",
        date: "2025-06-11",
        summary: "Temporary 3x0c3t.com website environment.",
        preview: true
    },

    {
        id: "61",
        folder: "61_burgerMenu",
        category: "WEB",
        date: "2025-06-17",
        summary: "Responsive burger menu and navigation experiment.",
        preview: true
    },

    {
        id: "62",
        folder: "62_3x0c3t.com",
        category: "WEB",
        date: "2025-06-19",
        summary: "3x0c3t.com website development environment.",
        preview: true
    },

    {
        id: "63",
        folder: "63_DASHBOARD",
        category: "WEB",
        date: "2025-07-30",
        summary: "Dashboard and interface experimentation.",
        preview: true
    },

    {
        id: "64",
        folder: "64_TOWER_DEFENSE_DEMO",
        category: "GAMES",
        date: "2026-01-22",
        summary: "Tower defense game prototype and gameplay experiment.",
        preview: false
    },

    {
        id: "65",
        folder: "65_DRIVE_3X0C3T",
        category: "TOOLS",
        date: "2025-10-20",
        summary: "Experimental personal cloud and file management interface.",
        preview: true
    },

    {
        id: "66",
        folder: "66_QUIZmusical",
        category: "GAMES",
        date: "2025-12-03",
        summary: "Interactive musical quiz game.",
        preview: true
    },

    {
        id: "67",
        folder: "67_ANiMPAG3",
        category: "DESIGN",
        date: "2025-12-09",
        summary: "Animated page and motion graphics experiment.",
        preview: true
    },

    {
        id: "68",
        folder: "68_TEMPLATE",
        category: "WEB",
        date: "2025-12-09",
        summary: "Reusable web template and interface architecture.",
        preview: true
    },

    {
        id: "69",
        folder: "69_TEXTURE_Generator",
        category: "DESIGN",
        date: "2025-12-09",
        summary: "Procedural texture generation interface.",
        preview: true
    },

    {
        id: "70",
        folder: "70_TEXTURE_User",
        category: "DESIGN",
        date: "2025-12-09",
        summary: "User driven texture creation and manipulation interface.",
        preview: true
    },

    {
        id: "71",
        folder: "71_SP4CEprogram",
        category: "WEB",
        date: "2025-12-12",
        summary: "Experimental space themed digital interface.",
        preview: true
    },

    {
        id: "72",
        folder: "72_3D_Test",
        category: "3D",
        date: "2025-12-12",
        summary: "Browser based 3D experimentation and testing.",
        preview: true
    },

    {
        id: "73",
        folder: "73_APP_CONTENEUR",
        category: "CODE",
        date: "2025-12-14",
        summary: "Application container and interface architecture experiment.",
        preview: true
    },

    {
        id: "74",
        folder: "74_GAME",
        category: "GAMES",
        date: "2025-12-20",
        summary: "Experimental game project and interface prototype.",
        preview: true
    },

    {
        id: "75",
        folder: "75_BASE_APP",
        category: "CODE",
        date: "2025-12-17",
        summary: "Base application architecture and reusable application components.",
        preview: true
    },

    {
        id: "76",
        folder: "76_ViSuALiSeR",
        category: "TOOLS",
        date: "2026-01-04",
        summary: "Experimental data and content visualizer.",
        preview: true
    },

    {
        id: "77",
        folder: "77_SHRUTiB0x",
        category: "MEDIA",
        date: "2026-01-10",
        summary: "Experimental sound and media interface.",
        preview: true
    },

    {
        id: "78",
        folder: "78_0FF_RO4D_FURY",
        category: "GAMES",
        date: "2026-01-26",
        summary: "Arcade style road and driving game experiment.",
        preview: true
    },

    {
        id: "79",
        folder: "79_GAMEinterface",
        category: "GAMES",
        date: "2026-01-26",
        summary: "Game interface and interaction design prototype.",
        preview: true
    },

    {
        id: "80",
        folder: "80_mp3_PL4YER",
        category: "MEDIA",
        date: "2026-01-26",
        summary: "MP3 player and browser audio interface.",
        preview: true
    },

    {
        id: "81",
        folder: "81_CSS_builder",
        category: "CODE",
        date: "2026-01-26",
        summary: "CSS construction and interface generation tool.",
        preview: true
    },

    {
        id: "82",
        folder: "82_INTERFACE_ERGO",
        category: "DESIGN",
        date: "2026-01-29",
        summary: "Ergonomic interface and UX experimentation.",
        preview: true
    },

    {
        id: "83",
        folder: "83_Interface_Editeur",
        category: "CODE",
        date: "2026-01-29",
        summary: "Interface editor and interactive development environment.",
        preview: true
    },

    {
        id: "84",
        folder: "84_API_OpenWeather",
        category: "CODE",
        date: "2026-02-02",
        summary: "OpenWeather API integration and weather interface.",
        preview: true
    },

    {
        id: "85",
        folder: "85_MiC_VISUALIZER",
        category: "MEDIA",
        date: "2026-06-01",
        summary: "Real time microphone audio visualizer.",
        preview: true
    },

    {
        id: "86",
        folder: "86_TFT_Designer",
        category: "HARDWARE",
        date: "2026-08-07",
        summary: "TFT display interface and embedded screen design environment.",
        preview: true
    },

    {
        id: "87",
        folder: "87_SPE4Knerd",
        category: "MEDIA",
        date: "2026-09-10",
        summary: "Experimental sound, speech and visual interface.",
        preview: true
    },

    {
        id: "88",
        folder: "88_AN0THER_G4ME",
        category: "GAMES",
        date: "2026-09-11",
        summary: "Experimental board game interface with circular map, cells, players and game systems.",
        preview: true,
        github: "https://github.com/3x0c3t/88_AN0THER_G4ME"
    },

    {
        id: "89",
        folder: "89_version_SELEKT0R",
        category: "TOOLS",
        date: "2026-09-10",
        summary: "Version selector used to test and navigate different project versions.",
        preview: true,
        github: "https://github.com/3x0c3t/89_version_SELEKT0R"
    },

    {
        id: "90",
        folder: "90_G4ME_WiP",
        category: "GAMES",
        date: "2026-09-12",
        summary: "Work in progress game interface built around a circular map, radial menus and experimental grid systems.",
        preview: true,
        github: "https://github.com/3x0c3t/90_G4ME_WiP"
    },

    {
        id: "99",
        folder: "99_Stats_Visit",
        category: "TOOLS",
        date: "2024-11-18",
        summary: "Website statistics and visitor monitoring project.",
        preview: false
    }

];


/* ============================================================
   CATEGORY ALIASES
============================================================ */

const categoryOrder = [
    "ALL",
    "WEB",
    "CODE",
    "DESIGN",
    "HARDWARE",
    "MEDIA",
    "GAMES",
    "TOOLS"
];


/*
    3D projects are intentionally displayed under DESIGN.

    This keeps the main navigation compact while preserving
    their identity in the project database.
*/

projects.forEach(project => {

    if (project.category === "3D") {
        project.originalCategory = "3D";
        project.category = "DESIGN";
    }

});


/* ============================================================
   DOM
============================================================ */

const projectGrid =
    document.getElementById("project-grid");

const emptyState =
    document.getElementById("empty-state");

const visibleProjectCount =
    document.getElementById("visible-project-count");

const totalProjectCount =
    document.getElementById("total-project-count");

const projectListTitle =
    document.getElementById("project-list-title");

const categoryButtons =
    document.querySelectorAll(".category-button");

const projectModal =
    document.getElementById("project-modal");

const modalClose =
    document.getElementById("modal-close");

const modalProjectId =
    document.getElementById("modal-project-id");

const modalProjectNumber =
    document.getElementById("modal-project-number");

const modalProjectName =
    document.getElementById("modal-project-name");

const modalProjectCategory =
    document.getElementById("modal-project-category");

const modalProjectDate =
    document.getElementById("modal-project-date");

const modalProjectStatus =
    document.getElementById("modal-project-status");

const modalProjectSummary =
    document.getElementById("modal-project-summary");

const modalProjectPath =
    document.getElementById("modal-project-path");

const modalPreviewFrame =
    document.getElementById("modal-preview-frame");

const modalNoPreview =
    document.getElementById("modal-no-preview");

const modalPreviewStatus =
    document.getElementById("modal-preview-status");

const modalOpenProject =
    document.getElementById("modal-open-project");

const modalGithub =
    document.getElementById("modal-github");

const indexButton =
    document.getElementById("index-button");

const indexModal =
    document.getElementById("index-modal");

const indexClose =
    document.getElementById("index-close");

const indexList =
    document.getElementById("index-list");

const clockElement =
    document.getElementById("clock");

const footerYear =
    document.getElementById("footer-year");


/* ============================================================
   STATE
============================================================ */

let activeCategory = "ALL";


/* ============================================================
   UTILITIES
============================================================ */

function escapeHtml(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


function projectUrl(project) {

    return `${L4B_ROOT}${encodeURIComponent(project.folder).replaceAll("%2F", "/")}/`;

}


function formatProjectTitle(folder) {

    return folder
        .replace(/^\d+[A-Za-z]?[_-]?/, "")
        .replaceAll("_", " ")
        .replaceAll("-", " ")
        .trim();

}


function formatDate(dateString) {

    if (!dateString) {
        return "UNKNOWN";
    }

    const date =
        new Date(`${dateString}T12:00:00`);

    if (Number.isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString(
        "fr-FR",
        {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }
    );

}


function getDisplayCategory(project) {

    if (project.originalCategory === "3D") {
        return "DESIGN / 3D";
    }

    return project.category;
}


/* ============================================================
   CATEGORY COUNTERS
============================================================ */

function updateCategoryCounters() {

    document
        .querySelectorAll("[data-count]")
        .forEach(element => {

            const category =
                element.dataset.count;

            if (category === "ALL") {

                element.textContent =
                    projects.length;

                return;
            }

            const count =
                projects.filter(
                    project =>
                        project.category === category
                ).length;

            element.textContent = count;

        });

}


/* ============================================================
   PROJECT FILTER
============================================================ */

function getVisibleProjects() {

    if (activeCategory === "ALL") {
        return projects;
    }

    return projects.filter(
        project =>
            project.category === activeCategory
    );

}


/* ============================================================
   RENDER PROJECTS
============================================================ */

function renderProjects() {

    const visibleProjects =
        getVisibleProjects();

    projectGrid.innerHTML = "";

    visibleProjects.forEach(
        (project, index) => {

            const card =
                document.createElement("article");

            card.className = "project-card";

            card.dataset.projectId =
                project.id;

            const previewLabel =
                project.preview
                    ? "PREVIEW"
                    : "ARCHIVE";

            const previewClass =
                project.preview
                    ? ""
                    : " archive";

            card.innerHTML = `

                <span class="project-number">
                    PROJECT_${escapeHtml(project.id)}
                </span>

                <h3>
                    ${escapeHtml(formatProjectTitle(project.folder))}
                </h3>

                <span class="project-category">
                    ${escapeHtml(getDisplayCategory(project))}
                </span>

                <div class="project-summary">
                    ${escapeHtml(project.summary)}
                </div>

                <div class="project-footer">

                    <span>
                        ${escapeHtml(formatDate(project.date))}
                    </span>

                    <span class="project-preview-state${previewClass}">
                        ${previewLabel}
                    </span>

                </div>
            `;

            card.addEventListener(
                "click",
                () => openProject(project)
            );

            projectGrid.appendChild(card);

        }
    );


    visibleProjectCount.textContent =
        visibleProjects.length;

    totalProjectCount.textContent =
        projects.length;

    projectListTitle.textContent =
        activeCategory === "ALL"
            ? "ALL PROJECTS"
            : `${activeCategory} PROJECTS`;

    emptyState.classList.toggle(
        "hidden",
        visibleProjects.length !== 0
    );

}


/* ============================================================
   OPEN PROJECT
============================================================ */

function openProject(project) {

    const url =
        projectUrl(project);

    const title =
        formatProjectTitle(project.folder);

    modalProjectId.textContent =
        `PROJECT_${project.id}`;

    modalProjectNumber.textContent =
        project.id;

    modalProjectName.textContent =
        title;

    modalProjectCategory.textContent =
        getDisplayCategory(project);

    modalProjectDate.textContent =
        formatDate(project.date);

    modalProjectStatus.textContent =
        project.preview
            ? "ONLINE"
            : "ARCHIVE";

    modalProjectSummary.textContent =
        project.summary;

    modalProjectPath.textContent =
        url;

    modalOpenProject.href =
        url;


    /*
        Preview
    */

    modalPreviewFrame.src =
        "about:blank";

    modalNoPreview.classList.remove("visible");

    modalPreviewStatus.textContent =
        project.preview
            ? "LOADING"
            : "NO PREVIEW";


    if (project.preview) {

        modalPreviewFrame.style.display =
            "block";

        modalPreviewFrame.src =
            url;

    } else {

        modalPreviewFrame.style.display =
            "none";

        modalNoPreview.classList.add(
            "visible"
        );

    }


    /*
        GitHub
    */

    if (project.github) {

        modalGithub.href =
            project.github;

        modalGithub.classList.remove(
            "disabled"
        );

        modalGithub.style.display =
            "block";

    } else {

        modalGithub.removeAttribute(
            "href"
        );

        modalGithub.classList.add(
            "disabled"
        );

        modalGithub.style.display =
            "block";

    }


    projectModal.classList.add(
        "visible"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}


/* ============================================================
   CLOSE PROJECT
============================================================ */

function closeProject() {

    projectModal.classList.remove(
        "visible"
    );

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    modalPreviewFrame.src =
        "about:blank";

    document.body.style.overflow =
        "";

}


/* ============================================================
   CATEGORY BUTTONS
============================================================ */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categoryButtons.forEach(
                item =>
                    item.classList.remove(
                        "active"
                    )
            );

            button.classList.add(
                "active"
            );

            activeCategory =
                button.dataset.category;

            renderProjects();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

});


/* ============================================================
   MODAL CLOSE
============================================================ */

modalClose.addEventListener(
    "click",
    closeProject
);


document
    .querySelectorAll("[data-close-modal]")
    .forEach(element => {

        element.addEventListener(
            "click",
            closeProject
        );

    });


/* ============================================================
   INDEX
============================================================ */

function renderIndex() {

    indexList.innerHTML = "";

    projects.forEach(project => {

        const row =
            document.createElement("div");

        row.className =
            "index-row";

        row.innerHTML = `

            <span class="index-row-number">
                ${escapeHtml(project.id)}
            </span>

            <span class="index-row-name">
                ${escapeHtml(project.folder)}
            </span>

            <span class="index-row-category">
                ${escapeHtml(project.category)}
            </span>

            <span class="index-row-preview">
                ${
                    project.preview
                        ? "PREVIEW"
                        : "ARCHIVE"
                }
            </span>

        `;

        row.addEventListener(
            "click",
            () => {

                closeIndex();

                openProject(project);

            }
        );

        indexList.appendChild(row);

    });

}


function openIndex() {

    renderIndex();

    indexModal.classList.add(
        "visible"
    );

    indexModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}


function closeIndex() {

    indexModal.classList.remove(
        "visible"
    );

    indexModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


indexButton.addEventListener(
    "click",
    openIndex
);


indexClose.addEventListener(
    "click",
    closeIndex
);


document
    .querySelectorAll("[data-close-index]")
    .forEach(element => {

        element.addEventListener(
            "click",
            closeIndex
        );

    });


/* ============================================================
   ESCAPE KEY
============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }

        if (
            projectModal.classList.contains(
                "visible"
            )
        ) {

            closeProject();

        }

        if (
            indexModal.classList.contains(
                "visible"
            )
        ) {

            closeIndex();

        }

    }
);


/* ============================================================
   IFRAME EVENTS
============================================================ */

modalPreviewFrame.addEventListener(
    "load",
    () => {

        if (
            modalPreviewFrame.src !==
            "about:blank"
        ) {

            modalPreviewStatus.textContent =
                "ONLINE";

        }

    }
);


modalPreviewFrame.addEventListener(
    "error",
    () => {

        modalPreviewStatus.textContent =
            "ERROR";

    }
);


/* ============================================================
   CLOCK
============================================================ */

function updateClock() {

    const now =
        new Date();

    const hours =
        String(
            now.getHours()
        ).padStart(2, "0");

    const minutes =
        String(
            now.getMinutes()
        ).padStart(2, "0");

    const seconds =
        String(
            now.getSeconds()
        ).padStart(2, "0");

    clockElement.textContent =
        `${hours}:${minutes}:${seconds}`;

}


setInterval(
    updateClock,
    1000
);

updateClock();


/* ============================================================
   YEAR
============================================================ */

footerYear.textContent =
    new Date().getFullYear();


/* ============================================================
   INIT
============================================================ */

updateCategoryCounters();

renderProjects();

console.log(
    `[L4B] ${projects.length} projects loaded`
);