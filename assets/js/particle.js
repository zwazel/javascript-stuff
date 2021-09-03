// https://github.com/bit101/CodingMath/blob/master/episode16/particle.js
var particle = {
    position: null,
    velocity: null,
    mass: 1,
    radius: 0,
    bounce: -1,
    friction: 1,
    gravity: 0,
    color: '#000000',

    create: function (x, y, speed, direction, grav) {
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.velocity = vector.create(0, 0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        obj.gravity = vector.create(0, grav || 0);
        return obj;
    },

    accelerate: function (accel) {
        this.velocity.addTo(accel);
    },

    update: function () {
        this.velocity.multiplyBy(this.friction);
        this.velocity.addTo(this.gravity);
        this.position.addTo(this.velocity);
    },

    angleTo: function (p2) {
        return Math.atan2(p2.position.getY() - this.position.getY(), p2.position.getX() - this.position.getX());
    },

    distanceTo: function (p2) {
        var dx = p2.position.getX() - this.position.getX(),
            dy = p2.position.getY() - this.position.getY();

        return Math.sqrt(dx * dx + dy * dy);
    },

    gravitateTo: function (p2) {
        var grav = vector.create(0, 0),
            dist = this.distanceTo(p2);

        grav.setLength(p2.mass / (dist * dist));
        grav.setAngle(this.angleTo(p2));
        this.velocity.addTo(grav);
    },

    doBounce: function (width, height) {
        // left edge
        if (this.position.getX() + this.radius > width) {
            this.position.setX(width - this.radius);
            this.velocity.setX(this.velocity.getX() * this.bounce);
        }

        // right edge
        if (this.position.getX() - this.radius < 0) {
            this.position.setX(this.radius);
            this.velocity.setX(this.velocity.getX() * this.bounce);
        }

        // bottom edge
        if (this.position.getY() + this.radius > height) {
            this.position.setY(height - this.radius);
            this.velocity.setY(this.velocity.getY() * this.bounce);
        }

        // top edge
        if (this.position.getY() - this.radius < 0) {
            this.position.setY(this.radius);
            this.velocity.setY(this.velocity.getY() * this.bounce);
        }
    },
    
    doWrap: function (width, height) {
        if (this.position.getX() - this.radius > width) {
            this.position.setX(-this.radius);
        }
        if (this.position.getX() + this.radius < 0) {
            this.position.setX(width + this.radius);
        }

        if (this.position.getY() - this.radius > height) {
            this.position.setY(-this.radius);
        }
        if (this.position.getY() + this.radius < 0) {
            this.position.setY(height + this.radius);
        }
    }
};