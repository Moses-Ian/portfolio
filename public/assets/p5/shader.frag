precision highp float;

// variables that get set by my custom sketch
uniform vec3 custom_color;


void main() {
	vec2 uv = gl_FragCoord.xy / u_resolution.xy;
	gl_FragColor = vec4(uv.x, 0.0, uv.y, 1.0);
}