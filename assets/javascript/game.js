//JavaScript

//global variables
var word;
var numberWins = 0;
var numberLosses = 0;
var lettersRemainingCount;
var answers;
var guessedLetters;
var remainingGuesses;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var words = ["beach", "boardwalk", "starfish", "swimming", "sunscreen", "waves", "lounging", "sunshine", "happy", "sand", "surfing", "shells", "fish"];

//initiate game
function startGame() {
    document.getElementById("wins").textContent = numberWins;
    document.getElementById("losses").textContent = numberLosses;

    //pick random word
    word = words[Math.floor(Math.random() * words.length)];

    //answers array
    answers = [];
    for (var i = 0; i < word.length; i++) {
        answers[i] = "_";
    }

    //guessed array
    guessedLetters = [];
    document.getElementById("guess").textContent = guessedLetters;
 

    //6 guesses allowed per game/round
    remainingGuesses = 6;
    document.getElementById("turnsLeft").textContent = remainingGuesses;

    //guessing word platform _ _ _
    document.getElementById("display").textContent = answers.join(" ");

    //player pushes keys to start guessing
    document.onkeyup = onKeyPressed;

    //letters guessed this round outside of the correct letters in the current word
    lettersRemainingCount = word.length;
}

//event callback for keyboard press
function onKeyPressed(event) {
    var guess = event.key.toLowerCase();

    if (letters.includes(guess) === false) {
        return;
    }

    document.getElementById("log").textContent = null;

    //guess log for debugging 
    // document.getElementById("log").textContent = guess;

    var correctLetter = false;

    if (guess.length !== 1) {
        console.log("Nice try-single letters only!");
        
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                correctLetter = true;
                if (answers[j] !== guess) {
                    answers[j] = guess;
                    lettersRemainingCount--;
                }
            }
        }
    }

    document.getElementById("display").textContent = answers.join(" ");

    if (correctLetter === false && guessedLetters.includes(guess) === false) {
        guessedLetters.push(guess);
        remainingGuesses--;
        document.getElementById("turnsLeft").textContent = remainingGuesses;
    }
    document.getElementById("guess").textContent = guessedLetters;

    if (lettersRemainingCount <= 0) {
        numberWins++;
        var logDiv = document.getElementById("log");
        logDiv.textContent = "Congrats! You guessed the word " + word + "!";
        logDiv.style.color = "green";
        startGame();
    }

    if (remainingGuesses <= 0) {
        numberLosses++;
        var logDiv = document.getElementById("log");
        logDiv.textContent = "Good Game (but you loose...). Try again!";
        logDiv.style.color = "red";
        startGame();
    }
}