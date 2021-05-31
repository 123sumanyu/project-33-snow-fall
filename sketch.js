const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg,snow;
var Sno=[];
var su=[];

function preload(){
  backgroundImg=loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
 // snow=new Snow(200,200,20,20);
  
  //snow.scale=0.05;
}

function draw() {
  background(backgroundImg); 
  
  Engine.update(engine);
  if(frameCount % 10 ===0 ){
   Sno.push(new Snow(random(10,750),random(10,50),30));
  }

  //display the paricles 
 for(var w=0 ; w<Sno.length; w++){
  Sno[w].display();
 }

 /*if(frameCount % 30 ===0 ){
  su.push(new SnowBall(random(10,750),random(10,50),50));
 }

 //display the paricles 
for(var x=0 ; x<su.length; x++){
 su[x].display();
}*/
   
   //console.log(Sno.length);
  
  drawSprites();
}
