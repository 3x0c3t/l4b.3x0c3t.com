document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', function() {
        for (let i = 0; i < 10; i++) {
            createDrop(this);
        }
    });
});

function createDrop(button) {
    const drop = document.createElement('div');
    drop.className = 'goutte';
    
    // Taille aléatoire de la goutte
    const size = Math.random() * 10 + 10; // Entre 10 et 20 pixels
    drop.style.width = `${size}px`;
    drop.style.height = `${size}px`;
    
    // Position de départ (centre du bouton)
    const rect = button.getBoundingClientRect();
    drop.style.left = `${rect.width / 2 - size / 2}px`;
    drop.style.top = `${rect.height / 2 - size / 2}px`;

    // Déplacement aléatoire
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 50 + 50; // Entre 50 et 100 pixels
    drop.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
    drop.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

    drop.style.animation = `expulse 1s forwards`;

    button.appendChild(drop);

    // Supprimer la goutte après l'animation
    drop.addEventListener('animationend', () => {
        drop.remove();
    });
}
