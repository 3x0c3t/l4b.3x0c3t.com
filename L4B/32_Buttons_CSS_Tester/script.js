function updateButton() {
    const button = document.getElementById('test-button');
    const bgColor = document.getElementById('background-color').value;
    const borderRadius = document.getElementById('border-radius').value;
    const boxShadow = document.getElementById('box-shadow').value;

    button.style.background = bgColor;
    button.style.borderRadius = borderRadius;
    button.style.boxShadow = boxShadow;

    // Mettre à jour le code CSS affiché
    const cssCode = `
    background: ${bgColor};
    border-radius: ${borderRadius};
    box-shadow: ${boxShadow};`;

    // Mettre à jour le code CSS complet avec l'effet hover
    const hoverEffect = document.getElementById('hover-effect').value;
    const hoverColor = document.getElementById('hover-color').value;

    const fullCssCode = `
/* Code pour le bouton */
#test-button {
    padding: 15px 30px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.3s ease;
    background: ${bgColor};
    border-radius: ${borderRadius};
    box-shadow: ${boxShadow};
}

/* Code pour le hover */
#test-button:hover {
    background-color: ${hoverColor}; /* Couleur de fond au survol */
    transform: ${hoverEffect}; /* Effet au survol */
}`;

    document.getElementById('full-css-code').textContent = fullCssCode; // Afficher le code CSS complet
}

function updateHoverEffect() {
    const button = document.getElementById('test-button');
    const hoverEffect = document.getElementById('hover-effect').value;
    const hoverColor = document.getElementById('hover-color').value;

    button.onmouseover = function () {
        button.style.transform = hoverEffect;
        button.style.background = hoverColor; // Changer la couleur de fond au hover
    };

    button.onmouseout = function () {
        button.style.transform = 'scale(1)';
        button.style.background = document.getElementById('background-color').value; // Revenir à la couleur de fond initiale
    };
}
