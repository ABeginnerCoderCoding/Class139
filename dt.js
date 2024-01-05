status = "";
img = "";
objects = []
function preload(){
img = loadImage("dt.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetecter = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects"
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetecter.detect(img, gotResult);
}
function gotResult(error, results){
if(error){
    console.log(error);
}
console.log(results);
objects = results;
}
function draw(){
    image(img,0,0,640,420);
if(status != ""){
    for(i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "Status: Detected objects";
        percent = floor(objects[i].confidence * 100);
        fill("#FF0000");
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
    }
}
}