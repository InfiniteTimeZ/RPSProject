const choices = ["Rock", "Paper", "Scissors"]
let myScore = 0;
let compScore = 0;

function getComputerChoice(){
  compC = choices[Math.floor(Math.random()* choices.length)];
  console.log(compC)
}