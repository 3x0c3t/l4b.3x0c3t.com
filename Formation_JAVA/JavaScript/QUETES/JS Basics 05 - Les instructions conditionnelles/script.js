// Fonction pour afficher un message en fonction du mot de passe saisi
function showMessage() {
    let userName = document.getElementById('userNameInput').value;
    let password = document.getElementById('passwordInput').value;
    let messageElement = document.getElementById('message');
    
    switch (password) {
        case "TUPEUXPASTEST":
            let greetingMessage = "Bien le BOnjouRRRR " + userName + "!";
            let currentDate = new Date().toLocaleString('fr-FR'); // Récupérer la date et l'heure actuelles
            messageElement.innerText = greetingMessage + " Il est actuellement " + currentDate;
            messageElement.style.fontSize = "36px";
            messageElement.style.fontWeight = "bold";
            // Afficher en vert
            messageElement.style.color = "green";
            // Appliquer le style clignotant
            setInterval(function(){
                if(messageElement.style.visibility === 'hidden'){
                    messageElement.style.visibility = 'visible';
                } else {
                    messageElement.style.visibility = 'hidden';
                }
            }, 500);
            break;
        default:
            messageElement.innerText = "MOT DE PASSE Incorrect " + userName;
            // Afficher en rouge
            messageElement.style.color = "red";
            break;
    }
    
    // Afficher le mot de passe en clair près du champ de saisie (pour le test)
    alert("Le mot de passe saisi est : " + password);
}

// Fonction pour afficher un message en fonction de la couleur préférée avec l'opérateur ternaire
function showFavoriteColorMessage() {
    let favoriteColor = document.getElementById('favoriteColorInput').value;
    let messageElement = document.getElementById('favoriteColorMessage');

    // Utilisation de l'opérateur ternaire pour afficher un message en fonction de la couleur préférée
    let message = (favoriteColor.toLowerCase() === "bleu") ? "Bleu est une excellente couleur!" : "Désolé, nous ne pouvons pas valider votre choix.";
    
    messageElement.innerText = message;
}
