const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1 = new roof(400,200,300,20);

	bobObject1 = new bob(280,400,30);
	bobObject2 = new bob(340,400,30);
	bobObject3 = new bob(400,400,30);
	bobObject4 = new bob(460,400,30);
	bobObject5 = new bob(520,400,30);

	rope1=new Rope(bobObject1,roof1.body);
	/*rope2=new rope(bobObject2,roofObject.body,bobDiamter*2,0)
	rope3=new rope(bobObject3,roofObject.body,bobDiamter*2,0)
	rope4=new rope(bobObject4,roofObject.body,bobDiamter*2,0)
	rope5=new rope(bobObject5,roofObject.body,bobDiamter*2,0)*/

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  roof1.display();
  rope1.display();
  drawSprites();
 
}