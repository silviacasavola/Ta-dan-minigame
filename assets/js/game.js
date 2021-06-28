
let gameContainer;
let gameCnv;
var sorprese = [];


var eggX;
var eggY;
var eggW;
var eggH;
let surprimg;

let score = 0;


function preload(){
  surprimg = loadImage("./assets/img/surprise.png");
  egg = loadImage("./assets/img/egg.png")
}


function setup() {

  gameContainer = select("#gamecontainer");
  // waitingRoomContainer.hide();

  for(var i = 1; i<10; i++) { sorprese[i] = new sorprRain() }

  gameCnv = createCanvas(windowWidth, windowHeight);
  gameCnv.parent(gameContainer);
  gameCnv.position(0, 0);
  gameCnv.style.zIndex = "150";

}

function draw() {
clear()

// UPDATES THE TIMER
// select("#waiting-room-timer").html(22 - timer);
// if(22-timer< 0){
// select("#waiting-room-timer").html(0);
// }
// }


// TOGGLES THE FUNCTIONS TO CREATE SORPRESINE
for (let s=1; s<10; s++) {
sorprese[s].show();
sorprese[s].update();
}

// DISPLAYS THE SCORE
select("#score").html("SCORE: " + score)

// egg
eggW = egg.width;
eggH = egg.height;
eggX = constrain(mouseX, eggW, windowWidth-eggW);
eggY = height - eggH - windowHeight/20;

imageMode(CENTER)

image(egg, eggX, eggY, eggW, eggH);

}




  function sorprRain() {

  this.x = random(0, windowWidth);
  this.y = random(-10, -windowHeight);
  // this.img = surprimg;

  // // CREATES SORPRESINE
    this.show = function() {

   image(surprimg, this.x, this.y, 50, 70);
    }

  // MAKES SORPRESINE FALL
    this.update = function() {
      this.speed = random(5, 10);
      this.gravity = 1.05;
      this.y = this.y + this.speed*this.gravity;

    if (this.y > windowHeight) {
    this.y = random(0, -windowHeight);
    this.x = random(0, windowWidth)
    this.gravity = 0;
    }

  // MAKES SORPRESINE DISAPPEAR IF CAUGHT WITH THE EGG
  eggW = egg.width;
  eggH = egg.height;
  eggX = constrain(mouseX, eggW/2, windowWidth-eggW/2);
  eggY = height - eggH - windowHeight/12;

    if (this.y > eggY && this.x >= (eggX - eggW/2) && this.x <= (eggX + eggW))
    {
      this.y = 0;
      this.x = random(0, windowWidth)

    //   if (ready == true) {
      score++;
    // }
  }
  }
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
