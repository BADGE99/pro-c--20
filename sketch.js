var mrect, object2;



function setup() {
  createCanvas(800,400);
  frect = createSprite(400, 200, 50, 50);
  frect.shapeColor = "green";
  frect.debug = true;
  mrect = createSprite(600,200,80,30);
  mrect.shapeColor = "green";
  mrect.debug = true;
  mrect.velocityX = -5;
  frect.velocityX = 5;
  gobj1 = createSprite(100, 200, 50, 50);
  gobj1.shapeColor = "green";

}

function draw() {
  background(255,255,255);
  bounceOff(mrect,frect)
 
  drawSprites();
}


  