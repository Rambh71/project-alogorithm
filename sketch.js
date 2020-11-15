var obj1, obj2;

function setup(){
  createCanvas(600,600);

  obj1 = createSprite(300,300,100,50);
  obj2 =  createSprite(100,100,50,50);

  obj1.debug = true;
  obj2.debug = true;

  obj1.shapeColor = "red";
  obj2.shapeColor = "blue";

}

function draw(){
  background(0);

  obj2.x = mouseX;
  obj2.y = mouseY;

  if(obj1.x - obj2.x <= obj1.width/2 + obj2.width/2
    && obj2.x - obj1.x <= obj1.width/2 + obj2.width/2
    && obj1.y - obj2.y <= obj1.height/2 + obj2.height/2
    && obj2.y - obj1.y <= obj1.height/2 + obj2.height/2 ){

    obj1.shapeColor = "pink";
    obj2.shapeColor = "pink";
  }

  else{
    obj1.shapeColor = "red";
    obj2.shapeColor = "blue";
  }

  drawSprites();
}

