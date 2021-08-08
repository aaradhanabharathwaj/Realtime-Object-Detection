img="";
status="";
objects=[];
function setup(){
    canvas=createCanvas(350,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(350,380);
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function draw(){
    image(video,0,0,350,380);
    if(status !=""){
        objectDetector.detect(video,gotResult);
        r=random(255);
        g=random(255);
        b=random(255);
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Status: Detecting Objects";
document.getElementById("number_of_objects").innerHTML="Number of Objects: "+ objects.length;
fill(r,g,b);
percent=floor(objects[i].confidence*100);
text(objects[i].label+ " "+percent+"%",objects[i].x+15,objects[i].y+15);
noFill();
stroke(r,g,b);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
    }
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    if(results){
        console.log(results);
        objects=results;
    }
}