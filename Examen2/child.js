/*Alejandra Tubilla
	A01022960*/

var num_div = document.querySelectorAll('div');

 var mayor = 0;

 for(var i = 0; i < num_div.length; i++)
 {
 	var temporal = num_div[i].childElementCount;
 	if(temporal > mayor)
 	{
 		mayor = temporal;
 	} 
 }


  var h1 = document.createElement("h1");
  h1.style.zIndex = 1000000;
  h1.style.fontSize = "2.5 rem";
  h1.style.position = "absolute";
  h1.style.bottom = "0%";
  h1.style.backgroundColor = "pink";
  var text = document.createTextNode("Número mayor de hijos: " + mayor);
  h1.appendChild(text);
  document.getElementsByTagName('body')[0].appendChild(h1);

// document.write("El div con mayor cantidad de hijos tiene " +mayor + " hijos");
 	

