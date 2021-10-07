// declare variables
var path, pathImg;
var boy, boyAnimation;
var leftBoundary, rightBoundary;

function preload(){
  // load path image and boy animation
  pathImg = loadImage("path.png");
  boyAnimation = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  // create a 400*400 canvas
  createCanvas(400,400);
  
  // create a path sprite, add image, scale it and scroll vertically downwards
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.scale = 1.2;

  // create a boy sprite, add animation and scale it
  boy = createSprite(180,340,30,30);
  boy.addAnimation("Jake_running", boyAnimation);
  boy.scale = 0.08;
  boy.x = 180;

  // create an invisible left boundary
  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;

  // create an invisible right boundary
  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {
  // set background color
  background(0);
  
  // scroll path vertically downwards
  path.velocityY = 4;
  
  // reset path from centre if escapes canvas
  if(path.y > 400 ){
    path.y = path.height/2;
  }
   
  // move boy horizontally with mouse pointer
  boy.x = World.mouseX;
  
  // make boy collide with the third edge, left boundary and the right boundary
  boy.collide(createEdgeSprites()[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  
  
  // draw sprites
  drawSprites();
}
