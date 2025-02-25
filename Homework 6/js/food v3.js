class food
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
    
    draw()
    {
        fill(102, 0, 204)
        circle(this.x, this.y, 32)
    }


}