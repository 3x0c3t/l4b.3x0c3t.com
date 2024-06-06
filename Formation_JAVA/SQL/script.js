document.addEventListener("DOMContentLoaded", function() {
    const commandList = document.getElementById('command-list');

    fetch('database.json')
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach(theme => {
                const themeHeader = document.createElement('h2');
                themeHeader.textContent = theme;
                commandList.appendChild(themeHeader);

                const themeCommands = document.createElement('ul');
                data[theme].forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('command');
                    const commandTitle = document.createElement('h3');
                    const commandDesc = document.createElement('p');
                    commandTitle.textContent = item.command;
                    commandDesc.textContent = item.description;
                    listItem.appendChild(commandTitle);
                    listItem.appendChild(commandDesc);
                    listItem.addEventListener('click', function() {
                        copyToClipboard(item.command);
                    });
                    themeCommands.appendChild(listItem);
                });
                commandList.appendChild(themeCommands);
            });
        })
        .catch(error => console.error('Erreur de chargement du fichier JSON :', error));

    function copyToClipboard(text) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Commande copiée vers le presse-papiers: ' + text);
    }
});
