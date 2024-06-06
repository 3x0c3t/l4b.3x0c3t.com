document.addEventListener("DOMContentLoaded", () => {
    const volumeControl = document.getElementById("volume");
    const frequencyControl = document.getElementById("frequency");
    const waveformControl = document.getElementById("waveform");
    const tempoControl = document.getElementById("tempo");
    const playButton = document.getElementById("play");
    const stopButton = document.getElementById("stop");
    const snareButton = document.getElementById("snare");
    const startSnareAutomationButton = document.getElementById("start-snare-automation");
    const volumeValue = document.getElementById("volume-value");
    const frequencyValue = document.getElementById("frequency-value");
    const oscilloscope = document.getElementById("oscilloscope");
    const canvasContext = oscilloscope.getContext("2d");

    let audioContext;
    let oscillator;
    let gainNode;
    let analyser;
    let dataArray;
    let animationId;
    let snareAutomationInterval;

    volumeControl.addEventListener("input", () => {
        volumeValue.textContent = volumeControl.value;
        if (gainNode) {
            gainNode.gain.value = volumeControl.value / 100;
        }
    });

    frequencyControl.addEventListener("input", () => {
        frequencyValue.textContent = frequencyControl.value + " Hz";
        if (oscillator) {
            oscillator.frequency.value = frequencyControl.value;
        }
    });

    playButton.addEventListener("click", () => {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        oscillator = audioContext.createOscillator();
        gainNode = audioContext.createGain();
        analyser = audioContext.createAnalyser();

        oscillator.type = waveformControl.value;
        oscillator.frequency.value = frequencyControl.value;
        gainNode.gain.value = volumeControl.value / 100;

        oscillator.connect(gainNode);
        gainNode.connect(analyser);
        analyser.connect(audioContext.destination);

        oscillator.start();

        analyser.fftSize = 2048;
        const bufferLength = analyser.fftSize;
        dataArray = new Uint8Array(bufferLength);

        const drawOscilloscope = () => {
            animationId = requestAnimationFrame(drawOscilloscope);

            analyser.getByteTimeDomainData(dataArray);

            canvasContext.fillStyle = '#16213e';
            canvasContext.fillRect(0, 0, oscilloscope.width, oscilloscope.height);

            canvasContext.lineWidth = 2;
            canvasContext.strokeStyle = '#4ecca3';

            canvasContext.beginPath();

            const sliceWidth = oscilloscope.width * 1.0 / bufferLength;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0;
                const y = v * oscilloscope.height / 2;

                if (i === 0) {
                    canvasContext.moveTo(x, y);
                } else {
                    canvasContext.lineTo(x, y);
                }

                x += sliceWidth;
            }

            canvasContext.lineTo(oscilloscope.width, oscilloscope.height / 2);
            canvasContext.stroke();
        };

        drawOscilloscope();
    });

    const keys = document.querySelectorAll(".key");
    const keyMap = {
        'q': 'C', 'z': 'C#', 's': 'D', 'e': 'D#', 'd': 'E', 'f': 'F', 't': 'F#', 'g': 'G', 'y': 'G#', 'h': 'A', 'u': 'A#', 'j': 'B'
    };

    keys.forEach(key => {
        key.addEventListener("mousedown", () => playNote(key.dataset.note));
    });

    document.addEventListener("keydown", (event) => {
        const note = keyMap[event.key];
        if (note) {
            const keyElement = Array.from(keys).find(k => k.dataset.note === note);
            if (keyElement) {
                keyElement.classList.add("active");
                playNote(note);
            }
        }
    });

    document.addEventListener("keyup", (event) => {
        const note = keyMap[event.key];
        if (note) {
            const keyElement = Array.from(keys).find(k => k.dataset.note === note);
            if (keyElement) {
                keyElement.classList.remove("active");
            }
        }
    });

    function playNote(note) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        const noteFrequencies = {
            'C': 261.63, 'C#': 277.18, 'D': 293.66, 'D#': 311.13, 'E': 329.63,
            'F': 349.23, 'F#': 369.99, 'G': 392.00, 'G#': 415.30, 'A': 440.00,
            'A#': 466.16, 'B': 493.88
        };

        oscillator.type = "sine";
        oscillator.frequency.value = noteFrequencies[note];
        gainNode.gain.value = volumeControl.value / 100;

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1);
    }

    stopButton.addEventListener("click", () => {
        if (audioContext) {
            audioContext.close();
        }
        cancelAnimationFrame(animationId);
        canvasContext.clearRect(0, 0, oscilloscope.width, oscilloscope.height);

        clearInterval(snareAutomationInterval);
    });

    snareButton.addEventListener("click", () => {
        playSnare();
    });

    startSnareAutomationButton.addEventListener("click", () => {
        const tempo = parseInt(tempoControl.value);
        const interval = 60000 / tempo;

        if (snareAutomationInterval) {
            clearInterval(snareAutomationInterval);
            snareAutomationInterval = null;
            startSnareAutomationButton.textContent = "Automatisme Caisse Claire";
        } else {
            snareAutomationInterval = setInterval(playSnare, interval);
            startSnareAutomationButton.textContent = "Arrêter Automatisme";
        }
    });

    function playSnare() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();

        const snareNoise = audioContext.createBufferSource();
        const noiseBuffer = audioContext.createBuffer(1, audioContext.sampleRate, audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        for (let i = 0; i < audioContext.sampleRate; i++) {
            output[i] = Math.random() * 2 - 1;
        }

        snareNoise.buffer = noiseBuffer;

        const snareFilter = audioContext.createBiquadFilter();
        snareFilter.type = 'highpass';
        snareFilter.frequency.value = 1000;

        const snareGain = audioContext.createGain();
        snareGain.gain.setValueAtTime(1, audioContext.currentTime);
        snareGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

        snareNoise.connect(snareFilter);
        snareFilter.connect(snareGain);
        snareGain.connect(audioContext.destination);

        snareNoise.start();
        snareNoise.stop(audioContext.currentTime + 0.2);
    }
});
