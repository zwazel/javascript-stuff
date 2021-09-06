let myCanvas = document.getElementById("canvas"),
    myContext = myCanvas.getContext("2d");

window.onload = function () {
    simulate();
}

function simulate() {
    let width = myCanvas.width = window.innerWidth,
        height = myCanvas.height = window.innerHeight;

    update();

    function update() {
        myContext.clearRect(0, 0, width, height);

        requestAnimationFrame(update);
    }
}