function moveElement(elemID, final_X, final_Y, interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elemID)) return false;

	var elem = document.getElementById(elemID);

	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);

	//x軸 == 200, final_X 和y軸 == 100, final_Y 退出 function
	if(xpos == 200 && ypos == 100){
		return true;
	}
	if(xpos < 200){
		xpos++;
	}
	if(xpos > 200){
		xpos--;
	}
	if(ypos < 100){
		ypos++;
	}
	if(ypos > 100){
		ypos--;
	}

	elem.style.left = xpos + 'px';
	elem.style.top = ypos + 'px';

	
	//物件的移動速度
	//var repeat = "moveElement('" +elemID+ "," +final_X+ "," +final_Y+ "," +interval+ "')";
	//movement = setTimeout('moveElement()', 1);
	//var repeat = "moveElement('"+elemID+", "+final_X+", "+final_Y+", "+interval+")";
	//movement = setTimeout(repeat, interval);
}

