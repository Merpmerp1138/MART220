var img;

function preload() 
{
  img = loadImage('hedge folder/hedgehog.jpg');
}


function setup() 
{
    createCanvas(800,600);
}


function draw()
{
    background(168,168,168);
    image(img, 0, 0);
}