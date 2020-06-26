// JavaScript Document

var which = 0;
var interval=["","","","","",""];
var closing=["","","","","",""];
var timeout=["","","","","",""];
var movies_int="";
var movie_list=["movies/Rosemary_Feal_UCC.mp4","movies/Prof Arnett.mov","movies/Lecturer Jernigan.mov"];

var subs = ["","","","","",""];

function subMenu(content, num)
{
	subs[num] = document.getElementById("menu_"+num).innerHTML;
	document.getElementById("menu_"+num).innerHTML = content;
}

function revertSubMenu(num)
{
	document.getElementById("menu_"+num).innerHTML = subs[num];
}


function newMenu(e, num) {
	if(which == num)
	{
		return;
	}
	which = num;
	var posx = 0;
	var posy = 0;
	if (!e) var e = window.event;
	if (e.pageX || e.pageY) 	{
		posx = e.pageX;
		posy = e.pageY;
	}
	else if (e.clientX || e.clientY) 	{
		posx = e.clientX + document.body.scrollLeft
			+ document.documentElement.scrollLeft;
		posy = e.clientY + document.body.scrollTop
			+ document.documentElement.scrollTop;
	}
	document.getElementById("popup").style.display = "block";
	switch(num)
	{
	case 1:
		document.getElementById("popup").innerHTML = "<span id=\"popup_title\">Distance Learning</span><ul class=\"popup_menu\"><li>Something</li><li>Another thing</li><li>Link here</li><li>More links...</li><li>And so on and so forth</li></ul>";
		height = document.getElementById("popup").offsetHeight;
		width = document.getElementById("popup").offsetWidth;
		break;
	case 2:
		document.getElementById("popup").innerHTML = "<span id=\"popup_title\">Federally Funded Projects</span><ul class=\"popup_menu\"><li>Something</li><li>Another thing</li><li>Link here</li><li>More links...</li><li>And so on and so forth</li></ul>";
		height = document.getElementById("popup").offsetHeight;
		width = document.getElementById("popup").offsetWidth;
		break;
	case 3:
		document.getElementById("popup").innerHTML = "<span id=\"popup_title\">Public Service</span><ul class=\"popup_menu\"><li>Something</li><li>Another thing</li><li>Link here</li><li>More links...</li><li>And so on and so forth</li></ul>";
		height = document.getElementById("popup").offsetHeight;
		width=0;
		break;
	case 4:
		document.getElementById("popup").innerHTML = "<span id=\"popup_title\">Consortium Funded Projects</span><ul class=\"popup_menu\"><li>Something</li><li>Another thing</li><li>Link here</li><li>More links...</li><li>And so on and so forth</li></ul>";
		height=0;
		width = document.getElementById("popup").offsetWidth;
		break;
	case 5:
		document.getElementById("popup").innerHTML = "<span id=\"popup_title\">Research</span><ul class=\"popup_menu\"><li>Something</li><li>Another thing</li><li>Link here</li><li>More links...</li><li>And so on and so forth</li></ul>";
		height=0;
		width = document.getElementById("popup").offsetWidth;
		break;
	case 6:
		document.getElementById("popup").innerHTML = "<span id=\"popup_title\">Professional Development</span><ul class=\"popup_menu\"><li>Something</li><li>Another thing</li><li>Link here</li><li>More links...</li><li>And so on and so forth</li></ul>";
		width=0;
		height=0;
		break;
	}
	document.getElementById("popup").style.top = (posy-height) + "px";
	document.getElementById("popup").style.left = (posx-width) + "px";
}

function remMenu()
{
	document.getElementById("popup").style.display = "none";
	which = "";
}

function clearMenus()
{
	document.getElementById("topm").innerHTML = "&nbsp;";
	document.getElementById("leftm").innerHTML = "&nbsp;";
	document.getElementById("rightm").innerHTML = "&nbsp;";
	document.getElementById("bottomm").innerHTML = "&nbsp;";
}

function menu(num)
{
	switch(num)
	{
	case 1:
		clearMenus();
		document.getElementById("leftm").innerHTML =
			"<a href=\"\">First Link</a><br />" +
			"<a href=\"\">Second Link</a><br />" +
			"<a href=\"\">Third Link</a><br />" +
			"<a href=\"\">Fourth Link</a><br />" +
			"<a href=\"\">Fifth Link</a><br />";
		break;
	case 2:
		clearMenus();
		document.getElementById("topm").innerHTML =
			"<a href=\"\">First Link</a> | " +
			"<a href=\"\">Second Link</a> | " +
			"<a href=\"\">Third Link</a> | " +
			"<a href=\"\">Fourth Link</a> | " +
			"<a href=\"\">Fifth Link</a>";
		break;
	case 3:
		clearMenus();
		document.getElementById("rightm").innerHTML =
			"<a href=\"\">First Link</a><br />" +
			"<a href=\"\">Second Link</a><br />" +
			"<a href=\"\">Third Link</a><br />" +
			"<a href=\"\">Fourth Link</a><br />" +
			"<a href=\"\">Fifth Link</a><br />";
		break;
	case 4:
		clearMenus();
		document.getElementById("leftm").innerHTML =
			"<a href=\"movies.html\">Movies</a><br />" +
			"<a href=\"\">Second Link</a><br />" +
			"<a href=\"\">Third Link</a><br />" +
			"<a href=\"\">Fourth Link</a><br />" +
			"<a href=\"\">Fifth Link</a><br />";
		break;
	case 5:
		clearMenus();
		document.getElementById("bottomm").innerHTML =
			"<a href=\"\">First Link</a> | " +
			"<a href=\"\">Second Link</a> | " +
			"<a href=\"\">Third Link</a> | " +
			"<a href=\"\">Fourth Link</a> | " +
			"<a href=\"\">Fifth Link</a>";
		break;
	case 6:
		clearMenus();
		document.getElementById("rightm").innerHTML =
			"<a href=\"\">First Link</a><br />" +
			"<a href=\"\">Second Link</a><br />" +
			"<a href=\"\">Third Link</a><br />" +
			"<a href=\"\">Fourth Link</a><br />" +
			"<a href=\"\">Fifth Link</a><br />";
		break;
	default:
		alert("Error - inappropriate call to menu() with argument value of " + num + "!");
		break;
	}
}

function openMenu(num)
{
	clearTimeout(timeout[num-1]);
	if(interval[num-1] || parseInt(document.getElementById("img_" + num).style.marginTop)<0)
	{
		if(!closing[num-1])
		{
			return;
		}
	}
	closing[num-1]=false;
	document.getElementById("img_" + num).style.marginTop="0px";
	reveal(num);
	clearInterval(interval[num-1]);
	interval[num-1] = setInterval("reveal(" + num + ")", 50);
}

function closeMenu(num)
{
	timeout[num-1] = setTimeout("hideMenu(" + num + ")", 50);
}

function hideMenu(num)
{
	clearInterval(interval[num-1]);
	closing[num-1]=true;
	interval[num-1]=setInterval("hide(" + num + ")", 50);
}

function reveal(num)
{
	var cur = parseInt(document.getElementById("img_" + num).style.marginTop);
	if(cur<=-165)
	{
		document.getElementById("img_" + num).style.marginTop = "-190px";
		clearInterval(interval[num-1]);
		interval[num-1]="";
	}
	else
	{
		document.getElementById("img_" + num).style.marginTop = (cur - 20) + "px";
	}
}

function hide(num)
{
	var cur = parseInt(document.getElementById("img_" + num).style.marginTop);
	if(cur<-20)
	{
		document.getElementById("img_" + num).style.marginTop = (cur + 20) + "px";
		closing[num-1]=false;
	}
	else
	{
		document.getElementById("img_" + num).style.marginTop = "0px";
		clearInterval(interval[num-1]);
		interval[num-1]="";
	}
}

function openMovie(num)
{
	document.getElementById("movies").style.marginLeft="-20px";
	document.getElementById("film").style.width="0px";
	document.getElementById("film").style.display="block";
	movies_int = setInterval("revealMovie(" + num + ")", 50);
}

function closeMovie()
{
	document.getElementById("film").innerHTML = "";
	movies_int = setInterval("hideMovie()", 50);
}

function revealMovie(num)
{
	var cur = parseInt(document.getElementById("film").style.width);
	if(cur>580)
	{
		document.getElementById("film").style.width = "620px";
		clearInterval(movies_int);
		document.getElementById("film").innerHTML = "<OBJECT CLASSID=\"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B\" WIDTH=\"600\" HEIGHT=\"300\" CODEBASE=\"http://www.apple.com/qtactivex/qtplugin.cab\"><PARAM name=\"SCALE\" VALUE = \"aspect\" ><PARAM name=\"SRC\" VALUE=\"" + movie_list[num-1] + "\"><PARAM name=\"AUTOPLAY\" VALUE=\"true\"><PARAM name=\"CONTROLLER\" VALUE=\"true\"><EMBED SRC=\"" + movie_list[num-1] + "\" WIDTH=\"600\" HEIGHT=\"300\" AUTOPLAY=\"true\" SCALE = \"aspect\" CONTROLLER=\"true\" PLUGINSPAGE=\"http://www.apple.com/quicktime/download/\"></EMBED>";
	}
	else
	{
		document.getElementById("film").style.width = (cur+30) + "px";
	}
}

function hideMovie()
{
	var cur = parseInt(document.getElementById("film").style.width);
	if(cur<30)
	{
		document.getElementById("film").style.width = "0px";
		document.getElementById("film").style.display = "none";
		document.getElementById("movies").style.marginLeft="-20px";
		clearInterval(movies_int);
	}
	else
	{
		document.getElementById("film").style.width = (cur-30) + "px";
	}
}
