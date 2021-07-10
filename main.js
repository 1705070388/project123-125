noseX =0;
noseY=0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Posenet is initialized")
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results);
    }
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x-150;
        noseY = results[0].pose.nose.y-150;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background("white");
    textSize(difference);
    fill("black");
    text("Srikanth",1000,1000);
}