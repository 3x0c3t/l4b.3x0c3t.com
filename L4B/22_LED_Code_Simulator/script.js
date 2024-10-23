// Elements DOM
const leds = document.querySelectorAll('.led');
const colorPicker1 = document.getElementById('colorPicker1');
const colorPicker2 = document.getElementById('colorPicker2');
const modeButtons = document.querySelectorAll('.modes button');
const intensityRange = document.getElementById('intensityRange');
const intensityValue = document.getElementById('intensityValue');
const tempoPolice = document.getElementById('tempoPolice');
const tempoPoliceValue = document.getElementById('tempoPoliceValue');
const tempoRainbow = document.getElementById('tempoRainbow');
const tempoRainbowValue = document.getElementById('tempoRainbowValue');
const tempoStrobe = document.getElementById('tempoStrobe');
const tempoStrobeValue = document.getElementById('tempoStrobeValue');

let currentMode = 'normal';
let intervalId;

// Function to update LED colors based on intensity
function updateLEDs(color) {
    const intensity = intensityRange.value;
    leds.forEach(led => {
        led.style.backgroundColor = color;
        led.style.boxShadow = `0 0 ${intensity}px rgba(0, 0, 0, 0.5)`;
    });
}

// Function to clear LED interval
function clearIntervalIfExists() {
    if (intervalId) {
        clearInterval(intervalId);
    }
}

// Mode Functions
function modeNormal() {
    clearIntervalIfExists();
    const color = colorPicker1.value;
    updateLEDs(color);
}

function modePolice() {
    clearIntervalIfExists();
    const colors = ['#0000FF', '#0000FF', '#FFFFFF', '#FF0000', '#FF0000'];
    let index = 0;
    const tempo = parseInt(tempoPolice.value);
    intervalId = setInterval(() => {
        updateLEDs(colors[index]);
        index = (index + 1) % colors.length;
    }, tempo);
}

function modeRainbow() {
    clearIntervalIfExists();
    const tempo = parseInt(tempoRainbow.value);
    intervalId = setInterval(() => {
        const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
        updateLEDs(color);
    }, tempo);
}

function modeStrobe() {
    clearIntervalIfExists();
    const color1 = colorPicker1.value;
    const color2 = colorPicker2.value;
    let color = color1;
    const tempo = parseInt(tempoStrobe.value);
    intervalId = setInterval(() => {
        updateLEDs(color);
        color = color === color1 ? color2 : color1;
    }, tempo);
}

function modeSOS() {
    clearIntervalIfExists();
    const color = '#FFFFFF'; // SOS mode color is always white
    const shortBlink = 300; // Duration for short blink
    const longBlink = 700;  // Duration for long blink

    const sosPattern = [shortBlink, shortBlink, shortBlink, longBlink, longBlink, longBlink, shortBlink, shortBlink, shortBlink];
    let index = 0;
    intervalId = setInterval(() => {
        updateLEDs(index % 2 === 0 ? color : 'transparent');
        index++;
        if (index >= sosPattern.length) {
            index = 0;
        }
    }, sosPattern[index] || 1000); // Default to 1 second if no pattern is defined
}

// Event Listeners
modeButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentMode = button.id.replace('mode', '').toLowerCase();
        switch (currentMode) {
            case 'normal':
                modeNormal();
                break;
            case 'police':
                modePolice();
                break;
            case 'rainbow':
                modeRainbow();
                break;
            case 'strobe':
                modeStrobe();
                break;
            case 'sos':
                modeSOS();
                break;
        }
    });
});

intensityRange.addEventListener('input', () => {
    intensityValue.textContent = intensityRange.value;
    if (currentMode === 'normal') {
        updateLEDs(colorPicker1.value);
    }
});

tempoPolice.addEventListener('input', () => {
    tempoPoliceValue.textContent = `${tempoPolice.value} ms`;
    if (currentMode === 'police') {
        modePolice();
    }
});

tempoRainbow.addEventListener('input', () => {
    tempoRainbowValue.textContent = `${tempoRainbow.value} ms`;
    if (currentMode === 'rainbow') {
        modeRainbow();
    }
});

tempoStrobe.addEventListener('input', () => {
    tempoStrobeValue.textContent = `${tempoStrobe.value} ms`;
    if (currentMode === 'strobe') {
        modeStrobe();
    }
});

// Initialize the UI
intensityValue.textContent = intensityRange.value;
tempoPoliceValue.textContent = `${tempoPolice.value} ms`;
tempoRainbowValue.textContent = `${tempoRainbow.value} ms`;
tempoStrobeValue.textContent = `${tempoStrobe.value} ms`;
