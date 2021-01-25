var bg, together;

var tom, jerry;

var tomimg1, tomimg2, tomimg3;

var jerryimg1, jerryimg2, jerryimg3;

function preload() {

  bg = loadImage("images/garden.png");

  tomimg1 = loadAnimation("images/tomOne.png");

  tomimg2 = loadAnimation("images/tomTwo.png", "images/tomThree.png");

  tomimg3 = loadAnimation("images/tomFour.png");

  jerryimg1 = loadAnimation("images/jerryOne.png");

  jerryimg2 = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");

  jerryimg3 = loadAnimation("images/jerryFour.png");

}

function setup() {

  createCanvas(1000, 800);

  tom = createSprite(870, 600);

  tom.addAnimation("tomsleeping", tomimg1);

  tom.scale = 0.2;

  jerry = createSprite(200, 600);

  jerry.addAnimation("jerrystanding", jerryimg1);

  jerry.scale = 0.15;

}

function draw() {

  background(bg);

  if (tom.x - jerry.x < (tom.width / 2 - jerry.width / 2)) {

    tom.velocityX = 0;

    tom.addAnimation("tomlastimage", tomimg3);

    tom.x = 300;

    tom.scale = 0.2;

    tom.changeAnimation("tomlastimage");

    jerry.addAnimation("jerrylastimage", jerryimg3);

    jerry.scale = 0.15;

    jerry.changeAnimation("jerrylastimage");

  }

  drawSprites();

}

function keypressed() {

  if (keyCode === LEFT_ARROW) {

    tom.velocityX = -5;

    tom.addAnimation("tomrunning", tomimg2);

    tom.changeAnimation("tomrunning");

    jerry.addAnimation("jerryteasing", jerryimg2);

    jerry.frameDelay = 25;
    
    jerry.changeAnimation("jerryteasing");

  }

}
