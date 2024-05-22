document.getElementById("copyButton").addEventListener("click", function() {
    var randomText = generateRandomText();
    copyToClipboard(randomText);
    document.getElementById("randomText").innerText = randomText;
  });
  
  function generateRandomText() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var randomText = "";
    for (var i = 0; i < 10; i++) {
      randomText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomText;
  }
  
  function copyToClipboard(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Texte copié dans le presse-papiers : " + text);
  }
  