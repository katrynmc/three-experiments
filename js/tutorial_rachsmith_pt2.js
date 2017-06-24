const THREE = require('three');
// https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-2-geometry

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry( 20, 20, 20);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);

cube.rotation.x = 0.45;
cube.rotation.y = -0.25;

cube.position.x = -3;

// let geometry = new THREE.IcosahedronGeometry(20, 0);

// const material = new THREE.MeshNormalMaterial();
// const icosahedron = new THREE.Mesh(geometry, material);

// icosahedron.rotation.x = 0.1;
// icosahedron.rotation.y = -0.25;

scene.add(cube);

for (let i = 0, l = geometry.vertices.length; i<l; i++) {
  geometry.vertices[i].x += -10 + Math.random()*20;
  geometry.vertices[i].y += -10 + Math.random()*20;
}

camera.position.z = 100;

const light = new THREE.PointLight(0xFFFF00);
light.position.set(10, 0, 25);
scene.add(light);

const render = function () {
  requestAnimationFrame(render);
  cube.rotation.x +=0.05;
  renderer.render(scene, camera);

};

render();
