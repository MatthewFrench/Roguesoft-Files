<!--

/*

Legendary Sword

Version 0.1

13/11/2010  -  13/11/2010

Copyright © 2011 Jonathan Phillips

*/

// Initiate global variables.
var gameState = "inPlay";
var gridSize = 13;
var grid = new Array ();
grid  [1] = " 1111111111111";
grid  [2] = " 1111110111111";
grid  [3] = " 1001000111111";
grid  [4] = " 1001110100001";
grid  [5] = " 1010000110111";
grid  [6] = " 1000000100011";
grid  [7] = " 1110111110111";
grid  [8] = " 1000300100001";
grid  [9] = " 1000000000000";
grid [10] = " 1100000000001";
grid [11] = " 1001101100111";
grid [12] = " 1000000000001";
grid [13] = " 1111111111111";
signpostText = "The signpost reads: Welcome to Corter!";

// Set room sprite properties.
var roomSpriteX = 0;
var roomSpriteY = 0;

// Set player sprite properties.
var player = new createPlayer ("Silverwind", 5, 5, "images/humanM1.gif");

// List game screens.
var activeGameScreen = "titleScreen";
var gameScreens = new Array ();
gameScreens [0] = "titleScreen";
gameScreens [1] = "overworldScreen";
loadScreen (activeGameScreen);

//-->