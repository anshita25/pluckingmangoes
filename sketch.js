
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var y,ground,backgroundimg,tree,sling,stone;
var mango1,mango2,mango3,mango4,mango5,
mango6,mango7,mango8,mango9,mango10,
mango11,mango12,mango13,mango14,mango15;
var bg;
var gameState = "onSling";

function preload()
{
	bg=loadImage("bg.png");
}

function setup() {
	createCanvas(1800,800);


	engine = Engine.create();
	world = engine.world;

	/*Creating the Bodies Here.*/
y=new boy(280,600,20,20)
ground=new Ground(width/2,702,width,20)
tree = new Tree(1400,400,50,50)
stone=new Stone(310,600,48,39)
sling = new Slingshot(stone.body,y.body,-90,-50)
mango1=new Fruit(1400,245,48.2,60)
mango2=new Fruit(1467,213,48.2,60)
mango3=new Fruit(1350,159,48.2,60)
mango4=new Fruit(1464,267,48.2,60)
mango5=new Fruit(1350,386,48.2,60)
mango6=new Fruit(1566,245,48.2,60)
mango7=new Fruit(1500,213,48.2,60)
mango8=new Fruit(1600,374,48.2,60)
mango9=new Fruit(1300,267,48.2,60)
mango10=new Fruit(1309,350,48.2,60)
mango11=new Fruit(1505,245,48.2,60)
mango12=new Fruit(1595,213,48.2,60)
mango13=new Fruit(1402,159,48.2,60)
mango14=new Fruit(1223,267,48.2,60)
mango15=new Fruit(1350,245,48.2,60)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  ground.display()
  y.display()
  tree.display()
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  mango12.display()
  mango13.display()
  mango14.display()
  mango15.display()
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9) 
  detectCollision(stone,mango10)
  detectCollision(stone,mango11)
  detectCollision(stone,mango12)
  detectCollision(stone,mango13)
  detectCollision(stone,mango14)
  detectCollision(stone,mango15)

  strokeWeight(3)
  stroke("BLACK")
  fill("GREEN")
  textSize(50)
  text("WANT MORE OF THEM??PRESS SPACE AND GET ONE MORE CHANCE!!",50,100)

 sling.display()
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
      
  }
  function mouseReleased(){
	  sling.release()
	  gameState="launched"
  }
  function keyPressed(){


      if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:500})
		sling.attach(stone.body)

      }}
function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if (distance<=lmango.radius+lstone.radius){
Matter.Body.setStatic(lmango.body,false)
}

}
