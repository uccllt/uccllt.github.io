// JavaScript Document
function move(x){
	var cur = parseInt(document.getElementById("box_1").style.marginLeft);
	var size = parseInt(document.getElementById("box_10").style.width);
	if(!size||size>=104)
	{
		size=0;
	}
	size=size-x;
	if(!cur)
	{
		cur=0;
	}
	else if(cur<=-104)
	{
		var i;
		var j;
		for(i=1;i<=10;i++)
		{
			if(i==10)
			{
				j=1;
			}
			else
			{
				j=i+1;
			}
			var oldbox = "box_" + j;
			var newbox = "box_" + i;
			var content = document.getElementById(oldbox).innerHTML;
			document.getElementById(newbox).innerHTML = content;
		}
		//document.getElementById("box_1").innerHTML = "<br /><img src=\"images/ucb.png\" width=\"104\" height=\"95\" />UCB";
		cur=0;
	}
	cur=cur+x;
	document.getElementById("box_1").style.marginLeft = cur + "px";
	document.getElementById("box_10").style.width = size + "px";
}

function image_scroll(speed){
	setInterval("move(" + (-speed) + ")", 50);
}