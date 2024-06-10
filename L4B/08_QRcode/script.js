var qrcode = new QRCode(document.getElementById("qrcode"), "");

document.getElementById('text').addEventListener('input', function() {
    var text = this.value;
    qrcode.clear(); // Clear the previous QR code
    if (text.trim() !== "") {
        qrcode.makeCode(text); // Generate the new QR code
    }
});
