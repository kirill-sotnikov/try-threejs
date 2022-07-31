const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });

const light = new THREE.PointLight(0xff0000, 0.5, 100);
light.position.set(1, 1, 1);
scene.add(light);

const light2 = new THREE.PointLight(0xff0000, 0.25, 100);
light2.position.set(-4, 2, 1);
scene.add(light2);

renderer.setClearColor("#150A0A");

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// let geometry = new THREE.BoxGeometry(1, 1, 1);
// let material = new THREE.MeshBasicMaterial({ color: "lightgrey" });
// let cube = new THREE.Mesh(geometry, material);

// scene.add(cube);

const hemisphere = new THREE.HemisphereLight(0xffffbb, 0x080820, 2);
scene.add(hemisphere);

const pointLight = new THREE.PointLight(0xff0000, 1, 20);
pointLight.position.set(3, 1, 1);
scene.add(pointLight);

let deadPool;

new THREE.GLTFLoader().load("scene.gltf", (res) => {
  deadPool = res.scene.children[0];
  deadPool.scale.set(0.02, 0.02, 0.02);
  deadPool.position.y = -3;
  scene.add(deadPool);
  render();
});

const render = function () {
  requestAnimationFrame(render);

  deadPool.rotation.z += 0.01;

  pointLight.rotation.z += -0.006;

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

render();
