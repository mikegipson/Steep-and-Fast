//write function called randomCircle - takes 2 inputs , color and size
// write a for loop that draws circles repeatedly looping through 10 shades


function setup(){
	createCanvas(1000, 1000, WEBGL);
	mounds(100000,width/11,0,2,5);
	mounds(100,0,height/3,3,3);
	mounds(700,100,height-height/4,6,60);
	mounds(700,400,400,4,40);
}

function draw(){
	smooth();
	noLoop();

	background(130,180,255);
	
	noStroke();

	translate(-width/2,-height/2);
	//Snow
	fill(240,240,240);
	beginShape();
		vertex(0,0);
		vertex(width/11,0);
		vertex(width,height-height/1.70);
		vertex(width,height);
		vertex(0,height);
		vertex(0,0);
	endShape();

	push();
		mounds(100000,width/11,0,2,5);
		mounds(100,0,height/3,3,3);
		mounds(700,100,height-height/4,6,60);
		mounds(700,400,400,4,40);
		mounds(100,0,393,3,40);
	pop();


	//Skiier
	push();
		stroke(0);
		strokeWeight(3);
		line(230,500,650,710);// Ski
		fill(0);
		quad(330,550,440,605,410,540,360,520); //Foot
		quad(410,540,560,499,516,419,360,520); //Leg
		arc(493,377,300,200,radians(60),radians(355)); //TORSO
		ellipse(640,370,150,115); //Head
		quad(495,379,597,448,575,468,452,394); // Arm
		ellipse(586,458,60,30); // Hand
		line(583,465,248,355); // SkiPole
	pop();

	console.log("X: "+mouseX+" Y: "+mouseY);
}


function mounds(count,startX,startY,maxSize,displacement){

	noStroke();
	fill(255);
	for(i = 0; i < count; i++){
		ellipse(startX+random(displacement)+i*(height/width),startY+random(displacement)+i*(height/width)/2.2,maxSize*random(5),maxSize*random(5));
	}


}