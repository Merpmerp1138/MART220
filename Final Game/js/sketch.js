//var spaceArray = [];
var ship
var shipX = 500;
var shipY = 200;

var testX = 0;
var testY = 0;

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

    //createRocket();

    moveRocket();


    

}

function drawBackground()
{
    background(200);

    push();
    scale(0.8);
    tint(225, 185);
    image(spaceBackground, testX, testY);
    pop();

    /*
    if(shipX > 2500 && testX > -700)
    {
        testX -= 5;
    }
    if(shipX < 1500 && testX < 30)
    {
        testX += 5;
    }
    if(shipY < 700 && testY < 30)
    {
        testY += 5;
    }
    if(shipY > 1200 && testY > -540)
    {
        testY -= 5;
    }
        */
}


function createRocket()
{
    push();
    //scale(0.2);
    //tint(225, 325);

    ship = createSprite(shipX, shipY);
    ship.img = "../images/Spaceship v2.png";
    ship.scale = 0.2;
    //image(ship, shipX, shipY);
    pop();

}

function moveRocket()
{

    ship.moveTowards(mouse, 0.02);
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