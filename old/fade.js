var fade = funcion(node)
{
	var level = 1; 
	var step = function()
	{
		var hex = level.toString(16);
		node.style.backgroundColor = '#000000'+hex +hex;
	
	if(level < 15)
	{
	level += 1;
	setTimeout(step,100);
	}
     };
setTimeout(step, 100);
};
fade(document.body);
