const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const possibleChoices = document.querySelectorAll('button');
let playerChoice;
let computerChoice;
let result;
let userScore = 10;
let computerScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.id;
  playerChoiceDisplay.innerHTML = playerChoice;
  generateComputerChoice();
  getResult();
  getScore();

  // document.getElementById('clear').addEventListener('click',clear);
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 ;// or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 3) {
    computerChoice = 'paper';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === playerChoice) {
    result = 'Draw!';
    userScore = 100; 
    computerScore = 100;
    

  }
  if (computerChoice === 'rock' && playerChoice === "paper") {
    result = 'You Win!';
    userScore = 100; 
    computerScore = 0;
    

  }
  if (computerChoice === 'rock' && playerChoice === "scissors") {
    result = 'You Lose!';
     userScore = 0;
     computerScore = 100;
  }
  if (computerChoice === 'paper' && playerChoice === "scissors") {
    result = 'You Win!';
    userScore = 100; 
    computerScore = 0;
  }
  if (computerChoice === 'paper' && playerChoice === "rock") {
    result = 'You Lose!';
     userScore = 0;
     computerScore = 100;
  }
  if (computerChoice === 'scissors' && playerChoice === "rock") {
    result = 'You Win!';
    userScore = 100; 
    computerScore = 0;
  }
  if (computerChoice === 'scissors' && playerChoice === "paper") {
    result = 'You Lose!';
     userScore = 0;
     computerScore = 100;
  }
  resultDisplay.innerHTML = result;
}

function getScore(){
  // document.getElementById('score').addEventListener('click',getResult);
  if (userScore > computerScore){
    scoreDisplay.innerHTML = 1000;
  }
  if (userScore === computerScore){
    scoreDisplay.innerHTML = 500;
  }
  if (userScore < computerScore){
    scoreDisplay.innerHTML = 0;
  }
      
}
function clear(){
  document.getElementById('computer-choice').innerHTML = "";
  document.getElementById('player-choice').innerHTML = "";
  document.getElementById('result').innerHTML = "";
  document.getElementById('score').innerHTML = "";
  
  
}