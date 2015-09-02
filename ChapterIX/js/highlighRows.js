//table hover 效果
function highlighRows () {
	if(!document.getElementsByTagName) return false;
	var rows = document.getElementsByTagName('tr');
	//var thisBg = rows.style.backgroundColor;
	//alert(document.getElementsByTagName('tr').style.backgroundColor);
	for(var i=0; i<rows.length; i++){
		rows[i].onmouseover = function(){
			this.style.backgroundColor = "#ff0000";
			this.style.color = "#fff";
		}
		rows[i].onmouseout = function(){
			this.style.color = "#000";
			rows[2].style.backgroundColor = "#fff";
			stripeTables();
		}
	}
	
}
addLoadEvent(highlighRows);