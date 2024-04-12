// this code works if you're just showing the shader
// look at metaballs if you are showing multiple shaders
let basicShader;

function preload() {
	basicShader = loadShader("https://raw.githubusercontent.com/Moses-Ian/portfolio/main/public/assets/p5/shader.vert", "https://raw.githubusercontent.com/Moses-Ian/portfolio/main/public/assets/p5/shader.frag");
	//console.log(basicShader);
	
	// fetch(testText)
		// .then(res => res.text())
		// .then(text => console.log(text))
		// .catch(e => console.error(e));
		
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
	
	// define shader inputs like this
	basicShader.setUniform('u_resolution', [width, height]);
	basicShader.setUniform('u_time', performance.now() / 1000);	// colors are 0-1
	
	
	rectMode(CENTER);
	shader(basicShader);
	rect(0, 0, width-10, height-10);
}