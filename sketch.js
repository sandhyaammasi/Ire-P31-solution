const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var gameState = "start";
var score = 0;
var count = 0;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(240,height,width,10);
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 75; j <=width; j=j + 50){
    plinkos.push(new Plinko(j,75,10));
  }
  console.log(plinkos[1])
  p1 = new Plinko(50,50,10);
Engine.run(engine);


}



function draw() {
  background(255,255,255);  
 for(i = 0; i<divisions.length; i++){
   divisions[i].display();
 }
for(i = 0; i<plinkos.length;i++){
  plinkos[i].display();
}
 p1.display();
 ground.display();
}