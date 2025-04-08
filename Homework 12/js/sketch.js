var speed = 1;

function preload()
{
     img1 = loadImage ('textures/gradient1.jpg')
     img2 = loadImage ('../textures/texture2.png')
     img3 = loadImage ('../textures/texture3.png')
     img4 = loadImage ('../textures/space4.png')
     img5 = loadImage ('../textures/space5.jpg')
     imgTitle = loadImage ('../textures/title.png')
}

function setup() 
{
    createCanvas (600, 600, WEBGL);

}

function draw()
{
background(20)
speed += 0.01;

//box
push();
translate(200, -200, 0);
rotateZ(speed * 3);
texture(img1);
noStroke();
box(75,100,120);
pop();



//sphere
push();
translate(0, 0, 0);
rotateX(speed);
rotateY(speed);
texture(img2);
noStroke();
sphere(80);
pop();




//cylinder
push();
translate(-200, -200, 0);
rotateY(speed * 7);
rotateX(-3);
texture(img3);
noStroke();
cylinder(75,60);
pop();




//cone
push();
translate(200, 200, 0);
rotateY(speed);
rotateZ(speed * 4);
texture(img4);
noStroke();
cone(200,75);
pop();





//torus
push();
translate(0, 0, 0);
rotateX(speed);
rotateY(speed);
rotateZ(speed);
texture(img5);
noStroke();
torus(200,20);
pop();





//title and name
push();
translate(-200, 240, 0);
rotateX(speed);
rotateZ(speed);
texture(imgTitle);
noStroke();
plane(200,100);
pop();

}