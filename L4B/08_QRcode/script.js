document.getElementById('generateBtn').addEventListener('click', function() {
    var text = document.getElementById('text').value;
    if (text.trim() === "") {
        alert("Please enter text to generate QR code");
        return;
    }

    var qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ""; // Clear previous QR code if any
    new QRCode(qrcodeContainer, text);
});
