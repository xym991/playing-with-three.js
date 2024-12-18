import * as _3 from "three";
import CameraController from "./cameraController.js";
import createObjects from "./objectGenerator.js";
const scene = new _3.Scene();
scene.background = new _3.Color("#000");

const light = new _3.AmbientLight(0xff0000, 600);
const light1 = new _3.AmbientLight(0x00ff00, 500);
const light2 = new _3.AmbientLight(0x0000ff, 500);
light.position.set(0, 0, 0);

scene.add(light);
scene.add(light1);
scene.add(light2);

const renderer = new _3.WebGLRenderer({
  antialias: false,
  powerPreference: "high-performance",
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

createObjects(scene);
function animate() {
  requestAnimationFrame(animate);
  CameraController.adjustCameraPosition();
  renderer.render(scene, CameraController.camera);
}
animate();
