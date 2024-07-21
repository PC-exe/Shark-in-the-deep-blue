let img;
let img2;

function preload() {
  img = loadImage("sea.jpg");
  img2 = loadImage("shark2.png");
}

function setup() {
createCanvas(600, 400);
}

function draw() {
  imageMode(CENTER);
  image(img, width/2, height/2, width, height);
  image(img2, mouseX, mouseY, width/3, height/3  )
}