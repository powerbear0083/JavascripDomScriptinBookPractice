//設定元件初始位置
function positionMessage () {
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;

	var elem = document.getElementById("message");

	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";

	//設定物件啟始時間，1秒後執行 'moveElement()'
	//movement = setTimeout('moveElement()',1000);
	movement = setTimeout("message", 125, 25, 20);

}
addLoadEvent(positionMessage);