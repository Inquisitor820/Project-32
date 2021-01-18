const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ground, stand, stand2;

var Hexagon, slingshot;

var Score = 0;
var backgroundImg;

//Pyramid_Number_1
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13;
var block14,block15,block16,block17,block18;
var block19,block20,block21,block22;
var block23,block24,block25;

//Pyramid_Number_2

var block_1,block_2,block_3,block_4;
var block5,block6,block7;
var block8,block9;

var bg = "Sprites/bg1.png";

function preload() {
  getBackgroundImg();
  backgroundImg = loadImage("Sprites/bg1.png");
}


function setup() 
{
	createCanvas(1500, 750);
	engine = Engine.create();
	world = engine.world;
   
    ground = new Ground(800,740,1600,15);

    stand = new Ground(800,690,560,15);
    stand2 = new Ground(1300,350,240,15);

//Pyramid_Number_1
    block1 = new Block(560,640,80,80);
    block2 = new Block(640,640,80,80);
    block3 = new Block(720,640,80,80);
    block4 = new Block(800,640,80,80);
    block5 = new Block(880,640,80,80);
    block6 = new Block(960,640,80,80);
    block7 = new Block(1040,640,80,80);

    block8 = new Block(595,560,80,80);
    block9 = new Block(675,560,80,80);
    block10 = new Block(755,560,80,80);
    block11 = new Block(835,560,80,80);
    block12 = new Block(915,560,80,80);
    block13 = new Block(995,560,80,80);

    block14 = new Block(635,480,80,80);
    block15 = new Block(715,480,80,80);
    block16 = new Block(795,480,80,80);
    block17 = new Block(875,480,80,80);
    block18 = new Block(955,480,80,80);

    block19 = new Block(675,400,80,80);
    block20 = new Block(755,400,80,80);
    block21 = new Block(835,400,80,80);
    block22 = new Block(915,400,80,80);

    block23 = new Block(715,320,80,80);
    block24 = new Block(795,320,80,80);
    block25 = new Block(875,320,80,80);

//Pyramid_Number_2
    block_1 = new Block2(1210,315,60,60);
    block_2 = new Block2(1270,315,60,60);
    block_3 = new Block2(1330,315,60,60);
    block_4 = new Block2(1390,315,60,60);

    block_5 = new Block2(1240,255,60,60);
    block_6 = new Block2(1300,255,60,60);
    block_7 = new Block2(1360,255,60,60);

    block_8 = new Block2(1270,195,60,60);
    block_9 = new Block2(1330,195,60,60);

    Hexagon = new Hex(200,350,110);
    slingshot = new SlingShot(Hexagon.body,{x:200, y:350}); 

    Engine.run(engine);

}

function draw() 
{
  if(backgroundImg) {
    background(backgroundImg);
}
  Engine.update(engine);

  ground.display();
  stand.display();
  stand2.display();

  slingshot.display(); 
  Hexagon.display();

  console.log("X:",mouseX);
  console.log("Y:",mouseY);

//Pyramid_Number_1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block19.display();
  block20.display();
  block21.display();
  block22.display();

  block23.display();
  block24.display();
  block25.display();

//Pyramid_Number_2
  block_1.display();
  block_2.display();
  block_3.display();
  block_4.display();

  block_5.display();
  block_6.display();
  block_7.display();

  block_8.display();
  block_9.display();

//function score()
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();

  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();

  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();

  block19.score();
  block20.score();
  block21.score();
  block22.score();

  block23.score();
  block24.score();
  block25.score();

  block_1.score();
  block_2.score();
  block_3.score();
  block_4.score();

  block_5.score();
  block_6.score();
  block_7.score();

  block_8.score();
  block_9.score();

  //Location
  console.log("X:",mouseX);
  console.log("Y:",mouseY);

  

  fill("white");
  stroke("black");
  strokeWeight(7)
  textFont("courier")
  textSize(30);
  text("Score:" + Score,50,105);
  text("X:" + mouseX,50,45);
  text("Y:" + mouseY,50,75);
  
}

function mouseDragged(){
    Matter.Body.setPosition(Hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed()
{
  if(keyCode === 32)
  {
    slingshot.attach(Hexagon.body);  
  }
}

async function getBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if(hour>=06 && hour<=1730){
      bg = "Sprites/bg1.png"
  } else {
      bg = "Sprites/bg2.png"
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

