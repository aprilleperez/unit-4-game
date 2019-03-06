// GAME CAN BE FOUND AT: https://aprilleperez.github.io/bootstrap-portfolio/portfolio.html


//variables to dynamically change displayed HTML
var domBattleNumber = document.getElementById("domBattleNumber");
var domUserNumber = document.getElementById("domUserNumber");
var domWins = document.getElementById("domWins");
var domLoses = document.getElementById("domLoses");


// Play/Pause theme song for funsies~
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/javascript/SUinstrumental.mp3");
// Theme Button
$(".theme-button").on("click", function () {
    audioElement.play();
});
$(".pause-button").on("click", function () {
    audioElement.pause();
});




// --------------------------------------------SET UP OF GAME by browser---------------------------------------


var battleNumber = Math.floor(Math.random() * (120 - 19)) + 19; // randomize battle number between 19-120
$("#domBattleNumber").html(battleNumber); // appear on browser


// randomize each button (4) with number from 1-12
var steven = Math.floor(Math.random() * (12 - 1)) + 1;
var garnet = Math.floor(Math.random() * (12 - 1)) + 1;
var pearl = Math.floor(Math.random() * (12 - 1)) + 1;
var amethyst = Math.floor(Math.random() * (12 - 1)) + 1;

var userNumber = 0; // user number default to zero

var wins = 0; // wins/loses default to zero
var loses = 0;




// --------------------------------------------START OF GAME LOOP triggered by clicking buttons---------------------------------------


// on click of any of 4 buttons, add that value to userNumber (keep adding values)
$("#steven").on("click", function () {
    userNumber = userNumber + steven;
    $("#domUserNumber").html(userNumber);
    if (userNumber === battleNumber) { // if user number === battle number
        wins++; // increment win points
        $("#domWins").html(wins);
        resetGame(); // begin reset process
    } else if (userNumber > battleNumber) { // if user number > battle number 
        loses++; // increment lose points
        $("#domLoses").html(loses);
        resetGame(); // begin reset process
    }
})

$("#garnet").on("click", function () {
    userNumber = userNumber + garnet;
    $("#domUserNumber").html(userNumber);
    if (userNumber === battleNumber) {
        wins++;
        $("#domWins").html(wins);
        resetGame();
    } else if (userNumber > battleNumber) {
        loses++;
        $("#domLoses").html(loses);
        resetGame();
    }
})

$("#pearl").on("click", function () {
    userNumber = userNumber + pearl;
    $("#domUserNumber").html(userNumber);
    if (userNumber === battleNumber) {
        wins++;
        $("#domWins").html(wins);
        resetGame();
    } else if (userNumber > battleNumber) {
        loses++;
        $("#domLoses").html(loses);
        resetGame();
    }
})

$("#amethyst").on("click", function () {
    userNumber = userNumber + amethyst;
    $("#domUserNumber").html(userNumber);
    if (userNumber === battleNumber) {
        wins++;
        $("#domWins").html(wins);
        resetGame();
    } else if (userNumber > battleNumber) {
        loses++;
        $("#domLoses").html(loses);
        resetGame();
    }
})




// --------------------------------------------START OF RESET triggered by win/lose of game---------------------------------------


function resetGame() {
    battleNumber = Math.floor(Math.random() * (120 - 19)) + 19; // randomize battle number
    $("#domBattleNumber").html(battleNumber);
    steven = Math.floor(Math.random() * (12 - 1)) + 1; // randomize 4 buttons values
    garnet = Math.floor(Math.random() * (12 - 1)) + 1;
    pearl = Math.floor(Math.random() * (12 - 1)) + 1;
    amethyst = Math.floor(Math.random() * (12 - 1)) + 1;
    userNumber = 0; // user number = 0
    $("#domUserNumber").html(userNumber);
}





// ----------------PRE-CODE THINKING PROCESS---------------
// Game SETS up with:
// randomized battle number (between 19-120)
// all 4 buttons assigned different randomized value (between 1-12)
// user number zero
// wins/loses zero

// Game TRIGGERED by:
// click of any of the four buttons
// user number is sum of values from the numbers
// once the user number and battle number are the same, user wins
// if user number goes at least 1 over battle number, user loses

// Game RESETS by:
// win or loss (point will increment appropriately)
// new randomized battle number
// all 4 buttons have different randomized value
// user number zero
