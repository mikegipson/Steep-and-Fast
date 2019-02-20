//write function called randomCircle - takes 2 inputs , color and size
// write a for loop that draws circles repeatedly looping through 10 shades


function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL);
	
}

function draw(){
	//noLoop();

	background(130,180,255);
	
	noStroke();

	translate(-windowWidth/2,-windowHeight/2);
	//Snow
	fill(240,240,240);
	beginShape();
		vertex(0,0);
		vertex(windowWidth/11,0);
		vertex(windowWidth,windowHeight-windowHeight/11);
		vertex(windowWidth,windowHeight);
		vertex(0,windowHeight);
		vertex(0,0);
	endShape();

	mounds(100000,windowWidth/11,0,2,5);
	mounds(100,0,windowHeight/3,3,3);
	mounds(700,100,windowHeight-windowHeight/4,6,60);

	mounds(700,400,400,4,40);


	//Skiier
	push();
		translate(windowWidth/2,windowHeight/2);
	    rotateZ(radians(26));
		fill(0);
		rect(-300,100,500,3);
	pop();

	console.log("X: "+mouseX+" Y: "+mouseY);
}


function mounds(count,startX,startY,maxSize,displacement){

	noStroke();
	fill(255);
	for(i = 0; i < count; i++){
		ellipse(startX+random(displacement)+i*(windowHeight/windowWidth),startY+random(displacement)+i*(windowHeight/windowWidth)/2.2,maxSize*random(5),maxSize*random(5));
	}


}