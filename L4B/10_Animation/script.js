document.addEventListener("DOMContentLoaded", () => {
    const blueBall = document.querySelector('.blue-ball');
    const greenBall = document.querySelector('.green-ball');

    let angle = 0;
    const radius = 25;  // Rayon de rotation en vmin pour responsive
    let speed = 0.1;  // Vitesse de rotation initiale
    const totalTours = 5;  // Nombre de tours avant de partir vers les diagonales
    const speedIncrease = 0.01;  // Augmentation de la vitesse à chaque frame
    let centerReached = false;  // Indicateur pour déterminer si les boules ont atteint le centre
    let diagonalMoveStarted = false;  // Indicateur pour déterminer si le mouvement diagonal a commencé

    function animate() {
        const centerX = document.querySelector('.center').offsetWidth / 2;
        const centerY = document.querySelector('.center').offsetHeight / 2;

        const blueX = centerX + radius * Math.cos(angle) - blueBall.offsetWidth / 2;
        const blueY = centerY + radius * Math.sin(angle) - blueBall.offsetHeight / 2;
        const greenX = centerX + radius * Math.cos(angle + Math.PI) - greenBall.offsetWidth / 2;
        const greenY = centerY + radius * Math.sin(angle + Math.PI) - greenBall.offsetHeight / 2;

        blueBall.style.transform = `translate(${blueX}px, ${blueY}px)`;
        greenBall.style.transform = `translate(${greenX}px, ${greenY}px)`;

        angle += speed;

        // Augmenter la vitesse
        speed += speedIncrease;

        // Vérifier si les boules sont au centre
        if (Math.abs(blueX - centerX) < 1 && Math.abs(blueY - centerY) < 1 &&
            Math.abs(greenX - centerX) < 1 && Math.abs(greenY - centerY) < 1) {
            centerReached = true;
        }

        // Si les boules ont atteint le centre et ont effectué 5 tours, déplacez-les en diagonale
        if (centerReached && angle >= totalTours * 2 * Math.PI && !diagonalMoveStarted) {
            moveOutDiagonally();
            diagonalMoveStarted = true;
        }

        // Continue l'animation jusqu'à ce que les boules sortent de la vue
        if (diagonalMoveStarted && (blueX > window.innerWidth || blueY > window.innerHeight ||
            greenX < 0 || greenY < 0)) {
            cancelAnimationFrame(animationId);
        } else {
            requestAnimationFrame(animate);
        }
    }

    function moveOutDiagonally() {
        let blueBallX = window.innerWidth / 2;
        let blueBallY = window.innerHeight / 2;
        let greenBallX = window.innerWidth / 2;
        let greenBallY = window.innerHeight / 2;

        function move() {
            blueBallX += 5; // Déplacez-vous vers le bas et vers la droite
            blueBallY += 5; 
            greenBallX -= 5; // Déplacez-vous vers le haut et vers la gauche
            greenBallY -= 5;

            blueBall.style.transform = `translate(${blueBallX - blueBall.offsetWidth / 2}px, ${blueBallY - blueBall.offsetHeight / 2}px)`;
            greenBall.style.transform = `translate(${greenBallX - greenBall.offsetWidth / 2}px, ${greenBallY - greenBall.offsetHeight / 2}px)`;

            // Continue moving until they are out of viewport
            if (blueBallX < window.innerWidth && blueBallY < window.innerHeight && greenBallX > 0 && greenBallY > 0) {
                requestAnimationFrame(move);
            }
        }
        move();
    }

    let animationId = requestAnimationFrame(animate);
});
