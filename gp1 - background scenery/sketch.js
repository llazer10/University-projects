/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

	fill(255);
	ellipse(500, 160, 100, 60);
	fill(240);
	ellipse(460, 165, 70, 50);
	fill(245);
	ellipse(540, 160, 70, 40);

	fill(255);
	ellipse(700, 170, 100, 60);
	fill(245);
	ellipse(660, 175, 90, 60);
	fill(235);
	ellipse(740, 175, 130, 50);

	fill(255);
	ellipse(600, 100, 150, 60);
	fill(230);
	ellipse(560, 105, 100, 50);
	fill(240);
	ellipse(640, 100, 150, 40);

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here

	fill(150);
	triangle(450, 432, 600, 200, 750, 432);

	//snow cap
	fill(255);
	triangle(567, 250, 610, 180, 640, 250);

	//shaded snow cap
	fill(230);
	triangle(610, 180, 660, 250, 630, 250);


	//second mountain
	fill(120);
	triangle(500, 432, 650, 160, 780, 432);

	//snow cap
	fill(255);
	triangle(600, 240, 650, 160, 688, 240);

	//shaded side
	fill(100);
	triangle(700, 432, 650, 160, 780, 432);

	//shadowed snow cap
	fill(230);
	triangle(664, 240, 650, 160, 690, 240);

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here
	fill(101, 67, 33);
	rect(800, 332, 40, 100);

	//branches/leaves

	fill(0, 100, 0);
	triangle(760, 350, 820, 290, 880, 350);
	fill(0, 120, 0);
	triangle(770, 330, 820, 250, 870, 330);
	fill(0, 140, 0);
	triangle(780, 300, 820, 230, 860, 300);

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

	fill(0, 0, 150);
	rect(100, 432, 100, 144);

	fill(139,69,19);
	rect(100, 432, 20, 160);
	rect(180, 432, 20, 160);

	//stripe of water
	fill(0, 0, 240);
	rect(130, 500, 5, 30);
	rect(150, 450, 5, 50);
	rect(160, 520, 3, 20);
	rect(125, 435, 5, 30);
	rect(145 , 555, 5, 30);

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	//apple
	fill(255, 0, 0);
	ellipse(435, 418, 30, 30);
	fill(0, 220, 0);
	triangle(430, 410, 435, 399, 440, 410);
	fill(139,69,19);
	rect(433, 400, 4, 8);


	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
