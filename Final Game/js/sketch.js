var canvasWidth = 1000;
var canvasHeight = 550;

var ship;
var shipX = 900;
var shipY = 500;

var backGX = -200;
var backGY = -200;

var pointX = 500;
var pointY = 500;

var wallTop;
var wallBottom;
var wallLeft;
var wallRight;

let testPlanet;
let testPlanets;

var crewCollected = 10;
var totalCrew = 50;
var sheildPercent = 100;
var healthBar = 400;

var fontAquire;
var fontDebug;
var fontRedhawk;

function preload()
{
    spaceBackground = loadImage("../images/space background.jpg")

    fontAquire = loadFont('../fonts/Aquire.otf');
    fontDebug = loadFont('../fonts/Debug.otf');
    fontRedhawk = loadFont('../fonts/Redhawk.ttf');
}

function setup()
{
    //createCanvas(1000,550);
    createCanvas(canvasWidth, canvasHeight);

    invisibleBoundry();

    createRocket();

    testPlanetSetUp();
   

}


function draw()
{

    drawBackground();

    moveRocket();

    drawPointer();

    testPlanetDraw();

    drawText();
    
}

function drawBackground()
{
    background(200);

    push();
    scale(1.5);
    tint(225, 185);
    image(spaceBackground, backGX, backGY);
    pop();

    
    if(pointX > 800 && backGX > -1275)
    {
        backGX -= 3;
    }
    if(pointX < 200 && backGX < 30)
    {
        backGX += 3;
    }
    if(pointY < 100 && backGY < 30)
    {
        backGY += 2;
    }
    if(pointY > 500 && backGY > -865)
    {
        backGY -= 2;
    }
        
}

function drawPointer()
{
    circle(pointX,pointY, 10);

    pointX += (mouseX - pointX);// * 0.04; 
    pointY += (mouseY - pointY);// * 0.04;

}

function createRocket()
{
            ship = createSprite(shipX, shipY);
            ship.img = "../images/Spaceship v2.png";
            ship.scale = 0.2;

}

function moveRocket()
{

    ship.moveTowards(mouse, 0.01);
    ship.rotateTowards(mouse, 0.4, 0);
    ship.diameter = 100;
    ship.collided(testPlanets, damage);
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

function invisibleBoundry()
{
    wallTop = new Sprite(0, -40, canvasWidth * 2, 200, STA);
    wallTop.color = '#00000000';
    wallTop.stroke = '#00000000';

    wallBottom = new Sprite(0, 590, canvasWidth * 2, 200, STA);
    wallBottom.color = '#00000000';
    wallBottom.stroke = '#00000000';

    wallLeft = new Sprite(-40, 100, 200, 1000, STA);
    wallLeft.color = '#00000000';
    wallLeft.stroke = '#00000000';

    wallRight = new Sprite(1040, 160, 200, 1000, STA);
    wallRight.color = '#00000000';
    wallRight.stroke = '#00000000';

}

function testPlanetSetUp()
{
   
    testPlanets = new Group();
    testPlanets.diameter = 30;
    testPlanets.x = () => random(0, 1000);
    testPlanets.y = () => random(0, 550);
    testPlanets.amount = 5
    /*
    while (testPlanets.length < 24)
    {
        let testPlanet = new testPlanets.Sprite();
        //testPlanet.x = testPlanets.length * 20;
    }
*/    
}

function testPlanetDraw()
{
    
    testPlanets.moveTowards(backGX + 600, backGY + 600);
    //testPlanets.moveTowards(backGX, backGY);
    testPlanets.overlaps(wallTop);
    testPlanets.overlaps(wallLeft);
    testPlanets.overlaps(wallRight);
    testPlanets.overlaps(wallBottom);

}

function drawText()
{
    push();

    textSize(20)
    //fill(237, 209, 109); // lightgold
    fill(158, 210 , 223); //lightblue
    textFont(fontRedhawk);

    text("Crew Members: " + crewCollected + "/" + totalCrew, 40, 40);
    text("Shields: " + sheildPercent + "%", 340, 40)


    rect(520, 28, healthBar, 10);
    pop();

    
    if(crewCollected == 0)
        {
            push();
            fill('#3F3F3F70');
            rect(0, 0, canvasWidth +10 , canvasHeight +10);
            pop();
            
            push();
            textFont(fontDebug);
            textSize(140);
            //fill(158, 210 , 223);//lightblue
            fill('#9ED2DFD6'); //lightblue lower opacity
            text("you died!", 266, 268);
            fill(237, 209, 109); //gold
            fill('#EDD16DC4') //light gold lower opacity
            text("you died!", 274, 270);
            fill(171, 52, 56);//red
            text("you died!", 270, 270);
            pop();
        }


}

function damage()
{
    if(healthBar > 0)
    {
        healthBar -= 20;
        sheildPercent -= 5;
    }

    if(healthBar <= 0 && crewCollected > 0) 
    {
        crewCollected -= 1;
    }
   
        
}