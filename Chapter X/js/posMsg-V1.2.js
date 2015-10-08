var startElem;
function positionMessage () {
	if(!document.getElementById) return false;
	if(!document.getElementById('message')) return false;

	var elem = document.getElementById("message");

	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "200px";

	//物件啟始時間、一秒後執行moveMsg
	startElem = setTimeout(moveMsg, 1000);
}
}
function moveMsg(){
	if(!document.getElementById) return false;
	if(!document.getElementById('message') return false;

	var elem = document.getElementById('message');
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	//x軸 == 200和y軸 == 100 退出 function
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
	elem.style.right = ypos + 'px';
	//物件執行速度
	moveElem = setTimeout(function(){
		moveMsg();
	}, 10);
}
addLoadEvent(positionMessage);
addLoadEvent(moveMsg);