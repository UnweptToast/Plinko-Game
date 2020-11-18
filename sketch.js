const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ground, divider1, divider2, divider3, divider4;
var dividerLeft, dividerRight;
var particles = [];
var divisions = [];
var plinkos = [];

function setup() {
    createCanvas(450,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Division(width/2, height, width+5, 40, 0, "yellow");
    divider1 = new Division(75, 500, 10, 200, 0, "magenta");
    divider2 = new Division(150, 500, 10, 200, 0, "magenta");
    divider3 = new Division(225, 500, 10, 200, 0, "magenta");
    divider4 = new Division(300, 500, 10, 200, 0, "magenta");
    divider5 = new Division(375, 500, 10, 200, 0, "magenta");
    dividerLeft = new Division(450, 300, 10, 600, 0, "maroon");
    dividerRight = new Division(0, 300, 10, 600, 0, "maroon");
    dividerBottom = new Division(width/2, height, width+5, 10, 0, "maroon");
    
    createPlinko();
    createPlinko2();
    

    console.log(PI);

}

function draw() {
    background(rgb(50,50,50));
    Engine.update(engine);

    divider1.display();
    divider2.display();
    divider3.display();
    divider4.display();
    divider5.display();
    ground.display();
    dividerLeft.display();
    dividerRight.display();
    dividerBottom.display();
    displayPlinko();
    displayPlinko2();

    if(frameCount%60==0){
        particles.push(new Ball(random(100,350),random(15,20),10));
    }
    for(var i=0;i<particles.length;i++) {
        particles[i].display();
    }

}