img = "";

function airportback() {
    window.location = "index.html";
}

function preload() {
    img = loadImage('cars.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocoSSD', modelLoaded);
}

function modelLoaded(){
	console.log('Model Loaded!');
}