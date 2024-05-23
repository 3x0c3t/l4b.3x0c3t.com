function showPrompt() {
    document.getElementById('promptBox').style.display = 'flex';
  }
  
  function hidePrompt() {
    document.getElementById('promptBox').style.display = 'none';
  }
  
  function submitPrompt() {
    var userInput = document.getElementById('userInput').value;
    alert('Vous avez sélectionné : ' + userInput);
    hidePrompt();
  }
  
  function copyToClipboard() {
    var userInput = document.getElementById('userInput');
    userInput.select();
    document.execCommand('copy');
    alert('Le contenu a été copié dans le presse-papiers !');
  }
  