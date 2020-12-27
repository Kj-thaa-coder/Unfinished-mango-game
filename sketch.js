
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint

var rock
var boy
var tree
var sling


var mango1
var mango2
var mango3
var mango4
var mango5
var mango6
var mango7
var mango8
var mango9
var mango10
var mango11
var mango12




function preload()
{
	
}

function setup() {
	createCanvas(1500, 720);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(700,300,100)
	mango2 = new Mango(800,200,50)
	mango3 = new Mango(1100,200,50)
	mango4 = new Mango(1200,300,50)
	mango5 = new Mango(900,300,50)
	mango6 = new Mango(1000,100,50)
	mango7 = new Mango(800,300,50)
	mango8 = new Mango(1300,200,50)
	mango9 = new Mango(1000,100,40)
	mango10= new Mango(900,200,50)
	mango11= new Mango(800,100,50)
	mango12= new Mango(1200,100,50)
	rock = new Rock(100,500,5)
	boy = new Boy(260,600,50,50)
	tree = new Tree(1000,350) 
	sling = new SlingShot(rock.body,{x:130,y:490})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  boy.display();
  rock.display();
  sling.display();
  

 
}


function mouseDragged(){
	Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
	}
	
	
	function mouseReleased(){
	sling.fly()
	}


	function detectcollision(rock,mango1){
		mango1BodyPosition=mango1.body.position
		rockBodyPosition=rock.body.position

		var distance=dist(rockBodyPosition.x, rockBodyPosition.y, mango1BodyPosition.x, mango1BodyPosition.y)
		if(distance<=mango1.r+rock.r)
		{
			Matter.Body.setStatic(mango.body,false)
		}
	}