function prepareSlideShow () {
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById('linkList')) return false;

	//新增一個div，設定 id 和 class name
	var slideShow = document.createElement('div');
		slideShow.setAttribute('id', 'slideShow');
		slideShow.className = 'slide-show';

	//新增一個 img tag 設定 src，alt，id屬性
	var preview = document.createElement('img');
		preview.setAttribute('src', 'images/topic.png');
		preview.setAttribute('alt', 'bulding blocks of web desing');
		preview.setAttribute('id', 'preview');
		//把preview 加到 slideShow 裡
		slideShow.appendChild(preview);
	

	var list = document.getElementById('linkList');
		//調用insertAfter 函數，把slideShow 放到 list 之後
		insertAfter(slideShow, list);
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