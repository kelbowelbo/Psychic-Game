var stats = {
	wins: 0,
	losses: 0,
	guessesLeft: 9,
	guessesThusfar: ""			
};
		
		
var computerGuess = getComputerGuess();
		
document.onkeyup = function(event) {	
			
	var keyPressed = event.key.toLowerCase();
	if (stats.guessesThusfar.length > 0) {
		stats.guessesThusfar += ", ";
	}
	
	stats.guessesThusfar +=keyPressed;
	if (keyPressed === computerGuess) {
		stats.wins++;
		resetStats(stats);
	}  

	else {
		stats.guessesLeft--;
	
		if (stats.guessesLeft === 0) {
			stats.losses++;
			resetStats(stats);
		}

	}

	rewriteStats(stats);
}

rewriteStats(stats);

function rewriteStats(gamestats) {
	console.log("Guesses thus far:  " + gamestats.guessesThusfar);
	document.getElementById("wins").innerHTML = "Wins: " + gamestats.wins;
	document.getElementById("losses").innerHTML = "Losses: " + gamestats.losses;
	document.getElementById("guessesleft").innerHTML = "Guesses left: " + gamestats.guessesLeft;
	document.getElementById("guessesthusfar").innerHTML = "Guesses thus Far: " + gamestats.guessesThusfar;

}

function resetStats(gamestats) {
	gamestats.guessesLeft = 9;
	gamestats.guessesThusfar = "";
	computerGuess = getComputerGuess();
}

function getComputerGuess() {
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var guess = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log("This is a computer guess", guess);
	return guess;
}