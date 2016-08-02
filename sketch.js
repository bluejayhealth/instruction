function preload() {
  img = loadImage("videoplaying2.png");
}

function setup() {
  createCanvas(375, 667);
  x = 24;
  y = 14;
  p = 234.5;
  shouldGrow = true;
}

function draw() {
  image(img, 0, 0);
  stroke(37, 165, 233);
  //fill(255);
  var t = map(x,20,29,80,10);
  fill(37, 165, 233,t);
  ellipse(348, 230, x, x);
  textSize(y);
  fill(37, 165, 233);
  textFont("Times New Roman");
  text("i", 346.2, p);
  
  if (x > 28) {
    shouldGrow = false;
  }
  else if (x < 24) {
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