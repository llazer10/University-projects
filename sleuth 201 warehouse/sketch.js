/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 4047377
CaseNum: 201-3-27082019-4047377

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

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

    // write the code to draw around the Judge's body below

    beginShape();
    vertex(517,300);
    vertex(552,350);
    vertex(632,312);
    vertex(617,284);
    vertex(600,288);
    vertex(561,305);
    vertex(555,259);
    vertex(569,250);
    vertex(564,188);
    vertex(541,153);
    vertex(503,137);
    vertex(444,151);
    vertex(384,103);
    vertex(368,66);
    vertex(343,78);
    vertex(343,102);
    vertex(440,210);
    vertex(264,377);
    vertex(270,396);
    vertex(299,398);
    vertex(285,410);
    vertex(241,410);
    vertex(244,432);
    vertex(325,485);
    vertex(384,455);
    vertex(517,300);
    endShape();


    //A helpful mouse pointer
	push();
        fill(255,0,0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
