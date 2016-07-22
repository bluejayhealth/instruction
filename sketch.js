function preload() {
  img = loadImage("videoplaying2.png");
}

function setup() {
  createCanvas(375, 667);
  x = 20;
  y = 12;
  shouldGrow = true;
}

function draw() {
  image(img, 0, 0);
  stroke(37, 165, 233);
  fill(255);
  ellipse(349, 230, x, x);
  textSize(y);
  fill(37, 165, 233);
  textFont("Times New Roman");
  text("i", 347, 234.3);
  
  if (x > 25) {
    shouldGrow = false;
  }
  else if (x < 19) {
    shouldGrow = true;
  }
  
  if (shouldGrow === false) {
    x = x - 0.07;
    y = y - 0.07;
  }
  else {
    x = x + 0.07;
    y = y + 0.07;
  }
}