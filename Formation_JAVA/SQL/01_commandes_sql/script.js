document.addEventListener('DOMContentLoaded', function() {
    const commandContainers = document.querySelectorAll('.command-container');

    commandContainers.forEach(container => {
        container.addEventListener('click', function() {
            const commandText = this.querySelector('.sub-block1').textContent;

            // Créer un élément textarea pour copier le texte dans le presse-papiers
            const textarea = document.createElement('textarea');
            textarea.value = commandText;
            document.body.appendChild(textarea);

            // Sélectionner et copier le texte dans le presse-papiers
            textarea.select();
            document.execCommand('copy');

            // Supprimer l'élément textarea
            document.body.removeChild(textarea);

            // Afficher un message de confirmation
            alert('La commande a été copiée dans le presse-papiers : ' + commandText);
        });
    });
});
