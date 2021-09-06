let myCanvas = document.getElementById("canvas"),
    myContext = myCanvas.getContext("2d");

window.onload = function () {
    simulate();
}

function simulate() {
    let width = canvas.width = 640,
        height = canvas.height = 480;

    update();

    function update() {
        myContext.clearRect(0, 0, width, height);

        requestAnimationFrame(update);
    }
}