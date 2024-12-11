import * as _3 from "three";
import CameraController from "./cameraController.js";
import createObjects from "./objectGenerator.js";
//create a scene
const scene = new _3.Scene();
scene.background = new _3.Color("#000");

//create a cube
// const geometry = new _3.SphereGeometry(100, 1000, 1000);
// const material = new _3.MeshStandardMaterial({
//   color: "#468585",
//   // emissive: "#468585",
// });

// const cube = new _3.Mesh(geometry, material);
// cube.position.set(0, 0, 0);
// scene.add(cube);

//add lighting
const light = new _3.AmbientLight(0xffffff, 200);
light.position.set(0, 0, 0);
scene.add(light);

// setup rendered
const renderer = new _3.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// renderer.render(scene, camera);

//animate

createObjects(scene);
function animate() {
  requestAnimationFrame(animate);
  CameraController.adjustCameraPosition();
  renderer.render(scene, CameraController.camera);
}
animate();
