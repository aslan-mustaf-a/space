var bg
var sleep
var brush
var bath
var gym
var eat
var drink
var move

var astronaut

var edgeSprite

function preload(){
  bg = loadImage("iss.png")
  sleep = loadImage("sleep.png")
  brush = loadImage("brush.png")
  bath = loadAnimation("bath1.png","bath2.png")
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  eat = loadAnimation("eat1.png","eat2.png")
  drink = loadAnimation("drink1.png","drink2.png")
  move = loadAnimation("move.png","move1.png")

}

function setup(){
  createCanvas(800,400);
  
  astronaut = createSprite(300,200);
  astronaut.addImage("sleeping",sleep)
  astronaut.scale = 0.1

  edgeSprite = createEdgeSprites()

}

function draw(){
  background(bg);  
 
  textSize(20)
  fill("white")
  text("Instructions:",10,20)
  text("Up arrow = Brushing",10,40)
  text("Down arrow = Gymming",10,60)
  text("Left arrow = Eating",10,80)
  text("Right arrow = Bathing",10,100)
  text("M key = Moving",10,120)

  astronaut.bounceOff(edgeSprite)

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if(keyDown("DOWN_ARROW")){
    gym.frameDelay = 10
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if(keyDown("LEFT_ARROW")){
    eat.frameDelay = 20
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if(keyDown("RIGHT_ARROW")){
    bath.frameDelay = 20
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if(keyDown("77")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.y = 350
    astronaut.velocityX = 2
    astronaut.velocityY = 2
  }

  drawSprites();
}