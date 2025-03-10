class food
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
    
    goodFood()
    {
        strokeWeight(1);
        fill(102, 0, 204)
        circle(this.x, this.y, 32)
    }

    badFood()
    { 
        strokeWeight(1);
        fill(192, 0 ,0) //--
        circle(this.x, this.y, 32) //--
    }


}