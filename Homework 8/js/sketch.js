
var idleArray = []; //holds idle frames?
var myAnimation //--
var myWalkAnimation; //--
var walkArray = []; //holds walk frames?
var water1;
var water2;
var water3;

var allGoodFood;
var allBadFood;

var HealthBar = 400;
var HealthScore = 10;
var totalScore = 0;


function preload()
{
    idleArray = loadStrings("../data/idle.txt");
    walkArray = loadStrings("../data/run.txt");
}

function setup()
{
    createCanvas (1200,1200);
    myAnimation = new animationImage( 130, 200, 0, 0); //--
    myAnimation.loadAnimation('idle', idleArray); //--
    myAnimation.loadAnimation('walk', walkArray); //--

    water1 = createSprite(random(0,600), random(600,1150), 'static') //creates water images and gives x,y. don't know what 'static' means though
    water1.img = "../images/water 1.jpg"; //must come after createSprite not sure why though
    water1.scale = 0.2;
    water1.diameter = 300; //gives it the circle your character collides with

    water2 = createSprite(random(600,1150), random(100,600), 'static')
    water2.img = "../images/water 2.jpg";
    water2.scale = 0.2;
    water2.diameter = 250;

    water3 = createSprite(random(600,1150), random(600,1150), 'static')
    water3.img = "../images/water 3.jpg";
    water3.scale = 0.2;
    water3.diameter = 200;

    allGoodFood = new Group(); //-- from the "Collision and Overlaps" page??)
    allGoodFood.diameter = 50;
    allGoodFood.x = () => random (100,1100); //--
    allGoodFood.y = () => random (100,1100); //--
    allGoodFood.img = "../images/cherry.png";
    allGoodFood.scale = 0.4;
    allGoodFood.amount = 30; //amount of cherries?

    allBadFood = new Group();
    allBadFood.diameter = 50;
    allBadFood.x = () => random (100,1100);
    allBadFood.y = () => random (100,1100);
    allBadFood.img = "../images/bomb.png";
    allBadFood.scale = 0.4;
    allBadFood.amount = 15;
         
}

function draw()
{
    background(241,230,255);

    moveBoy();

    drawScores();

    endGame();
}

function moveBoy()
{
    if(kb.pressing('d')) //--
    {
        myAnimation.updatePosition('forward'); //--
        myAnimation.drawAnimation('walk'); //--
        myAnimation.currentAnimation.overlaps(allGoodFood, collect); //-- helps with collision?
        myAnimation.currentAnimation.overlaps(allBadFood, explode);
        /*
        if(myAnimation.isColliding(water1)) //--
        {
            myAnimation.drawAnimation('idle'); //--
            myAnimation.updatePosition('idle'); //--
        }
            */ // this may keep it from spinning but that's boring heheh

         
    }
    else if(kb.pressing('a')) //--
    {
        myAnimation.updatePosition('reverse'); //--
        myAnimation.drawAnimation('walk'); //--
    }
    else if(kb.pressing('w'))
    {
        myAnimation.updatePosition('up'); //--
        myAnimation.drawAnimation('walk'); //--
    }
    else if(kb.pressing('s'))
    {
        myAnimation.updatePosition('down') //--
        myAnimation.drawAnimation('walk') //--
    }
    else
    {
        myAnimation.drawAnimation('idle') //--
        
    } 
}


function isColliding(allGoodFood) //--
{
    return this.currentAnimation.collide(allGoodFood); //--
}

function collect(currentAnimation, goodFood) //--
{
     goodFood.remove(); //--

     if (totalScore < 10 && HealthBar > 0)
     {
        totalScore += 1;
     }

    
}

function explode(currentAnimation, badFood)
{
    badFood.remove();
    
    if(HealthBar > 0)
        {
           HealthBar -= 40;
        }

    if(HealthScore > 0)
        {
            HealthScore -=1;
        }
}

function drawScores()
{
    strokeWeight(1);
    textSize(40);
    text("Score  " + totalScore, 200, 50)
    text("Health  " + HealthScore, 550, 50)

    strokeWeight(5);
    rect(750, 25, HealthBar, 20)
}

function endGame()
{
    if(totalScore >= 10)
    {
        text("You Win!!", 500, 500);
        allGoodFood.remove();
        allBadFood.remove();
    }
    
    if(HealthScore <= 0)
    {
        text("YOU DIED!", 500, 500);
        allGoodFood.remove();
        allBadFood.remove();
    }


}
    
