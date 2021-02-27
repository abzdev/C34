const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world;

var ground, box1, box2, box3, box4, box5, box6, box7, box8, box9;
var rope, ball;

function setup() {
    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,700,1200,20);
    box1 = new Box(500,300,30,30);
    box2 = new Box(530,300,30,30);
    box3 = new Box(560,300,30,30);
    box4 = new Box(500,330,30,30);
    box5 = new Box(530,330,30,30);
    box6 = new Box(560,330,30,30);
    box7 = new Box(500,360,30,30);
    box8 = new Box(530,360,30,30);
    box9 = new Box(560,360,30,30);

    ball = new Ball(200,500,50);
    rope = new Rope(ball.body,{x:350,y:250});
    console.log(rope);
}
function draw() {
    background(0);

    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    ball.display();
    rope.display();
}

function mouseDragged() {
    Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}