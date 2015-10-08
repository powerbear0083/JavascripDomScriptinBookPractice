function positionMessage () {
	if(!document.getElementById) return false;
	if(!document.getElementById('message')) return false;

	var elem = document.getElementById("message");

	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "200px";

	movement = setTimeout('moveMsg()', 1000);
}
function moveMsg(){
	if(!document.getElementById) return false;
	if(!document.getElementById('message')) return false;

	var elem = document.getElementById('message');

	elem.style.left = '500px';
}
addLoadEvent(positionMessage);
//addLoadEvent(moveMsg);