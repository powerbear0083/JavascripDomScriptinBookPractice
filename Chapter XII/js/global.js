function addLoadEvent(func) {
    var ondonload = window.onload;

    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            ondonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

function currentPate() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;

    var header = document.getElementsByTagName('header');
    if (header.length == 0) return false;

    var navs = header[0].getElementsByTagName('nav');
    if (navs.length == 0) return false;

    var links = navs[0].getElementsByTagName('a');
    var linkUrl;

    for (var i = 0; i < links.length; i++) {
        //取得a tag href 的內容
        linkUrl = links[i].getAttribute('href');
        //比較頁面url 和 a tag href 字串是否相符
        if (window.location.href.indexOf(linkUrl) != -1) {
            links[i].className = 'here';
            //取得 a tag 裡的文字，再轉成小寫文字
            var linkText = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute('id', linkText);
        }
    }
}
addLoadEvent(currentPate);

function moveMsg(elemID, final_X, final_Y, interval) {
    var moveElem;
    if (!document.getElementById) return false;
    if (!document.getElementById(elemID)) return false;

    var elem = document.getElementById(elemID);
    if (elem.moveElem) {
        clearTimeout(elem.moveElem);
    }
    if (!elem.style.left) {
        elem.style.left = "0px";
    }
    if (!elem.style.top) {
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    //x軸 == 200, final_X 和y軸 == 100, final_Y 退出 function
    if (xpos == final_X && ypos == final_Y) {
        return true;
    }
    if (xpos < final_X) {
        dist = Math.ceil((final_X - xpos) / 10);
        xpos = xpos + dist;
        //xpos++;
    }
    if (xpos > final_X) {
        dist = Math.ceil((xpos - final_X) / 10);
        xpos = xpos - dist;
        //xpos--;
    }
    if (ypos < final_Y) {
        dist = Math.ceil((final_Y - ypos) / 10);
        ypos = ypos + dist;
        //ypos++;
    }
    if (ypos > final_Y) {
        dist = Math.ceil((ypos - final_Y) / 10);
        ypos = ypos - dist;
        //ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    //物件移動速度
    /*moveElem = setTimeout(function() {
            moveMsg();
        }, 10);*/
    elem.moveElem = setTimeout(function() {
        moveMsg(elemID, final_X, final_Y);
    }, interval);

}

function prepareSlideShow() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById('intro')) return false;

    //新增一個div，設定 id 
    var slideShow = document.createElement('div');
    slideShow.setAttribute('id', 'slideShow');

    //新增一個 img tag 設定 src，alt，id屬性
    var preview = document.createElement('img');
    preview.setAttribute('src', 'img/slideshow.gif');
    preview.setAttribute('alt', 'a glimpse of what awaits you');
    preview.setAttribute('id', 'preview');
    //把preview 加到 slideShow 裡
    slideShow.appendChild(preview);

    var frame = document.createElement('img');
    frame.setAttribute('src', 'img/frame.gif');
    frame.setAttribute('alt', 'frame border');
    frame.setAttribute('id', 'frame');
    slideShow.appendChild(frame);

    //調用insertAfter 函數
    insertAfter(slideShow, intro);

    var links = intro.getElementsByTagName('a');
    var destination;

    for (var i = 0; i < links.length; i++) {
        links[i].onmouseover = function() {
            destination = this.getAttribute('href');
            if (destination.indexOf('index.html') != -1) {
                moveMsg('preview', 0, 0, 5);
            }
            if (destination.indexOf('about.html') != -1) {
                moveMsg('preview', -150, 0, 5);
            }
            if (destination.indexOf('photos.html') != -1) {
                moveMsg('preview', -300, 0, 5);
            }
            if (destination.indexOf('live.html') != -1) {
                moveMsg('preview', -450, 0, 5);
            }
            if (destination.indexOf('photo.html') != -1) {
                moveMsg('preview', -600, 0, 5);
            }
        }
    }

}
addLoadEvent(prepareSlideShow);

function showSection(id) {
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].getAttribute('id') != id) {
            sections[i].style.display = 'none';
        } else {
            sections[i].style.display = 'block';
        }
    }
}

function prepareInteralnav() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;

    var articles = document.getElementsByTagName('article');
    if (articles.length == 0) return false;

    var navs = articles[0].getElementsByTagName('nav');
    if (navs.length == 0) return false;

    var nav = navs[0];
    var links = nav.getElementsByTagName('a');

    for (var i = 0; i < links.length; i++) {
        var destination;
        //取得href內#符號後面第二個字元
        var sectionId = links[i].getAttribute('href').split('#')[1];
        //var sectionIdLast = links[i.length-1].getAttribute('href').split('#')[1];

        if (document.getElementById('sectionId')) continue;
        //alert(sectionIdLast);
        document.getElementById(sectionId).style.display = 'none';

        links[i].destination = sectionId;
        links[i].onclick = function() {
            showSection(this.destination);
            return false;
        }
    }
}
addLoadEvent(prepareInteralnav);

function showPic(whichpic) {
    if (!document.getElementById('placeholder')) return true;

    //取得 link 的 href 
    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');

    //設定屬性
    placeholder.setAttribute('src', source);

    if (!document.getElementById('description')) return false;
    //如果link有 title數屬性
    if (whichpic.getAttribute('title')) {
        //取得link的 title 文字
        var text = whichpic.getAttribute('title');
    } else {
        var text = '';
    }

    var description = document.getElementById('description');
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;

}

function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById('imagegallery')) return false;

    //建立一個img tag設定 id, src, ali, 屬性
    var placeholder = document.createElement('img');
    placeholder.setAttribute('id', 'placeholder');
    placeholder.setAttribute('src', 'img/placeholder.gif');
    placeholder.setAttribute('alt', 'my img gallery');

    //建立一個 p tag, 設定id 屬性   
    var description = document.createElement('p');
    description.setAttribute('id', 'description');

    //建立說明文字,把文字塞進description
    var desctext = document.createTextNode('choose an img');
    description.appendChild(desctext);

    var gallery = document.getElementById('imagegallery');

    //把說明放到圖片後面,把placeholder放到說明後面
    insertAfter(description, gallery);
    insertAfter(placeholder, description);
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById('imagegallery')) return false;

    //取得dom 頁面上的id
    var gallery = document.getElementById('imagegallery');
    //取得gallery 的 a tag
    var links = gallery.getElementsByTagName('a');

    //執行 links 裡的所以 click 事件，並調用showPic function
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this);
        }
    }
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

function stripeTables() {
    if (!document.getElementsByTagName) return false;
    //取得 dom上面的 table
    var tables = document.getElementsByTagName('table');

    //找尋dom上面的 table
    for (var i = 0; i < tables.length; i++) {
        var odd = false;
        //尋找table上的所有 tr
        var rows = tables[i].getElementsByTagName('tr');
        for (var j = 0; j < rows.length; j++) {
            if (odd == true) {
                addClass(rows[j], 'odd');
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

function highlightRows() {
    if (!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        rows[i].oldClassName = rows[i].className;
        rows[i].onmouseover = function() {
            addClass(this, 'highlihgt');
        }
        rows[i].onmouseout = function() {
            this.className = this.oldClassName;
        }
    }
}

function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
    //取得頁面的 abbr tag
    var abbreviations = document.getElementsByTagName('abbr');
    //頁面沒有 abbr 跳出 functionb
    if (abbreviations.length < 1) return false;

    //新增一個陣列
    var defs = new Array();


    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];

        if (current_abbr.childNodes.length < 1) continue;

        var definition = current_abbr.getAttribute('title');
        var key = current_abbr.lastChild.nodeValue;

        defs[key] = definition;
    }

    var dlist = document.createElement('dl');

    for (key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement('dt');
        var dtitle_text = document.createTextNode(key);

        dtitle.appendChild(dtitle_text);

        var ddesc = document.createElement('dd');
        var ddesc_text = document.createTextNode(definition);

        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    if (dlist.childNodes.length < 1) return false;

    var header = document.createElement('h3');
    var header_text = document.createTextNode('abbreviations');

    header.appendChild(header_text);

    var articles = document.getElementsByTagName('article');

    if (articles.length == 0);
    var container = articles[0];

    container.appendChild(header);
    container.appendChild(dlist);
}

addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);

function focusLabels() {
    if (!document.getElementsByTagName) return false;
    //取得頁面 labels
    var labels = document.getElementsByTagName('label');

    //for 迴圈 跑整個 lables
    for (var i = 0; i < labels.length; i++) {
        //labels 沒有for 屬性 繼續function
        if (!labels[i].getAttribute('for')) continue;

        //點擊所有 labels 發生的事件
        labels[i].onclick = function() {
            //取得自己的for上的屬性宣告成為id
            var id = this.getAttribute('for');
            if (!document.getElementById(id)) return false;

            var element = document.getElementById(id);
            element.focus();
        }
    };
}
addLoadEvent(focusLabels);

function resetFields(whichForm) {
    //判斷瀏覽器是否支援placeholder，沒有往下
    if (Modernizr.input.placeholder) return;

    //尋找form 裡的所有元素
    for (var i = 0; i < whichForm.elements.length; i++) {
        var element = whichForm.elements[i];
        //有元素是 submit 繼續 function
        if (element.type == 'submit') continue;


        //取得元素的placeholder
        var check = element.placeholder || element.getAttribute('placeholder');

        //只要placeholder 不是空的
        if (!check) continue;
        element.onfocus = function() {
            //取得placeholder的值
            var text = this.placeholder || this.getAttribute('placeholder');
            if (this.value == text) {
                this.className = '';
                this.value = '';
            }
        }
        element.onblur = function() {
            if (this.value == '') {
                this.className = 'placeholder';
                this.value = this.placeholder || this.getAttribute('placeholder');
            }
        }
        element.onblur();
    }
}
function isFilled(field) {
    //取的input裡的值，把空格取代掉，判斷input是否有值
    if (field.value.replace(' ', '').length == 0) return false;

    //比較input 的 placeholder和 屬性的placeholder
    //如果有取得屬性的placeholder，回傳false
    var placeholder = field.placeholder || field.getAttribute('placeholder');
    //下面判斷式成立，回傳false
    return (field.value != placeholder);

}

function isEmail(field) {
    //indexOf 尋找字串第一次出現的位置
    //找不到@ 回傳 -1
    //找不到. 回傳 -1
    return (field.value.indexOf('@') != -1 && field.value.indexOf('.') != -1);
}

function validateForm(whichform) {
    //尋找表單中的elements
    for (var i = 0; i < whichform.elements.length; i++) {
        var element = whichform.elements[i];
        //如果元素為必填
        if (element.required == 'required') {
            //判斷元素是否回傳false
            if (!isFilled(element)) {
                alert('Please fill in the' + element.name + 'field.');
                return false;
            }
        }
        //如果元素的類型是 maill
        if (element.type == 'email') {
            //判斷元素是否回傳false
            if (!isEmail(element)) {
                alert('The' + element.name + 'field must be a valid email address.');
                return false;
            }
        }
    }
    return true;
}

function getHTTPObject() {
    if (typeof XMLHttpRequest == 'undefined')
        XMLHttpRequest = function() {
            try {
                return new ActiceXObject('Msxml2.XMLHTTP.6.0');
            } catch (e) {}
            try {
                return new ActiceXObject('Msxml2.XMLHTTP.3.0');
            } catch (e) {}
            try {
                return new ActiceXObject('Msxml2.XMLHTTP');
            } catch (e) {}
            return false;
        }
    return new XMLHttpRequest();
}

function displayAjaxLoading(element) {
    //當元素有子結點時
    //移除元素的最後一個子元素
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
    var content = document.createElement('img');
    content.setAttribute('src', 'img/loading.gif');
    content.setAttribute('alt', 'loading...');
    element.appendChild(content);
}

function submitFormWithAjax(whichform, thetarget) {
    var request = getHTTPObject();
    if (!request) {
        return false;
    }
    displayAjaxLoading(thetarget);

    //建立一個新陣列
    var dataParts = [];
    var element;

    for (var i = 0; i < whichform.elements.length; i++) {
        element = whichform.elements[i];
        //把元素的名稱和編碼的值存入陣列
        dataParts[i] = element.name + '=' + encodeURIComponent(element.value);
    }
    //在陣列中插入分隔符號 '&'
    var data = dataParts.join('&');
    request.open('POST', whichform.getAttribute('action'), true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.onreadystatechange = function() {
        if (request.status == 4) {
            var matches = request.responseText.match(/<article>(\s\S)+<\/article>/);
            if (matchs.length > 0) {
                thetarget.innerHTML = matches[1];
            } else {
                thetarget.innerHTML = '<p>Oop, therr was an error. Sorry.</p>';
            }
        } else {
            thetarget.innerHTML = '<p>' + request.statusText + '</p>';
        }
    }

    request.send(data);
    return true;
}

function prepareForms() {
    for (var i = 0; i < document.forms.length; i++) {
        var thisForm = document.forms[i];
        //alert(thisForm.elements.length);
        //alert(document.forms[i]);
        resetFields(thisForm);

        thisForm.onsubmit = function() {
            //return validateForm(this);
            if (!validateForm(this)) return false;

            var article = document.getElementsByTagName('article')[0];
            if (submitFormWithAjax(this, article)) return false;

            return true;
        }
    }
}
addLoadEvent(prepareForms);