import * as THREE from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/build/three.module.js';
import { STLExporter } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/exporters/STLExporter.js';

// Créez une scène, une caméra et un renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Créez un cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Ajoutez une lumière
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// Position de la caméra
camera.position.z = 5;

// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Fonction pour exporter le cube en STL
function exportToSTL() {
    const exporter = new STLExporter();
    const options = {
        binary: true // Définir sur false pour un fichier STL ASCII
    };
    const result = exporter.parse(cube, options);

    // Créer un Blob et un lien pour le téléchargement
    const blob = new Blob([result], { type: 'application/octet-stream' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'model.stl';
    link.click();
}

// Ajouter un bouton pour exporter
const button = document.createElement('button');
button.innerText = 'Exporter en STL';
button.onclick = exportToSTL;
document.body.appendChild(button);
