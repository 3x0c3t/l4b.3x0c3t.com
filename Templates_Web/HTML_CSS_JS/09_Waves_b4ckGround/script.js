window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    // Dimension du canvas
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    // Paramètres de la courbe verticale
    var amplitude = 50;
    var frequency = 0.02;
    var xOffset = canvasWidth / 2; // Position horizontale de la courbe

    // Fonction pour dessiner la courbe verticale
    function drawVerticalCurve(phase) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Effacer le canvas
        ctx.beginPath();
        ctx.moveTo(xOffset, 0);

        for (var y = 0; y < canvasHeight; y++) {
            var x = xOffset + amplitude * Math.sin(frequency * y + phase);
            ctx.lineTo(x, y);
        }

        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
    }

    // Fonction pour animer la courbe en continu
    function animate() {
        var phase = 0;
        var speed = 0.05; // Vitesse de l'animation (plus elle est grande, plus l'animation est rapide)

        function update() {
            phase -= speed;
            drawVerticalCurve(phase);
            requestAnimationFrame(update);
        }

        update();
    }

    // Appel de la fonction pour l'animation
    animate();
};
