/*function countBodyChildren() {
    var body_element = document.getElementsByTagName('body')[0];
    alert(body_element.nodeType);
    //console.log(body_element.childNodes.length);
}

window.onload = countBodyChildren;*/
function showPic(whichpic) {
    var source = whichpic.getAttribute('href');
    var text = whichpic.getAttribute('title');
    var placeholder = document.getElementById('placeholder');
    var description = document.getElementById('description');
    placeholder.setAttribute('src', source);

    description.firstChild.nodeValue = text;
    //alert(description.firstChild.nodeValue);
}
