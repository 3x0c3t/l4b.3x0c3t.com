// Sélection du conteneur
const container = document.getElementById('container');

// Création de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // Fond transparent
container.appendChild(renderer.domElement);

// Ajout de la lumière
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

// Corps de la fusée (dégradé)
const rocketBodyGeometry = new THREE.CylinderGeometry(1, 1, 5, 32);
const rocketBodyMaterial = new THREE.ShaderMaterial({
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        varying vec2 vUv;
        void main() {
            vec3 color1 = vec3(0.949, 0.949, 1.0); // #f2f1ff
            vec3 color2 = vec3(0.702, 0.710, 1.0); // #b4b6ff
            vec3 color = mix(color1, color2, vUv.x);
            gl_FragColor = vec4(color, 1.0);
        }
    `
});
const rocketBody = new THREE.Mesh(rocketBodyGeometry, rocketBodyMaterial);

// Nez de la fusée (cône)
const noseGeometry = new THREE.ConeGeometry(1, 2, 32);
const noseMaterial = new THREE.MeshBasicMaterial({ color: 0xf54c9b });
const rocketNose = new THREE.Mesh(noseGeometry, noseMaterial);
rocketNose.position.y = 3.5;

// Création d'un hublot avec dégradé radial
const windowGeometry = new THREE.CircleGeometry(0.5, 32);

// Shader pour le dégradé radial
const windowMaterial = new THREE.ShaderMaterial({
    uniforms: {
        color1: { value: new THREE.Color("#009ad9") }, // Couleur extérieure
        color2: { value: new THREE.Color("#bfe7f8") }  // Couleur intérieure
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        void main() {
            float dist = distance(vUv, vec2(0.5, 0.5));
            vec3 color = mix(color2, color1, dist);
            gl_FragColor = vec4(color, 1.0);
        }
    `
});
const rocketWindow = new THREE.Mesh(windowGeometry, windowMaterial);
rocketWindow.position.set(0, 1, 1.01);

// Contour du hublot
const windowBorderGeometry = new THREE.RingGeometry(0.55, 0.7, 32);
const windowBorderMaterial = new THREE.MeshBasicMaterial({ color: 0x6676e2 });
const windowBorder = new THREE.Mesh(windowBorderGeometry, windowBorderMaterial);
windowBorder.position.set(0, 1, 1.01);

// Création des ailerons (rectangles violets à la base de la fusée)
const finGeometry = new THREE.BoxGeometry(0.1, 1, 0.5);
const finMaterial = new THREE.MeshBasicMaterial({ color: 0xf54c9b });
const fin1 = new THREE.Mesh(finGeometry, finMaterial);
const fin2 = fin1.clone();
const fin3 = fin1.clone();
const fin4 = fin1.clone();

fin1.position.set(0, -2.5, 1);
fin2.position.set(0, -2.5, -1);
fin3.position.set(1, -2.5, 0);
fin4.position.set(-1, -2.5, 0);

fin3.rotation.y = Math.PI / 2;
fin4.rotation.y = Math.PI / 2;

// Flamme à la base de la fusée (cône orange)
const flameGeometry = new THREE.ConeGeometry(0.5, 2, 32);
const flameMaterial = new THREE.MeshBasicMaterial({ color: 0xffa500 });
const flame = new THREE.Mesh(flameGeometry, flameMaterial);
flame.position.set(0, -3.5, 0);
flame.rotation.x = Math.PI;

// Groupe de la fusée
const rocket = new THREE.Group();
rocket.add(rocketBody);
rocket.add(rocketNose);
rocket.add(rocketWindow);
rocket.add(windowBorder);  // Ajouter le contour du hublot
rocket.add(fin1, fin2, fin3, fin4);
rocket.add(flame);
scene.add(rocket);

// Positionner la caméra pour éviter le débordement
camera.position.set(0, 0, 10);
camera.lookAt(rocket.position); // Ajuste la caméra pour qu'elle regarde la fusée

// Animation de la fusée et de la flamme
let flameScale = 1;
let flameGrowing = true;

function animate() {
    requestAnimationFrame(animate);
    rocket.rotation.y += 0.01;

    if (flameGrowing) {
        flameScale += 0.01;
        if (flameScale >= 1.2) flameGrowing = false;
    } else {
        flameScale -= 0.01;
        if (flameScale <= 0.8) flameGrowing = true;
    }
    flame.scale.set(1, flameScale, 1);

    renderer.render(scene, camera);
}

// Redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Désactiver le défilement
document.body.style.overflow = 'hidden'; // Empêche le défilement de la page

animate();
