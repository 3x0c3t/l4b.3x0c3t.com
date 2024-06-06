document.addEventListener("DOMContentLoaded", function() {
    var copyButtons = document.querySelectorAll(".copy-button");
    copyButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        var command = this.previousElementSibling.innerText.trim(); // Récupère la commande
        
        // Tente d'écrire le texte dans le presse-papiers
        navigator.clipboard.writeText(command)
          .then(function() {
            // Remplace le texte du bouton par "Copié !"
            button.innerText = "Copié !";
            setTimeout(function() {
              // Remet le texte original après 2 secondes
              button.innerText = "Copier";
            }, 2000);
            console.log("Texte copié dans le presse-papiers :", command); // Affiche un message dans la console
          })
          .catch(function(error) {
            console.error("Erreur lors de la copie dans le presse-papiers :", error); // Affiche une erreur dans la console
          });
      });
    });
  });
  