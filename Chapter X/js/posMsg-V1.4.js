var startElem;
function positionMessage () {
	if(!document.getElementById) return false;
	if(!document.getElementById('message')) return false;

	var elem = document.getElementById("message");

	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "200px";

	//物件啟始時間、一秒後執行moveMsg
	startElem = setTimeout(function(){
		moveMsg("message", 200, 100, 5);
		//alert();
	}, 1000);

	if(!document.getElementById('message2')) return false;

	var elem = document.getElementById("message2");

	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "50px";

	startElem = setTimeout(function(){
		moveMsg("message2", 125, 125, 15);
	}, 1000);
}
function moveMsg(elemID, final_X, final_Y, interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elemID)) return false;

	var elem = document.getElementById(elemID);
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	//x軸 == 200, final_X 和y軸 == 100, final_Y 退出 function
	if(xpos == final_X && ypos == final_Y){
		return true;
	}
	if(xpos < final_X){
		xpos++;
	}
	if(xpos > final_X){
		xpos--;
	}
	if(ypos < final_Y){
		ypos++;
	}
	if(ypos > final_Y){
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	//物件移動速度
	/*moveElem = setTimeout(function(){
		moveMsg();
	}, 10);*/
	moveElem = setTimeout(function(){
		moveMsg(elemID, final_X, final_Y);
	}, interval);

}
addLoadEvent(positionMessage);
