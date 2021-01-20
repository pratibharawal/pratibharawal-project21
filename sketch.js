var canvas,s1,s2,s3,s4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    s1= createSprite(0,550,200,50);
    s2= createSprite(200,550,200,50)
    s3= createSprite(400,550,200,50)
    s4= createSprite(600,550,200,50)
   s1.shapeColor= "red"
   
    s2.shapeColor = "green";

   s3.shapeColor = "yellow";

   s4.shapeColor = "blue";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(150,10,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(s1.isTouching(ball) && ball.bounceOff(s1)){
        ball.shapeColor = "red";
        music.play();
    }

    if(s2.isTouching(ball)&& ball.bounceOff(s2)){
        ball.shapeColor = "green";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(s3.isTouching(ball) && ball.bounceOff(s3)){
        ball.shapeColor = "yellow";
    }

    if(s4.isTouching(ball) && ball.bounceOff(s4)){
        ball.shapeColor = "blue";
    }


    drawSprites();
    //add condition to check if box touching surface and make it box
}
