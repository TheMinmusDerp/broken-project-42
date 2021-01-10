var hr, mn, sc;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background(255,255,255);
  angleMode(DEGREES);  
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);
  //drawing seconds hand
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(300,300,400,300);
  pop();
  //drawing minutes hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(300,300,400,300);
  pop();
  //drawing hours hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(300,300,400,300);
  pop();
}