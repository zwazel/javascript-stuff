let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

window.onload = function () {
    simulate();
}

function simulate() {
    let width = canvas.width = 640,
        height = canvas.height = 480;

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        requestAnimationFrame(update);
    }
}