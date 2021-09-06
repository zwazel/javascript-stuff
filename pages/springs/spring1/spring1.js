window.onload = function () {
    simulate();
}

function simulate() {
    let initialSpeed = +document.getElementById("initialVelocity").value;
    let k = +document.getElementById("stiffness").value;
    let myFriction = +document.getElementById("friction").value;
    let springLength = +document.getElementById("springLength").value;
    let gravity = +document.getElementById("gravity").value;
    let bounceMultiplier = +document.getElementById("bounceMultiplier").value;

    let canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = 640,
        height = canvas.height = 480,
        springPoint = vector.create(width / 2, height / 2),
        weight = particle.create(Math.random() * width, Math.random() * height,
            initialSpeed, Math.random() * Math.PI * 2, gravity);

    weight.radius = 20;
    weight.friction = myFriction;

    canvas.addEventListener("mousemove", function (event) {
        let mousePos = getMousePosInCanvas(canvas, event);

        springPoint.setX(event.x);
        springPoint.setY(mousePos.y);
    });

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        let distance = springPoint.subtract(weight.position);
        distance.setLength(distance.getLength() - springLength);
        let springForce = distance.multiply(k);

        weight.velocity.addTo(springForce);

        weight.update();

        context.beginPath();
        context.arc(weight.position.getX(), weight.position.getY(), weight.radius, 0, Math.PI * 2, false);
        context.fill();

        context.beginPath();
        context.arc(springPoint.getX(), springPoint.getY(), 4, 0, Math.PI * 2, false);
        context.fill();

        context.beginPath();
        context.moveTo(weight.position.getX(), weight.position.getY());
        context.lineTo(springPoint.getX(), springPoint.getY());
        context.stroke();

        weight.doBounce(width, height, bounceMultiplier);

        requestAnimationFrame(update);
    }
}