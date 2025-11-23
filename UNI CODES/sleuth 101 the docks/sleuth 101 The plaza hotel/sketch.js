/*

Officer: 4047377
CaseNum: 101-3-47546692-4047377

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Blue Violet filled rectangle with a Dark Salmon outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Purple filled
rectangle with a Dark Turquoise outline around him.

Identify the man reading the newspaper by drawing a Dark Goldenrod filled rectangle
with a Dark Green outline around him.

Identify the woman with the dog by drawing a Dark Violet filled rectangle with a
Crimson outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...

	//Anna Lovelace
	rect(180,240,240,490)
	fill(138,43,226); //Blue Violet
	stroke(233,150,122); //Dark Salmon

	//Man with monocle
	rect(940,375,140,185)
	fill(128,0,128); //Purple
	stroke(0,206,209); //Dark Turquoise

	//Man with newspaper
	rect(585,305,140,255)
	fill(184,134,11); //Dark Goldenrod
	stroke(0,100,0); //Dark Green

	//Woman with dog
	rect(1160,245,250,500)
	fill(148,0,211); //Dark Violet
	stroke(220,20,60); //Crimson



	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
