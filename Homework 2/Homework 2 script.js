var CrustX = 300;
var CrustY = 300;
var CrustXB = 500;
var CrustYB = 300;
var CrustSpeedX
var CrustSpeedY
var CrustSpeedXB
var CrustSpeedYB

var redX = 300;
var redY = 300;
var redXB = 500;
var redYB = 300;

var mousex = -50;
var mousey = -50;

function setup()
{
    createCanvas(800,600);
    CrustSpeedX = random(0,2) -3;
    CrustSpeedY = random(0,2) -3.5;
    CrustSpeedXB = random(0,2) -4;
    CrustSpeedYB = random(0,2) -5;
}

function draw()
{


    background(168,168,168);

    writeName();

    writeTitle();
    
    drawCrust();

    moveCrust();

    drawRed();

    moveRed();

    drawCheese();

    drawPineapple();

    addPineapple();
    

}

function drawPineapple()
{
    strokeWeight(0);
    fill(255,238,73);
    quad(150,200,170,180,220,280,160,300);
    quad(420,100,440,120,390,180,340,170);
    quad(370,300,470,250,480,320,380,320);
    quad(240,400,280,390,340,500,230,490);
    quad(440,410,470,400,520,490,460,510);
    quad(600,190,620,170,640,310,560,285);
    quad(270,230,295,220,320,365,250,350);
}

function drawCrust()
{
    stroke(232,193,101);
    strokeWeight(550);
    line(CrustX,CrustY,CrustXB,CrustYB);
}

function moveCrust()
{
    
    if(CrustX < 100)
    {
        CrustSpeedX *= -1;
    }

    if(CrustX > 700)
    {
        CrustSpeedX *= -1;
    }

    if(CrustY < 100)
    {
        CrustSpeedY *= -1;
    }
    
    if(CrustY > 500)
    {
        CrustSpeedY *= -1;
    }

    if(CrustXB < 100)
    {
        CrustSpeedXB *= -1;
    }
    
    if(CrustXB > 700)
    {
        CrustSpeedXB *= -1;
    }
    
    if(CrustYB < 100)
    {
        CrustSpeedYB *= -1;
    }
        
    if(CrustYB > 500)
    {
        CrustSpeedYB *= -1;
    }

    CrustX += CrustSpeedX;
    CrustY += CrustSpeedY;
    CrustXB += CrustSpeedXB;
    CrustYB += CrustSpeedYB;
    
    
}

function drawRed()
{
    stroke(240,0,0);
    strokeWeight(475);
    line(redX,redY,redXB,redYB);
}

function moveRed()
{
    if(keyIsDown(38)) //up
        {
            redY-=10;
            redYB+=10;
        }
    if(keyIsDown(40)) //down
        {
            redY+=10;
            redYB-=10;
        }
    if(keyIsDown(37)) //left
        {
            redX-=10;
            redXB+=10;
        }
    if(keyIsDown(39)) //right
        {
            redX+=10;
            redXB-=10;
        }

}

function drawCheese()
{
    stroke(254,179,0);
    strokeWeight(450);
    line(310,300,490,300);
}
function writeName()
{
    strokeWeight(2);
    fill(0);
    textSize(33);

    text('Kaitlyn :D',640,570);

}

function writeTitle()
{
    strokeWeight(2);
    fill(0);
    textSize(33);

    text('Pineapplessssss',10,50);
}

function addPineapple()
{
    triangle(mousex, mousey, mousex + 50, mousey, mousex + 25, mousey + 50)
}

function mouseClicked ()
{
    mousex = mouseX;
    mousey = mouseY;
}









/*
var top = 1;
var mousex = 1;
var mousey = 1;

function setup()
{
    createCanvas(800,600);
}

function draw()
{
    background(168,168,168);
    testrun();
}

function testrun()
{

    top = 1;

if(top = 2)
{
    rect(mousex, mousey, 40, 40);
}

}

function mouseClicked ()
{
    mousex = mouseX;
    mousey = mouseY;
}

*/