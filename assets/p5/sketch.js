// this code works if you're just showing the shader
// look at metaballs if you are showing multiple shaders
let basicShader;
let x;

function preload() {
	basicShader = loadShader("%PUBLIC_URL%/assets/p5/shader.vert", "%PUBLIC_URL%/assets/p5/shader.frag");
	//console.log(basicShader);
	
	// fetch(testText)
		// .then(res => res.text())
		// .then(text => console.log(text))
		// .catch(e => console.error(e));
		
	x = 0;
}

function setup() {
  // put setup code here
	const parentElement = select('#sketch-container');
	let canvas = createCanvas(parentElement.width, parentElement.height, WEBGL);
	canvas.parent('sketch-container');
	canvas.class('hero-canvas');
}

function draw() {
  // put drawing code here
	background(51);
	
	circle(x, 25, 50)
	x+=1;
	
	// define shader inputs like this
	basicShader.setUniform('custom_color', [0.4, 0.02, 0.8]);	// colors are 0-1
	
	
	rectMode(CENTER);
	shader(basicShader);
	rect(0, 0, width-10, height-10);
}