
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
gw = 75;
gl = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
gcarx = 5;
gcary = 225;
function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

	greencar_imageTag = new Image();
	greencar_imageTag.onload = uploadgreencar;
    greencar_imageTag.src = greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag,gcarx,gcary,gw,gl);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
	 if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
	if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
	if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (gcary >=0) {
		gcary = gcary - 10;
	}
	console.log ("When up arrow is pressed, x = " + gcarx + " | y = " + gcary);
	uploadBackground();
	uploadgreencar();
}

function down()
{
	if (gcary <=300) {
		gcary = gcary + 10;
	}
	console.log ("When down arrow is pressed, x = " + gcarx + " | y = " + gcary);
	uploadBackground();
	uploadgreencar();
}

function left()
{
	if (gcarx >=0) {
		gcarx = gcarx - 10;
	}
	console.log ("When left arrow is pressed, x = " + gcarx + " | y = " + gcary);
	uploadBackground();
	uploadgreencar();
}

function right()
{
	if (gcarx <=700) {
		gcarx = gcarx + 10;
	}
	console.log ("When right arrow is pressed, x = " + gcarx + " | y = " + gcary);
	uploadBackground();
	uploadgreencar();
}
