import * as _3 from "three";

const CameraController = {
  camera: new _3.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100000
  ),
  light: new _3.PointLight(0xffffff, 10, 100),
  forward: false,
  backward: false,
  right: false,
  left: false,
  speed: false,
  adjustCameraPosition: function () {
    // console.log(this.forward, this.backward, this.left, this.right);
    let val = this.speed ? 100 : 1;
    if (this.forward) this.camera.position.z -= val;
    if (this.backward) this.camera.position.z += val;
    if (this.right) this.camera.position.x += val;
    if (this.left) this.camera.position.x -= val;
    this.light.position.set(...this.camera.position);
    // console.log(this.light.position);
  },
  init: function (scene) {
    CameraController.camera.position.set(0, 0, 5);
    scene.add(CameraController.light);
  },
};

document.addEventListener("keydown", (e) => {
  switch (e.key.toUpperCase()) {
    case "W":
      CameraController.forward = true;
      break;
    case "A":
      CameraController.left = true;
      break;
    case "S":
      CameraController.backward = true;
      break;
    case "D":
      CameraController.right = true;
      break;
    case "SHIFT":
      CameraController.speed = true;
  }
});
document.addEventListener("keyup", (e) => {
  switch (e.key.toUpperCase()) {
    case "W":
      CameraController.forward = false;
      break;
    case "A":
      CameraController.left = false;
      break;
    case "S":
      CameraController.backward = false;
      break;
    case "D":
      CameraController.right = false;
      break;
    case "SHIFT":
      CameraController.speed = false;
  }
});

export default CameraController;