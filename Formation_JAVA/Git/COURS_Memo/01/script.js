function copyCommand(button) {
    var command = button.previousElementSibling.textContent;
    navigator.clipboard.writeText(command).then(function() {
        alert('Commande copiée: ' + command);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}
