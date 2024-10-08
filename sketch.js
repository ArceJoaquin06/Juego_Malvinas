let player, playerImg

function preload(){
    playerImg = loadImage('/Player.png');
}

function setup() {
    createCanvas(400, 400);

    player = new Sprite(width/2,height-25,50,50);
	player.width = 50;
	player.height = 50;
    player.collider = 'none';
    player.addImage(playerImg);
    player.visible = false;
  }
  
  function draw() {
    background(220);
    square(30, 20, 55);
    player.visible = true;
  }