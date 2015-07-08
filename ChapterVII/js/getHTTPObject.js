function getHTTPObject() {
    if (typeof XMLHttpRequest == 'undefined') {
        //偵測不同版本IE瀏覽器
        XMLHttpRequest = function() {
            try {
                return new ActiveXObject('Msxml2.XMLHTTP.6.0')
            } catch (e) {}
            try {
                return new ActiveXObject('Msxml2.XMLHTTP.3.0')
            } catch (e) {}
            try {
                return new ActiveXObject('Msxml2.XMLHTTP')
            } catch (e) {}
            return false;
        }
    }
    return new XMLHttpRequest();
}