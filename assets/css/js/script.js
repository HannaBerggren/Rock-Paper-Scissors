/**
 * Create game variables
 */
const rockB = document.getElementsById("rock");
const paperB = document.getElementById("paper");
const scissorsB = document.getElementsById("scissors");
const playerScore = document.getElementById("user");
const computerScore = document.getElementById("comp");
const winBox = document.getElementById("win-box");
const loseBox = document.getElementById("lose-box");
const play = document.getElementById("play-again");

const main = () => {
	rockB.addEventListener("click", function() {
		playGame("rock");
	});
}

paperB.addEventListener("click", function() {
	playGame("paper");
});

scissorsB.addEventListener("click", function() {
	playGame("scissors");
});

main();

