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

	treePos2_x = width/1.4;
	treePos2_y = height/2;

	canyon = {
	x_pos: 40,
	width: 100,
	};

	collectable = {
	x_pos: 100,
	y_pos: 100,
	size: 50,
	};

	cloud = {
	x_pos: 730,
	y_pos: 100,
	size: 50,
	};

	mountain = {
	x_pos: 700,
	y_pos: 400,
	};

}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height+500, width - floorPos_y); //draw some green ground

	//mountain&cloud//

	//move cloud
	cloud.x_pos -= 0.2;
	if (cloud.x_pos < -300) 
		cloud.x_pos = width + 200;
	

	//1. clouds

	//1st cloud
	fill(255);
	ellipse(cloud.x_pos, 160, cloud.y_pos, cloud.size+10);
	fill(240);
	ellipse(cloud.x_pos -40, cloud.y_pos + 65, cloud.size +20, cloud.size);
	fill(245);
	ellipse(cloud.x_pos +40, cloud.y_pos + 60, cloud.size+20, cloud.size-10);
	//2nd cloud
	fill(255);
	ellipse(cloud.x_pos+200, cloud.y_pos +70, cloud.size+50, cloud.size+10);
	fill(245);
	ellipse(cloud.x_pos +160, cloud.y_pos +75, cloud.size+40, cloud.size+10);
	fill(235);
	ellipse(cloud.x_pos +240, cloud.y_pos+75, cloud.size+80, cloud.size);
	//3rd cloud
	fill(255);
	ellipse(cloud.x_pos +100, cloud.y_pos, cloud.size+100, cloud.size+10);
	fill(230);
	ellipse(cloud.x_pos +60, cloud.y_pos+5, cloud.size+10, cloud.size);
	fill(240);
	ellipse(cloud.x_pos +140, cloud.y_pos, cloud.size+100, cloud.size-10);

	//2. a mountain in the distance

	fill(150);
	triangle(mountain.x_pos, mountain.y_pos+32, mountain.x_pos+150, mountain.y_pos-200, mountain.x_pos+300, mountain.y_pos+32);

	//snow cap
	fill(255);
	triangle(mountain.x_pos+117, mountain.y_pos-150, mountain.x_pos+150, mountain.y_pos-200, mountain.x_pos+190, mountain.y_pos-150);

	//shaded snow cap
	fill(230);
	triangle(mountain.x_pos+150, mountain.y_pos-200, mountain.x_pos+160, mountain.y_pos-150, mountain.x_pos+190, mountain.y_pos-150);


	//second mountain
	fill(120);
	triangle(mountain.x_pos+50, mountain.y_pos+32, mountain.x_pos+200, mountain.y_pos-240, mountain.x_pos+330, mountain.y_pos+32);

	//snow cap
	fill(255);
	triangle(mountain.x_pos+155, mountain.y_pos-160, mountain.x_pos+200, mountain.y_pos-240, mountain.x_pos+238, mountain.y_pos-160);

	//shaded side
	fill(100);
	triangle(mountain.x_pos+250, mountain.y_pos+32, mountain.x_pos+200, mountain.y_pos-240, mountain.x_pos+330, mountain.y_pos+32);

	//shadowed snow cap
	fill(230);
	triangle(mountain.x_pos+214, mountain.y_pos-160, mountain.x_pos+200, mountain.y_pos-240, mountain.x_pos+240, mountain.y_pos-160);


	//draw trees//

	//trunk
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

	//second tree//

	//trunk
	fill(101, 67, 33);
	rect(treePos2_x, treePos2_y + 45, 40, 100);

	//branches/leaves

	fill(0, 100, 0);
	//triangle(760, 350, 820, 290, 880, 350);
	triangle(treePos2_x - 20, treePos2_y + 60, treePos2_x + 20, treePos2_y + 10, treePos2_x + 60, treePos2_y	 + 60);
	fill(0, 120, 0);
	//triangle(770, 330, 820, 250, 870, 330);
	triangle(treePos2_x - 10, treePos2_y + 30, treePos2_x + 20, treePos2_y - 30, treePos2_x + 50, treePos2_y	 + 30);
	fill(0, 140, 0);
	//triangle(780, 300, 820, 230, 860, 300);
	triangle(treePos2_x , treePos2_y, treePos2_x + 20, treePos2_y - 50, treePos2_x + 40, treePos2_y);

	//draw canyon//
	fill(0, 0, 150);
	rect(canyon.x_pos, 432, canyon.width, 144);

	fill(139,69,19);
	rect(canyon.x_pos, 432, canyon.width-80, 160);
	rect(canyon.x_pos+90, 432, canyon.width-80, 160);

	//stripe of water
	fill(0, 0, 240);
	rect(canyon.x_pos+30, 500, canyon.width-95, 30);
	rect(canyon.x_pos+50, 450, canyon.width-95, 50);
	rect(canyon.x_pos+60, 520, canyon.width-95, 20);
	rect(canyon.x_pos+25, 435, canyon.width-95, 30);
	rect(canyon.x_pos+45, 555, canyon.width-95, 30);

	//draw collectable item//

	fill(255, 0, 0);
	ellipse(collectable.x_pos +335, collectable.y_pos +318, collectable.size -20, collectable.size -20);
	fill(0, 220, 0);
	triangle(collectable.x_pos + 330, collectable.y_pos +310, collectable.x_pos + 335, collectable.y_pos + 299, collectable.x_pos+340, collectable.y_pos +310);
	fill(139,69,19);
	rect(collectable.x_pos +333, collectable.y_pos +300, collectable.size -46, collectable.size -42);

	//draw the game character//

	//head
	fill(200,100,100);
	ellipse(gameChar_x, gameChar_y - 50, 30, 30);
	//legs
	fill(0,0,200);
	rect(gameChar_x - 10, gameChar_y - 30, 8, 30);
	rect(gameChar_x + 2, gameChar_y - 30, 8, 30);
	//body
	fill(0);
	triangle(gameChar_x - 15, gameChar_y - 40, gameChar_x + 15, gameChar_y - 40, gameChar_x, gameChar_y - 10);
	//arms
	fill(0);
	rect(gameChar_x - 17, gameChar_y - 39, 6, 25);
	rect(gameChar_x + 12, gameChar_y - 39, 6, 25);
	//eyes
	fill(0);
	ellipse(gameChar_x - 5, gameChar_y - 55, 5, 5);
	ellipse(gameChar_x + 5, gameChar_y - 55, 5, 5);
	//hat
	fill(0,0,200);
	arc(gameChar_x, gameChar_y - 65, 30, 14, PI, 0);
	rect(gameChar_x - 17.5, gameChar_y - 65, 35, 5);

}

function mousePressed()
{

	gameChar_x = mouseX;
	gameChar_y = mouseY;

}
