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

var crewCollected = 10;
var totalCrew = 25;
var sheildPercent = 100;
var healthBar = 400;

var fontDebug;
var fontRedhawk;

var startVar = 1;

function preload()
{
    spaceBackground = loadImage("../images/space background.jpg")

    fontDebug = loadFont('../fonts/Debug.otf');
    fontRedhawk = loadFont('../fonts/Redhawk.ttf');

    astronautPreload();
}


function setup()
{
    createCanvas(canvasWidth, canvasHeight);

    invisibleBoundry();

    createRocket();

    PlanetSetUp();

    astronSetUp();
   

}


function draw()
{

    drawBackground();

    moveRocket();

    drawText();

    drawPointer();

    PlanetDraw();

    astronautDraw();

    outofBounds();
    
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
            ship.diameter = 100;

}

function moveRocket()
{

    ship.moveTowards(mouse, 0.01);
    ship.rotateTowards(mouse, 0.4, 0);
    ship.diameter = 100;
    ship.collides(Planets, damage);
    ship.overlaps(astrons, collect);
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

function drawText()
{
    push();

    textSize(20)
    fill(158, 210 , 223); //lightblue
    textFont(fontRedhawk);

    stroke(1);
    text("Crew Members: " + crewCollected + "/" + totalCrew, 40, 40);
    text("Shields: " + sheildPercent + "%", 340, 40);

    rect(520, 28, healthBar, 10);
    pop();

    if(startVar == 1)
    {
        push();
        textFont(fontDebug);
        textSize(140);
        fill('#9ED2DFD6'); //lightblue lower opacity
        text("Red Alert!", 266, 168);
        fill(237, 209, 109); //gold
        fill('#EDD16DC4') //light gold lower opacity
        text("Red Alert!", 274, 170);
        fill(171, 52, 56);//red
        text("Red Alert!", 270, 170);

        textFont(fontRedhawk);
        textSize(20);
        fill('#9ED2DF');
        text('' + totalCrew - crewCollected +' Crew Members are Stranded in Space!', 290, 210);
        text('You have to save them!', 380, 250);
        textSize(23);
        fill(300);
        text('Use your mouse to pilot the ship', 310, 300);
        pop();
    }

    if(startVar >= 2 && startVar < 4)
    {
        push();
        textSize(40);
        fill('#9ED2DF');
        text('Good work! Keep going!', 280, 250)
        textSize(30);
        text('Look out for planets they can damage your shields', 180, 310);
        pop();
    }


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

            startVar = 5;
            
        }

if(crewCollected >= totalCrew)
    {
        push();
        fill('#3F3F3F70');
        rect(0, 0, canvasWidth +10 , canvasHeight +10);
        pop();

        push();
        textFont(fontRedhawk);
        fill('#9ED2DF');
        textSize(50);
        text("Congratulations Captain!", 150, 250);
        textSize(30);
        text("You saved your crew!", 280, 300);
        pop();
    }


}

function collect(ship, astron)
{
    astron.remove();
    crewCollected +=1;
    startVar +=1;
}

function damage()
{
    if(healthBar > 0)
    {
        healthBar -= 40;
        sheildPercent -= 10;
    }

    if(healthBar <= 0 && crewCollected >= 5) 
    {
        crewCollected -= 5;
    }
    else if(healthBar <= 0 && crewCollected >= 4) 
        {
            crewCollected -= 4;
        }
    else if(healthBar <= 0 && crewCollected >= 3) 
        {
            crewCollected -= 3;
        }
    else if(healthBar <= 0 && crewCollected >= 2) 
        {
            crewCollected -= 2;
        }
    else if(healthBar <= 0 && crewCollected >= 1) 
        {
            crewCollected -= 1;
        }
}





