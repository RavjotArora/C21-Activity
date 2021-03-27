var box1, box2;
var box3, box4;
var edges

function setup() {
  createCanvas(800,800);
  edges = createEdgeSprites();

  box1 = createSprite(50, 50, 50, 50);
  box1.shapeColor = "blue";
  box2 = createSprite(750,50,50,50);
  box2.shapeColor = "red";
  box3 = createSprite(50, 750, 50, 50);
  box3.shapeColor = "green";
  box4 = createSprite(750, 750, 50, 50);
  box4.shapeColor = "orange";

  box1.velocityX=5;
  box1.velocityY=5;
  box2.velocityX=-5;
  box2.velocityY=5;
  box3.velocityX=5;
  box3.velocityY=-5;
  box4.velocityX=-5;
  box4.velocityY=-5;
}

function draw() {
  background(0,0,0);  


  //isTouching(box2, box1);
  bounceOff(box2, box1);
  bounceOff(box3, box4);
  bounceOff(box1, box4);
 
  //bounceOff(edges[1],box1);
  //bounceOff(edges[1],box2);
  bounceOff(edges[1],box3);
  bounceOff(edges[1],box4);
  
  //bounceOff(edges[2],box1);
  bounceOff(edges[2],box2);
  //bounceOff(edges[2],box3);
  bounceOff(edges[2],box4);

  bounceOff(edges[3],box1);
  //bounceOff(edges[3],box2);
  bounceOff(edges[3],box3);
  //bounceOff(edges[3],box4);

  bounceOff(edges[3],box1);
  bounceOff(edges[3],box2);
  //bounceOff(edges[3],box3);
  //bounceOff(edges[3],box4);
  
  drawSprites();
}

