difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("model is initialized");
}

function gotPoses(results){
if (results.length > 0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX-rightWristX);
}
}

function draw(){
    background("#969A97");
    document.getElementById("word").innerHTML="The font size of the word will be " + difference +"px";
    textSize(difference);
    fill("#F90093")
    text("Kishoben", 50, 400);
}
