function converToGs(img) {
    if (!Modernizr.canvas) return;

    img.color = img.src;
    img.grayscale = createGSCanvas(img);

    img.onmouseover = function() {
        this.src = this.color;
    }
    img.onmouseout = function() {
        this.src = this.grayscale;
    }
    img.onmouseout();
}

function createGSCanvas(img) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    var ctxImgData = ctx.getImageData(0, 0, img.width, img.height);

    for (i = 0; i < ctxImgData.height; i++) {
        for (j = 0; j < ctxImgData.width; j++) {
            var x = (i * 4) * ctxImgData.width + (j * 4);
            var r = ctxImgData.data[x];
            var g = ctxImgData.data[x + 1];
            var b = ctxImgData.data[x + 2];
            ctxImgData.data[x] = ctxImgData.data[x + 1] = ctxImgData.data[x + 2] = (r + g + b) / 3;

        }
    }

    ctx.putImageData(ctxImgData, 0, 0, 0, 0, ctxImgData.width, ctxImgData.height);

    return canvas.toDataURL();
}

window.onload = function() {
    converToGs(document.getElementById('avatar'));
}