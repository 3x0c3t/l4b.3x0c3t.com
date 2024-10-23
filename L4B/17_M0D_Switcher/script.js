document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Fonction pour activer le mode et appliquer le style du bouton cliqué
    function activateMode(modeClass, activeButton) {
        body.className = modeClass;
        header.className = modeClass;
        footer.className = modeClass;
        
        // Retire la classe 'active' de tous les boutons
        document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        
        // Ajoute la classe 'active' au bouton cliqué
        activeButton.classList.add('active');
    }

    // Ajoute les écouteurs d'événements aux boutons
    document.getElementById('button1').addEventListener('click', function() {
        activateMode('green-mode', this);
    });

    document.getElementById('button2').addEventListener('click', function() {
        activateMode('dark-mode', this);
    });

    document.getElementById('button3').addEventListener('click', function() {
        activateMode('high-contrast-mode', this);
    });
});
