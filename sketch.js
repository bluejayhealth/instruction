function preload() {
  img = loadImage("videoplaying2.png");
}

function setup() {
  createCanvas(375, 667);
  x = 22;
  y = 13;
  p = 234.5;
  shouldGrow = true;
}

function draw() {
  background(225);
  image(img, 0, 0);
  stroke(37, 165, 233);
  fill(255);
  ellipse(348, 230, x, x);
  textSize(y);
  fill(37, 165, 233);
  textFont("Times New Roman");
  text("i", 346.2, p);
  
  if (x > 26) {
    shouldGrow = false;
  }
  else if (x < 22) {
    shouldGrow = true;
  }
  
  if (shouldGrow === false) {
    x = x - 0.07;
    y = y - 0.07;
    //p = p - 0.01;
  }
  else {
    x = x + 0.07;
    y = y + 0.07;
    //p = p + 0.01;
  }
}