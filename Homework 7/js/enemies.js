class enemies
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
    
    draw()
    {
        fill(102)
        circle(this.x, this.y, 32)
    }


}