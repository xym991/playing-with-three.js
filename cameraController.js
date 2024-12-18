import * as _3 from "three";

const CameraController = {
  camera: new _3.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    300000
  ),
  forward: false,
  backward: false,
  right: false,
  left: false,
  speed: false,
  up: false,
  down: false,
  adjustCameraPosition: function () {
    let val = this.speed ? 1000 : 10;
    if (this.forward) this.camera.position.z -= val;
    if (this.backward) this.camera.position.z += val;
    if (this.right) this.camera.position.x += val;
    if (this.left) this.camera.position.x -= val;
    if (this.up) this.camera.position.y += val;
    if (this.down) this.camera.position.y -= val;

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
    case " ":
      CameraController.speed = true;
      break;
    case "SHIFT":
      CameraController.up = true;
      break;
    case "CONTROL":
      CameraController.down = true;
      break;
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
    case " ":
      CameraController.speed = false;
      break;
    case "SHIFT":
      CameraController.up = false;
      break;
    case "CONTROL":
      CameraController.down = false;
      break;
  }
});

export default CameraController;
