var car,wall,speed,weight;
function setup() {
  createCanvas(1280,400);
 speed=random(55,100);
 weight=random(500,1600)
car=createSprite(30,200,40,40)
car.shapeColor=color('white')
car.velocityX=speed
wall=createSprite(1180,200,60,200)
wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0,0,0);
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor=color(255,0,0)
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0)
    }
  }  
  drawSprites();
 
}