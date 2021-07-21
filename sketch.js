const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg); 
  

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/New_York");
    
    //change the data in JSON format
    var responseType = await response.json();
    console.log(responseType);

    // write code slice the datetime
    var dt = responseType.datetime;
    console.log(dt); 

    hour = dt.slice(11,13);
    console.log(hour)
    // add conditions to change the background images from sunrise to sunset
    if(hour >= 07 && hour <= 20){
        bg = "sprites/sunrise1.png";
     }
   
     else{
       bg = "sprites/sunset10.png";
     }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
  
}
