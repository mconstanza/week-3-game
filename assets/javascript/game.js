// Overwatch Hangman Game



// Instantiate the wordlist variable and populate it with 
// pre-defined phrases.
var wordList = [

"Nerf this",
"It's high noon",
"Peanut butter",
"The cavalry's here",
"Fire in the hole",
"Here comes the apocalypse",
"Justice rains from above",
"Catch phrase",
"I can bench more than you",
"ryuu ga waga teki wo kurau"

]


// OBJECTS ////////////////////////////////////////////////////////////////////////////////////////////////

function Puzzle(wordlist) {
	// Methods
	this.getWord = function (wordList) {
		var word = Math.floor((Math.random() * wordList.length));
		return wordList[word]
	}
	// Creates a blank puzzle with the solution generated by getWord
	this.getBlanks = function(word) {
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
		return blanks
	}

	// Properties
	this.solution = this.getWord(wordList);
	this.blanks = this.getBlanks(this.solution);
	this.blanksWithSpaces = extraSpaces(this.blanks);
}


function Player(blanks) {

	// set starting guess to blank puzzle
	this.workingPuzzle = blanks;
	this.guesses = [];
	this.incorrectGuesses = [];
}




// FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////

// Prompt a player to input a letter
var playerInput = function(playerGuesses) {
	
}


// Check if a player's guess is valid
var guessValid = function (guess, playerGuesses) {
	var regex=/[^a-zA-Z]+$/;
	if (guess.match(regex)) {
		alert("Guess must be a letter.");
		return false
	}else if (guess.length < 1) {
		alert("You must input a letter.");
		return false
	}else if (guess.length > 1) {
		alert("Only guess one letter at a time.");
		return false
	}else if (playerGuesses.indexOf(guess) > -1) {
		alert("You already guessed that letter!")
		return false
	}else{
		return true
	}
}

var guessCheck = function (guess, playerGuesses, incorrectGuesses, workingPuzzle, puzzleSolution) {

	if (checkString(puzzleSolution, guess) == true) {
		// console.log("guess is valid")
		workingPuzzle = arrayToString(replaceInArray(stringToArray(workingPuzzle), guess, puzzleSolution))
	// console.log(workingPuzzle)
		playerGuesses.push(guess)
	}else if (checkString(puzzleSolution, guess) == false){
		console.log("not in puzzle")
		playerGuesses.push(guess)
		incorrectGuesses.push(guess)
		console.log("incorrect guesses: " + incorrectGuesses)
	}else{
		// console.log("guess is invalid")	
	}
	console.log("Player Guesses: " + playerGuesses)	
	return [workingPuzzle, playerGuesses, incorrectGuesses]	
}


var extraSpaces = function(word) { //adds extra characters to all letters in a word's display for HTML
		var wordWithSpaces = ""
		for (letter in word) {
			wordWithSpaces += word[letter] + " "
		}
		return wordWithSpaces
}


// These functions check if the guess is in the solution and rewrite the workingPuzzle to account for correct answers

var checkString = function(string, guess) {
	if (string.indexOf(guess) > -1) {
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
	// console.log("Array: " + array)
	return array
}

var replaceInArray = function(array, guess, puzzleSolution) {
	for (char in puzzleSolution) {
		if (guess == puzzleSolution[char]) {
			array[char] = guess;
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


// Main game function

function Game(gameOver=false) {
	// Create Puzzle
	this.puzzle = new Puzzle(wordList);

	// Create Player
	this.player = new Player(this.puzzle.blanks);

	

	// Figure out if the game should end
	this.winCheck = function(workingPuzzle, incorrectGuesses, puzzleSolution) {
		console.log("working puzzle, puzzle solution: " + this.player.workingPuzzle.valueOf()+ " "
		+ this.puzzle.solution.valueOf())		
		console.log(this.player.workingPuzzle.trim().localeCompare(this.puzzle.solution.trim()))
		// console.log("Working array: " + stringToArray(workingPuzzle))
		// console.log("solution array: " + stringToArray(puzzleSolution))
		if (this.player.workingPuzzle == this.puzzle.solution) {
			gameOver = true
			alert("You win! Great job!")

		}else if (this.player.incorrectGuesses >= 5) {
			gameOver = true
			alert("Ouch. You lose.")

		}else {
			console.log("conditions aren't working for gameover")
			gameOver = false
		}
		return gameOver
	}	
	
	// Main Loop
	this.play = function(gameOver=false) {

		while (gameOver == false) {
			valid = false

			// Loop for valid player input
			while (valid == false) {
				var guess = prompt("Guess a letter.");
				valid = guessValid(guess, this.player.guesses)
			// console.log("guess is valid")
			}

			returnArray = guessCheck(guess, this.player.guesses, this.player.incorrectGuesses, 
				this.player.workingPuzzle, this.puzzle.solution);
			this.player.workingPuzzle = returnArray[0];
			console.log("Working Puzz: " + this.player.workingPuzzle)
			this.player.guesses = returnArray[1];
			this.player.incorrectGuesses = returnArray[2];

			gameOver = this.winCheck(this.player.workingPuzzle, this.player.incorrectGuesses, 
				this.puzzle.solution);
		}
	}
}

var startGame = function() {
	var game = new Game()
	game.play()
}




//////////////////////////////////////////////////////////////////////////////////////////////////////

// Logic




