const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var surface;


function preload(){
 
  
}

function setup(){
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  surface = new Ground(200,200,20,20);
  superhero = new hero(200,100,20);
  block = new Block(200,200,20,20);


  Engine.run(engine);
}

function draw(){
  background(0);
  Engine.update(engine);

  surface.display();
  superhero.display();
  block.display();
  
}

