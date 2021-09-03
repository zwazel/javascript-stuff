window.onload = function () {
    simulate();
}

function simulate() {
    let amountParticle = +document.getElementById("amountParticle").value;

    let canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        p = [];

    for(let i = 0; i < amountParticle; i++) {
        let newParticle = particle.create(width / 2, height / 2, 3, Math.random() * Math.PI * 2);
        newParticle.radius = 20;
        p.push(newParticle);
    }

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        for(let currenParticle of p) {
            currenParticle.update();

            context.beginPath();
            context.arc(currenParticle.position.getX(), currenParticle.position.getY(), currenParticle.radius, 0, Math.PI * 2)
            context.fill();

            if(currenParticle.position.getX() - currenParticle.radius > width) {
                currenParticle.position.setX(-currenParticle.radius);
            }
            if(currenParticle.position.getX() + currenParticle.radius < 0) {
                currenParticle.position.setX(width + currenParticle.radius);
            }

            if(currenParticle.position.getY() - currenParticle.radius > height) {
                currenParticle.position.setY(-currenParticle.radius);
            }
            if(currenParticle.position.getY() + currenParticle.radius < 0) {
                currenParticle.position.setY(height + currenParticle.radius);
            }
        }

        requestAnimationFrame(update);
    }
}