import * as _3 from "three";

// function createRandomCoordinate() {
//   return (Math.random() - 0.5) * 3000000;
// }

// function generateRandomPositions() {
//   return [
//     createRandomCoordinate(),
//     createRandomCoordinate(),
//     createRandomCoordinate(),
//   ];
// }
const positions = new Float32Array(30000); // Pre-generate all 30,000 random numbers
for (let i = 0; i < positions.length; i++) {
  positions[i] = (Math.random() - 0.5) * 1000000;
}

const colours = new Float32Array(10000);
for (let i = 0; i < positions.length; i++) {
  colours[i] = ((Math.random() + 0.01) * 0xffffff) & 0x995599;
}

export default function createObjects(scene) {
  const time = Date.now();

  // Create shared geometry and material
  const geometry = new _3.SphereGeometry(1, 16, 16);
  const material = new _3.MeshStandardMaterial({
    color: 0xffffff,
  });

  // Create instanced mesh (10,000 instances)
  const instancedMesh = new _3.InstancedMesh(geometry, material, 10000);

  const color = new _3.Color();

  for (let i = 0; i < 10000; i++) {
    const s = Math.random() * 1000 + 0.1;

    const position = new _3.Vector3(
      positions[i * 3],
      positions[i * 3 + 1],
      positions[i * 3 + 2]
    );
    const rotation = new _3.Quaternion(); // No rotation applied, but you can randomize it
    const scale = new _3.Vector3(s, s, s); // Random scale
    const matrix = new _3.Matrix4().compose(position, rotation, scale);
    instancedMesh.setMatrixAt(i, matrix);
    color.set(colours[i]); // Full range of HUE, vivid colors
    // color.setHSL(Math.random(), 1, 0.6);
    instancedMesh.setColorAt(i, color); // Assign color at index `i`
  }

  // Ensure colors are uploaded to the GPU
  instancedMesh.frustumCulled = true;
  instancedMesh.instanceColor.needsUpdate = true;

  // Add instanced mesh to the scene
  scene.add(instancedMesh);

  console.log(`Time to create objects: ${Date.now() - time} ms`);
}
