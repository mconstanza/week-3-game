// Overwatch Hangman Game

// Instantiate the wordlist variable and populate it with 
// pre-defined phrases.
var wordList = [

"Nerf this",
"It's high noon",
"A payload in motion, stays in motion",
"Cheers love, the cavalry's here",
"Fire in the hole",
"Welcome to the apocalypse",
"Justice rains from above",
"I can bench more than you",
"ryuu ga waga teki wo kurau",
"Sorry",
"Winky face",
"I've got you in my sights",
"It's better to be the hammer than the nail",
"Come into my parlor, said the spider to the fly",
"Heroes Never Die",
"Be one with the universe",
"Death walks among you",
"I am the hammer of justice",
"Revenge takes only the one who seeks it",
"Beep Boop",
"Freedom is a convenient illusion",
"Speed boost"
]

// May switch puzzles to be object-oriented
function puzzle(phrase, sound) {

	this.phrase = phrase;
	this.sound = sound;
	// this.image = image;
}

var nerfThisPuz = new puzzle("Nerf this", nerfThis);
var highNoonPuz = new puzzle("It's high noon", highNoon);
var payLoadPuz = new puzzle("A payload in motion, stays in motion", payloadInMotion);
var cheersLovePuz = new puzzle("Cheers love, the cavalry's here", cheersLove);
var fireInTheHolePuz = new puzzle("Fire in the hole", fireInTheHole);
var apocalypsePuz = new puzzle("Welcome to the apocalypse", apocalypse);
var justicePuz = new puzzle("Justice Rains from above", justice);
var benchPuz = new puzzle("I can bench more than you", bench);
var hanzoRyuuPuz = new puzzle("ryuu ga waga teki wo kurau", hanzoRyuu);
var sorryPuz = new puzzle("sorry", meiSorry);
var winkyFacePuz = new puzzle("Winky face", winkyFace);
var sightsPuz = new puzzle("I've got you in my sights", sights);
var hammerNailPuz = new puzzle("It's better to be the hammer than the nail", torbHammerNail);
var widowSpiderFlyPuz = new puzzle("Come into my parlor, said the spider to the fly", widowSpiderFly);
var heroesNeverDiePuz = new puzzle("Heroes never die", heroes);
var universePuz = new puzzle("Be one with the universe", universe);
var deathWalksPuz = new puzzle("Death walks among you", deathWalks);
var hammerJusticePuz = new puzzle ("I am the hammer of justice", hammerJustice);
var revengePuz = new puzzle("Revenge takes only the one who seeks it", revenge);
var beepBoopPuz = new puzzle("Beep boop", beepBoop);
var freedomIllusionPuz = new puzzle("Freedom is a convenient illusion", freedomIllusion);
var speedBoostPuz = new puzzle("Speed boost", speedBoostQuote);

var puzzles = [nerfThisPuz, highNoonPuz, payLoadPuz, cheersLovePuz, fireInTheHolePuz, apocalypsePuz, justicePuz,
benchPuz, hanzoRyuuPuz, sorryPuz, winkyFacePuz, sightsPuz, hammerNailPuz, widowSpiderFlyPuz, heroesNeverDiePuz,
universePuz, deathWalksPuz, hammerJusticePuz, revengePuz, beepBoopPuz, freedomIllusionPuz, speedBoostPuz]



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
var keyPressed;
var solution;
var workingPuzzle;
var wins = 0;
var losses = 0;

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


// This sets up all relevant sound files
var soundInit = function() {

	// Puzzle Sounds/////////////////////////////////////////////////
	apocalypse = new sound("assets/sounds/apocalypse.mp3");
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
	missSounds = [ trying, getOwned, getOwned2, gg, lol, keepUp, pro, cantSerious, leet ]
}

var randomMissSound = function() {
	var missSound = Math.floor((Math.random() * missSounds.length));
	return missSounds[missSound]
}


// Variables for Images////////////////////////////////////////////////////////////////////////////

// Variable for div holding the pictures for when a player misses a guess
var missesDivOne = document.getElementById('missesOne');
var missesDivTwo = document.getElementById('missesTwo');
var missesDivThree = document.getElementById('missesThree');
var missesDivFour = document.getElementById('missesFour');
var missesDivFive = document.getElementById('missesFive');

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

// Function to load images into missed guesses div

var loadMissImage = function(image1, image2, image3, image4, image5) {

	missesDivOne.appendChild(image1);
	missesDivTwo.appendChild(image2);
	missesDivThree.appendChild(image3);
	missesDivFour.appendChild(image4);
	missesDivFive.appendChild(image5);
}


var removeMissImage = function(div) {
	div.removeChild(div.childNodes[0])
};



// INIT ///////////////////////////////////////////////////////////////////////////////////////////////

// This begins a new game
var startGame = function() {
	soundInit(); // Initialize sound files
	wins = 0;
	losses = 0;
	newPuzzle(); // Create a new puzzle
	// play(guesses, incorrectGuesses);  // Play the game!
	displayPuzzle(workingPuzzle);
}

var newPuzzle = function() {
	// load images that represent misses
	loadMissImage(dvaIcon1, dvaIcon2, dvaIcon3, dvaIcon4, dvaIcon5);

	// variables for new puzzle
	solution = stringToArray(getPuz(puzzles));
	console.log("Solution: " + solution)

	blanks = getBlanks(solution);
	blanksWithSpaces = extraSpaces(blanks);
	workingPuzzle = blanks;
	speedBoost.play()
}

var nextPuzzle = function() {

	
	// Reset Variables
	incorrectGuesses = [];
	guesses = [];
	guessesNotInSolution = [];
	gameOver= false;

	guessesNotInSolution =  [
		"a","b","c","d","e","f","g","h","i","j","k","l","m","n",
		"o","p","q","r","s","t","u","v","w","x","y","z"
		]
	newPuzzle();
	displayPuzzle();
}


	
// FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////

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

//adds extra characters to all letters in a word's display for HTML
var extraSpaces = function(word) { 
		var wordWithSpaces = ""
		for (letter in word) {
			wordWithSpaces += word[letter] + "\xa0"
		}
		return wordWithSpaces
}

// These functions check if the guess is in the solution and rewrite the workingPuzzle to account 
// for correct answers

var checkArray = function(array, guess) {
	console.log("array: " + array)
	if (array.indexOf(guess) > -1) {
		return true
	}else{
		return false
	}
}

var stringToArray = function(string) {
	array = []
	for (char in string) {
		if (char == " "){
			array.push('\xa0')
		}
		else{ array.push(string[char]) }
	}
	return array
}

var replaceInArray = function(array, guess, puzzleSolution) {
	for (i in puzzleSolution) {
		if (guess == puzzleSolution[i]) {
			array[i] = guess;
		}else{
			continue
		}
	}return array
}

var arrayToString = function(array) {
	var string = ""
	for (i in array) {
		string += array[i];
	}
	return string
}

// Creates a list of all guesses that are also not in the solution for keep track of misses
var usedLettersNotInSolution = function(guesses, workingPuzzle){
	for (var i = 0; i < guesses.length; i++){
		if (workingPuzzle.indexOf(guesses[i]) == -1 && guessesNotInSolution.indexOf(guesses[i]) == -1){
				guessesNotInSolution.pop(guesses[i])
		};
	};
	console.log("Not in solution: " + guessesNotInSolution)
}

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
}

// Chooses a word from the wordlist at random
var getWord = function (wordList) {
	var word = Math.floor((Math.random() * wordList.length));
	return wordList[word].toLowerCase()
}

var getPuz = function (puzzles) {
	var puzzle = Math.floor((Math.random() * puzzles.length));
	return puzzles[puzzle].phrase.toLowerCase()
}

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
}

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
		alert("You already guessed that letter!")
		//console.log("You already guessed that letter!")
		return false

	}else if (guess.length < 1) {
		alert("You must input a letter.");
		return false

	}else{
		return true
	}
}


// Check if the player's guess is in the puzzle
var guessCheck = function (guess, guesses, incorrectGuesses, workingPuzzle, solution) {

	if (checkArray(solution, guess) == true) {

		workingPuzzle = replaceInArray(workingPuzzle, guess, solution)
		//console.log("In the puzzle and adding " + guess + " to guesses")
		guesses.push(guess);
		console.log("Guesses in guesscheck: " + guesses);


	}else if (checkArray(solution, guess) == false){
		//console.log("NOT in the puzzle and adding " + guess + " to guesses")
		guesses.push(guess);
		incorrectGuesses.push(guess);

		// Remove images for misses
		if (incorrectGuesses.length == 1) {
			removeMissImage(missesDivOne);

		}else if (incorrectGuesses.length == 2 ) {
		
			removeMissImage(missesDivFive);

		}else if (incorrectGuesses.length == 3) {

			removeMissImage(missesDivTwo);

		}else if (incorrectGuesses.length == 4) {

			removeMissImage(missesDivFour);

		}else if (incorrectGuesses.length == 5) {

			removeMissImage(missesDivThree);}

		
		// get miss sound from list of miss sounds and play it
		missSound = randomMissSound()
		missSound.play()
		

		console.log("Guesses in guesscheck: " + guesses);

	}else{
		// console.log("guess is invalid")	
	}

	//console.log("Player Guesses: " + playerGuesses)	
	return [workingPuzzle, guesses, incorrectGuesses]	
}


// Figure out if the game should end
winCheck = function(workingPuzzle, incorrectGuesses, puzzleSolution) {
	// console.log("working puzzle, puzzle solution: " + workingPuzzle + " "
	// + solution)		
	//console.log(workingPuzzle.localeCompare(puzzleSolution))
	// console.log("Working array: " + stringToArray(workingPuzzle))
	// console.log("solution array: " + stringToArray(puzzleSolution))

	if (workingPuzzle.indexOf('_') == -1) {
		displayPuzzle(workingPuzzle);
		gameOver = true;
		wins += 1; // update the win counter
		console.log("You win!")

		displayPuzzle(workingPuzzle)
		//alert("You win! Great job!")

	}else if (incorrectGuesses.length >= 5) {
		displaySolution()
		gameOver = true
		losses += 1;
		console.log("You lose")
		//alert("Ouch. You lose.")

	}else {
		gameOver = false
	}
	return gameOver
}	

// function to update the display with new data
displayPuzzle = function() {
	document.querySelector(".puzzle").innerHTML = extraSpaces(workingPuzzle);
	document.querySelector(".wins").innerHTML = "Wins: " + wins +"\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + " Losses: " + losses; 
	document.querySelector(".guessed-letters").innerHTML = extraSpaces(arrayToString(guessesNotInSolution))
	console.log(arrayToString(solution))
	console.log(extraSpaces(arrayToString(solution)))
}

displaySolution = function() {
	console.log("displaying solution: " + solution)
	document.querySelector(".puzzle").innerHTML = extraSpaces(arrayToString(solution));
}

// Handle keypresses////////////////////////////////////////////////////////////////////////////////
keyPress = function(event){

	if (event.keyCode == 13) {return false}

	else{

		// accept input
		guess = String.fromCharCode(event.charCode)
		//console.log("Guess: " + guess + '\n')
		// keyPressed = true

		
		// if (keyPressed == true){
			//console.log("key is pressed")
		if(guessValid(guess, guesses)) {//console.log("validating guess: " + guess)
			returnArray = guessCheck(guess, guesses, incorrectGuesses, 
			workingPuzzle, solution);
			workingPuzzle = returnArray[0];
			//console.log("working puzzle after return: " + workingPuzzle)
			guesses = returnArray[1];
			incorrectGuesses = returnArray[2];
			// usedLettersNotInSolution(guesses, workingPuzzle);
			blackOutLetters();
		}

		displayPuzzle()


		if (winCheck(workingPuzzle, incorrectGuesses, solution)) {
			// start the next puzzle after 5 seconds	
			window.setTimeout(nextPuzzle, 5000)
			 
		}
	}
}



// Waiting for Events //////////////////////////////////////////////////////////////////////////////////


// prevent 'enter' from activating new game

window.addEventListener("keypress", keyPress.bind(event));

//////////////////////////////////////////////////////////////////////////////////////////////////////






