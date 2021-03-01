
"use strict";



let name = prompt('Who are you','');



if (name == 'admin')
{
   let password = prompt('give me a password', '');
     
	 if (password == 'Я Главный')
	 {
		 alert('welkome')
	 }
	 else if (password == null)
	 {
		 alert ('otmena');
	 }
	 else {
		 alert('wrong password');
	 }
}
else if (name == null)
{
	alert('otmena');
}



else {
	alert ('I dont know who are you');
}