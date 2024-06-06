// JavaScript pour copier les commandes dans le presse-papiers

document.querySelectorAll('.command-block button').forEach(button => {
    button.addEventListener('click', () => {
        const command = button.dataset.command;
        copyToClipboard(command);
        alert('La commande a été copiée dans le presse-papiers : ' + command);
    });
});

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
