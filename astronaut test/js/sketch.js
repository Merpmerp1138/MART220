
var canvasWidth = 1000;
var canvasHeight = 550;

let astrons;

function preload()
{
    setInterval(aTopLeft, 4000);
    setInterval(aTop, 6000);
    setInterval(aTopRight, 12000);
    setInterval(aLeft, 10000);
    setInterval(aRight, 18000);
    setInterval(aBottomLeft, 20000);
    setInterval(aBottom, 16000);
    setInterval(aBottomRight, 14000);

    setInterval(chaosOne, 5000);
    setInterval(chaosTwo, 10000);
    setInterval(chaosThree, 15000);
}

function setup()
{
    //createCanvas(1000,550);
    createCanvas(canvasWidth, canvasHeight);

    astrons = new Group();
    astrons.addAni('images/astrons/astron1.png', 4);

}

function update()
{
    clear();
    astrons.scale = 0.08
    astrons.anis.frameDelay = 30

    

    if (mouse.presses())
    {
        new astrons.Sprite(mouse.x, mouse.y);
        new astrons.Sprite(mouse.x, mouse.y);
    }
}

function aTopLeft()
{
    new astrons.Sprite(10, 10);
}

function aTop()
{
    new astrons.Sprite(500, 10);
}

function aTopRight()
{
    new astrons.Sprite(950, 10);
}

function aLeft()
{
    new astrons.Sprite(10, 250);
}

function aRight()
{
    new astrons.Sprite(900, 250);
}

function aBottomLeft()
{
    new astrons.Sprite(10, 500);
}

function aBottom()
{
    new astrons.Sprite(500, 500);
}

function aBottomRight()
{
    new astrons.Sprite(950, 500);
}

function chaosOne()
{
    astrons.vel.x = random(-2, 2);
    astrons.rotationSpeed = random(-2, 2);
}

function chaosTwo()
{
    astrons.vel.y = random(-2, 2);
    astrons.rotationSpeed = random(-2, 2);
}

function chaosThree()
{
    astrons.vel.x = random(-5, 5);
    astrons.vel.y = random(-5, 5);
    astrons.rotationSpeed = random(-5, 5);
}
