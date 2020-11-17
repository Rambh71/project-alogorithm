var ball1,ball2;

function setup(){
  createCanvas(600,600);

  ball1 = createSprite(300,300,100,50);
  ball2 =  createSprite(100,100,50,50);

  ball1.debug = true;
  ball2.debug = true;

  ball1.shapeColor = "red";
  ball2.shapeColor = "blue";

}

function draw(){
  background(0);

  ball2.x = mouseX;
  ball2.y = mouseY;

 if(touch(ball1,ball2)){
   ball1.shapeColor ="yellow";
   ball2.shapeColor ="yellow";
 }
 else{
 ball1.shapeColor = "red";
  ball2.shapeColor = "blue";

 }

  drawSprites();
}


