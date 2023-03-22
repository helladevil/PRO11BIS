var ship= createSprite(100,249,10,10);

function preload(){
ship.AddAnimation="ship-1";
ship.AddAnimation="ship-2";
ship.AddAnimation="ship-3";
ship.AddAnimation="ship-4";
background.AddAnimation="sea.png";
sea.AddAnimation="sea.png";
}
function setup(){
createCanvas(400,400);
}
function draw() {
background();
background.AddAnimation(sea.png);
}

seaImg = loadImage ("sea.png");
shipImg1 = LoadAnimation ("ship-1");
