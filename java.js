const moves = ['✊', '✋', '✌️','🦎','🖖']
let computerMove = document.getElementById("computerHand")
let result = ''
let playerScore = 0
let computerScore = 0
let round = 0

function getComputerChoice() {
let randomChoice = Math.floor(Math.random() * moves.length)
    computerMove.textContent = moves[randomChoice]
    return moves[randomChoice]
}

function getHumanChoice(playerMove) {
let computerChoice = getComputerChoice()
    if (playerMove === computerChoice) {
    result = "It's a tie!";
    } else if (
    (playerMove === '✊' && computerChoice === '✌️') ||
    (playerMove === '✊' && computerChoice === '🦎') ||
    (playerMove === '✋' && computerChoice === '✊') ||
    (playerMove === '✋' && computerChoice === '🖖') ||
    (playerMove === '✌️' && computerChoice === '🦎') ||
    (playerMove === '✌️' && computerChoice === '✋') ||
    (playerMove === '🦎' && computerChoice === '🖖') ||
    (playerMove === '🦎' && computerChoice === '✋') ||
    (playerMove === '🖖' && computerChoice === '✌️') ||
    (playerMove === '🖖' && computerChoice === '✊') 
    ) {
    playerScore++;
    result = 'You win!';
    } else {
    computerScore++;
    result = 'You Lose!!';
    }
    round++;

    document.getElementById('result').textContent = result;
    document.getElementById("round").textContent = `Round: ${round}`;
    document.getElementById("player1").textContent = `Player: ${playerScore}`;
    document.getElementById("computer1").textContent = `Computer: ${computerScore}`;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;

  document.getElementById("result").textContent = "Waiting for first game...";
  document.getElementById("round").textContent = `Round: ${round}`;
  document.getElementById("player1").textContent = `Player: ${playerScore}`;
  document.getElementById("computer1").textContent = `Computer: ${computerScore}`;
   document.getElementById("computerHand").textContent = "";
}





