let PlayerScore = 0;
let ComputerScore = 0;
let playerChoice;
let choice;
let a;

function getComputerChoice(){
	a = Math.random();
	if(a >= 0 && a <= 0.33){
		choice = "Rock";
		console.log(choice.toLowerCase());
		return choice.toLocaleLowerCase();
	} else if(a > 0.33 && a <= 0.66){
		choice = "Paper";
		console.log(choice.toLowerCase());
		return choice.toLowerCase();
	} else if(a > 0.66 && a <= 0.9){
		choice = "Scissors";
		console.log(choice.toLowerCase());
		return choice.toLowerCase();
	} else {
		return choice = "NAN";
	}
};
// getComputerChoice();

function getPlayerChoice(){
	playerChoice =  prompt("Select your choice: ", );
	console.log("Player choice: " + playerChoice.toLowerCase());
	if (!playerChoice) return null;
	return playerChoice.toLowerCase();
};
// getPlayerChoice();


function singleRound(computerChoice, playerChoice){
	if(computerChoice == playerChoice ){
		console.log("DRAW");
		ComputerScore += 1;
		PlayerScore += 1;
	} else if((computerChoice == "rock" && playerChoice == "scissors") || 
		(computerChoice == "paper" && playerChoice == "rock") || 
		(computerChoice == "scissors" && playerChoice == "paper")){
			console.log("Computer wins");
			ComputerScore += 1;
		}else {
			console.log("Player wins");
			PlayerScore += 1;
		}
	
	console.log("Player: " + PlayerScore);
	console.log("Computer: " + ComputerScore);
}

function playRound(){
let roundCount = 5;
	for (let i = 0; i < roundCount; i++){
		singleRound(getComputerChoice(), getPlayerChoice())
	}
	if(PlayerScore == ComputerScore){
		console.log("Final Draw, Computer: "+ ComputerScore + "Player: " + PlayerScore);
	}else if(PlayerScore > ComputerScore){
		console.log("Player wins, player score: " + PlayerScore);
	}else if(ComputerScore > PlayerScore){
		console.log("Computer winds, computer score: " + ComputerScore);
	}
	
}
playRound();

