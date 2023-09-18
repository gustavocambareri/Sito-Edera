function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    pixelDensity(2)
  
  }

function draw(){
    strokeWeight(8)
    point(mouseX,mouseY)
}