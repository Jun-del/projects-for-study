import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;

// Scene
const scene = new THREE.Scene();

/**
 * Texture
 */
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("/initialTexture.jpg");
texture.colorSpace = THREE.SRGBColorSpace;

/**
 * Object
 */
// const geometry = new THREE.SphereGeometry(500, 60, 40);
const geometry = new THREE.SphereGeometry(15, 32, 16);

geometry.scale(-1, 1, 1);
const material = new THREE.MeshBasicMaterial({
	map: texture,
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

/**
 * Upload Texture
 */
const textureInput = document.getElementById("texture-input") as HTMLInputElement;
const textureBtn = document.getElementById("texture-btn") as HTMLButtonElement;

textureBtn.addEventListener("click", () => {
	textureInput.click();
});

const oldTexture = material.map as THREE.Texture;

textureInput.addEventListener("change", (event) => {
	if (!event.target || !(event.target instanceof HTMLInputElement) || !event.target.files) {
		return;
	}

	const file = event.target.files[0];
	const reader = new FileReader();

	reader.addEventListener("load", (event) => {
		const uploadedTexture = textureLoader.load(event.target?.result as string);
		uploadedTexture.colorSpace = THREE.SRGBColorSpace;

		material.map = uploadedTexture;
		material.needsUpdate = true;
		oldTexture.dispose();
	});

	if (file) {
		reader.readAsDataURL(file);
	}
});

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

window.addEventListener("resize", () => {
	// Update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Update camera
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	// Update renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Fullscreen
 */
window.addEventListener("dblclick", () => {
	const fullscreenElement = document.fullscreenElement;

	if (!fullscreenElement) {
		if (canvas.requestFullscreen) {
			canvas.requestFullscreen();
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	}
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 0.01;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Stop the camera from moving
let isOrbitStopped = false;

const stopOrbitBtn = document.getElementById("stop-orbit-btn");

if (!stopOrbitBtn) {
	throw new Error("Stop Orbit Button not found");
}

stopOrbitBtn.addEventListener("dblclick", (event) => {
	event.stopPropagation();
});

stopOrbitBtn.addEventListener("click", () => {
	// Toggle the boolean variable
	isOrbitStopped = !isOrbitStopped;

	// Change the button text based on the boolean variable
	if (isOrbitStopped) {
		stopOrbitBtn.textContent = "Resume Orbit";
	} else {
		stopOrbitBtn.textContent = "Stop Orbit";
	}
});

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
	const elapsedTime = clock.getElapsedTime();

	if (!isOrbitStopped) {
		sphere.rotation.y = 0.2 * elapsedTime;
	}

	// Update controls
	controls.update();

	// Render
	renderer.render(scene, camera);

	// Call tick again on the next frame
	window.requestAnimationFrame(tick);
};

tick();
