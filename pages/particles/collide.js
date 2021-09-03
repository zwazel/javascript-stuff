window.onload = function () {
    simulate();
}

function simulate() {
    let amountParticle = +document.getElementById("amountParticle").value;
    let randomColors = document.getElementById("randomColor").checked;
    let gravity = +document.getElementById("gravity").value;
    let energyLoss = +document.getElementById("energyLoss").value;
    let myFriction = +document.getElementById("friction").value;
    let bounceMultiplier = +document.getElementById("bounceMultiplier").value;

    let canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        p = [];

    for (let i = 0; i < amountParticle; i++) {
        let newParticle = particle.create(width / 2, height / 2, Math.random() * 8 + 5, Math.random() * Math.PI * 2, gravity);
        newParticle.radius = Math.random() * 30 + 10;
        newParticle.bounce = energyLoss * -1;
        newParticle.friction = myFriction;
        if (randomColors) {
            newParticle.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
        p.push(newParticle);
    }

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        for (let currentParticle of p) {
            currentParticle.update();

            context.fillStyle = currentParticle.color;
            context.beginPath();
            context.arc(currentParticle.position.getX(), currentParticle.position.getY(), currentParticle.radius, 0, Math.PI * 2)
            context.fill();

            currentParticle.doBounce(width, height, bounceMultiplier);
        }

        requestAnimationFrame(update);
    }
}