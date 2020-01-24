function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  if (mouseIsPressed) {
    fill(255);
    ellipse(mouseX, mouseY, 80, 80);
}
else{
  fill(0);
}

}