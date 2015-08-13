function displayCitations() {
	if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	//取得所文件上所有 blockquote tag
    var quotes = document.getElementsByTagName('blockquote');

    for (var i = 0; i < quotes.length; i++) {
    	//沒有 cite tag 繼續執行
        if (!quotes[i].getAttribute('cite')) continue;
        //取得 cite href 的屬性
        var url = quotes[i].getAttribute('cite');
        //取得所有blockquote 裡所有的子原素
        var quoteChildren = quotes[i].getElementsByTagName('*');
        console.log(quoteChildren);


        if (quoteChildren.length < 1) continue;
        //取得所有blockquote 裡所有的子原素中的最後一個原素
        var elem = quoteChildren[quoteChildren.length - 1];
        var link = document.createElement('a');
        //建立source字串
        var link_txt = document.createTextNode('source');
        //console.log(elem);
        link.appendChild(link_txt);
        link.setAttribute('href', url);

        var supercript = document.createElement('sup');

        supercript.appendChild(link);

        elem.appendChild(supercript);

    }
}
addLoadEvent(displayCitations);