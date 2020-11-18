var monkey , monkey_running;
var banana ,bananaImage, bananaGroup;
var obstacle, obstacleImage, obstacleGroup;
var ground;
var score = 0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation('moving', monkey_running);
  monkey .scale = 0.13;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
}


function draw() {
  background('white');

   text('score: ', score, 20, 10);
  
  if(bananaGroup.isTouching(monkey)){
    score = score + 2;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  if(keyDown('space')){
    monkey.velocityY = -6;
  }
   
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  spawnBanana();
  spawnObstacles();
  
  monkey.collide(ground);
  drawSprites();
  
}

function spawnBanana(){
  if(frameCount % 200 === 0){
    banana = createSprite(500, 200, 20, 20);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(150,250)) 
    banana.velocityX = -3;
    banana.scale = 0.15;
    banana.lifetime = 130;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    bananaGroup.add(banana);
    
  }
}

function spawnObstacles(){
  if(frameCount % 90 === 0){
    obstacle = createSprite(500, 320, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.scale = 0.15;
    obstacle.lifetime = 130;
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    obstacleGroup.add(obstacle);
    
  }
}


