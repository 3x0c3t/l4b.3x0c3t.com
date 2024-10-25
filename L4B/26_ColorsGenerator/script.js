// Sélection des éléments nécessaires pour le header, body et footer
const headerColor1 = document.getElementById("header-color1");
const headerColor2 = document.getElementById("header-color2");
const headerAngle = document.getElementById("header-angle");
const headerRadial = document.getElementById("header-radial");
const header = document.getElementById("dynamic-header");
const preview = document.getElementById("preview");
const headerAngleValue = document.getElementById("header-angle-value");

const bodyColor1 = document.getElementById("body-color1");
const bodyColor2 = document.getElementById("body-color2");
const bodyAngle = document.getElementById("body-angle");
const bodyRadial = document.getElementById("body-radial");
const body = document.body;
const bodyAngleValue = document.getElementById("body-angle-value");

const footerColor1 = document.getElementById("footer-color1");
const footerColor2 = document.getElementById("footer-color2");
const footerAngle = document.getElementById("footer-angle");
const footerRadial = document.getElementById("footer-radial");
const footer = document.getElementById("dynamic-footer");
const footerAngleValue = document.getElementById("footer-angle-value");

const numSubBlocs = document.getElementById("num-sub-blocs");
const headerSubblocksContainer = document.getElementById("header-subblocks");
const footerSubblocksContainer = document.getElementById("footer-subblocks");

// Fonction pour créer les sous-blocs
function createSubBlocks(container, count) {
    // Vider le conteneur avant d'ajouter des sous-blocs
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const subblock = document.createElement("div");
        subblock.className = "header-subblock";
        subblock.textContent = `Sous-bloc ${i + 1}`;
        container.appendChild(subblock);
    }
}

// Fonction pour mettre à jour le dégradé du header et afficher l'angle
function updateHeaderGradient() {
    const color1 = headerColor1.value;
    const color2 = headerColor2.value;
    const angle = headerAngle.value;
    const gradientType = headerRadial.checked ? "radial-gradient" : "linear-gradient";
    
    const gradientStyle = `${gradientType}(${angle}deg, ${color1}, ${color2})`;
    
    // Appliquer le gradient au background du header
    header.style.background = gradientStyle;

    // Mettre à jour l'affichage de la valeur d'angle
    headerAngleValue.textContent = `${angle}°`;
}

// Fonction pour mettre à jour le dégradé du body
function updateBodyGradient() {
    const color1 = bodyColor1.value;
    const color2 = bodyColor2.value;
    const angle = bodyAngle.value;
    const gradientType = bodyRadial.checked ? "radial-gradient" : "linear-gradient";

    const gradientStyle = `${gradientType}(${angle}deg, ${color1}, ${color2})`;

    // Appliquer le gradient au background du body
    body.style.background = gradientStyle;

    // Mettre à jour l'affichage de la valeur d'angle
    bodyAngleValue.textContent = `${angle}°`;
}

// Fonction pour mettre à jour le dégradé du footer
function updateFooterGradient() {
    const color1 = footerColor1.value;
    const color2 = footerColor2.value;
    const angle = footerAngle.value;
    const gradientType = footerRadial.checked ? "radial-gradient" : "linear-gradient";

    const gradientStyle = `${gradientType}(${angle}deg, ${color1}, ${color2})`;

    // Appliquer le gradient au background du footer
    footer.style.background = gradientStyle;

    // Mettre à jour l'affichage de la valeur d'angle
    footerAngleValue.textContent = `${angle}°`;
}

// Événements pour mettre à jour le dégradé en temps réel
headerColor1.addEventListener("input", updateHeaderGradient);
headerColor2.addEventListener("input", updateHeaderGradient);
headerAngle.addEventListener("input", updateHeaderGradient);
headerRadial.addEventListener("change", updateHeaderGradient);

bodyColor1.addEventListener("input", updateBodyGradient);
bodyColor2.addEventListener("input", updateBodyGradient);
bodyAngle.addEventListener("input", updateBodyGradient);
bodyRadial.addEventListener("change", updateBodyGradient);

footerColor1.addEventListener("input", updateFooterGradient);
footerColor2.addEventListener("input", updateFooterGradient);
footerAngle.addEventListener("input", updateFooterGradient);
footerRadial.addEventListener("change", updateFooterGradient);

// Événement pour générer les sous-blocs
numSubBlocs.addEventListener("change", () => {
    const count = parseInt(numSubBlocs.value);
    createSubBlocks(headerSubblocksContainer, count);
    createSubBlocks(footerSubblocksContainer, count);
});

// Appel initial pour mettre à jour les dégradés
updateHeaderGradient();
updateBodyGradient();
updateFooterGradient();
