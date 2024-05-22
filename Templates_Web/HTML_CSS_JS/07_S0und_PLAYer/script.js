document.getElementById('play').addEventListener('click', function() {
    var waveform = document.getElementById('waveform').value;
    var frequencyValue = document.getElementById('frequency').value;
    var volumeValue = document.getElementById('volume').value;
    var modulationValue = document.getElementById('modulation').value;
    var modWaveform = document.getElementById('mod-waveform').value;
    var durationValue = document.getElementById('duration').value;
    var reverbValue = document.getElementById('reverb').value;
    var filterValue = document.getElementById('filter').value;

    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator = audioContext.createOscillator();
    var gainNode = audioContext.createGain();
    var modulationOscillator = audioContext.createOscillator();
    var modulationGain = audioContext.createGain();
    var filter = audioContext.createBiquadFilter();
    var convolver = audioContext.createConvolver();

    // Set up oscillator and modulation oscillator
    oscillator.type = waveform;
    oscillator.frequency.setValueAtTime(frequencyValue, audioContext.currentTime);
    
    modulationOscillator.type = modWaveform;
    modulationOscillator.frequency.setValueAtTime(modulationValue, audioContext.currentTime);
    modulationGain.gain.setValueAtTime(50, audioContext.currentTime); // Amplitude de modulation
    modulationOscillator.connect(modulationGain);
    modulationGain.connect(oscillator.frequency);
    
    // Set up gain and filter
    gainNode.gain.setValueAtTime(volumeValue, audioContext.currentTime);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(filterValue, audioContext.currentTime);
    
    // Set up reverb (convolution reverb)
    if (reverbValue > 0) {
        var noiseBuffer = audioContext.createBuffer(2, audioContext.sampleRate * 3, audioContext.sampleRate);
        var left = noiseBuffer.getChannelData(0);
        var right = noiseBuffer.getChannelData(1);
        for (var i = 0; i < left.length; i++) {
            left[i] = (Math.random() * 2 - 1) * reverbValue;
            right[i] = (Math.random() * 2 - 1) * reverbValue;
        }
        convolver.buffer = noiseBuffer;
        oscillator.connect(gainNode).connect(filter).connect(convolver).connect(audioContext.destination);
    } else {
        oscillator.connect(gainNode).connect(filter).connect(audioContext.destination);
    }

    oscillator.start();
    modulationOscillator.start();
    
    setTimeout(function() {
        oscillator.stop();
        modulationOscillator.stop();
    }, durationValue * 1000);

    // Change button color on click
    changeButtonColor();
});

document.getElementById('frequency').addEventListener('input', function() {
    document.getElementById('frequency-value').textContent = this.value;
});

document.getElementById('volume').addEventListener('input', function() {
    document.getElementById('volume-value').textContent = this.value;
});

document.getElementById('modulation').addEventListener('input', function() {
    document.getElementById('modulation-value').textContent = this.value;
});

document.getElementById('duration').addEventListener('input', function() {
    document.getElementById('duration-value').textContent = this.value;
});

document.getElementById('reverb').addEventListener('input', function() {
    document.getElementById('reverb-value').textContent = this.value;
});

document.getElementById('filter').addEventListener('input', function() {
    document.getElementById('filter-value').textContent = this.value;
});

function changeButtonColor() {
    const playButton = document.getElementById('play');
    const colors = [
        {start: '#FFDDCC', end: '#FF7E79'},
        {start: '#79FF7E', end: '#CCFFDD'},
        {start: '#7E79FF', end: '#D4CCFF'},
        {start: '#FFCC79', end: '#FFE577'}
    ];
    let currentColorIndex = (parseInt(playButton.dataset.colorIndex, 10) || 0) + 1;
    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
    playButton.dataset.colorIndex = currentColorIndex;
    const color = colors[currentColorIndex];
    playButton.style.background = `linear-gradient(45deg, ${color.start}, ${color.end})`;
    playButton.style.borderColor = color.end;
}
