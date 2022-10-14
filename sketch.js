cockTimerIsOn = false;
cockTimer = 0.0;
cockScale = 1;
var background;
var multipleCocks;
cockRotation = 0;

function setup() {
  width = screen.height;
  height = screen.width;
  createCanvas(height, width);
  frameRate = 120;
  multipleCocks = createGraphics(width, height);
  background = createGraphics(width, height);
  background.background(0);
  noCursor();
  rectMode(CENTER);
}


function draw() {
  if(cockTimerIsOn == true) {
    cockTimer += 0.01
    cockScale += cockTimer
  }  
  image(background, 0, 0)
  image(multipleCocks, 0, 0)
  cursorPenisDraw(mouseX,mouseY,cockScale);
}


function penisDraw(x,y,scale) {
  multipleCocks.stroke(0);
  multipleCocks.strokeWeight(scale);
  multipleCocks.fill(random(0,255),random(0,255),random(0,255));
  multipleCocks.circle(x, y - 15*scale, 10*scale);
  multipleCocks.beginShape();
  multipleCocks.vertex(x + 5*scale, y + 10*scale);
  multipleCocks.vertex(x + 5*scale, y - 15*scale);
  multipleCocks.vertex(x, y - 15*scale);
  multipleCocks.vertex(x, y - 20*scale);
  multipleCocks.vertex(x, y - 15*scale);
  multipleCocks.vertex(x - 5*scale,  y - 15*scale);
  multipleCocks.vertex(x - 5*scale, y + 10*scale);
  multipleCocks.endShape();
  multipleCocks.circle(x + 5*scale, y + 10*scale, 10*scale);
  multipleCocks.circle(x - 5*scale, y + 10*scale, 10*scale);
}

function mousePressed() {
  cockTimerIsOn = true;
}

function mouseReleased() {
  cockTimerIsOn = false;
  newPenisDraw(mouseX,mouseY,cockScale);
  cockScale = 1;
  cockTimer = 0;
}

function cursorPenisDraw(x,y,scale) {
  stroke(255);
  strokeWeight(scale);
  noFill();
  translate(x, y)
  rotate(radians(-cockRotation))
  translate(0, -15 * scale)
  arc(0, 0, 10*scale, 10*scale, PI, 2 * PI);
  translate(0, +15 * scale)
  beginShape()
  vertex(5 * scale, 5 * scale)
  vertex(5 * scale, -15*scale)
  vertex(0, - 15 * scale)
  vertex(0, - 20 * scale)
  vertex(0, - 15 * scale)
  vertex(-5 * scale, - 15 * scale)
  vertex(-5 * scale, + 5 * scale)
  endShape()
  circle(5 * scale, 10 * scale, 10 * scale)
  circle(-5 * scale, 10 * scale, 10 * scale)
}

function newPenisDraw(x,y,scale) {
  multipleCocks.stroke(0);
  multipleCocks.strokeWeight(scale);
  multipleCocks.fill(random(0,255),random(0,255),random(0,255));
  multipleCocks.translate(x,y)
  multipleCocks.rotate(radians(-cockRotation))
  multipleCocks.translate(0, -15 * scale)
  multipleCocks.arc(0, 0, 10*scale, 10*scale, PI, 2 * PI);
  multipleCocks.translate(0, +15 * scale)
  multipleCocks.beginShape()
  multipleCocks.vertex(5 * scale, 10 * scale)
  multipleCocks.vertex(5 * scale, -15*scale)
  multipleCocks.vertex(0, - 15 * scale)
  multipleCocks.vertex(0, - 20 * scale)
  multipleCocks.vertex(0, - 15 * scale)
  multipleCocks.vertex(-5 * scale, - 15 * scale)
  multipleCocks.vertex(-5 * scale, + 10 * scale)
  multipleCocks.endShape()
  multipleCocks.circle(5 * scale, 10 * scale, 10 * scale)
  multipleCocks.circle(-5 * scale, 10 * scale, 10 * scale)
  multipleCocks.rotate(radians(cockRotation))
  multipleCocks.translate(-x,-y)
}

function mouseWheel(event) {
  if (event.delta > 0) {
    cockRotation += 10
  }
  else {
    cockRotation -= 10
  }
}