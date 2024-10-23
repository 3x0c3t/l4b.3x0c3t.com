document.addEventListener('DOMContentLoaded', () => {
    const bandCountSelect = document.getElementById('band-count');
    const bandContainer = document.getElementById('band-container');
    const resistanceValueElem = document.getElementById('resistance-value');
    const toleranceValueElem = document.getElementById('tolerance-value');

    const colorOptions = [
        { color: '#000000', label: 'Noir' },
        { color: '#8B4513', label: 'Marron' },
        { color: '#FF0000', label: 'Rouge' },
        { color: '#FFA500', label: 'Orange' },
        { color: '#FFFF00', label: 'Jaune' },
        { color: '#008000', label: 'Vert' },
        { color: '#0000FF', label: 'Bleu' },
        { color: '#EE82EE', label: 'Violet' },
        { color: '#808080', label: 'Gris' },
        { color: '#FFFFFF', label: 'Blanc' }
    ];

    function createBandDropdowns(count) {
        bandContainer.innerHTML = ''; // Clear existing dropdowns
        for (let i = 0; i < count; i++) {
            const select = document.createElement('select');
            select.className = 'band-dropdown';
            select.id = `band${i + 1}`;
            colorOptions.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option.color;
                opt.textContent = option.label;
                opt.style.backgroundColor = option.color;
                opt.style.color = (option.color === '#000000' || option.color === '#808080') ? '#fff' : '#000';
                select.appendChild(opt);
            });
            select.addEventListener('change', function() {
                calculateResistance();
                updateBackgroundColor(this);
            });
            bandContainer.appendChild(select);
        }
    }

    function calculateResistance() {
        const colors = Array.from(bandContainer.querySelectorAll('select')).map(select => select.value);
        const bandCount = parseInt(bandCountSelect.value);
        const colorCode = {
            '#000000': 0, '#8B4513': 1, '#FF0000': 2, '#FFA500': 3, '#FFFF00': 4,
            '#008000': 5, '#0000FF': 6, '#EE82EE': 7, '#808080': 8, '#FFFFFF': 9
        };

        let resistance, tolerance;

        if (bandCount === 3) {
            const [band1, band2, band3] = colors;
            const firstDigit = colorCode[band1] || 0;
            const secondDigit = colorCode[band2] || 0;
            const multiplier = Math.pow(10, colorCode[band3] || 0);

            resistance = (firstDigit * 10 + secondDigit) * multiplier;
            tolerance = '±20%';
        } else if (bandCount === 4) {
            const [band1, band2, band3, band4] = colors;
            const firstDigit = colorCode[band1] || 0;
            const secondDigit = colorCode[band2] || 0;
            const multiplier = Math.pow(10, colorCode[band3] || 0);

            resistance = (firstDigit * 10 + secondDigit) * multiplier;
            tolerance = getToleranceLabel(band4);
        } else if (bandCount === 5) {
            const [band1, band2, band3, band4, band5] = colors;
            const firstDigit = colorCode[band1] || 0;
            const secondDigit = colorCode[band2] || 0;
            const thirdDigit = colorCode[band3] || 0;

            resistance = ((firstDigit * 10 + secondDigit) * 10 + thirdDigit) * Math.pow(10, colorCode[band4] || 0);
            tolerance = getToleranceLabel(band5);
        }

        resistanceValueElem.textContent = resistance ? resistance.toLocaleString() : '0';
        toleranceValueElem.textContent = tolerance || '±20%';
    }

    function getToleranceLabel(color) {
        switch (color) {
            case '#8B4513': return '±1%';
            case '#FF0000': return '±2%';
            case '#008000': return '±0.5%';
            case '#0000FF': return '±0.25%';
            case '#EE82EE': return '±0.1%';
            case '#808080': return '±0.05%';
            case '#FFD700': return '±5%';  // or return null if not needed
            case '#C0C0C0': return '±10%'; // or return null if not needed
            default: return '±20%';
        }
    }

    function updateBackgroundColor(selectElement) {
        const selectedColor = selectElement.value;
        selectElement.style.backgroundColor = selectedColor;
        selectElement.style.color = (selectedColor === '#000000' || selectedColor === '#808080') ? '#fff' : '#000';
    }

    bandCountSelect.addEventListener('change', () => {
        createBandDropdowns(parseInt(bandCountSelect.value));
        calculateResistance();
    });

    // Initial setup
    createBandDropdowns(parseInt(bandCountSelect.value));
    calculateResistance();
});
