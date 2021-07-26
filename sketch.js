const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var background;
var Donkey,Elephant,Zebra,Pig,Jaguar,Kangaroo,Hunter,Arrow ;
var slingshot;

function preload() {
    backgroundImg = loadImage("sprites/jungle2.jpg");
    
}

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;
    background(backgroundImg);

   Donkey = new donkey(1030,350,150,150);
   Kangaroo = new kangaroo(1250,450,200,200);
   Zebra = new zebra(850,450,150,150);
   Hunter = new hunter(130,500,150,150);
   Jaguar = new jaguar(150,380,200,100);
   Elephant = new elephant(507,470,200,150);
   Pig = new pig(650,370,200,100);
   //Arrow = new arrow(200,550,20,20);

   //slingshot = new SlingShot(Hunter.body,{x:200, y:50});


}

function draw (){
  // text(mouseX + "," + mouseY,mouseX,mouseY);

   Donkey.display();
   Zebra.display();
   Kangaroo.display();
   Hunter.display();
   Jaguar.display();
   Pig.display();
   Elephant.display();
  // Arrow.display();
  // slingshot.display();

}