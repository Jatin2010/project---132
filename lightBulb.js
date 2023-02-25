Status = "";
TV_image = "";

function preload(){
    light_bulb_image = loadImage("bottle.jfif");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(light_bulb_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error();;
    }
    console.log(results);
}

function draw(){
    image(light_bulb_image,0,0,640,350);
}