class theBoy
{
    constructor(path, x, y)
    {
        this.path = path;

        this.myImage = loadImage(this.path);

        this.x = x;
        this.y = y;

        this.imageWidth = 90;
        this.imageHeight = 141;
    }

    draw()
    {

        push();
        if(this.flipX)
        {
            translate(this.imageWidth, 0); // prevents the jump
            scale(-1.0, 1.0);       //flip??
            image(this.myImage, -this.x, this.y, 153.5, 141);
        }
        else
        {
            image(this.myImage, this.x, this.y, 153.5, 141);
        }
        pop();
        

    }

}
