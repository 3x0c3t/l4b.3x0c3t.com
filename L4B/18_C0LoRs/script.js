document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColorBox = document.getElementById('selectedColor');
    const complementaryColorsContainer = document.getElementById('complementaryColors');
    const analogousColorsContainer = document.getElementById('analogousColors');
    const triadicColorsContainer = document.getElementById('triadicColors');
    const tetradicColorsContainer = document.getElementById('tetradicColors');
    const infoTitles = document.querySelectorAll('.info-title');
    const infoBubbles = document.querySelectorAll('.info-bubble');

    function hexToRgb(hex) {
        let r = 0, g = 0, b = 0;
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return [r, g, b];
    }

    function rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0;
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return [h * 360, s * 100, l * 100];
    }

    function hslToRgb(h, s, l) {
        s /= 100;
        l /= 100;
        let c = (1 - Math.abs(2 * l - 1)) * s;
        let x = c * (1 - Math.abs((h / 60) % 2 - 1));
        let m = l - c / 2;
        let r, g, b;
        if (0 <= h && h < 60) {
            [r, g, b] = [c, x, 0];
        } else if (60 <= h && h < 120) {
            [r, g, b] = [x, c, 0];
        } else if (120 <= h && h < 180) {
            [r, g, b] = [0, c, x];
        } else if (180 <= h && h < 240) {
            [r, g, b] = [0, x, c];
        } else if (240 <= h && h < 300) {
            [r, g, b] = [x, 0, c];
        } else {
            [r, g, b] = [c, 0, x];
        }
        return [
            Math.round((r + m) * 255),
            Math.round((g + m) * 255),
            Math.round((b + m) * 255)
        ];
    }

    function getComplementaryColors(h, s, l) {
        return [
            (h + 180) % 360,
            (h + 150) % 360,
            (h + 210) % 360
        ].map(hue => hslToRgb(hue, s, l));
    }

    function getAnalogousColors(h, s, l) {
        return [
            (h + 30) % 360,
            (h + 60) % 360,
            (h - 30 + 360) % 360,
            (h - 60 + 360) % 360
        ].map(hue => hslToRgb(hue, s, l));
    }

    function getTriadicColors(h, s, l) {
        return [
            h,
            (h + 120) % 360,
            (h + 240) % 360
        ].map(hue => hslToRgb(hue, s, l));
    }

    function getTetradicColors(h, s, l) {
        return [
            h,
            (h + 90) % 360,
            (h + 180) % 360,
            (h + 270) % 360
        ].map(hue => hslToRgb(hue, s, l));
    }

    function rgbToHex(r, g, b) {
        return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
    }

    function updateColorBoxes() {
        let color = colorPicker.value;
        let [r, g, b] = hexToRgb(color);
        let [h, s, l] = rgbToHsl(r, g, b);
        selectedColorBox.style.backgroundColor = color;
        selectedColorBox.innerHTML = `<div class="hex-value">${color}</div>`;

        // Clear previous colors
        complementaryColorsContainer.innerHTML = '';
        analogousColorsContainer.innerHTML = '';
        triadicColorsContainer.innerHTML = '';
        tetradicColorsContainer.innerHTML = '';

        // Generate and display color boxes
        let complementaryColors = getComplementaryColors(h, s, l);
        complementaryColors.forEach(([r, g, b]) => {
            let colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            let hexColor = rgbToHex(r, g, b);
            colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            colorBox.innerHTML = `<div class="hex-value">${hexColor}</div>`;
            complementaryColorsContainer.appendChild(colorBox);
        });

        let analogousColors = getAnalogousColors(h, s, l);
        analogousColors.forEach(([r, g, b]) => {
            let colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            let hexColor = rgbToHex(r, g, b);
            colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            colorBox.innerHTML = `<div class="hex-value">${hexColor}</div>`;
            analogousColorsContainer.appendChild(colorBox);
        });

        let triadicColors = getTriadicColors(h, s, l);
        triadicColors.forEach(([r, g, b]) => {
            let colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            let hexColor = rgbToHex(r, g, b);
            colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            colorBox.innerHTML = `<div class="hex-value">${hexColor}</div>`;
            triadicColorsContainer.appendChild(colorBox);
        });

        let tetradicColors = getTetradicColors(h, s, l);
        tetradicColors.forEach(([r, g, b]) => {
            let colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            let hexColor = rgbToHex(r, g, b);
            colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            colorBox.innerHTML = `<div class="hex-value">${hexColor}</div>`;
            tetradicColorsContainer.appendChild(colorBox);
        });
    }

    function toggleInfoBubble(event) {
        const target = event.currentTarget;
        const infoBubble = target.nextElementSibling;

        infoBubbles.forEach(bubble => {
            if (bubble !== infoBubble) {
                bubble.style.display = 'none';
            }
        });

        infoBubble.style.display = infoBubble.style.display === 'block' ? 'none' : 'block';
    }

    colorPicker.addEventListener('input', updateColorBoxes);
    updateColorBoxes(); // Initialize with default color

    infoTitles.forEach(title => {
        title.addEventListener('click', toggleInfoBubble);
    });
});
