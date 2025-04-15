//var spaceArray = [];
var ship
var shipX = 500;
var shipY = 200;

var backGX = 0;
var backGY = 0;

var pointX = 500;
var pointY = 500;

function preload()
{
    //spaceArray = loadStrings("../data/spaceship.txt");
    //ship = loadImage("../images/Spaceship v2.png")
    spaceBackground = loadImage("../images/space background.jpg")
}

function setup()
{
    createCanvas(1000,550);

    push();
    //scale(0.2);
    //tint(225, 325);

    ship = createSprite(shipX, shipY);
    ship.img = "../images/Spaceship v2.png";
    ship.scale = 0.2;
    //image(ship, shipX, shipY);
    pop();


    

}


function draw()
{

    drawBackground();

    moveRocket();

    drawPointer();
    

}

function drawBackground()
{
    background(200);

    push();
    scale(0.8);
    tint(225, 185);
    image(spaceBackground, backGX, backGY);
    pop();

    
    if(pointX > 600 && backGX > -700)
    {
        backGX -= 3;
    }
    if(pointX < 300 && backGX < 30)
    {
        backGX += 3;
    }
    if(pointY < 100 && backGY < 30)
    {
        backGY += 3;
    }
    if(pointY > 500 && backGY > -540)
    {
        backGY -= 3;
    }
        
}

function drawPointer()
{
    circle(pointX,pointY, 10);

    pointX += (mouseX - pointX);// * 0.04; 
    pointY += (mouseY - pointY);// * 0.04;

}


function moveRocket()
{

    ship.moveTowards(mouse, 0.01);
    ship.rotateTowards(mouse, 0.1, 3);
    /*
    if(kb.pressing('up')) //up
    {
        //ship.move(1000, 'up', 3);
        ship.vel.y = -5;
    }
    if(kb.pressing('down')) //down
    {
        //ship.move(1000, 'down', 3);
        ship.vel.y = 5;
    }
    if(kb.pressing('left')) //left
    {
        //ship.move(1000, 'left', 3);
        ship.vel.x = -5;
    }
    if(kb.pressing('right')) //right
    {
        //ship.move(1000, 'right', 3);
        ship.vel.x = 5;
    }
    else if ()
    {
        ship.vel.x = 0;
        ship.vel.y = 0;
    }
*/
}