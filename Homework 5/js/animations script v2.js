var animation = [];
var i = 0;
var myBoy;
var myFood;
var x = 30;
var y = 450;
var makeAllFood = [];

function preload()
{
    for(var i = 0; i < 15; i ++)
    {
        myBoy = new theBoy("../images/Idle (" + i + ").png", x, y);
        animation.push(myBoy);
    }
}

function setup()
{
    createCanvas(600,600);
    setInterval(updateIndex, 50);

    for (let i = 0; i < 8; i++)
    {
        myFood = new food(random(100,500), random(100,500));
        makeAllFood.push(myFood);
    }
}

function draw()
{
    background(241,230,255);
    animation[i].draw();

    loadFood();
    moveBoy();
}

function loadFood()
{
    for (let i = 0; i < makeAllFood.length; i++)
        {
            makeAllFood[i].draw();
        }
}

function moveBoy()
{
    if (keyIsPressed) 
        {
            if (key == "a") 
                {
                    x-=2;
                }
            if (key == "d") 
                {
                x+=2;
                }
            if (key == "w") 
                {
                y-=2;
                }
            if (key == "s") 
                {
                y+=2;
                }
            for (let i = 0; i < 15; i++)
                {
                    animation[i].x = x;
                    animation[i].y = y; 
                }
            for (let k = 0; k < makeAllFood.length; k++)
                {
                    if (animation[i].eat(makeAllFood[k].x, makeAllFood[k].y, 10, 10))
                        makeAllFood.splice(k, 1);
                }
            }
}

function updateIndex()
{
    i++;
    if(i > 14)
    {
        i = 0;
    }

}
