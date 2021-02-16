const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
var ground1;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
 canvas =  createCanvas(480,800);
 engine = Engine.create();
 world = engine.world;

  ground1 = new Ground(400,790,790,20);

  
}

function draw() {
  background("black");  
  Engine.update(engine);
  for ( var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k,height - divisionHeight/2,10,divisionHeight));

  }
    for(var j = 40; j<= width;j = j + 50){
    plinkos.push(new Plinko(j,75,10));
  }
  for (var j = 15; j<= width - 10; j = j+50){
    plinkos.push(new Plinko(j,175,10));
  }
  for(var j = 45; j<= width;j = j + 50){
    plinkos.push(new Plinko(j,275,10));
  }
  for(var j = 15; j<= width;j = j + 50){
    plinkos.push(new Plinko(j,375,10));
  }
ground1.display()

  if (frameCount % 55 ===0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10),10,10))
  }
  for ( var j = 0;j < particles.length; j ++){
    particles[j].display();
  
  }
  for ( var k = 0;k < divisions.length; k ++){
  divisions[k].display();
  
  }
  for ( var a = 0;a < plinkos.length; a ++){
    plinkos[a].display();
  
  }
  drawSprites();
}