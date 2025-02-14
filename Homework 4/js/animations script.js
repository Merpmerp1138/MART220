
var animation = [];
var i = 1;
var myBoy;
function preload()
{
  

    for(var i = 1; i < 10; i ++);
    {
        myBoy = new theBoy("../images/Idle (" + i + ").png");
        animation.push(theBoy);
    }

}

function setup()
{
    createCanvas(600,600);
    setInterval(updateIndex, 50);
}

function draw()
{
    background(100);
    animation[i].draw();
}

function updateIndex ()
{
    i++;
    if(i > 9)
    {
        i = 0;
    }

}
/*/


var animation = [];
var i = 0;
var myBoy;
function preload()
{

   
    for(var i = 1; i < 10; i++)
    {
        myBoy = new theBoy("../images/Idle (" + i + ").png");  
        animation.push(theBoy);
    }
    
}

function setup()
{
    createCanvas(800, 800);
    setInterval(updateIndex, 50);
}

function draw()
{
    background(120);
    animation[i].draw();
}

function updateIndex()
{
    i++;
    if(i > 9)
    {
        i = 0;
    }
    
}
/*/
    