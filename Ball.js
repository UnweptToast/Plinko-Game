class Ball {
    constructor(x, y, radius){
        var options ={restitution:0.8, isStatic: false};
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
        this.color = color(random(255), random(255), random(255));
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse(0,0, this.radius);
        pop();
    }
}