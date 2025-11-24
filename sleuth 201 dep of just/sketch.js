/*
201 - The case of Judge Hopper:
Stage 1 - Department of Justice

Officer: 4047377
CaseNum: 201-0-82812050-4047377

Judge Hopper has gone missing and we’ve been booked to investigate. This is the big time kid. Now I need you to head over to Hopper’s office at the Department of Justice and gather clues.

Draw a separate ellipse around 4 pieces of evidence:
Letter opener,
Death threat letters,
telephone,
and the AGOL leaflet

Each ellipse should cover the entire object whilst keeping as close to the edges as possible. You will need to use different values for the width and height arguments.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  ellipse ()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the evidence below

    // Letter opener
    ellipse(266, 366, 65, 140);
    // Death threat letters
    ellipse(422, 294, 140, 130);
    // Telephone
    ellipse(720, 245, 180, 150);
    // AGOL leaflet
    ellipse(571, 240, 110, 130);




    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
