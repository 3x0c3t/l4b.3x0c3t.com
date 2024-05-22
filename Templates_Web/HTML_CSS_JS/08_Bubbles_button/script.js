document.getElementById('bubbleButton').addEventListener('click', function(event) {
    const button = event.target;
    const buttonRect = button.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + (buttonRect.width / 2);
    const buttonCenterY = window.innerHeight - buttonRect.top;

    const numBubbles = 5; // Nombre de bulles à créer à chaque clic
    const bubbleSpacing = 20; // Espacement entre les bulles en pixels

    createBubbles(buttonCenterX, buttonCenterY, numBubbles, bubbleSpacing);
});

function createBubbles(startX, startY, numBubbles, bubbleSpacing) {
    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const size = Math.floor(Math.random() * 20) + 10; // Taille aléatoire entre 10px et 30px
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';

        const randomOffsetX = (Math.random() - 0.5) * 100; // Position aléatoire autour du bouton
        const randomOffsetY = (Math.random() - 0.5) * 100;
        const endX = startX + randomOffsetX;
        const endY = startY + randomOffsetY - (i * bubbleSpacing); // Ajuster la position en fonction de l'index

        bubble.style.left = startX + 'px';
        bubble.style.bottom = startY + 'px';

        document.body.appendChild(bubble);

        moveBubble(bubble, endX, endY);
    }
}

function moveBubble(bubble, endX, endY) {
    const startX = parseFloat(bubble.style.left);
    const startY = parseFloat(bubble.style.bottom);
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const duration = 2000; // Durée de l'animation en millisecondes

    let startTime;

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        bubble.style.left = startX + deltaX * progress + 'px';
        bubble.style.bottom = startY + deltaY * progress + 'px';

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            bubble.remove();
        }
    }

    requestAnimationFrame(animate);
}
