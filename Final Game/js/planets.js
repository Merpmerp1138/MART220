let Planet;
let Planets;

function PlanetSetUp()
{
    Planets = new Group();
    Planets.amount = 15; 
    Planets.diameter = 600;
    Planets.scale = 0.14;
}

function PlanetDraw()
{
    //1
    Planets[0].x = backGX +250;
    Planets[0].y = backGY +100;
    Planets[0].img = '../images/planet 1 v1.png';

    //2
    Planets[1].x = backGX +100;
    Planets[1].y = backGY +240;
    Planets[1].img = '../images/planet 2 v1.png';

    //3
    Planets[2].x = backGX +510;
    Planets[2].y = backGY +260;
    Planets[2].img = '../images/planet 3 v1.png';

    //4
    Planets[3].x = backGX +360;
    Planets[3].y = backGY +650;
    Planets[3].img = '../images/planet 4 v1.png';

    //5
    Planets[4].x = backGX +130;
    Planets[4].y = backGY +740;
    Planets[4].img = '../images/planet 5 v1.png';

    //6
    Planets[5].x = backGX +250;
    Planets[5].y = backGY +860;
    Planets[5].img = '../images/planet 6 v1.png';

    //7
    Planets[6].x = backGX +520;
    Planets[6].y = backGY +1200;
    Planets[6].img = '../images/planet 7 v1.png';

    //8
    Planets[7].x = backGX +770;
    Planets[7].y = backGY +1120;
    Planets[7].img = '../images/planet 8 v1.png';


    //9
    Planets[8].x = backGX +1290;
    Planets[8].y = backGY +250;
    Planets[8].img = '../images/planet 9 v1.png';

    //10
    Planets[9].x = backGX +1230;
    Planets[9].y = backGY +700;
    Planets[9].img = '../images/planet 10 v1.png';

    //11
    Planets[10].x = backGX +2010;
    Planets[10].y = backGY +200;
    Planets[10].img = '../images/planet 11 v1.png';

    //12
    Planets[11].x = backGX +1800;
    Planets[11].y = backGY +680;
    Planets[11].img = '../images/planet 12 v1.png';


    //13
    Planets[12].x = backGX +1660;
    Planets[12].y = backGY +840;
    Planets[12].img = '../images/planet 13 v1.png';

    //14
    Planets[13].x = backGX +1990;
    Planets[13].y = backGY +760;
    Planets[13].img = '../images/planet 14 v1.png';

    //15
    Planets[14].x = backGX +1910;
    Planets[14].y = backGY +900;
    Planets[14].img = '../images/planet 15 v1.png';

    Planets.overlaps(wallTop);
    Planets.overlaps(wallLeft);
    Planets.overlaps(wallRight);
    Planets.overlaps(wallBottom);

    if(crewCollected >= totalCrew)
    {
        Planets.scale = 0.0001;
    }
    if (crewCollected == 0)
        {
            Planets.scale = 0.00001;
        }

}