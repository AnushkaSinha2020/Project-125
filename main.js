noseX=0;
noseY=0;
difference=0;
rightWristx=0;
leftWristx=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(500,300);
    video.position(100, 200);

    canvas= createCanvas(700,400);
    canvas.position(600,200);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');
    document.getElementById("font_size").innerHTML= "Font-size of the text will be = "+difference+" px";
    textSize(difference);
    fill('#fc42d1');
    text('Anushka', 50, 400);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results) { 
    if(results.length > 0) { 
        console.log(results);
        noseX = results[0].pose.nose.x; 
        noseY = results[0].pose.nose.y; 
        console.log("noseX = " + noseX +" noseY = " + noseY); 
        leftWristX = results[0].pose.leftWrist.x; 
        rightWristX = results[0].pose.rightWrist.x; 
        difference = floor(leftWristX - rightWristX); 
        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference); 
    }
}