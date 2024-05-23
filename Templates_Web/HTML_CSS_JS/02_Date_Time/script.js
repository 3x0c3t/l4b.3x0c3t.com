// Fonction pour mettre à jour la taille de l'écran en temps réel
function updateHeader2() {
    const header2 = document.getElementById('header2');
    header2.textContent = `TAILLE DE L'ÉCRAN : ${window.innerWidth}px x ${window.innerHeight}px`;
}

// Fonction pour mettre à jour l'heure actuelle au format AAAAMMJJ JJJJ - HH:MM:SS
function updateHeader3() {
    const header3 = document.getElementById('header3');
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const dayName = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'][date.getDay()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    header3.innerHTML = `${year}${month}${day} ${dayName} - ${hours}:${minutes}:${seconds}`;
}

// Appel des fonctions d'actualisation initiales
updateHeader2();
updateHeader3();

// Actualisation automatique de la taille de l'écran et de l'heure
window.addEventListener('resize', updateHeader2);
setInterval(updateHeader3, 1000);
