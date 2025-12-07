/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground


	//draw the game character

	//head
	fill(200,100,100);
	ellipse(gameChar_x, gameChar_y - 50, 30, 30);
	//body
	fill(0);
	triangle(gameChar_x - 15, gameChar_y - 40, gameChar_x + 15, gameChar_y - 40, gameChar_x, gameChar_y - 10);
	//legs
	rect(gameChar_x - 10, gameChar_y - 30, 8, 30);
	rect(gameChar_x + 2, gameChar_y - 30, 8, 30);

	//draw a tree
	fill(101, 67, 33);
	rect(treePos_x, treePos_y + 45, 40, 100);

	//branches/leaves

	fill(0, 100, 0);
	//triangle(760, 350, 820, 290, 880, 350);
	triangle(treePos_x - 20, treePos_y + 60, treePos_x + 20, treePos_y + 10, treePos_x + 60, treePos_y	 + 60);
	fill(0, 120, 0);
	//triangle(770, 330, 820, 250, 870, 330);
	triangle(treePos_x - 10, treePos_y + 30, treePos_x + 20, treePos_y - 30, treePos_x + 50, treePos_y	 + 30);
	fill(0, 140, 0);
	//triangle(780, 300, 820, 230, 860, 300);
	triangle(treePos_x , treePos_y, treePos_x + 20, treePos_y - 50, treePos_x + 40, treePos_y);

}

function mousePressed()
{

	gameChar_x = mouseX;
	gameChar_y = mouseY;

}
