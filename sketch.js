var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(65,95);
  weight=random(400,1500); 

  car=createSprite(50,200,50,50);
  car.shapeColor=color(0,225,0);
  car.velocityX=speed;  

 wall=createSprite(1290,200,40,height/2);
 wall.shapeColor=color(0,0,0)

}

function draw() {
  textSize(20);
  background(225);

  console.log(speed);

if(wall.x-car.x< (car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509

  if(deformation>180){
    car.shapeColor=color(255,0,0);
  }

  if(deformation<180 && deformation>100){
    car.shapeColor=color(230,230,0);
  }

  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
}



  drawSprites();
  text("right click and click on inspect to see the value of speed of car in the console",400,100)
}