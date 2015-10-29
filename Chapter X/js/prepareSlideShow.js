function prepareSlideShow () {
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById('linkList')) return false;
	if(!document.getElementById('preview')) return false;
	

	var list = document.getElementById('linkList');
	var links = list.getElementsByTagName('a');

	links[0].onmouseover = function(){
		moveMsg("preview", -100, 0, 15);
	}
	links[1].onmouseover = function(){
		moveMsg("preview", -200, 0, 15);
	}
	links[2].onmouseover = function(){
		moveMsg("preview", -300, 0, 15);
	}
}
addLoadEvent(prepareSlideShow);