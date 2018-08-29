const THREE = require("three");
// https://codepen.io/rachsmith/post/beginning-with-3d-webgl-pt-1-the-scene

// A scene is the 3D space in which you can place objects, cameras and lighting. The space can be as small or large as you need it to be.

const scene = new THREE.Scene();

// fov: The vertical field of view. This dictates the size of the vertical space your camera's view can reach.
// aspect: This is the aspect ratio you use to create the horizontal field of view based off the vertical.
// near: This is the nearest plane of view (where the camera's view begins).
// far: This is the far plane of view (where the camera's view ends).

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 100;

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// Directional Lights: a large light from far away that shines from one direction (think of the sun).
// Ambient Lights: less of a light source and more of a soft color tint for the scene.
// Point Lights: think of a lightbulb - shines in every direction & has a limited range.
// Spot Lights: just like a spotlight works in real life.
// Hemisphere Lights: an ambient (non directional) light coming from the ceiling and floor of the scene.

const geometry = new THREE.BoxGeometry(20, 20, 20);

const material = new THREE.MeshLambertMaterial({ color: 0xfd59d7 });

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

const light = new THREE.PointLight(0xffff00);

light.position.set(10, 0, 25);

scene.add(light);

const render = function() {
  requestAnimationFrame(render);

  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
  camera.updateProjectionMatrix();

  renderer.render(scene, camera);
};
render();
