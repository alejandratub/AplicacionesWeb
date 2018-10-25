/*Alejandra Tubilla
	A01022960*/

	
	
	function Child(object){
		var max = 0;

		object.getChild = function()
		{
		  this.maximum = this.getChildRecursive(this.divs);
		}
		
	object.getChildRecursive = function resolve(divs)
	{
		for(var i = 0; i < divs.length; i++)
 			{
 				var  div = divs[i];
			 	if(div[i] instanceof Array)
			 	{
			 		resolve(div);
			 	} 
			 	else{
			 		if(div > max)
			 	{
			 		max = div;
			 	}

			 	}
			}
 			return max;
	}
}
 	var object = {
		divs:[6,7,[3,300,[1]],39]
	};
	Child(object);
	object.getChild();
	console.log(object.maximum);



