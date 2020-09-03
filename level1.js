var canvas;
var ctx;

var spriteImage = new Image();
spriteImage.src = "sprite1.png" 

var heart = new Image();
heart.src = "heart.png" 

var lazer = new Image();
lazer.src = "lazer.png" 

var blueLazer = new Image();
blueLazer.src = "blueLazer.png" 

var backgroundImage = new Image();
backgroundImage.src = "theCosmos.jpg";
var backgroundX, backgroundY;
backgroundX = backgroundY = 0;
var backgroundSpeed = 2;


var cannonX, cannonY;
cannonX = cannonY = 0;
var cannonCooldown = 0;
var cannonCooldownDelay = 160;
var cannonSize = 10
var cannonSpeed = 5;

var badX, badY, badWidth, badHeight
badX = 0;
badY = 0;
badWidth = 20;
badHeight = 20;

var lX, lY, lWidth, lHeight;
lX = 500;
lY = 0;
lWidth = 20;
lHeight = 20;

var score = 3;

var x, y, width, height

var keys = [];

window.onkeydown = function (event){

  keys[event.key] = true;
  console.log(event);

};

window.onkeyup = function (event){

  keys[event.key] = false;


};

x = 400;

y = 650;

width = 50;

height = 50;

function drawScore(){
  ctx.fillStyle = "white";
  ctx.font = "Arial 100px";
  ctx.fillText("Hearts: "+ score, 10, 10);
}

function startGame(){

  canvas = document.getElementById("gc");
  ctx = canvas.getContext("2d");

  window.setInterval(update, 1);
}




function update(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
drawBackground();
 goodGuy();
  badGuy();
  lazerLazer();
  handleCannon();
  /*ctx.fillStyle = "blue";
  ctx.fillRect(x, y, width, height); */
  ctx.drawImage(spriteImage, x, y, width, height);

   /*ctx.fillStyle = "red";
  ctx.fillRect(badX, badY, badWidth, badHeight);*/
    ctx.drawImage(heart, badX, badY, badWidth, badHeight);

    /*ctx.fillStyle = "blue";
  ctx.fillRect(lX, lY, lWidth, lHeight);*/
 ctx.drawImage(lazer, lX, lY, lWidth, lHeight);
 
 

  if(checkCollisions(width, height, x, y, badWidth, badHeight, badX, badY)){
    
    repositionBadGuy();
    score +=1
  }

  if(checkCollisions(width, height, x, y, lWidth, lHeight, lX, lY)){
    
    repositionLazer();
        score -=1;
        spriteImage.src = "goof.png";
  }
  drawScore()

  if (score < 1){
    die()
  }

if (score > 9){
  next()
}

}


function drawBackground(){

 backgroundY += backgroundSpeed;

  if (backgroundY > canvas.height){
    backgroundY = 0;
  }
    
  

  ctx.drawImage(backgroundImage, backgroundX, backgroundY, canvas.width, canvas.height);
   ctx.drawImage(backgroundImage, backgroundX, backgroundY - canvas.height, canvas.width, canvas.height);
}

function next(){
window.location.href = "level2.html"
}

function die(){

window.location.href = "died.html"

}

var downspeed = -1
var speed = 1 

function goodGuy(){
  if (keys ["ArrowRight"] == true)
  x+=speed;

  if (keys ["ArrowLeft"] == true)
  x-=speed;

  if (keys ["ArrowDown"] == true)
  y+=speed;

  if (keys ["ArrowUp"] == true)
  y-=speed;

   if (keys ["d"] == true)
  x+=speed;

  if (keys ["a"] == true)
  x-=speed;

  if (keys ["s"] == true)
  y+=speed;

  if (keys ["w"] == true)
  y-=speed;

  if (keys ["e"] == true){
    speed = 3;
    spriteImage.src = "sprite1Large.png";
  }
  
  
  else{
    speed = 1;
    spriteImage.src = "sprite1.png";
  }

   if(x < 0){
         x = 0;
       }

        if(y < 0){
         y = 0;
       }

       if(x > 750){
         x = 750;
       }

        if(y > 750){
         y = 750;
       }
}

window.setTimeout(badGuy, 1000); 

function badGuy(){
  badY++;

  if (badY > 800){
    repositionBadGuy();
  }
}

function handleCannon(){

  if (keys [" "] && cannonCooldown <= 0){
    cannonX = x + width / 2 - cannonSize / 2;
    cannonY = y;
    cannonCooldown = cannonCooldownDelay;
  }
  cannonY -= cannonSpeed;

--cannonCooldown;

  ctx.drawImage(blueLazer, cannonX, cannonY, cannonSize, cannonSize);
  
}


function repositionBadGuy(){
  badY = 0;
  badX = Math.random() * 770;
}

function lazerLazer(){
  lY+=4;

  if (lY > 800){
    repositionLazer();
  }
}



function repositionLazer(){
   lY = 0;
  lX = Math.random() * 800;
}




  function checkCollisions(rect1Width, rect1Height, rect1XPos, rect1YPos,
        rect2Width, rect2Height, rect2XPos, rect2YPos) {
         if (rect1XPos < rect2XPos + rect2Width &&
           rect1XPos + rect1Width > rect2XPos &&
           rect1YPos < rect2YPos + rect2Height &&
           rect1Height + rect1YPos > rect2YPos) {
          return true;
         }
         else{
          return false;
         }   
        }


