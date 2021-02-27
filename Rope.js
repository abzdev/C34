class Rope {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 350
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {
        push();
        strokeWeight(4);
        fill('red');
        line(this.rope.pointB.x,this.rope.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y);
        pop();
    }
}