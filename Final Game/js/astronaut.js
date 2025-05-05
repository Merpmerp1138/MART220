function astronautPreload()
{
        setInterval(aTopLeft, 41000);
        setInterval(aTop, 46000);
        setInterval(aTopRight, 35000);
        setInterval(aLeft, 50000);
        setInterval(aRight, 20000);
        setInterval(aBottomLeft, 34000);
        setInterval(aBottom, 45000);
        setInterval(aBottomRight, 40000);

        setInterval(chaosOne, 25000);
        setInterval(chaosTwo, 30000);
        setInterval(chaosThree, 45000);
    }

function astronSetUp()
{
    astrons = new Group();
    astrons.addAni('images/astrons/astron1.png', 4);
    new astrons.Sprite(200, 200);
}

function astronautDraw()
{
    //clear();
    astrons.scale = 0.08
    astrons.anis.frameDelay = 30

    astrons.overlaps(wallTop);
    astrons.overlaps(wallLeft);
    astrons.overlaps(wallRight);
    astrons.overlaps(wallBottom);

    astrons.overlaps(Planets);




    

    if (crewCollected >= totalCrew)
    {
        astrons.scale = 0.00001;
    }
    if (crewCollected == 0)
        {
            astrons.scale = 0.00001;
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
    new astrons.Sprite(950, 250);
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
    push();
    astrons.vel.x = random(-6, 6);
    astrons.rotationSpeed = random(-3, 3);
    pop();
}

function chaosTwo()
{
    push();
    astrons.vel.y = random(-6, 6);
    astrons.rotationSpeed = random(-4, 4);
    pop();
}

function chaosThree()
{
    push();
    astrons.vel.x = random(-12, 12);
    astrons.vel.y = random(-12, 12);
    astrons.rotationSpeed = random(-7, 7);
    pop();
}

function outofBounds()
{
    if (astrons.x <= -4000 || astrons.x >= 4300 || astrons.y <= -4000 || astrons.y >= 4000)
    {
        astron.remove();
    }
}
    