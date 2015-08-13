function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //取得文件所有abbr tag
    var abbreviations = document.getElementsByTagName('abbr');
    if (abbreviations.length < 1) return false;
    var defs = new Array();

    //for迴圈 尋找所有abbr
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        if(current_abbr.childNodes.length < 1) continue;
        var definition = abbreviations[i].getAttribute('title');
        var key = abbreviations[i].lastChild.nodeValue;
        //console.log(definition);
        //console.log(abbreviations[i].lastChild.nodeValue);

        //defs = key;
        //defs = definition;
        defs[key] = definition;
        //console.log(abbreviations[i].getAttribute('title'));
        //console.log(abbreviations[i].lastChild.nodeValue);
        //console.log(defs);
    }
    //建立列表
    var dlist = document.createElement('dl');
    for (key in defs) {
        var definition = defs[key];
        //建立列表標題
        var dtitle = document.createElement('dt');
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //建立描述
        var ddesc = document.createElement('dd');
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length < 1) return false;

    var header = document.createElement('h2');
    var header_text = document.createTextNode('Abbreviations');

    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);

}
addLoadEvent(displayAbbreviations);
