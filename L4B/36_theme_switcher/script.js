// 36_theme_switcher //
// script.js //
// 20241031 - 09:42:40 //

// Fonction pour changer le thème
function changeTheme(theme) {
    const themeLink = document.getElementById('theme-stylesheet');
    themeLink.href = theme + '.css';
    localStorage.setItem('selectedTheme', theme); // Sauvegarde dans le stockage local
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'css1'; // Thème par défaut si rien n'est sauvegardé
    changeTheme(savedTheme); // Applique le thème sauvegardé

    const themeToggle = document.querySelector('.theme-toggle');
    const themeMenu = document.querySelector('.theme-menu');

    // Ouvrir/fermer le menu au clic
    themeToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        themeMenu.classList.toggle('show');
    });

    // Fermer le menu au clic ailleurs
    document.addEventListener('click', function() {
        themeMenu.classList.remove('show');
    });

    // Changement de thème via les liens
    const themeLinks = document.querySelectorAll('.theme-menu a');
    themeLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const theme = this.getAttribute('data-theme'); // Récupère le thème depuis data-theme
            changeTheme(theme);
        });
    });
});
