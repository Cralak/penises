cockTimerIsOn = false;
cockTimer = 0.0;
cockScale = 1;
var background;
var multipleCocks;
var cockRotation;

function setup() {
  width = screen.height;
  height = screen.width;
  createCanvas(height, width);
  frameRate = 120;
  multipleCocks = createGraphics(width, height);
  background = createGraphics(width, height);
  background.background(0);
  noCursor();
}


function draw() {
  if(cockTimerIsOn == true) {
    cockTimer += 0.01
    cockScale += cockTimer
  }  
  image(background, 0, 0)
  image(multipleCocks, 0, 0, )
  cursorPenisDraw(mouseX,mouseY,cockScale);
}


function penisDraw(x,y,scale) {
  multipleCocks.stroke(0);
  multipleCocks.strokeWeight(scale);
  multipleCocks.fill(random(0,255),random(0,255),random(0,255));
  multipleCocks.arc(x, y - 15*scale, 10*scale, 10*scale, PI, 2 * PI);
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
  penisDraw(mouseX,mouseY,cockScale);
  cockScale = 1;
  cockTimer = 0;
}

function cursorPenisDraw(x,y,scale) {
  stroke(255);
  strokeWeight(scale);
  noFill();
  arc(x, y - 15*scale, 10*scale, 10*scale, PI, 2 * PI);
  beginShape();
  vertex(x + 5*scale, y + 5*scale);
  vertex(x + 5*scale, y - 15*scale);
  vertex(x, y - 15*scale);
  vertex(x, y - 20*scale);
  vertex(x, y - 15*scale);
  vertex(x - 5*scale,  y - 15*scale);
  vertex(x - 5*scale, y + 5*scale);
  endShape();
  circle(x + 5*scale, y + 10*scale, 10*scale);
  circle(x - 5*scale, y + 10*scale, 10*scale);
}