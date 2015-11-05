function inputSupportType (type) {
	if(!document.createElement) return false;
	var input = document.createElement('input');

	input.setAttibute('type', type);
	if(input.type == 'text' && type != 'text'){
		return false;
	} else {
		return true;
	}
}

function elementSupportAttribute(elementName, attribute){
	if(!document.createElement) return false;

	var temp = document.createElement(elementName);

	return ( attribute in test);
}