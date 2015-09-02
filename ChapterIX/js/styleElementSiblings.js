//取得表頭原件和相鄰兄弟原件 model化
function styleElementSiblings (tag, theclass) {
	if(!document.getElementsByTagName) return false;
	var elems = document.getElementsByTagName(tag);
	var elem;

	for(var i = 0; i<elems.length; i++){
		elem = getNextElement(elems[i].nextSibling);
		addClass(elem, theclass);
	}
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
addLoadEvent(function(){
	styleElementSiblings('h1', 'intro');
});