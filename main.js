lipx=0;
lipy=0;

function setup(){
        canvas=createCanvas(300,300);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(300,300);
        video.hide();
        poseNet=ml5.poseNet(video, modelLoaded);
        poseNet.on('pose',gotPoses);
    }

function modelLoaded(){
    console.log("model is loaded");
}

function draw(){
    image(video, 0,0,300,300);
    image(lipstick, lipx, lipy, 30,30);
}

function preload(){
    lipstick=loadImage("https://i.postimg.cc/SK36dFD0/Lipstick.png");
}

function saveImage(){
    save("myimage.png");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lipx= results[0].pose.lips.x-15;
        lipy= results[0].pose.lips.y-14;
        console.log("lips x= "+lipx);
        console.log("lips y= "+lipy);
    }
}