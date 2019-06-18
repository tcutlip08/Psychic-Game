//Store user guess
//test guess to see if its already been guessed
//if it has not been guessed already test it accross the randomly generated band name character by character
//if the guessed letter matches any character (multiple) correctGuesses++
//push userGuess into alreadyGuessed by the end up the loop
//when correctGuesses = bandName display "you win" band picture and song
//--------------------------------------------------------------------------------------------------------//

//to be able to copy and paste bands i want list so i can set up a scenario i was having issues with
//, "metallica", "nonpoint", "sevendust", "korn", "megadeth", "pantera", "disturbed", "godsmack", "acdc", "slipknot"
var allBandNames = ["korn"];
var bandName = allBandNames[Math.floor(Math.random() * allBandNames.length)];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alreadyGuessed = [];
var correctGuesses = 0;
var triesLeft = 10;
var unfinishedBandName = [];
var correctGuessesArray = [];
var alreadyGuessedOnScreen;
var triesLeftOnScreen;
var bandNameOnScreen;
// var bandIndex = {
//     metallica: "The Day That Never Comes",
//     nonpoint:"Angels Son",
//     sevendust:"Alive and Kick"
// }

for (let i = 0; i < bandName.length; i++) {
    unfinishedBandName.push("_ ");
    bandNameOnScreen = document.getElementById("bandName-onScreen");
    // bandNameOnScreen.textContent = unfinishedBandName.join(" ").toUpperCase();
}

document.onkeyup = function (event) {
    let letterGuessed = event.key.toLowerCase();

    for (let i = 0; i < alphabet.length; i++) {

        //making sure the entered key is a letter
        if (letterGuessed === alphabet[i]) {

            //checking if the user has already guessed the value before testing others to not have duplicate data
            if (triesLeft > 0) {

                //no duplicate data
                if (alreadyGuessed.includes(letterGuessed)) {
                    alert("You already guessed that, try again");
                }

                //if letter guessed is in the band name add value to already guessed
                else if (bandName.includes(letterGuessed) && (correctGuesses !== bandName.length)) {

                    alreadyGuessed.push(letterGuessed);
                    correctGuessesArray.push(letterGuessed);

                    //figure out how to incremate for each letter in the band name // example: metallica has two l's if letter l is guessed it needs to increment twice
                    for (let i = 0; i < bandName.length; i++) {
                        // console.log("We atleast made it here");
                        if (letterGuessed === bandName[i]) {
                            correctGuessesArray.push(letterGuessed);
                            unfinishedBandName[i] = letterGuessed;
                            correctGuesses++;
                            if (correctGuesses === bandName.length) {
                                alert("Congratulations\nThe Band Name was: " + bandName.toUpperCase());

                                //go through and set all videos to display: none
                                for (let i = 0; i < allBandNames.length; i++) {
                                    var clearAllDisplays = document.getElementById(allBandNames[i]).style.display = "none";
                                    // var vid = document.getElementById(allBandNames[i]).pauseVid();
                                }
                                var videoOnScreen = document.getElementById(bandName).style.display = "block";
                                videoOnScreen = document.getElementById(bandName).style.textAlign = "center";
                                videoOnScreen.autoplay = true;
                                videoOnScreen.load = document.getElementById(bandName);

                                //WHAT THE FUCK IS GOIN ON HERE
                                // var leftPanel = document.getElementById("getSong");
                                // leftPanel = bandIndex.metallica;

                                //clear all values
                                resetValues();
                                //display unfinished band name
                                updateRightPanel();
                            }
                        }

                        else {
                        }
                        //display unfinished band name
                        updateRightPanel();
                    }
                }

                //if both conditions up top fail that means it IS a letter but was not in the band name so decrement triesLeft and still push alreadyGuessed
                else {
                    alreadyGuessed.push(letterGuessed);
                    triesLeft--;

                    //display tries left
                    alreadyGuessedOnScreen = document.getElementById("lettersGuessed-onScreen");
                    alreadyGuessedOnScreen.textContent = alreadyGuessed.join(", ");
                }
            }
            else {
                alert("Game Over!!\nRefresh the page to try again");

                resetValues();

                updateRightPanel();
            }
            updateRightPanel();
        }
        else {
        }
    }
}

//Update right panel function
function updateRightPanel() {
    alreadyGuessedOnScreen = document.getElementById("lettersGuessed-onScreen");
    alreadyGuessedOnScreen.textContent = alreadyGuessed.join(", ");
    triesLeftOnScreen = document.getElementById("triesLeft-onScreen");
    triesLeftOnScreen.textContent = ("Amount of Tries: " + triesLeft);
    bandNameOnScreen = document.getElementById("bandName-onScreen");
    bandNameOnScreen.textContent = unfinishedBandName.join(" ").toUpperCase();
}

function resetValues() {
    bandName = allBandNames[Math.floor(Math.random() * allBandNames.length)];
    alreadyGuessed = [];
    correctGuesses = 0;
    triesLeft = 10;
    unfinishedBandName = [];
    correctGuessesArray = [];

    for (let i = 0; i < bandName.length; i++) {
        unfinishedBandName.push("_ ");
    }
}

// function playVid() {
//     vid.play();
// }

// function pauseVid() {
//     vid.pause();
// }