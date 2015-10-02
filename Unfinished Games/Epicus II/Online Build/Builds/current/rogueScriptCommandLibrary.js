<!--





/////////////////////////
///  General Methods  ///
/////////////////////////





/////////////////////////
//
// changeImage
// - Changes the src property of an image.
//

function changeImage (imgID, newSource) {	
  	var image = document.getElementById (imgId);
  	image.src = newSource;
}





/////////////////////////
//
// moveElement
// - Positions an element at the specified X and Y locations.
//

function moveElement (elementID, newX, newY) {
	// Reposition the sprite.
	element = document.getElementById (elementID);
	element.style.left = newX;
	element.style.top = newY;
}





/////////////////////////
///    Game Methods   ///
/////////////////////////





/////////////////////////
//
// randomNumber
// - Generates a random number between 1 and maxValue.
//

function randomNumber (maxValue) {
	result = maxValue * Math.random();
	result = Math.ceil (randomNumber);
	return result;
}





/////////////////////////
//
// entity
// - Creates an entity.
//

function entity ( number, name, type, imgSource, gridX, gridY) {
	this.name = name;
	this.type = type;
	this.imgSource = imgSource;
	this.gridX = gridX;
	this.gridY = gridY;
	
	this.divID = "";
	this.imgID = "";
}





//-->