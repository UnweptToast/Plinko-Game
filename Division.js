class Division {
    constructor(x, y, width, height, angle, color) {
        var options = {isStatic: true};
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height = height;
        this.width = width;
        this.angle = angle;
        this.color = color;
        Body.setAngle(this.body, angle);  //OR this.body.angle = angle;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.angle;
        var displayColor = this.color
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(angle);
        fill(displayColor);
        rect(pos.x, pos.y, this.width, this.height);
    }
}