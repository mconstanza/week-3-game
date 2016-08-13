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
"Catch phrase",
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
"Freedom is a convenient illusion"
]

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

// Variables for sound files///////////////////////////////////////////////////////////////////////////
var nerfThis;


// INIT ///////////////////////////////////////////////////////////////////////////////////////////////

// This begins a new game
var startGame = function() {
	soundInit(); // Initialize sound files
	wins = 0;
	newPuzzle(); // Create a new puzzle
	// play(guesses, incorrectGuesses);  // Play the game!
	displayPuzzle(workingPuzzle);
}

var nextPuzzle = function() {
	incorrectGuesses = [];
	guesses = [];
	guessesNotInSolution = [];
	console.log("Not in solution on new puzzle: " + guessesNotInSolution)
	guessesNotInSolution =  [
		"a","b","c","d","e","f","g","h","i","j","k","l","m","n",
		"o","p","q","r","s","t","u","v","w","x","y","z"
		]
	console.log("after setting to letters: " + guessesNotInSolution)
	console.log(guessesNotInSolution)

	newPuzzle();
	displayPuzzle(workingPuzzle);
	// play(guesses, incorrectGuesses)
}

// This sets up all relevant sound files
var soundInit = function() {
	apocalypse = new sound("assets/sounds/apocalypse.mp3");
	nerfThis = new sound("assets/sounds/dva_nerf_this.mp3");
	winkyFace = new sound("assets/sounds/dva_winky_face.mp3");
	fireInTheHole = new sound("assets/sounds/fire_in_the_whole.mp3");
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
	torb_hammer_nail = new sound("assets/sounds/torb_hammer_nail.mp3");
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


var extraSpaces = function(word) { //adds extra characters to all letters in a word's display for HTML
		var wordWithSpaces = ""
		for (letter in word) {
			wordWithSpaces += word[letter] + " "
		}
		return wordWithSpaces
}


// These functions check if the guess is in the solution and rewrite the workingPuzzle to account for correct answers

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
		array.push(string[char])
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

var usedLettersNotInSolution = function(guesses, workingPuzzle){
	for (var i = 0; i < guesses.length; i++){
		if (workingPuzzle.indexOf(guesses[i]) == -1 && guessesNotInSolution.indexOf(guesses[i]) == -1){
				guessesNotInSolution.pop(guesses[i])
		};
	};
	console.log("Not in solution: " + guessesNotInSolution)
}


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
getWord = function (wordList) {
	var word = Math.floor((Math.random() * wordList.length));
	return wordList[word].toLowerCase()
}
// Creates a blank puzzle with the solution generated by getWord
getBlanks = function(word) {
	var blanks = ""
	for (letter in word) {
		//console.log(letter)
		if (word[letter] == ' ') {
			//console.log(letter)
			blanks += '\xa0'
			//console.log("BLANK SPACE")
		}else if (word[letter] == '.'){
			blanks +=".";
		}else if (word[letter] == ',') {
			blanks += ',';
		}else if (word[letter] == "'") {
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

		//console.log("Nerf this sound in win function: " + nerfThis)
		nerfThis.play()
		displayPuzzle(workingPuzzle)
		//alert("You win! Great job!")

	}else if (incorrectGuesses.length >= 5) {
		displayPuzzle(workingPuzzle)
		gameOver = true
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
	document.querySelector(".wins").innerHTML = "Wins " + wins; 
	document.querySelector(".guessed-letters").innerHTML = extraSpaces(arrayToString(guessesNotInSolution))
}


newPuzzle = function() {

	// variables to be reset each game
	if (typeof guesses != "undefined") {guesses.length = 0;} // clear the array
	guesses = [];

	if (typeof incorrectGuesses != "undefined") {incorrectGuesses.length = 0;} // clear the array
	incorrectGuesses = [];

	gameOver= false;
	solution = stringToArray(getWord(wordList));
	blanks = getBlanks(solution);
	blanksWithSpaces = extraSpaces(blanks);
	workingPuzzle = blanks;
}


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

		displayPuzzle(workingPuzzle)


		if (winCheck(workingPuzzle, incorrectGuesses, solution)) {
			//console.log(wins)
			displayPuzzle(workingPuzzle)
			nextPuzzle() // start the next puzzle
		}
	}
}

// Waiting for Events //////////////////////////////////////////////////////////////////////////////////


// prevent 'enter' from activating new game

window.addEventListener("keypress", keyPress.bind(event));

//////////////////////////////////////////////////////////////////////////////////////////////////////






