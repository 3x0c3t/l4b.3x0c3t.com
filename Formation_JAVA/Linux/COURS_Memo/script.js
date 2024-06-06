function copyCommand(command, button) {
    navigator.clipboard.writeText(command).then(() => {
        button.textContent = "Copié !!";
        setTimeout(() => {
            button.textContent = "Copier";
        }, 2000);
    }).catch(err => {
        console.error('Impossible de copier la commande: ', err);
    });
}
