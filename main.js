img = "";

function airportback() {
    window.location = "index.html";
}

function preload() {
    img = loadImage('airport.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocoSSD', modelLoaded);
}

function modelLoaded(){
	console.log('Model Loaded!');
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FFFF00");
    text("Plane", 242, 170);
    noFill();
    stroke("#FF0000");
    rect
    (240, 150, 450, 200);
    fill("#FFFF00");
    text("Plane", 3, 170);
    noFill();
    stroke("#FF0000");
    rect
    (0.01, 160, 250, 70);
    fill("#FFFF00");
    text("Plane", 130, 50);
    noFill();
    stroke("#FF0000");
    rect
    (130, 40, 100, 50);
    fill("#FFFF00");
    text("Plane", 205, 160);
    noFill();
    stroke("#FF0000");
    rect
    (200, 150, 180, 80);
}