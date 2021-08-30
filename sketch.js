function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  translate(width / 2, height / 2);
  rotate(-90);
  let sec = second();
  let min = minute();
  let hr = hour();
  noFill();
  stroke("white");
  strokeWeight(8);

  stroke("blue");
  strokeWeight(10);
  ellipse(0, 0, 380, 380);

  stroke("white");
  strokeWeight(5);
  ellipse(0, 0, 380, 380);

  let secondangle = map(sec, 0, 60, 0, 360);

  let minuteangle = map(min, 0, 60, 0, 360);

  let hourangle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(hourangle);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteangle);
  line(0, 0, 125, 0);
  pop();
  stroke("red");

  push();
  rotate(secondangle);

  line(0, 0, 150, 0);

  pop();
}
