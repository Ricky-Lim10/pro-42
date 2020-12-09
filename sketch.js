var hr, mn, sc;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  hr = hour();
  mn = minute();
  sc = second();
  
  angleMode(DEGREES);

  hrAngle = map(hr, 0, 1, 0 ,7);

  push();
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  mnAngle = map(mn, 0, 60, 30);

  scAngle = map(sc,0,60,0,360);

  push();
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  

  drawSprites();
}