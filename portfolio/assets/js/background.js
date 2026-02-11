/**
 * 3D BACKGROUND MODULE
 * Using Three.js to create an interactive particle system
 */

let scene, camera, renderer, particles;
let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

/**
 * Initializes the 3D background
 */
export function initBackground() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) {
        console.error("Canvas #bg-canvas not found!");
        return;
    }

    // SCENE
    scene = new THREE.Scene();

    // CAMERA
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    // RENDERER
    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // PARTICLES
    createParticles();

    // EVENTS
    document.addEventListener('mousemove', onDocumentMouseMove);
    window.addEventListener('resize', onWindowResize);

    // ANIMATION LOOP
    animate();
    
    console.log("🌌 3D Background Initialized");
}

/**
 * Creates the particle system
 */
function createParticles() {
    const geometry = new THREE.BufferGeometry();
    const count = 1000;
    
    const positions = [];
    const colors = [];
    
    const colorPrimary = new THREE.Color(0xF9ABEA); // #F9ABEA (Primary Pink)
    const colorSecondary = new THREE.Color(0x6B8AF8); // #6B8AF8 (Blue)
    const colorTertiary = new THREE.Color(0x50F595); // #50F595 (Green)

    for (let i = 0; i < count; i++) {
        // Random positions
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;
        positions.push(x, y, z);

        // Randomly assign one of the theme colors
        const rand = Math.random();
        let color;
        if (rand < 0.33) color = colorPrimary;
        else if (rand < 0.66) color = colorSecondary;
        else color = colorTertiary;
        
        colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 8,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);
}

/**
 * Handles mouse movement
 */
function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.5;
    mouseY = (event.clientY - windowHalfY) * 0.5;
}

/**
 * Handles window resize
 */
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

/**
 * Animation loop
 */
function animate() {
    requestAnimationFrame(animate);

    targetX = mouseX * 0.05;
    targetY = mouseY * 0.05;

    // Smooth rotation based on mouse
    if (particles) {
        particles.rotation.y += 0.002 + (targetX - particles.rotation.y) * 0.01;
        particles.rotation.x += 0.002 + (targetY - particles.rotation.x) * 0.01;
        
        // Gentle wave motion
        const time = Date.now() * 0.0005;
        particles.position.y = Math.sin(time) * 20;
    }

    renderer.render(scene, camera);
}
