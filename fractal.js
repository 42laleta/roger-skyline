let scene;
let camera;
let renderer;
let clock;
let uniforms = {};

function scene_setup()
{
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75,
							window.innerWidth / window.innerHeight, 0.1, 1000);
	renderer = new THREE.WebGLRenderer();
	clock = new THREE.Clock();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
}

scene_setup();

window.addEventListener("mousemove", {handleEvent(event){mouse_event(event)}});

function mouse_event(event)
{
	uniforms.iMouse.value.set(event.clientX, event.clientY);
}

uniforms.iResolution = {type:'v2', value:new THREE.Vector2(window.innerWidth,window.innerHeight)};
uniforms.iTime = {type:'f', value:0.1};
uniforms.iMouse = {type:'v2', value:new THREE.Vector2(0.0,0.0)};

let material1 = new THREE.ShaderMaterial({uniforms:uniforms, fragmentShader:fragShader_str});
let geometry1 = new THREE.PlaneGeometry(10, 10);
let sprite = new THREE.Mesh(geometry1, material1);
scene.add(sprite);
sprite.position.z = -1;
		
function render()
{
	uniforms.iTime.value += clock.getDelta();
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}

render();
