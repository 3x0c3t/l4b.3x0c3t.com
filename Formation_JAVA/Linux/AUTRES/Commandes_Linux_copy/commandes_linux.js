document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copyButton');

    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.getAttribute('data-command');
            navigator.clipboard.writeText(content)
                .then(() => {
                    alert('Contenu copié dans le presse-papiers : ' + content);
                })
                .catch(err => {
                    console.error('Erreur lors de la copie dans le presse-papiers : ', err);
                });
        });
    });
});
