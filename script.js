let PlayerScore = 0;
let ComputerScore = 0;
let playerChoice;
let choice;
let randomGenerator;

const container = document.querySelector("#container");
const divFinalMessage = document.querySelector("#finalMessage");
const divResponsePlayer = document.createElement("div");
const divResponseComputer = document.createElement("div");
const divPlayerCurrentScore = document.createElement("div");
const divComputerCurrentScore = document.createElement("div");
const divWinner = document.createElement("div");
divResponsePlayer.classList.add("choice-display");
divResponseComputer.classList.add("choice-display");
divPlayerCurrentScore.classList.add("ascore-display", "player");
divComputerCurrentScore.classList.add("score-display", "computer");
divPlayerCurrentScore.classList.add("score", "player-score");
divComputerCurrentScore.classList.add("score", "computer-score");

function getComputerChoice() {
	randomGenerator = Math.random();
	if (randomGenerator >= 0 && randomGenerator <= 0.33) {
		choice = "Rock";
		console.log(choice.toLowerCase());
		return choice.toLocaleLowerCase();
	} else if (randomGenerator > 0.33 && randomGenerator <= 0.66) {
		choice = "Paper";
		console.log(choice.toLowerCase());
		return choice.toLowerCase();
	} else if (randomGenerator > 0.66 && randomGenerator <= 1) {
		choice = "Scissors";
		console.log(choice.toLowerCase());
		return choice.toLowerCase();
	} else {
		return choice = "Not a valid option";
	}
};


function playRound(computerChoice, playerChoice) {
	if (computerChoice == playerChoice) {
		console.log("DRAW");
		ComputerScore += 1;
		PlayerScore += 1;
	} else if ((computerChoice == "rock" && playerChoice == "scissors") ||
		(computerChoice == "paper" && playerChoice == "rock") ||
		(computerChoice == "scissors" && playerChoice == "paper")) {
		ComputerScore += 1;
	} else {
		PlayerScore += 1;
	}
	divComputerCurrentScore.textContent = "Computer Score: " + ComputerScore + " ";
	divPlayerCurrentScore.textContent = "Player Score: " + PlayerScore + " ";
}

function play5Rounds() {
	if (PlayerScore === 5) {
		container.remove();
		alert("Player wins with: " + PlayerScore + " points");
		divFinalMessage.append(divWinner.textContent = "Player WINS, CONGRATS!!!");
	} else if (ComputerScore === 5) {
		container.remove();
		alert("Computer wins with: " + ComputerScore + " points");
		divFinalMessage.append(divWinner.textContent = "Computer WINS, Better luck next time :(");
	}
}





const btnRock = document.querySelector('#button_rock');
btnRock.addEventListener("click", () => {
	let computerChoice = getComputerChoice();
	playRound(computerChoice, playerChoice = "rock");
	divResponsePlayer.textContent = "Player Choice: " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
	divResponseComputer.textContent = "Computer choice: " + computerChoice
	play5Rounds();
});

const btnPaper = document.querySelector('#button_paper');
btnPaper.addEventListener("click", () => {
	let computerChoice = getComputerChoice();
	playRound(computerChoice, playerChoice = "paper")
	divResponsePlayer.textContent = "Player Choice: " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
	divResponseComputer.textContent = "Computer choice: " + computerChoice
	play5Rounds();
});

const btnScissors = document.querySelector('#button_scissors');
btnScissors.addEventListener("click", () => {
	let computerChoice = getComputerChoice();
	playRound(computerChoice, playerChoice = "scissors")
	divResponsePlayer.textContent = "Player Choice: " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
	divResponseComputer.textContent = "Computer choice: " + computerChoice
	play5Rounds();
});

container.append(divResponsePlayer, divResponseComputer, divPlayerCurrentScore, divComputerCurrentScore);

