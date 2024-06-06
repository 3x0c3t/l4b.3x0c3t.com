function copyCommand(button) {
    var command = button.previousElementSibling.innerText;
    
    var tempInput = document.createElement("textarea");
    tempInput.value = command;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    var copyMessage = document.getElementById("copyMessage");
    
    copyMessage.style.display = "inline";
    
    setTimeout(function() {
      copyMessage.style.display = "none";
    }, 2000);
  }
  