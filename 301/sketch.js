/*
The case of the Python Syndicate
Stage 1

Officer: 4047377
CaseNum: 301-0-87554886-4047377

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var adaLovelaceImg;
var rockyKrayImg;
var annaKarpinskiImg;
var countessHamiltonImg;
var pawelKarpinskiImg;
var robbieKrayImg;



//declare your new variables below
var rockyKrayXPos = 408;
var rockyKrayYPos = 40;

var adaLovelaceXPos = 115;
var adaLovelaceYPos = 40;

var annaKarpinskiXPos = 701;
var annaKarpinskiYPos = 40;

var countessHamiltonXPos = 115;
var countessHamiltonYPos = 309;

var pawelKarpinskiXPos = 408;
var pawelKarpinskiYPos = 309;

var robbieKrayXPos = 701;
var robbieKrayYPos = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	adaLovelaceImg = loadImage("ada.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	robbieKrayImg = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(rockyKrayImg, rockyKrayXPos, rockyKrayYPos);

	image(adaLovelaceImg, adaLovelaceXPos, adaLovelaceYPos);
	image(annaKarpinskiImg, annaKarpinskiXPos, annaKarpinskiYPos);
	image(countessHamiltonImg, countessHamiltonXPos, countessHamiltonYPos);
	image(pawelKarpinskiImg, pawelKarpinskiXPos, pawelKarpinskiYPos);
	image(robbieKrayImg, robbieKrayXPos, robbieKrayYPos);

}