// Overwatch Hangman Game


// Set a variable equal to all letters

var letters = [
"a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z"
]

// Declare variables needed throughout the game
var incorrectGuesses = [];
var guesses = [];
var guess = "";
var guessesNotInSolution = letters;
var valid = false;
var keyPressed = false;
var solution;
var workingPuzzle;
var wins = 0;
var losses = 0;
var currentPuzzle;
var puzzleIndex = 0;

// Messages for events like winning, losing, and already guessing that display in place of the puzzle or guesses
var alreadyGuessed = "You already guessed that letter!";
var missesRow = document.querySelector(".guessed-letters");
var youWin = "Great job!";
var youLose = "LoL, you lose!"
var youWinH;
var youWinText;


// Variables for sound files///////////////////////////////////////////////////////////////////////////
var missSounds;

var nerfThis;
var apocalypse; 
var bench;
var nerfThis; 
var winkyFace;
var fireInTheHole; 
var hanzoRyuu ;
var heroSelect;
var highNoon;
var justice ;
var healingBeat;
var speedBoost ;
var whoaThere ;
var hadItComing ;
var yippie;
var meiSorry;
var playOfTheGame; 
var sights; 
var torbHammerNail; 
var cheersLove; 
var widowSpiderFly; 
var payloadInMotion ;
var universe ;
var heroes ;
var deathWalks;
var hammerJustice;
var revenge;
var beepBoop;
var freedomIllusion;
var speedBoostQuote;
var trying;
var getOwned;
var getOwned2;
var gg;
var lol;
var keepUp;
var pro;
var cantSerious;
var leet;
var playOfTheGameMusic;



// Function for creating sound files
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

// This initializes all sound files
var soundInit = function() {

	// Puzzle Sounds/////////////////////////////////////////////////
	apocalypse = new sound("assets/sounds/apocalypse.mp3");
	bench = new sound("assets/sounds/bench.mp3");
	nerfThis = new sound("assets/sounds/dva_nerf_this.mp3");
	winkyFace = new sound("assets/sounds/dva_winky_face.mp3");
	fireInTheHole = new sound("assets/sounds/fire_in_the_hole.mp3");
	hanzoRyuu = new sound("assets/sounds/hanzo_ryuu.mp3");
	heroSelect = new sound("assets/sounds/hero_select.mp3");
	highNoon = new sound("assets/sounds/its_high_noon.mp3");
	justice = new sound("assets/sounds/justice.mp3");
	healingBeat = new sound("assets/sounds/lucio_healing_beat.mp3");
	speedBoost = new sound("assets/sounds/lucio_speed_music.mp3");
	whoaThere = new sound("assets/sounds/mcree_whoa_there.mp3");
	hadItComing = new sound("assets/sounds/mcree_yall_had_it_coming.mp3");
	yippie = new sound("assets/sounds/mcree_yippie.mp3");
	meiSorry = new sound("assets/sounds/mei_sorry.mp3");
	playOfTheGame = new sound("assets/sounds/play_of_the_game.mp3");
	playOfTheGameMusic = new sound("assets/sounds/play_of_the_game_music.mp3");
	sights = new sound("assets/sounds/sights.mp3");
	torbHammerNail = new sound("assets/sounds/torb_hammer_nail.mp3");
	cheersLove = new sound("assets/sounds/tracer_cheers_love.mp3");
	widowSpiderFly = new sound("assets/sounds/widow_spider_fly.mp3");
	payloadInMotion = new sound("assets/sounds/payload_in_motion.mp3");
	universe = new sound("assets/sounds/universe.mp3");
	heroes = new sound("assets/sounds/heroes_never_die.mp3");
	deathWalks = new sound("assets/sounds/death_walks.mp3");
	hammerJustice = new sound("assets/sounds/hammer_justice.mp3");
	revenge = new sound("assets/sounds/revenge.mp3");
	beepBoop = new sound("assets/sounds/beep_boop.mp3");
	freedomIllusion = new sound("assets/sounds/freedom_illusion.mp3");
	speedBoostQuote = new sound("assets/sounds/speed_boost.mp3");

	// Miss sounds//////////////////////////////////////////////////////////
	trying = new sound("assets/sounds/trying.mp3");
	getOwned = new sound("assets/sounds/get_owned.mp3");
	getOwned2 = new sound("assets/sounds/get_owned_2.mp3");
	gg = new sound("assets/sounds/GG.mp3");
	lol = new sound("assets/sounds/lol.mp3");
	keepUp = new sound("assets/sounds/keep_up.mp3");
	pro = new sound("assets/sounds/pro.mp3");
	cantSerious = new sound("assets/sounds/cant_serious.mp3");
	leet = new sound("assets/sounds/leet.mp3");
	missSounds = [ getOwned, getOwned2, gg, lol ]
}

var randomMissSound = function() {
	var missSound = Math.floor((Math.random() * missSounds.length));
	return missSounds[missSound]
}

var phraseSound = function() {
	currentPuzzle.sound.play()
}


// Variables for Images////////////////////////////////////////////////////////////////////////////

var bastionIcon = new Image();
bastionIcon.src = "assets/images/bastionIcon.png";
bastionIcon.class = "img-responsive";

var dvaIcon = new Image();
dvaIcon.src = "assets/images/dvaIcon.png";
dvaIcon.class = "img-responsive";

var genjiIcon = new Image();
genjiIcon.src = "assets/images/genjiIcon.png";
genjiIcon.class = "img-responsive";

var hanzoIcon = new Image();
hanzoIcon.src = "assets/images/hanzoIcon.png";
hanzoIcon.class = "img-responsive";

var junkratIcon = new Image();
junkratIcon.src = "assets/images/junkratIcon.png";
junkratIcon.class = "img-responsive";

var lucioIcon = new Image();
lucioIcon.src = "assets/images/lucioIcon.png";
lucioIcon.class = "img-responsive";

var mcreeIcon = new Image();
mcreeIcon.src = "assets/images/mcreeIcon.png";
mcreeIcon.class = "img-responsive";

var meiIcon = new Image();
meiIcon.src = "assets/images/meiIcon.png";
meiIcon.class = "img-responsive";

var mercyIcon = new Image();
mercyIcon.src = "assets/images/mercyIcon.png";
mercyIcon.class = "img-responsive";

var pharahIcon = new Image();
pharahIcon.src = "assets/images/pharahIcon.png";
pharahIcon.class = "img-responsive";

var reaperIcon = new Image();
reaperIcon.src = "assets/images/reaperIcon.png";
reaperIcon.class = "img-responsive";

var reinhardtIcon = new Image();
reinhardtIcon.src = "assets/images/reinhardtIcon.png";
reinhardtIcon.class = "img-responsive";

var roadhogIcon = new Image();
roadhogIcon.src = "assets/images/roadhogIcon.png";
roadhogIcon.class = "img-responsive";

var soldierIcon = new Image();
soldierIcon.src = "assets/images/soldierIcon.png";
soldierIcon.class = "img-responsive";

var symmetraIcon = new Image();
symmetraIcon.src = "assets/images/symmetraIcon.png";
symmetraIcon.class = "img-responsive";

var torbIcon = new Image();
torbIcon.src = "assets/images/torbIcon.png";
torbIcon.class = "img-responsive";

var tracerIcon = new Image();
tracerIcon.src = "assets/images/tracerIcon.png";
tracerIcon.class = "img-responsive";

var winstonIcon = new Image();
winstonIcon.src = "assets/images/winstonIcon.png";
winstonIcon.class = "img-responsive";

var zaryaIcon = new Image();
zaryaIcon.src = "assets/images/zaryaIcon.png";
zaryaIcon.class = "img-responsive";

var zenyattaIcon = new Image();
zenyattaIcon.src = "assets/images/zenyattaIcon.png";
zenyattaIcon.class = "img-responsive";

var widowIcon = new Image();
widowIcon.src = "assets/images/widowIcon.png";
widowIcon.class = "img-responsive";


// Variable for div holding the pictures for when a player misses a guess
var missesDivOne = document.getElementById('missesOne');
var missesDivTwo = document.getElementById('missesTwo');
var missesDivThree = document.getElementById('missesThree');
var missesDivFour = document.getElementById('missesFour');
var missesDivFive = document.getElementById('missesFive');
var missesDivSix = document.getElementById('missesSix');

// Image Files
var dvaIcon1 = new Image();
dvaIcon1.src = "assets/images/dvaRabbit.png";
dvaIcon1.class = "img-responsive";

var dvaIcon2= new Image();
dvaIcon2.src = "assets/images/dvaRabbit.png";
dvaIcon2.class = "img-responsive";

var dvaIcon3 = new Image();
dvaIcon3.src = "assets/images/dvaRabbit.png";
dvaIcon3.class = "img-responsive";

var dvaIcon4 = new Image();
dvaIcon4.src = "assets/images/dvaRabbit.png";
dvaIcon4.class = "img-responsive";

var dvaIcon5 = new Image();
dvaIcon5.src = "assets/images/dvaRabbit.png";
dvaIcon5.class = "img-responsive";

var dvaIcon6 = new Image();
dvaIcon6.src = "assets/images/dvaRabbit.png";
dvaIcon6.class = "img-responsive";

// Function to load images into missed guesses div

var loadMissImage = function(image1, image2, image3, image4, image5, image6) {

	console.log("loading dva images")

	missesDivOne.appendChild(image1);
	missesDivTwo.appendChild(image2);
	missesDivThree.appendChild(image3);
	missesDivFour.appendChild(image4);
	missesDivFive.appendChild(image5);
	missesDivSix.appendChild(image6);
};


var removeMissImage = function(div) {
	div.removeChild(div.childNodes[0])
	console.log("image removed")
};

var loadModalImage = function() {
	// the div the image goes in
	var modalDiv = document.getElementById('modal');
	// the image associated with the puzzle to be loaded
	var modalImage = currentPuzzle.image;
	// Check if there was an image loaded previously
	while (modal.firstChild) {
		console.log("removing previous image from modal")
		modal.removeChild(modal.firstChild);
	}
	// append the image to the div
	modalDiv.appendChild(modalImage);
};




// Puzzle object that holds phrases and sounds
function puzzle(phrase, sound, image) {

	this.phrase = phrase;
	this.sound = sound;
	this.image = image;
};

// Creating puzzle objects for use in game
var puzzleInit = function() {
	var nerfThisPuz = new puzzle("Nerf this", nerfThis,dvaIcon);
	var highNoonPuz = new puzzle("It's high noon", highNoon, mcreeIcon);
	var payLoadPuz = new puzzle("A payload in motion, stays in motion", payloadInMotion, winstonIcon);
	var cheersLovePuz = new puzzle("Cheers love, the cavalry's here", cheersLove, tracerIcon);
	var fireInTheHolePuz = new puzzle("Fire in the hole", fireInTheHole, junkratIcon);
	var apocalypsePuz = new puzzle("Welcome to the apocalypse", apocalypse, roadhogIcon);
	var justicePuz = new puzzle("Justice Rains from above", justice, pharahIcon);
	var benchPuz = new puzzle("I can bench more than you", bench, zaryaIcon);
	var hanzoRyuuPuz = new puzzle("ryuu ga waga teki wo kurau", hanzoRyuu, hanzoIcon);
	var sorryPuz = new puzzle("Ooh, sorry about that", meiSorry, meiIcon);
	var winkyFacePuz = new puzzle("Winky face", winkyFace, dvaIcon);
	var sightsPuz = new puzzle("I've got you in my sights", sights, soldierIcon);
	var hammerNailPuz = new puzzle("It's better to be the hammer than the nail", torbHammerNail, torbIcon);
	var widowSpiderFlyPuz = new puzzle("Step into my parlor, said the spider to the fly", widowSpiderFly, widowIcon);
	var heroesNeverDiePuz = new puzzle("Heroes never die", heroes, mercyIcon);
	var universePuz = new puzzle("Be one with the universe", universe, zenyattaIcon);
	var deathWalksPuz = new puzzle("Death walks among you", deathWalks, reaperIcon);
	var hammerJusticePuz = new puzzle ("I am the hammer of justice", hammerJustice, reinhardtIcon);
	var revengePuz = new puzzle("Revenge takes only the one who seeks it", revenge, genjiIcon);
	var beepBoopPuz = new puzzle("Beep boop", beepBoop, bastionIcon);
	var freedomIllusionPuz = new puzzle("Freedom is a convenient illusion", freedomIllusion, symmetraIcon);
	var speedBoostPuz = new puzzle("Speed boost", speedBoostQuote, lucioIcon);

	puzzles = [nerfThisPuz, highNoonPuz, payLoadPuz, cheersLovePuz, fireInTheHolePuz, apocalypsePuz, justicePuz,
	benchPuz, hanzoRyuuPuz, sorryPuz, winkyFacePuz, sightsPuz, hammerNailPuz, widowSpiderFlyPuz, heroesNeverDiePuz,
	universePuz, deathWalksPuz, hammerJusticePuz, revengePuz, beepBoopPuz, freedomIllusionPuz, speedBoostPuz]
};

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// INIT ///////////////////////////////////////////////////////////////////////////////////////////////

// This begins a new game
var startGame = function() {
	soundInit(); // Initialize sound files
	puzzleInit(); // Initialize puzzle objects
	shuffleArray(puzzles) // Randomize puzzle list so there are no duplicates in a game 
						  // session until player goes through entire list
	newPuzzle(); // Create a new puzzle

	wins = 0; // reset wins and losses
	losses = 0;

	displayPuzzle();
};

var newPuzzle = function() {
	// load images that represent misses
	loadMissImage(dvaIcon1, dvaIcon2, dvaIcon3, dvaIcon4, dvaIcon5, dvaIcon6);

	// variables for new puzzle
	currentPuzzle = puzzles[puzzleIndex]
	console.log("Current Puzzle: " + currentPuzzle)
	solution = stringToArray(currentPuzzle.phrase.toLowerCase());
	console.log("Solution: " + solution)
	blanks = getBlanks(solution);
	blanksWithSpaces = extraSpaces(blanks);
	workingPuzzle = blanks;
	console.log(currentPuzzle.image)
	speedBoost.play()
};

var nextPuzzle = function() {
	// if player reaches the last puzzle in the list, shuffle all of the puzzles and start the index 
	// from zero again
	//removeYouWin()
	if (puzzleIndex == puzzles.length - 1) { 
		puzzleIndex = 0;	
		shuffleArray(puzzles)
	}
	// Reset Variables
	incorrectGuesses = [];
	guesses = [];
	guessesNotInSolution = [];
	gameOver= false;

	guessesNotInSolution = [
		"a","b","c","d","e","f","g","h","i","j","k","l","m","n",
		"o","p","q","r","s","t","u","v","w","x","y","z"
		]
	newPuzzle();
	displayPuzzle();
};


	
// FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////



//adds extra characters to all letters in a word's display for HTML
var extraSpaces = function(word) { 
		var wordWithSpaces = ""
		for (letter in word) {
			wordWithSpaces += word[letter] + "\xa0"
		}
		return wordWithSpaces
};

// These functions check if the guess is in the solution and rewrite the workingPuzzle to account 
// for correct answers

var checkArray = function(array, guess) {
	console.log("array: " + array)
	if (array.indexOf(guess) > -1) {
		return true
	}else{
		return false
	}
};

var stringToArray = function(string) {
	array = []
	for (char in string) {
		if (char == " "){
			array.push('\xa0')
		}
		else{ array.push(string[char]) }
	}
	return array
};

var replaceInArray = function(array, guess, puzzleSolution) {
	for (i in puzzleSolution) {
		if (guess == puzzleSolution[i]) {
			array[i] = guess;
		}else{
			continue
		}
	}return array
};

var arrayToString = function(array) {
	var string = ""
	for (i in array) {
		string += array[i];
	}
	return string
};

// Creates a list of all guesses that are also not in the solution for keep track of misses
var usedLettersNotInSolution = function(guesses, workingPuzzle){
	for (var i = 0; i < guesses.length; i++){
		if (workingPuzzle.indexOf(guesses[i]) == -1 && guessesNotInSolution.indexOf(guesses[i]) == -1){
				guessesNotInSolution.pop(guesses[i])
		};
	};
	console.log("Not in solution: " + guessesNotInSolution)
};

// Removes letters guessed but not in the solution from the display of remaining letters
var blackOutLetters = function(){
	for (var i = 0; i < guessesNotInSolution.length; i++){
		// console.log("I'm looping through the array at: " + i)
		if (guesses.indexOf(guessesNotInSolution[i]) > -1 ){
				// console.log("Getting rid of: " + guessesNotInSolution[i])
				//guessesNotInSolution[i] = "\xa0" // replace the letter with a space if it has been guessed
				guessesNotInSolution[i] = "\xa0"
		}; 
		// console.log("Not in solution: " + guessesNotInSolution)
	}
};

// Chooses a puzzle from the list of puzzles a random

// var getPuz = function (puzzles) {
// 	var puzzle = Math.floor((Math.random() * puzzles.length));
// 	return puzzles[puzzle]
// };


// Creates a blank puzzle with the solution generated by getWord
var getBlanks = function(phrase) {
	var blanks = ""
	for (letter in phrase) {
		//console.log(letter)
		if (phrase[letter] == ' ') {
			//console.log(letter)
			blanks += '\xa0'
			//console.log("BLANK SPACE")
		}else if (phrase[letter] == '.'){
			blanks +=".";
		}else if (phrase[letter] == ',') {
			blanks += ',';
		}else if (phrase[letter] == "'") {
			blanks += "'";
		}else {
			blanks += "_";
		}
	}
	return stringToArray(blanks) // convert the string into an array for easy comparison
};

// Check if a player's guess is valid
var guessValid = function (guess, playerGuesses) {
	
	var regex=/[^a-zA-Z]+$/;
	//console.log("Player Guesses at validation: " + playerGuesses)	


	if (guess == null) {
			("You must input a letter.");
		return false

	}else if (guess.match(regex)) {
		alert("Guess must be a letter.");
		return false

	} else if (guess.length > 1) {
		alert("Only guess one letter at a time.");
		return false

	} else if (playerGuesses.indexOf(guess) > -1) {

		displayPuzzle(alreadyGuessed)
		
		return false

	}else if (guess.length < 1) {
		alert("You must input a letter.");
		return false

	}else{
		return true
	}
};


// Check if the player's guess is in the puzzle
var guessCheck = function (guess, guesses, incorrectGuesses, workingPuzzle, solution) {

	if (checkArray(solution, guess) == true) {

		workingPuzzle = replaceInArray(workingPuzzle, guess, solution)
		//console.log("In the puzzle and adding " + guess + " to guesses")
		guesses.push(guess);


	}else if (checkArray(solution, guess) == false){
		//console.log("NOT in the puzzle and adding " + guess + " to guesses")
		guesses.push(guess);
		incorrectGuesses.push(guess);

		// Remove images for misses
		if (incorrectGuesses.length == 1) {
			removeMissImage(missesDivOne);

		}else if (incorrectGuesses.length == 2 ) {
		
			removeMissImage(missesDivSix);

		}else if (incorrectGuesses.length == 3) {

			removeMissImage(missesDivTwo);

		}else if (incorrectGuesses.length == 4) {

			removeMissImage(missesDivFive);

		}else if (incorrectGuesses.length == 5) {

			removeMissImage(missesDivThree);}

		else if (incorrectGuesses.length == 6) {

			removeMissImage(missesDivFour);}

		
		// get miss sound from list of miss sounds and play it
		missSound = randomMissSound()
		missSound.play()
		

	}else{
		// console.log("guess is invalid")	
	}

	//console.log("Player Guesses: " + playerGuesses)	
	return [workingPuzzle, guesses, incorrectGuesses]	
};


// Figure out if the game should end
winCheck = function(workingPuzzle, incorrectGuesses, puzzleSolution) {
	// console.log("working puzzle, puzzle solution: " + workingPuzzle + " "
	// + solution)		
	//console.log(workingPuzzle.localeCompare(puzzleSolution))
	// console.log("Working array: " + stringToArray(workingPuzzle))
	// console.log("solution array: " + stringToArray(puzzleSolution))

	if (workingPuzzle.indexOf('_') == -1) {
		displayPuzzle();
		gameOver = true;
		wins += 1; // update the win counter
		console.log("You win!")
		//displayYouWin()
		loadModalImage()
		displayModal()


	}else if (incorrectGuesses.length == 6) {
		
		gameOver = true;
		losses += 1;
		console.log("You lose")
		displayPuzzle()
		displaySolution()

	}else if (incorrectGuesses.length > 6){

	}else {
		gameOver = false;
	}
	return gameOver
}	

// function to update the display with new data
displayPuzzle = function(message = workingPuzzle) {
	console.log("Message: " + message)
	document.querySelector(".puzzle").innerHTML = extraSpaces(message);
	document.querySelector(".wins").innerHTML = "Wins: " + wins +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + " Losses: " + losses; 
	document.querySelector(".guessed-letters").innerHTML = extraSpaces(arrayToString(guessesNotInSolution));
}

displaySolution = function() {
	console.log("displaying solution: " + solution)
	document.querySelector(".puzzle").innerHTML = extraSpaces(arrayToString(solution));
}

displayYouWin = function() {

	if (missesDivOne.hasChildNodes()) {
		removeMissImage(missesDivOne)}
		console.log("removing image 1")

	if (missesDivSix.hasChildNodes()){
	
		removeMissImage(missesDivSix)}
		console.log("removing image 2")

	if (missesDivTwo.hasChildNodes()) {

		removeMissImage(missesDivTwo)}
		console.log("removing image 3")

	if (missesDivFive.hasChildNodes()) {

		removeMissImage(missesDivFive)}
		console.log("removing image 4")

	if (missesDivThree.hasChildNodes()) {

		removeMissImage(missesDivThree)}
		console.log("removing image 5")

	if (missesDivFour.hasChildNodes()) {

		removeMissImage(missesDivFour)}
		console.log("removing image 6")

	youWinH = document.createElement("h1");
	missesRow.appendChild(youWinH);

    youWinText = document.createTextNode(youWin);
	youWinH.appendChild(youWinText);
}

removeYouWin = function() {
	if (youWinH != null) {
		while (missesRow.firstChild) {
			missesRow.removeChild(firstChild)};
	}
}

// Handle keypresses////////////////////////////////////////////////////////////////////////////////
keyPress = function(event){

	if (keyPressed)
        return;

    else{
	    keyPressed = true;
	    setTimeout(function () { keyPressed = false; }, 100);

		if (incorrectGuesses.length >= 6 || workingPuzzle.indexOf('_') == -1) {return false}

		else{

			// accept input
			guess = String.fromCharCode(event.charCode)
			
			if(guessValid(guess, guesses)) {
				// update guess variables based on guess
				returnArray = guessCheck(guess, guesses, incorrectGuesses, 
				workingPuzzle, solution);

				window.setTimeout(displayPuzzle, 2000); //display puzzle before changing workingPuzzle variable

				workingPuzzle = returnArray[0];
				guesses = returnArray[1];
				incorrectGuesses = returnArray[2];
				// remove used letters from the list of letters
				blackOutLetters();
				displayPuzzle()
			}
		
		
		// checking if the puzzle has been solved
			if (winCheck(workingPuzzle, incorrectGuesses, solution)) {

				displaySolution()
				// add 1 to puzzle index so that next puzzle in sequence is chosen
				puzzleIndex += 1; 
				// play sound byte of puzzle after 2 seconds
				window.setTimeout(phraseSound, 600)	
				// start the next puzzle after 4.5 seconds
				window.setTimeout(nextPuzzle, 4500) 
				 
			}
		}
	}
}

// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
displayModal = function() {
	
    modal.style.display = "block";
    setTimeout(function(){
    	modal.style.display = "none";}, 4500);
	}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Event Handler  //////////////////////////////////////////////////////////////////////////////////

window.addEventListener("keypress", keyPress.bind(event));

//////////////////////////////////////////////////////////////////////////////////////////////////////






