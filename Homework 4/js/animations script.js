var animation = [];
var i = 0;
var myBoy;
function preload()
{
  

    for(var i = 0; i < 15; i ++)
    {
        myBoy = new theBoy("../images/Idle (" + i + ").png");
        animation.push(myBoy);
    }

}

function setup()
{
    createCanvas(600,600);
    setInterval(updateIndex, 50);
}

function draw()
{
    background(241,230,255);
    animation[i].draw();
}

function updateIndex()
{
    i++;
    if(i > 14)
    {
        i = 0;
    }

}
