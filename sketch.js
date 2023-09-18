var canvas;
let points = [];
let lastDrawnFrame = 0;
let deltaFrames = 200; // Set the fixed interval in frames

function preload(){

  sgravo = loadImage('images/SGRAVOBIANCO.jpg')
}

function setup() {
  frameRate(60);
  canvas = createCanvas(windowWidth - 20, windowHeight);
  canvas.position(0,0);
  pixelDensity(2)

}

function draw() {
  image(sgravo,windowWidth*3/5,300,sgravo.width/20,sgravo.height/20)
  console.log(document.body.scrollHeight)

  // Example: Change stroke color based on the current page
  if (currentPage === "index") {
    stroke('green'); // Green stroke color for eng.html
 
  } else {
    stroke('black'); // Default stroke color for other pages
   
  }
  strokeWeight(9)
point(mouseX,mouseY)
  
  if (frameCount - lastDrawnFrame >= deltaFrames && points.length > 0) {
    let indexToConnect = points.length - 1 - int(deltaFrames / 2);
    if (indexToConnect >= 0) {
      push();
      strokeWeight(3);
      if (currentPage === "index") {
        stroke('green'); // Green stroke color for eng.html
     
      } else {
        stroke('black'); // Default stroke color for other pages
       
      }
      line(mouseX, mouseY, points[indexToConnect][0], points[indexToConnect][1]);
      lastDrawnFrame = frameCount;
      pop();
    }
  }

}

function mouseClicked(){
  background(255);
  frameCount = 0;
  points = [];
  lastDrawnFrame = 0;
}

function mouseMoved() {
  points.push([mouseX, mouseY]);
}