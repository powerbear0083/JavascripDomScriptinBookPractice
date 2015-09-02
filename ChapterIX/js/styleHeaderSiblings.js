//取得表頭原件和相鄰兄弟原件
function styleHeaderSiblings () {
	if(!document.getElementsByTagName) return false;
	var headers = document.getElementsByTagName('h1');
	var elem;
	//modify dom style
	/*for(var i = 0; i<headers.length; i++){
		elem = getNextElement(headers[i].nextSibling);

		elem.style.fontWeight = "bold";
		elem.style.fontSize = "1.2em";
	}*/
	//modify class name
	for(var i = 0; i<headers.length; i++){
		elem = getNextElement(headers[i].nextSibling);

		//elem.setAttribute('class', ' intro');
		//elem.className = ' intro';
		addClass(elem, "intro");
	}
	//console.log(elem.nextSibling);
}
//取得下一個原件
function getNextElement(node){
	if(node.nodeType == 1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}

addLoadEvent(styleHeaderSiblings);