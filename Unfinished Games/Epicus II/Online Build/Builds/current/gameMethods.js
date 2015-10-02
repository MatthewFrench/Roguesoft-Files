<!--


// -------------------------


// preloadImages
// - Loads images into the cache before starting the game.

function preloadImages () {
	image = new Image();
	imageSourceArray = new Array();
	imageSourceArray [1] = "http://tdsy.co.uk/images/navButton1a.gif";
	imageSourceArray [2] = "http://tdsy.co.uk/images/navButton2a.gif";
	imageSourceArray [3] = "http://tdsy.co.uk/images/navButton3a.gif";
	var arrayItem = 0;
	for(arrayItem = 0; arrayItem <= 3; arrayItem ++) {
		image.src = imageSourceArray [arrayItem];
	}
}


// -------------------------


//-->