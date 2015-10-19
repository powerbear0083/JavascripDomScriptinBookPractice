var moveElem;
function moveMsg(elemID, final_X, final_Y, interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elemID)) return false;

	var elem = document.getElementById(elemID);
	if(elem.moveElem) {
		clearTimeout(elem.moveElem);
	}
	if(!elem.style.left){
		elem.style.left = "0px";
	}
	if(!elem.style.top){
		elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	var dist = 0;
	//x軸 == 200, final_X 和y軸 == 100, final_Y 退出 function
	if(xpos == final_X && ypos == final_Y){
		return true;
	}
	if(xpos < final_X){
		dist = Math.ceil((final_X - xpos)/10);
		xpos = xpos + dist;
		//xpos++;
	}
	if(xpos > final_X){
		dist = Math.ceil((xpos - final_X)/10);
		xpos = xpos - dist;
		//xpos--;
	}
	if(ypos < final_Y){
		dist = Math.ceil((final_Y - ypos)/10);
		ypos = ypos + dist;
		//ypos++;
	}
	if(ypos > final_Y){
		dist = Math.ceil((ypos - final_Y)/10);
		ypos = ypos - dist;
		//ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	//物件移動速度
	/*moveElem = setTimeout(function(){
		moveMsg();
	}, 10);*/
	elem.moveElem = setTimeout(function(){
		moveMsg(elemID, final_X, final_Y);
	}, interval);

}
addLoadEvent(moveMsg);
