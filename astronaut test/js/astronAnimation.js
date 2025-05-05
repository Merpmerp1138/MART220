class animationImage
{
    
    constructor(x, y, w, h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.currentAnimation;
        this.createAnimation();

        this.direction = "";
    }

    getX()
    {
        return this.x;
    }

    setX(x)
    {
        this.x = x;
    }

    createAnimation()
    {
        this.currentAnimation = createSprite(this.x, this.y);
    }

    getCurrentAnimation()
    {
        return this.currentAnimation;
    }

    loadAnimation(animationType, fileNames)
    {
        this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length - 1]);

        this.currentAnimation.width = 150;
        this.currentAnimation.height = 150;
    }

    drawAnimation(animationType)
    {
        this.currentAnimation.frameDelay = 5;
        this.currentAnimation.scale = 0.01;
        this.currentAnimation.changeAnimation(animationType);
        //this.currentAnimation.velocity.x = 0;
        //this.currentAnimation.velocity.y = 0;
    }

    incrementIndex()
    {
        if (this.currentFrameCount % 5 == 0)
        {
            this.i++
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

    ifColliding(myImage)
    {
        return this.currentAnimation.collide(myImage);
    }

}