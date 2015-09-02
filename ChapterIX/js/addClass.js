//dom 增加 class name
function addClass (element, className) {
	if(!element.className){
		element.className = className;
	}else{
		newClassName = element.className;
		newClassName += " ";
		newClassName += className;
		element.className = newClassName;
	}
}