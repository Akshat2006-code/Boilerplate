
function preload() {

}


function setup() {
  createCanvas(displayWidth, displayHeight - 151);
  play = createSprite(displayWidth / 2, displayHeight / 2, 10, 10)


}

function draw() {
  background(0);





  drawSprites()
}

function keyPressed() {
  // if (keyCode === UP_ARROW) {
  //   play.y = play.y - 10
  //  // play.X = play.X + 0
  // }
  // if (keyCode === DOWN_ARROW) {
  //   play.y = play.y + 10
  //  // play.X =   play.X + 0
  // }
  // if (keyCode === RIGHT_ARROW) {
  //   play.x = play.x + 10
  //   //play.Y = play.Y+ 0
  // }
  // if (keyCode === LEFT_ARROW) {
  //   play.x = play.x - 10
  //  // play.Y = play.Y + 0
  // }

  if(keyCode === UP_ARROW){
    play.velocityY=-10
  }
  if(keyWentUp === UP_ARROW){
    play.velocityY=0
  }
}

