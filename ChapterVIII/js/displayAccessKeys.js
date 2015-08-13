function displayAccesskeys () {
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	//取得頁面所有a tag
	var links = document.getElementsByTagName('a');
	//建立新陣列
	var akeys = new Array();
	//for 迴圈 尋找所以 a tag
	for(var i=0; i<links.length; i++){
		var current_link = links[i];

		if(!current_link.getAttribute('accesskey')) continue;
		//取得accesskey的屬性
		var key = current_link.getAttribute('accesskey');
		//取得a tag上的文字
		var text = current_link.lastChild.nodeValue;
		//把取得的屬性和文字放到陣列裡
		akeys[key] = text;
	}
	//建立ul
	var list = document.createElement('ul');
	//for 迴圈 尋找陣列裡全部的值
	for(key in akeys){
		var text = akeys[key];
		var str = key + ':' + text;

		var item = document.createElement('li');
		var item_text = document.createTextNode(str);

		item.appendChild(item_text);

		list.appendChild(item);
	}

	var header = document.createElement('h3');
	var header_text = document.createTextNode('Accesskeys');

	header.appendChild(header_text);

	document.body.appendChild(header);
	document.body.appendChild(list);
}
addLoadEvent(displayAccesskeys);