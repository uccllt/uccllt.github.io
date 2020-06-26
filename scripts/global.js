(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-812982-28', 'ucdavis.edu');
ga('send', 'pageview');

function openPDF(href)
{
	void(window.open(href, 'sum', 'width=800,height=700,left=500,top=100,location=0,toolbar=1,menubar=1,scrollbars=yes'));
}

function openPlayer(href)
{
	void(window.open(href, 'player', 'width=920,height=640,left=300,top=200,location=0,toolbar=0,menubar=0,scrollbars=0,resizable=0'));
}

function hoverOn(img){
	document.getElementById(img).src = '/images/' + img + '_link_over.png';
}

function hoverOut(img){
	document.getElementById(img).src = '/images/' + img + '_link.png';
}

function jSLink(url){
	document.location = url;
}
