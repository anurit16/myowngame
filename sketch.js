var bakground,backgroundImg;
var boyImg,boy;
var obstacle1,obstacle2,obstacle3,obstacle4;
var wireImg;
var gameState = PLAY;
var retryImg,retry;
var taskdone,jumpSound,gameOver;

function preload(){
  backgroundImg = loadImage("background.jpg");
  boyImg  = loadAnimation("tile0.png","tile1.png","tile2.png","tile3.png","tile4.png","tile5.png");
  obstacle1 = loadImage ("obstacle1.png");
  obstacle2 = loadImage("obstacle5.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle6.png");
  wireImg = loadImage("wire.jpg");
  
  retryImg = loadImage("retryImg.png");
  retry = loadImage("retry.png");

  taskdone = loadSound("taskdone.mp3");
  jumpSound = loadSound("jump.mp3");
  gameOver = loadSound("gameover.mp3");

}




function setup() {
  createCanvas(800,500);
  bakground=createSprite(400, 250, 50, 50);
  bakground.addImage(backgroundImg);
  
  boy = createSprite(100,420,10,10);
  boy.addAnimation("running",boyImg);
  boy.scale = 0.5;

  insGround = createSprite(400,490,800,10)
  insGround.visible = false;
 
  obstaclesGroup = createGroup();
  wireGroup = createGroup();
}

function draw() {
  
  bakground.velocityX = -4;
  if(bakground.x < 300){
    bakground.x = bakground.width/2;
  }
  if(keyDown("space")){
    boy.velocityY = -12;
  }
  boy.velocityY = boy.velocityY +0.8;
  
  boy.collide(insGround);

  spawnObstacles()
  spawnWire()

  
  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 60 === 0){
    var obstacle = createSprite(700,465,10,40);
    obstacle.velocityX = -6;

    var rand = Math.round(random(1,4));
    switch(rand)  {

      case 1: obstacle.addImage(obstacle1);
             break;

      case 2: obstacle.addImage(obstacle2);
               break;
      case 3: obstacle.addImage(obstacle3);
                 break;
      case 4: obstacle.addImage(obstacle4);
                 break;        
       default: break;             
    }

obstacle.scale = 0.5;
obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}

function spawnWire(){
  if(frameCount % 60 === 0 ) {
    var wire = createSprite(200,165,10,40);
    wire.y = Math.round(random(150,170));
    wire.velocityX = -3;
    wire.addImage(wireImg);
    wire.scale = 0.05;
    wire.lifetime=200;
    wireGroup.add(wire);
  }
}