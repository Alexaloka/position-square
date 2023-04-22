function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(500, 450);
    canvas.position(560,90);
    poseNet = ml5.poseNet(video,modalLoaded);
    poseNet.on('pose', gotPoses);

}
function modalLoaded(){
    console.log('PoseNet Is Initialized!');

}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}
function draw()
{
    background("teal");
}