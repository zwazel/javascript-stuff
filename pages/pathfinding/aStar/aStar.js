let myCanvas = document.getElementById("canvas"),
    myContext = myCanvas.getContext("2d");

window.onload = function () {
    simulate();
}

// Explanation of algorithm: https://www.youtube.com/watch?v=-L-WgKMFuhE&ab_channel=SebastianLague

function simulate() {
    let width = canvas.width = 640,
        height = canvas.height = 480;

    let data = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> \
        <defs> \
            <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse"> \
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="gray" stroke-width="0.5" /> \
            </pattern> \
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"> \
                <rect width="80" height="80" fill="url(#smallGrid)" /> \
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" stroke-width="1" /> \
            </pattern> \
        </defs> \
        <rect width="100%" height="100%" fill="url(#smallGrid)" /> \
    </svg>';

    let DOMURL = window.URL || window.webkitURL || window;

    let img = new Image();
    let svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    let url = DOMURL.createObjectURL(svg);

    update();

    function update() {
        myContext.clearRect(0, 0, width, height);
        myContext.drawImage(img, 0, 0);
        requestAnimationFrame(update);
    }
}
