let fragShader_str =
["uniform vec2 iResolution;",
"void main()",
"{",
	"vec2 pos = gl_FragCoord.xy / iResolution.xy;",
    "gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);}"].join("\n");
