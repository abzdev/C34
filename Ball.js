class Ball {
    constructor(x,y,r) {
        var options = {
            friction: 0.3,
            density:0.5
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body)
    }
    display() {
        push();
        ellipseMode(RADIUS);
        circle(this.body.position.x,this.body.position.y,this.r);
        pop();
    }
}