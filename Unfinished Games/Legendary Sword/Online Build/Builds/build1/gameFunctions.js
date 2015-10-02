<!--

/*

Legendary Sword

Version 0.1

13/11/2010  -  13/11/2010

Copyright © 2011 Jonathan Phillips



NOTES:

userAsk2 = parseInt (userAsk2);

function TimedCount () {
	npc1.PerformAction ();
	npc1.DrawEntity ();
	timer = setTimeout ("TimedCount ()", 1000);
}

*/



/////////////////////////
//
// createPlayer
// - Creates a new player.
//

function createPlayer (name, gridX, gridY, imgSrc) {
	this.alive = 1;
	this.name = name;
	this.gridX = gridX;
	this.gridY = gridY;
	this.newGridX = this.gridX;
	this.newGridY = this.gridY;
	this.imgSrc = imgSrc;
	this.divId = "playerDiv";
	this.imgId = "playerImg";
	
	this.spriteX = this.newGridX * 44;
	this.spriteX = this.spriteX - 44;
	this.spriteY = this.newGridY * 44;
	this.spriteY = this.spriteY - 44;
	this.spriteX = this.spriteX + "px";
	this.spriteY = this.spriteY + "px";
	moveElement (this.divId, this.spriteX, this.spriteY);
	changeImage (this.imgId, this.imgSrc)
	
	this.movePlayer = movePlayer;
}





/////////////////////////
//
// createNpc
// - Creates a new NPC.
//

function createNpc (name, gridX, gridY, imgSrc) {
	this.alive = 1;
	this.name = name;
	this.gridX = gridX;
	this.gridY = gridY;
	this.newGridX = this.gridX;
	this.newGridY = this.gridY;
	this.imgSrc = imgSrc;
	this.divId = "npc" + id + "Div";
	this.imgId = "npc" + id + "Img";
	
	this.spriteX = this.newGridX * 44;
	this.spriteX = this.spriteX - 44;
	this.spriteY = this.newGridY * 44;
	this.spriteY = this.spriteY - 44;
	this.spriteX = this.spriteX + "px";
	this.spriteY = this.spriteY + "px";
	moveElement (this.divId, this.spriteX, this.spriteY);
	changeImage (this.imgId, this.imgSrc)
	
	this.moveNpc = moveNpc;
}





/////////////////////////
//
// handleKeydown
// - Handles keyboard input.
//

function handleKeydown (ev) {
	// Determine which key was pressed by storing its numeric identity in the "key" variable.
	key = ( (ev.which) || (ev.keyCode) );
	//alert (key);
	
	if (activeGameScreen == "titleScreen") {
		loadScreen ("overworldScreen");
	}
	
	if (activeGameScreen == "overworldScreen") {
		// z
		if (key == 90) {changeImage ("roomDiv", "url('images/room1.png')", "background")}
		// x
		if (key == 88) {changeImage ("roomDiv", "url('images/room2.png')", "background")}
		// c
		if (key == 67) {changeImage ("playerImg", "images/humanM1.gif")}
		// v
		if (key == 86) {changeImage ("playerImg", "images/wolf.gif")}

		// Up arrow.
		if (key == 38) {player.movePlayer ("Up")}
		// Down arrow.
		if (key == 40) {player.movePlayer ("Down")}
		// Left arrow.
		if (key == 37) {player.movePlayer ("Left")}
		// Right arrow.
		if (key == 39) {player.movePlayer ("Right")}
	}
}





/////////////////////////
//
// moveNpc
// - Moves the Npc sprite in a designated direction.
//

function moveNpc (direction) {
	npc.newSpriteX = npc.spriteX;
	npc.newSpriteY = npc.spriteY;
	if (direction == "Up") {npc.newSpriteY = npc.newSpriteY - 44}
	if (direction == "Down") {npc.newSpriteY = npc.newSpriteY + 44}
	if (direction == "Left") {npc.newSpriteX = npc.newSpriteX - 44}
	if (direction == "Right") {npc.newSpriteX = npc.newSpriteX + 44}
	moveElement (npc.divId, npc.newSpriteX, npc.newSpriteY);
}





/////////////////////////
//
// movePlayer
// - Moves the player sprite in a designated direction.
//

function movePlayer (direction) {
	this.newGridX = this.gridX;
	this.newGridY = this.gridY;
	
	// Check which direction the player is trying to move in.
	if (direction == "Up") {this.newGridY = this.gridY - 1;}
	if (direction == "Down") {this.newGridY = this.gridY + 1;}
	if (direction == "Left") {this.newGridX = this.gridX - 1;}
	if (direction == "Right") {this.newGridX = this.gridX + 1;}
	
	// Check what kind of tile the player is trying to move onto.
	gridRowX = grid [this.newGridY];
	this.tile = gridRowX.charAt (this.newGridX);
	if (this.tile == "0") {this.tile = "Empty"}
	if (this.tile == "1") {this.tile = "Wall"}
	if (this.tile == "2") {this.tile = "Door"}
	if (this.tile == "3") {this.tile = "Signpost"}
	if (this.tile == "9") {this.tile = "Empty"}
	
	// Check if the player is leaving the grid.
	if (this.newGridY < 1) {
		this.tile = "Wall";
		if (northRoom > 0) {
			this.gridY = gridSize;
			loadRoom (northRoom);
		}
	}
	if (this.newGridY > gridSize) {
		this.tile = "Wall";
		if (southRoom > 0) {
			this.gridY = 1;
			loadRoom (southRoom);
		}
	}
	if (this.newGridX < 1) {
		this.tile = "Wall";
		if (westRoom > 0) {
			this.gridX = gridSize;
			loadRoom (westRoom);
		}
	}
	if (this.newGridX > gridSize) {
		this.tile = "Wall";
		if (eastRoom > 0) {
			this.gridX = 1;
			loadRoom (eastRoom);
		}
	}
	
	// Check for collision with NPCs.
	//if (player.newGridX == npc.gridX && player.newGridY == npc.gridY) {
	//	player.tile = "Wall";
	//	element = document.getElementById ("textField1");
	//	element.value = (npc1.name$ + ": " + npc1.speech$ + "");
	//	TextBoxTitle.innerText = (npc1.name$);
	//	TextBox.innerText = (npc1.speech$);
	//}
	
	// Perform the new tile's behaviour.
	if (this.tile == "Door") {
		if (direction == "Up") {this.newGridY = this.newGridY - 1}
		if (direction == "Down") {this.newGridY = this.newGridY + 1}
		if (direction == "Left") {this.newGridX = this.newGridX - 1}
		if (direction == "Right") {this.newGridX = this.newGridX + 1}
		this.tile = "Empty";
	}
	if (this.tile == "Signpost") {
		alert (signpostText);
		this.tile = "Wall";
	}
	if (this.tile == "Empty") {
		this.gridX = this.newGridX;
		this.gridY = this.newGridY;
	}
	if (this.tile == "Wall") {
		this.newGridX = this.gridX;
		this.newGridY = this.gridY;
	}
	
	this.spriteX = this.newGridX * 44;
	this.spriteX = this.spriteX - 44;
	this.spriteY = this.newGridY * 44;
	this.spriteY = this.spriteY - 44;
	this.spriteX = this.spriteX + "px";
	this.spriteY = this.spriteY + "px";
	moveElement (this.divId, this.spriteX, this.spriteY);
}


//-->