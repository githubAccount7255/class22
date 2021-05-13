const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var ground_options = {
isStatic:true
}
ground = Bodies.rectangle(200,390,400,50,ground_options);
World.add(world,ground);
console.log(ground.position);

var ball_options = {
restitution:1.0
}
ball = Bodies.circle(60,50,90,ball_options);
World.add(world,ball);
}

function draw() {
  background("darkGreen"); 
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown")
  rect(ground.position.x,ground.position.y,400,50);
  ellipse(ball.position.x,ball.position.y,90,90);
}