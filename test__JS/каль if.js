

"use strict";

let numberOne = prompt('give me namberOne', '' );

let numberTwo = prompt('give me namberTwo', '' );

let znak = prompt('give me znak', '' );


if (znak == '+')
{
	alert (`rezult = ${+numberOne + +numberTwo}`);
}
else if (znak == '-'){
	alert (`rezult = ${numberOne - numberTwo}`);
}
else if (znak == '*'){
	alert (`rezult = ${numberOne * numberTwo}`);
}
 else if (znak == '/'){
	alert (`rezult = ${numberOne / numberTwo}`);
} 
else  {
	alert ('no');
}
  
  
  