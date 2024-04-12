precision highp float;

#define NUM_OCTAVES 5

uniform vec2 u_resolution;
uniform float iTime;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float random (in vec2 _st) {
    return fract(sin(dot(_st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

   // x0 = x0 - 0.0 + 0.0 * C 
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

// Permutations
  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients
// ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0/7.0; // N=7
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}

float fractalBrownianMotion ( in vec3 _st) {
    float v = 0.0;
    float a = 0.5;
    vec3 shift = vec3(100.0);
    Rotate to reduce axial bias
    mat3 rot = mat3(cos(0.5), sin(0.5), 0.0,
                    -sin(0.5), cos(0.50), 0.0,
                    0.0, 0.0, 0.0);
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * snoise(_st);
        _st = rot * _st * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

// float pattern(vec3 p, out vec3 q, out vec3 r) {
    // wrap it once
    // vec3 offset1 = vec3(0.0);
    // vec3 offset2 = vec3(5.2, 1.3, 0.0); // arbitrary
    // float distortionLevel1 = 2.0;  // chosen based on visual effect
    // by exposing q, we can choose a color based on it
    // q = vec3(fractalBrownianMotion(p + offset1), fractalBrownianMotion(p + offset2), p.z);

    // wrap it again
    // vec3 offset3 = vec3(1.7, 9.2, 0.0);
    // vec3 offset4 = vec3(8.3, 2.8, 0.0); // arbitrary
    // float distortionLevel2 = 0.5;  // chosen based on visual effect
    // by exposing r, we can choose a color based on it
    // r = vec3(
        // fractalBrownianMotion(p + distortionLevel1*q + offset3),
        // fractalBrownianMotion(p + distortionLevel1*q + offset4),
        // p.z);

    //return fractalBrownianMotion( p );
    //return fractalBrownianMotion( p + distortionLevel1*q );
    // return fractalBrownianMotion( p + distortionLevel2*r );
// }


void main()
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;
    
    // colors
    // vec3 darkRust = vec3(0.654, 0.271, 0.0);
    // vec3 lightRust = vec3(1.0, 0.729, 0.345);
    // vec3 darkBlue = vec3(0.0, 0.458, 0.580);
    // vec3 lightBlue = vec3(0.0, 0.956, 1.0);

    // Time varying pixel color
    vec3 color = vec3(0.25);
    vec3 p = vec3(st*2.0, iTime*0.1);
    vec3 q;
    vec3 r;
		  color = vec3(snoise(p));
			//color = vec3(pattern( p, q, r ) + 0.3);
    // float f = pattern( p, q, r );
    // float percent = clamp(f*f*4.0, 0.0, 1.0);
    // color = mix(lightBlue, lightRust, percent);
    // percent = clamp(3.0*length(q.x), 0.0, 1.0);
    // color = mix(color, darkBlue, percent);
    // percent = clamp(1.2*length(r.y), 0.0, 1.0);
    // color = mix(color, darkRust, percent);
    
    // Output to screen
    gl_FragColor = vec4(color,1.0);
	// vec2 uv = gl_FragCoord.xy / u_resolution.xy;
	// gl_FragColor = vec4(uv.x, 0.0, uv.y, 1.0);
}