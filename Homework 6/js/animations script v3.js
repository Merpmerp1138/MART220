var animation = [];
var runAnimation = [];
var i = 0;
var myBoy;
var myFood;
var x = 30;
var y = 450;
var makeAllFood = [];
var idleStrings = [];
var runStrings = [];
var flipX = false;

var timerValue = 10; 

var score = 0; 


function preload()
{
    
    idleStrings = loadStrings("../data/idle.txt");
    runStrings = loadStrings("../data/run.txt"); 

}

function setup()
{
    createCanvas(600,600);
    setInterval(updateIndex, 50);
    setInterval(timerTime, 1000);
    setInterval(shiftFoodAround, 2000);
    textAlign(CENTER); 
    textSize(20);

    
    for(let i = 0; i < idleStrings.length; i++)
    {
        myBoy = new theBoy(idleStrings[i], x, y)
        animation.push(myBoy);

        myBoy = new theBoy(runStrings[i], x, y);
        runAnimation.push(myBoy);  
    }
        

    for (let i = 0; i < 8; i++)
        {
            myFood = new food(random(100,500), random(100,500));
            makeAllFood.push(myFood);
        }
}

function draw()
{
    background(241,230,255);

    loadFood();
    moveBoy();
    addTimer(); 
    displayScore();
}

function loadFood()
{
    for (let i = 0; i < makeAllFood.length; i++)
        {
            makeAllFood[i].draw();
        }
}

function shiftFoodAround()
{
    for (let i = 0; i < makeAllFood.length; i++)
        {
            makeAllFood[i].x = random(100,500);
            makeAllFood[i].y = random(100,500);
        }

    loadFood();
}

function moveBoy()
{
    if (keyIsPressed) 
        {
            runAnimation[i].draw();
            if (key == "a") 
                {
                x-=4;
                flipX = true;
                }
            if (key == "d") 
                {
                x+=4;
                flipX = false;
                }
            if (key == "w") 
                {
                y-=4;
                }
            if (key == "s") 
                {
                y+=4;
                }
            for (let i = 0; i < 15; i++)
                {
                    animation[i].flipX = flipX;
                    animation[i].x = x;
                    animation[i].y = y; 
                    runAnimation[i].flipX = flipX;
                    runAnimation[i].x = x; 
                    runAnimation[i].y = y; 
                }
            for (let k = 0; k < makeAllFood.length; k++)
                {
                    if (animation[i].eat(makeAllFood[k].x, makeAllFood[k].y, 10, 10)) {
                        makeAllFood.splice(k, 1); //find the item in my array that I collided with and cut it?
                        score += 1; 
                    }
                }
            }
            else
            {
                animation[i].draw();
            }
}

function addTimer()
{ 
if (timerValue >= 10)
{
    text("0:" + timerValue, 75, 50)
}
if(timerValue < 10)
{
    text("0:0" + timerValue, 75, 50)
}
if(timerValue == 0)
{
    text("GAME OVER", 75, 75)
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

function timerTime()
{
    if(timerValue > 0)
        {
            timerValue -= 1;
        } 
}

function displayScore()
{
    text(score, 500, 50);
}
