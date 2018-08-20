//this is the beginning basics of the game. this function randomly chooses word from array and logs in console. passes the word into
//next function
function gameStart() {
    var wordList = ["Awkward", "Bagpipes", "Banjo", "Bungler", "Croquet", "Crypt", "Dwarves", "Fervid", "Fishhook", "Fjord", "Gazebo", "Gypsy", "Haiku", "Haphazard", "Hyphen", "Ivory", "Jazzy", "Jiffy", "Jinx", "Jukebox", "Kayak", "Kiosk", "Klutz", "Memento", "Mystify", "Numbskull", "Ostracize", "Oxygen", "Pajama", "Phlegm", "Pixel", "Polka", "Quad", "Quip", "Rhythmic", "Rogue", "Sphinx", "Squawk", "Swivel", "Toady", "Twelfth", "Unzip", "Waxy", "Wildebeest", "Yacht", "Zealous", "Zigzag", "Zippy", "Zombie"];
    var randomWord = Math.floor(Math.random() * wordList.length);
    var chosenWord = wordList[randomWord];
    console.log(chosenWord)
    letterGuess(chosenWord);
}
//this is where the user guesses a letter and this function runs to check if letter is in the chosenword
function letterGuess(chosenWord) {
    var guess = prompt("Guess a letter: ");
    guess = guess.toUpperCase();
    var guessValue = chosenWord.indexOf(guess);
    if (guessValue
    var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
}



//strike update
function strike () {
    var strike = 0;
    document.write("Strike: ", strike);
    while (strike !== 10) {
        strike += 1;
    }
}

var gifs= [];


gameStart();
