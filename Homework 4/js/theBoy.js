class theBoy
{
    constructor(path)
    {
        this.path = path;

        this.myImage = loadImage(this.path);
    }

    draw()
    {
        image(this.myImage, 10,100);
    }

}
