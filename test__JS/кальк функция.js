

"use strict";
while (true) {
let numOne = +prompt ('give me number one' , '' );

let numTwo = +prompt ('give me number two' , '' );

let znak = prompt ('give me some znak' , '' );


function sum(a,b) {
	return a+b;
}

function subtraction(a,b) {
	return a-b;
}

function multiplication(a,b) {
	return a*b;
}

function division(a,b) {
	return a/b;
}

if (znak == '+'){
	let rezult = sum(numOne,numTwo);
	alert (rezult);
}

else if (znak == '-'){
	let rezult = subtraction(numOne,numTwo);
	alert (rezult);
}

else if (znak == '*'){
	let rezult = multiplication(numOne,numTwo);
	alert (rezult);
}
else if (znak == '/'){
	let rezult = division(numOne,numTwo);
	alert (rezult);
}
else {
	alert (no);
	break;
}

}