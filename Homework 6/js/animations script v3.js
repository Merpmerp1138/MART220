var animation = [];
var runAnimation = [];
var i = 0;
var myBoy;
var myFood;
var x = 30;
var y = 450;
var makeAllFood = [];
//var atefood = false;
var idleStrings = [];
var runStrings = [];
var flipX = false;

function preload()
{
    
    idleStrings = loadStrings("../data/idle.txt");
    runStrings = loadStrings("../data/run.txt"); //--

}

function setup()
{
    createCanvas(600,600);
    setInterval(updateIndex, 50);



    
    for(let i = 0; i < idleStrings.length; i++)
    {
        myBoy = new theBoy(idleStrings[i], x, y)
        animation.push(myBoy);

        myBoy = new theBoy(runStrings[i], x, y);  //--
        runAnimation.push(myBoy);  //--
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
    //animation[i].draw();

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
                    runAnimation[i].flipX = flipX; //--
                    runAnimation[i].x = x;  //--
                    runAnimation[i].y = y;  //--
                }
            for (let k = 0; k < makeAllFood.length; k++)
                {
                    if (animation[i].eat(makeAllFood[k].x, makeAllFood[k].y, 10, 10))
                        makeAllFood.splice(k, 1); //find the item in my array that I collided with and cut it?
                }
            }
            else
            {
                animation[i].draw();
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
