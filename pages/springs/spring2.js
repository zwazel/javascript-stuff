window.onload = function () {
    simulate();
}

function simulate() {
    let initialSpeed = +document.getElementById("initialVelocity").value;
    let k = +document.getElementById("stiffness").value;
    let myFriction = +document.getElementById("friction").value;
    let seperation = +document.getElementById("seperation").value;
    let gravity = +document.getElementById("gravity").value;

    let canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        particleA = particle.create(utils.randomRange(0, width),
            utils.randomRange(0, height), utils.randomRange(0, initialSpeed),
            utils.randomRange(0, Math.PI * 2), gravity),
        particleB = particle.create(utils.randomRange(0, width),
            utils.randomRange(0, height), utils.randomRange(0, initialSpeed),
            utils.randomRange(0, Math.PI * 2), gravity),
        particleC = particle.create(utils.randomRange(0, width),
            utils.randomRange(0, height), utils.randomRange(0, initialSpeed),
            utils.randomRange(0, Math.PI * 2),gravity);

    particleA.friction = myFriction;
    particleA.radius = 20;

    particleB.friction = myFriction;
    particleB.radius = 20;

    particleC.friction = myFriction;
    particleC.radius = 20;

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        spring(particleA, particleB, seperation);
        spring(particleB, particleC, seperation);
        spring(particleC, particleA, seperation);

        particleA.doBounce(width, height);
        particleB.doBounce(width, height);
        particleC.doBounce(width, height);

        particleA.update();
        particleB.update();
        particleC.update();

        context.beginPath();
        context.arc(particleA.position.getX(), particleA.position.getY(), particleA.radius, 0, Math.PI * 2, false);
        context.fill();

        context.beginPath();
        context.arc(particleB.position.getX(), particleB.position.getY(), particleB.radius, 0, Math.PI * 2, false);
        context.fill();

        context.beginPath();
        context.arc(particleC.position.getX(), particleC.position.getY(), particleC.radius, 0, Math.PI * 2, false);
        context.fill();

        context.beginPath();
        context.moveTo(particleA.position.getX(), particleA.position.getY());
        context.lineTo(particleB.position.getX(), particleB.position.getY());
        context.lineTo(particleC.position.getX(), particleC.position.getY());
        context.lineTo(particleA.position.getX(), particleA.position.getY());
        context.stroke();

        requestAnimationFrame(update);
    }

    function spring(p0, p1, seperation) {
        let distance = p0.position.subtract(p1.position);
        distance.setLength(distance.getLength() - seperation);

        let springForce = distance.multiply(k);

        p1.velocity.addTo(springForce);
        p0.velocity.subtractFrom(springForce);
    }
}