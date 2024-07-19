const errorMessage = document.getElementById('error-message');
const body = document.body;

let posX = 0;
let posY = 0;
let dirX = 4; // Vitesse horizontale initiale
let dirY = 4; // Vitesse verticale initiale

function moveErrorMessage() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const messageWidth = errorMessage.offsetWidth;
    const messageHeight = errorMessage.offsetHeight;

    posX += dirX;
    posY += dirY;

    // Vérifier les collisions avec les bords de l'écran
    if (posX + messageWidth >= windowWidth || posX <= 0) {
        dirX = -dirX;
        changeBackgroundColor();
    }

    if (posY + messageHeight >= windowHeight || posY <= 0) {
        dirY = -dirY;
        changeBackgroundColor();
    }

    errorMessage.style.left = posX + 'px';
    errorMessage.style.top = posY + 'px';

    requestAnimationFrame(moveErrorMessage);
}

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

moveErrorMessage();
