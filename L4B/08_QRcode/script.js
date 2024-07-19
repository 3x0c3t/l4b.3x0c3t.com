// Créer l'instance de QRCodeStyling
var qrCode = new QRCodeStyling({
    width: 256,
    height: 256,
    type: "svg",
    data: "",
    dotsOptions: {
        color: "#000000",
        type: "square"
    },
    backgroundOptions: {
        color: "#ffffff" // Valeur par défaut pour le fond
    },
    qrOptions: {
        errorCorrectionLevel: "H"
    }
});

// Ajouter le QRCodeStyling à l'élément div avec l'ID "qrcode"
qrCode.append(document.getElementById("qrcode"));

// Fonction pour mettre à jour le QR code en fonction des entrées de l'utilisateur
function updateQRCode() {
    var text = document.getElementById('text').value;
    var colorDark = document.getElementById('colorDark').value;
    var colorLight = document.getElementById('colorLight').value;
    var dotStyle = document.getElementById('dotStyle').value;
    var transparentBackground = document.getElementById('transparentBackground').checked;

    qrCode.update({
        data: text,
        dotsOptions: {
            color: colorDark,
            type: dotStyle
        },
        backgroundOptions: {
            color: transparentBackground ? "transparent" : colorLight
        }
    });

    if (text.trim() !== "") {
        document.getElementById('downloadBtn').style.display = 'block';
    } else {
        document.getElementById('downloadBtn').style.display = 'none';
    }
}

// Ajouter un écouteur d'événement pour l'entrée de texte
document.getElementById('text').addEventListener('input', updateQRCode);

// Ajouter des écouteurs d'événements pour les options de personnalisation
document.getElementById('colorDark').addEventListener('input', updateQRCode);
document.getElementById('colorLight').addEventListener('input', updateQRCode);
document.getElementById('dotStyle').addEventListener('change', updateQRCode);
document.getElementById('transparentBackground').addEventListener('change', updateQRCode);

// Ajouter un écouteur d'événement pour le bouton de téléchargement
document.getElementById('downloadBtn').addEventListener('click', function() {
    qrCode.download({
        name: 'qrcode',
        extension: 'png'
    });
});
