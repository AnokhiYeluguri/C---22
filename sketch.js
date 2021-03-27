const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var o1 
var engine,world

var ball

function setup() {
  createCanvas(400,400);

 engine = Engine.create()
 world = engine.world

 var options={
   isStatic:true
 }
 o1 = Bodies.rectangle(200,390,50,50,options)
 World.add(world,o1)
 console.log(o1)

 var balloptions={
  restitution:1.0
 }
 ball = Bodies.circle(200, 100, 20,balloptions)
 World.add(world,ball)

}

function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(o1.position.x,o1.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,20)
  drawSprites();
}