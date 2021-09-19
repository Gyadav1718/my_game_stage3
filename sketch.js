const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var canvas;
var ironMan,ironManImg,thor,thorImg,captain,captainImg,spyder,spyderImg;
var backgroundImg,playbackImg;
var ultron,ultronImg,hela,helaImg,ronan,ronanImg,killmonger,killmongerImg,thanos,thanosImg;
var ironmanS2;
var start,startImg;
function preload(){
ironManImg = loadImage("images/ironmanS2.1.png");
backgroundImg= loadImage("images/background.jpg");
ironmanS2 = loadAnimation("images/ironmanS2.1.png","images/ironmanS2.2.png","images/ironmanS2.3.png","images/ironmanS2.4.png");
startImg = loadImage("images/play.png");
playbackImg = loadImage("images/playback.jpg");
}
function setup(){
canvas = createCanvas(800,600);

var ironmanoption={
  isStatic : false,
}
ironMan = Bodies.rectangle(200,200,10,10,ironmanoption);
World.add(myWorld,ironMan);

start = createSprite(400,400,10,10);
start.addImage("start",startImg);
start.scale = 0.3;
}
function draw(){
  background(playbackImg);
  Engine.update(myEngine);
if(mousePressedOver(start)){
  start.destroy();
  
 // ironMan = createSprite(200,200,10,10,ironmanoption);
 // ironMan.addImage(ironManImg);
 image(ironManImg,200,200,50,50);
  //ironMan.addAnimation("arcoverload",ironmanS2);
 // ironMan.scale = 0.5;
}
if(keyWentDown("s")){
  //ironMan.changeAnimation("arcoverload",ironmanS2);
}
drawSprites();

}
