document.addEventListener('DOMContentLoaded', function() {
    fetch('commandes_linux.php')
    .then(response => response.json())
    .then(commands => {
        const commandsTableBody = document.querySelector('#commandsTable tbody');
        commands.forEach(command => {
            const row = `
                <tr>
                    <td><button class="copyButton" data-command="${command.exemple}">Copier</button></td>
                    <td>${command.id}</td>
                    <td>${command.nom}</td>
                    <td>${command.categorie}</td>
                    <td>${command.description}</td>
                    <td>${command.exemple}</td>
                </tr>
            `;
            commandsTableBody.innerHTML += row;
        });

        // Fonction pour copier le texte dans le presse-papiers
        function copyToClipboard(text) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }

        // Ajouter un écouteur d'événement pour chaque bouton de copie
        const copyButtons = document.querySelectorAll('.copyButton');
        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const command = button.dataset.command;
                copyToClipboard(command);
                alert('Commande copiée dans le presse-papiers : ' + command);
            });
        });
    })
    .catch(error => console.error('Error fetching commands:', error));
});
