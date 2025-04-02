class animationImage
{

constructor(x, y, w, h)
{
    this.x = x;
    this.y = y;
    this.w = w; //--
    this.h = h; //--
    //this.imageObjects = []; //--
    this.currentAnimation; //--
    this.createAnimation(); //--
    //this.i = 0; //--
    //this.currentFrameCount = 0; //--
    this.direction = ""; //--
}

getX() //--
{
    return this.x; //--
}

setX(x) //--
{
    this.x = x; //--
}
/*
setCurrentFrameCount(currentFrameCount) //--
{
    this.currentFrameCount = createSprite(this.x, this.y); //--
}
*/
createAnimation() //--
{
    this.currentAnimation = createSprite(this.x, this.y); //--
}

getCurrentAnimation() //--
{
    return this.currentAnimation; //--
}

loadAnimation(animationType, fileNames) //--
{
    this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length - 1]);
    //this.currentAnimation = loadAnimation(this.fileNames[0], this.fileNames[this.fileNames.length-1]); //--

    this.currentAnimation.width = 150; //-- "set the hit box???"
    this.currentAnimation.height = 150; //--
}

drawAnimation(animationType) //--
{
    this.currentAnimation.frameDelay = 5; //--
    this.currentAnimation.scale = 0.5;
    this.currentAnimation.changeAnimation(animationType); //--

    if (animationType == 'walk' && this.direction == 'forward')
    {
        this.currentAnimation.direction = 0; //--
        this.currentAnimation.mirror.x = false; //--
        this.currentAnimation.speed = 8;
    }
    else if (animationType == 'walk' && this.direction == 'reverse') //--
    {
        this.currentAnimation.direction = 180; //--
        this.currentAnimation.mirror.x = true; //--
        this.currentAnimation.speed = 8;
    }
    else if (animationType == 'walk' && this.direction == 'up') //--
    {
        this.currentAnimation.direction = -90; //--
        this.currentAnimation.speed = 8;
    }
    else if (animationType == 'walk' && this.direction == 'down') //--
    {
        this.currentAnimation.direction = 90; //--
        this.currentAnimation.speed = 8;
    }
    else 
    {
        this.currentAnimation.velocity.x = 0; //stops the character velocity once you let go of the button
        this.currentAnimation.velocity.y = 0; 
    }
}

incrementIndex()
{
    if (this.currentFrameCount % 5 ==0)
    {
        this.i++;
    }

    if(this.i >= this.fileNames.length)
    {
        this.i = 0;
    }
}

updatePosition(direction)
{
    this.direction = direction;
}


isColliding(myImage)
{
    return this.currentAnimation.collide(myImage);
}
    

}