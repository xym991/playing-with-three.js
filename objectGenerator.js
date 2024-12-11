import * as _3 from "three";

function generateRandomPositions() {
  return [
    Math.floor((Math.random() - 0.5) * 100) * 500,
    Math.floor((Math.random() - 0.5) * 100) * 500,
    Math.floor((Math.random() - 0.5) * 100) * 500,
  ];
}

export default function createObjects(scene) {
  let positions = new Set();
  let objects = [];
  let geometries = {};
  let Meshed = {};
  let time;
  time = Date.now();
  let geometry;
  let material;
  for (let i = 0; i < 10000; i++) {
    let x, y, z, key;
    do {
      [x, y, z] = generateRandomPositions();
      key = x * 1e8 + y * 1e4 + z;
    } while (positions.has(key));
    positions.add(key);
    let r = Math.floor(Math.random() * 30) + 0.1;
    geometry =
      geometries[r] ||
      (geometries[r] = new _3.SphereGeometry(r, r * 10, r * 10));

    material = new _3.MeshStandardMaterial({
      color: (key / 10000 + 999999) & 0xffaaaa,
    });
    objects[i] = new _3.Mesh(geometry, material);
    objects[i].position.set(x, y, z);
    scene.add(objects[i]);
  }
  console.log(Date.now() - time + "ms");
}
