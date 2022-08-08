img="img.jpg";
Status="";
objects=[];
function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}
function modelloaded(){
    console.log ("modelloaded");
    Status =true;
    

}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function draw(){
    image(img,0,0,640,420);
    if(Status!="")
    {
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotResult) ;
        for(i=0;i<objects.length;i++)
        {
document.getElementById("status").innerHTML ="status :object dedected";
document.getElementById("number_of_objects").innerHTML="Number of object detectod are:"+objects.length;
fill(r,g,b);
percent=floor(objects[i].confidence*100);
text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
noFill();
stroke(r,g,b)
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        
    }
    
 
    
}}