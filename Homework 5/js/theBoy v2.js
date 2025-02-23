class theBoy
{
    constructor(path, x, y)
    {
        this.path = path;

        this.myImage = loadImage(this.path);

        this.x = x;
        this.y = y;

        this.imageWidth = 153.5;
        this.imageHeight = 141;
    }

    draw()
    {
        image(this.myImage, this.x, this.y, 153.5, 141);
    }
    
    eat(x2, y2, w2, h2)
    {
        return (
            this.x < x2 + w2 &&
            this.x + this.imageWidth > x2 &&
            this.y < y2 + h2 &&
            this.y + this.imageHeight > y2
        );
    }

}
