class Box {
    constructor(x, y, w, h) {
        var options = {
            restitution: 0.5,
            density: 0.01,
            friction: 0.5,
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    display() {
        push();
        rectMode(CENTER);
        fill(255);
        //translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
  }
  