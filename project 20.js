var wall,car1,car2,car3,divider1,divider2 ;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);
 
  car1 = createSprite(50,200,40,20);
  car1.shapeColor = "white";
  car3= createSprite(50,140,40,20);
  car3.shapeColor = "white";
  car2 = createSprite(50,260,40,20);
  car2.shapeColor = "white";
  wall = createSprite(1300,200,30,height/2);
  divider1 = createSprite(200,160,2300,10);
  divider2 = createSprite(200,240,2300,10);

}

function draw() {
  background("black");  
  car1.velocityX = speed;
  if(wall.x - car1.x < wall.width/2 + car1.width/2){
  car1.shapeColor = "green";
  car1.velocityX = 0;
  car1.x = 1296;
  }
    
  car2.velocityX = speed;
  if(wall.x - car2.x < wall.width/2 + car2.width/2){
  car2.shapeColor = "red";
  car2.velocityX = 0;
  car2.x = 1296;
  }
  
  car3.velocityX = speed;
  if(wall.x - car3.x < wall.width/2 + car3.width/2){
  car3.shapeColor = "yellow";
  car3.velocityX = 0;
  car3.x = 1296;
  }
  drawSprites();
}