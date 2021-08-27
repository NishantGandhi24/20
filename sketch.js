var astronaut;
var bath,sleep,brush,drink,iss,eat,gym,move;

function preload(){
  iss = loadImage("iss.png");
  bath = loadAnimation("bath1.png,bath2.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  drink = loadAnimation("drink1.png,drink2.png");
  eat = loadAnimation("eat1.png,eat2.png");
  gym = loadAnimation("gym1.png,gym2.png,gym11.png,gym12.png");
  move = loadAnimation("move.png,move1.png");
}

function setup() {
  createCanvas(800,400);

  astronaut = createSprite(30,30,30,30);
  astronaut.addImage(iss);
  astronaut.scale = 3;
  astronaut.addAnimation(bath);
  astronaut.addAnimation(sleep);
  astronaut.addAnimation(brush);
  astronaut.addAnimation(drink);
  astronaut.addAnimation(eat);
  astronaut.addAnimation(gym);
  astronaut.addAnimation(move);
}

function draw() {

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 360
  }
   
  drawSprites();
}