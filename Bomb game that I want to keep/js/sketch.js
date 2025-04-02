
var idleArray = [];
var myAnimation 
var myWalkAnimation; 
var walkArray = []; 

var allBadFood;
var totalScore = 0;

var particles = []; // ?????????? CodeTrainStuff

var health = 5; //health for bombs??


function preload()
{
    idleArray = loadStrings("../data/idle.txt");
    walkArray = loadStrings("../data/run.txt");
}

function setup()
{
    createCanvas (1200,1200);
    myAnimation = new animationImage( 130, 200, 0, 0); //--
    myAnimation.loadAnimation('idle', idleArray); //--
    myAnimation.loadAnimation('walk', walkArray); //--

    allBombs = new Group();
    allBombs.diameter = 50;
    allBombs.x = () => random (200,1100);
    allBombs.y = () => random (200,1100);
    allBombs.img = "../images/bomb.png";
    allBombs.scale = 0.8;
    allBombs.amount = 5;
    //could make 'static' to keep them from moving?

         
}

function draw()
{
    background(241,230,255);

    moveBoy();

    drawScores();

    endGame();
/*
    for(let i = 0; i < 3; i++) { //?????????? CodeTrainStuff
        particles.push(new Particle(500, 500)); //??????? //'push' adds the new particle to the particle Array?
    }
*/
    for (let particle of particles) { //????????????????// CodeTrainStuff
        let gravity = createVector(0, 0.2);
        particle.applyForce(gravity);
        particle.update();
        particle.show();
      }
    
      for (let i = particles.length - 1; i >= 0; i--) { //?????? CodeTrainStuff
        if (particles[i].finished()) { //checks if the particle has faded away?
          particles.splice(i, 1);
        }
      }
}

function moveBoy()
{
    if(kb.pressing('d')) //--
    {
        myAnimation.updatePosition('forward'); //--
        myAnimation.drawAnimation('walk'); //--
        myAnimation.currentAnimation.overlaps(allBombs, explode); //may not need? may just need attack?

/*
        myAnimation.drawAnimation('attack'); //???
        if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, allBombs.position.x, allBombs.position.y) < 200) //????
        {
            console.log("destroy");
        }
*/
         
    }
    else if(kb.pressing('a')) //--
    {
        myAnimation.updatePosition('reverse'); //--
        myAnimation.drawAnimation('walk'); //--
    }
    else if(kb.pressing('w'))
    {
        myAnimation.updatePosition('up'); //--
        myAnimation.drawAnimation('walk'); //--
    }
    else if(kb.pressing('s'))
    {
        myAnimation.updatePosition('down') //--
        myAnimation.drawAnimation('walk') //--
    }
    else
    {
        myAnimation.drawAnimation('idle') //--
        
    } 
}

function explode(currentAnimation, Bomb)
{

   // health -= 1;
   // if(health <= 0)
   // {
        Bomb.remove();

        for(let i = 0; i < 300; i++) 
            {
                particles.push(new Particle(Bomb.x, Bomb.y)); //??????? //'push' adds the new particle to the particle Array?
            }

        if(totalScore < 5);
        {
            totalScore += 1;
        }
    //}    

}

function drawScores()
{
    strokeWeight(1);
    textSize(70);
    fill(255, 79, 14);
    text("Score  " + totalScore, 850, 75)
}

function endGame()
{
    if(totalScore >= 5)
    {
        fill(255, 79, 14);
        text("You Win!!", 500, 500);
    }

}
    
