<!--

/*

RogueScript

Version 0.1

13/11/2010  -  13/11/2010

Copyright © 2011 Jonathan Phillips

*/


/////////////////////////
//
// changeElementValue
// - Prompts the user to input a value which can be passed to a variable.
//

function changeElementValue (elementId, newValue) {
	element = document.getElementById (elementId);
	element.value = newValue;
}





/////////////////////////
//
// changeImage
// - Changes the src property of an image.
//

function changeImage (elementId, newSource, elementType) {	
	if (elementType == "background") {
		element = document.getElementById (elementId);
		element.style.backgroundImage = newSource;
	} else {
  		element = document.getElementById (elementId);
  		element.src = newSource;
	}
}





/////////////////////////
//
// hideElement
// - Makes an element invisible.
// - See showElement.
//

function hideElement (elementId) {
	element = document.getElementById (elementId);
	element.style.visibility = "hidden";
}





/////////////////////////
//
// loadScreen
// - Makes a specific gameplay screen visible and hides all the others.
//

function loadScreen (screenToLoadId) {
	for (itemIndex = 0; itemIndex < gameScreens.length; itemIndex = itemIndex + 1) {
		element = document.getElementById (gameScreens [itemIndex]);
		element.style.visibility = "hidden";
	}
	element = document.getElementById (screenToLoadId);
	element.style.visibility = "visible";
	activeGameScreen = screenToLoadId;
}





/////////////////////////
//
// moveElement
// - Positions an element at the specified X and Y locations.
//

function moveElement (elementId, newX, newY) {
	element = document.getElementById (elementId);
	element.style.left = newX;
	element.style.top = newY;
}





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
// showElement
// - Makes an element visible.
// - See hideElement.
//

function showElement (elementId) {
	element = document.getElementById (elementId);
	element.style.visibility = "visible";
}

//-->