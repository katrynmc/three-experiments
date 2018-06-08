const THREE = require('three');
// https://threejs.org/docs/index.html#manual/introduction/Drawing-lines

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth/window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(new THREE.Vector3(0, 0, 0));

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

// it's recommended to use a BufferGeometry as it's more performant, however for simplicity we'll use a Geometry here

const geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));

const line = new THREE.Line(geometry, material);

scene.add(line);

renderer.render(scene, camera);
