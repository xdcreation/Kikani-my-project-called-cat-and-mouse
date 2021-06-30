var gardenImg, cat1, cat2, cat4, mouse1, mouse2, mouse4, cat, mouse






function preload() {
    gardenImg = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat4 = loadAnimation("images/cat4.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addAnimation("catsleeping",cat1);
    cat.scale = 0.15

    mouse = createSprite(200,600);
    mouse.addAnimation("mouseteasing",mouse1);
    mouse.scale = 0.15

}

function draw() {

    background(gardenImg);
if(cat.x - mouse.x<(cat.width - mouse.width)/2){
   cat.velocityX = 0;
   cat. addAnimation("catchasing",cat4);
   cat.x = 300;
   cat.scale = 0.15
   cat.changeAnimation("catchasing",cat4)
   mouse. addAnimation("mouserunning",mouse4);
   mouse.scale = 0.15
   mouse.changeAnimation("mouserunning",mouse4)
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catrunning",cat2);
    cat.changeAnimation("catrunning",cat2)

    mouse.addAnimation("mousecaught",mouse2);
    mouse.changeAnimation("mousecaught",mouse2);
    mouse.frameDelay = 25;
}

}
