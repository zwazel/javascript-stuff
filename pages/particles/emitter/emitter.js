window.onload = function () {
    simulate();
}

function simulate() {
    let amountParticle = +document.getElementById("amountParticle").value;
    let randomColors = document.getElementById("randomColor").checked;
    let emitAgain = document.getElementById("reemit").checked;
    let gravity = +document.getElementById("gravity").value;

    let canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        p = [];

    for (let i = 0; i < amountParticle; i++) {
        let newParticle = particle.create(width / 2, height, Math.random() * 8 + 5, -Math.PI / 2 + (Math.random() * .2 - .1), gravity);
        newParticle.radius = Math.random() * 10 + 2;
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

            if (currentParticle.position.getY() - currentParticle.radius > height) {
                if (emitAgain) {
                    currentParticle.position.setX(width / 2)
                    currentParticle.position.setY(height);
                    currentParticle.velocity.setLength(Math.random() * 8 + 5);
                    currentParticle.velocity.setAngle(-Math.PI / 2 + (Math.random() * .2 - .1));
                } else {
                    let indexOfParticle = p.indexOf(currentParticle);
                    p.splice(indexOfParticle, 1);
                }
            }
        }

        requestAnimationFrame(update);
    }
}