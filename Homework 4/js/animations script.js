var animation = [];
var i = 0;
var myBoy;
/*/
function preload()
{
  

    for (var i = 0; i < 13; i ++);
    {
        myBoy = new theBoy("../images/flatboy/png/Dead(" + i + ").png");
        animation.push(theBoy);
    }

}
/*/
function setup()
{
    createCanvas(600,600);
    setInterval(updateIndex, 50);
}

function draw()
{
    background(100);
    //loadImage("../images/flatboy/png/Dead(1).png");
    //animation[i].draw();
}

function updateIndex ()
{
    i++;
    if(i > 14)
    {
        i = 0;
    }
}
    