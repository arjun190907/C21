function setup() {
  createCanvas(1200,600);
  frect = createSprite(600, 400, 50, 80);
  mrect = createSprite(400,20,80,30)
  ob1 = createSprite(100,100,80,30)
  ob2 = createSprite(200,100,80,30)
  ob3 = createSprite(300,90,80,30)
  ob4 = createSprite(300,20,80,30)
  frect.shapeColor = "blue"
  mrect.shapeColor = "blue"
  ob1.shapeColor = "blue"
  ob2.shapeColor = "blue"
  ob3.shapeColor = "blue"
  ob4.shapeColor = "blue"
}

function draw() {
  background(0); 
  mrect.x = mouseX;
  mrect.y = mouseY;
  if(isTouching(mrect,ob1)) {
    ob1.shapeColor = "green"
    mrect.shapeColor = "green"
  }
else {
  ob1.shapeColor = "blue"
  mrect.shapeColor = "blue"
}
 
  drawSprites();
}
function isTouching(ob1,ob2){
  if(ob1.x - ob2.x <= ob2.width/2 + ob1.width/2 &&
    ob2.x - ob1.x <= ob2.width/2 + ob1.width/2 && 
    ob2.y - ob1.y <= ob2.height/2 + ob1.height/2 &&
    ob1.y - ob2.y <= ob2.height/2 + ob1.height/2 ){
   return true;
    }
   else {
  return false;
  }
 }
