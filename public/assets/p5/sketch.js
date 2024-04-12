// this code works if you're just showing the shader
// look at metaballs if you are showing multiple shaders
let basicShader;
let parentElement;
let canvas;


function preload() {
	basicShader = loadShader("https://raw.githubusercontent.com/Moses-Ian/portfolio/main/public/assets/p5/shader.vert", "https://raw.githubusercontent.com/Moses-Ian/portfolio/main/public/assets/p5/shader.frag");
}

function setup() {
	parentElement = select('#sketch-container');
	canvas = createCanvas(parentElement.width, parentElement.height, WEBGL);
	canvas.parent('sketch-container');
	canvas.class('hero-canvas');
}

function draw() {
	background(51);
	
	basicShader.setUniform('u_resolution', [width, height]);
	basicShader.setUniform('u_time', performance.now() / 1000);	// colors are 0-1
	
	rectMode(CENTER);
	shader(basicShader);
	rect(0, 0, width-10, height-10);
}

// for this to work, I have to attach p5 to the react framework
function windowResized() {
	console.log('resize');
	resizeCanvas(parentElement.width, parentElement.height);
}