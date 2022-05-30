leftWristX = 0
rightWristX = 0

function setup(){
    video = createCapture(VIDEO);
    video.size(320,240);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(result){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWristX.x;
        rightWristX = results[0].pose.rightWristX.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background('#6C91C2');
    textSize(difference);
    fill('#FFE787');
    text('Yash',50,400);
}