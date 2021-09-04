const CFonts = require('cfonts');
const { odd, newArray, newTmp } = require('./index');


CFonts.say('Ariana|Palamova!', {
	font: 'simpleBlock',              // define the font face
	align: 'left',              // define text alignment
	colors: ['yellow'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment CFonts is being executed in
});
odd(6)

console.log(newTmp)