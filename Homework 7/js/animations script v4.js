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

var myBadFood; 
var makeAllBadFood = []; 

var myCanvas;

function preload()
{
    soundFormats('wav','m4a');
    myBackgroundSound = loadSound('../sound/724821__lovescotch__measured-approach.wav')
    myBadSound = loadSound('../sound/badFood.m4a')
    myGoodSound = loadSound('../sound/goodFood.m4a')

    idleStrings = loadStrings("../data/idle.txt");
    runStrings = loadStrings("../data/run.txt"); 


}


function setup()
{
    let myCanvas = createCanvas(600,600);

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

    for (let i = 0; i < 4; i++)
        {
            myBadFood = new food(random(100,500), random(100,500));
            makeAllBadFood.push(myBadFood)
        }
    
   myCanvas.mousePressed(playBackgroundSound);

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
            makeAllFood[i].goodFood();
        }

    for (let i = 0; i < makeAllBadFood.length; i++)
        {
            makeAllBadFood[i].badFood();
        }
}

function shiftFoodAround()
{
    for (let i = 0; i < makeAllFood.length; i++)
        {
            makeAllFood[i].x = random(100,500);
            makeAllFood[i].y = random(100,500);
        }
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
                    if (collideRectRect(animation[i].x, animation[i].y, animation[i].imageWidth, animation[i].imageHeight, makeAllFood[k].x, makeAllFood[k].y, 10, 10) )
                    {
                        makeAllFood.splice(k,1);
                        score +=1;
                        myGoodSound.play()
                        myGoodSound.setVolume(0.5);
                    }
                }
            for (let k = 0; k < makeAllBadFood.length; k++)
                {
                    if (collideRectRect(animation[i].x, animation[i].y, animation[i].imageWidth, animation[i].imageHeight, makeAllBadFood[k].x, makeAllBadFood[k].y, 10, 10) )
                    {
                        makeAllBadFood.splice(k,1);
                        score -=1;
                        myBadSound.play()
                        myBadSound.setVolume(2);
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
fill(102, 0, 204)
strokeWeight(0);
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

    noFill();
    stroke(102, 0, 204);
    strokeWeight(2);
    animS.circle('c1', 80, 500, 42, 50, 100);
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

function playBackgroundSound()
{
    myBackgroundSound.play();
    myBackgroundSound.loop();
    myBackgroundSound.setVolume(0.2);
}