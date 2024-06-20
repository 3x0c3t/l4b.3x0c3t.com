const box = document.getElementById('box');
const controls = document.getElementById('controls');
const distanceControl = document.getElementById('distance');
const blurControl = document.getElementById('blur');
const spreadControl = document.getElementById('spread');
const colorControl = document.getElementById('color');
const htmlCodeOutput = document.getElementById('html-code');
const cssCodeOutput = document.getElementById('css-code');

function updateBoxShadow() {
    const distance = distanceControl.value + 'px';
    const blur = blurControl.value + 'px';
    const spread = spreadControl.value + 'px';
    const color = colorControl.value;
    const boxShadow = `${distance} ${blur} ${spread} ${color}`;

    box.style.boxShadow = boxShadow;

    // Mise à jour du code HTML et CSS résultant
    const htmlCode = `<div class="box" style="box-shadow: ${boxShadow};"></div>`;
    const cssCode = `.box {
    width: 200px;
    height: 200px;
    background-color: #fff;
    margin-bottom: 20px;
    box-shadow: ${boxShadow};
}`;

    htmlCodeOutput.textContent = htmlCode;
    cssCodeOutput.textContent = cssCode;
}

controls.addEventListener('input', updateBoxShadow);

// Initial update
updateBoxShadow();
