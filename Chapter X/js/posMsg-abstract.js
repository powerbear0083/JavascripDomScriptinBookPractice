//var moveMent;
function positionMessage () {
	if(!document.getElementById) return false;
	if(!document.getElementById('message')) return false;

	var elem = document.getElementById("message");

	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "200px";

	//物件啟始時間、一秒後執行moveMsg
	//moveMent = setTimeout(moveMsg, 1000);
	//moveMent = setTimeout('message', 200, 100, 10)
}
function moveMsg(elemID, final_x, final_y, interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elemID)) return false;

	var elem = document.getElementById(elemID);
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	//elem.style.left = "300px";
	//x軸 == 200, final_X 和y軸 == 100, final_Y 退出 function
	if(xpos == final_x && ypos == final_y){
		return true;
	}
	if(xpos < final_x){
		xpos++;
	}
	if(xpos > final_x){
		xpos--;
	}
	if(ypos < final_y){
		ypos++;
	}
	if(ypos > final_y){
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	//物件移動速度
	//moveMent = setTimeout(moveMsg, 10);
	//var repeat = "moveMsg('"+elemID+", "+final_x+", "+final_y+", "+interval+")";
	//movement = setTimeout(repeat, interval);
}
addLoadEvent(positionMessage);
