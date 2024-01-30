const choices = ["Rock", "Paper", "Scissors"];
let myScore = 0;
let compScore = 0;
let playerChoice = '';
let compC = '';
let curRound = 0;
let win = "You won this round!"
let loss = "You loss this round!"
let tie = "You tied this round!"
let compWOn = "Computer Wins!"
let plWIn = "You won!"

document.getElementById("rockChoice").addEventListener('click', function(){
  playerChoice = 'Rock';
  console.log(playerChoice);
  playRound()
  getComputerChoice()
  compareChoice()
  end()
});

document.getElementById("paperChoice").addEventListener('click', function(){
  playerChoice = 'Paper';
  console.log(playerChoice);
  playRound()
  getComputerChoice()
  compareChoice()
  end()
});

document.getElementById("scissorChoice").addEventListener('click', function(){
  playerChoice = 'Scissors';
  console.log(playerChoice);
  playRound()
  getComputerChoice()
  compareChoice()
  end()
});



function getComputerChoice(){
  compC = choices[Math.floor(Math.random()* choices.length)];
  document.getElementById("compChoice").innerText = compC;
}
function compareChoice (){
  if (playerChoice === compC){
   document.getElementById("outcome").innerHTML = tie;
  } else if (playerChoice === "Rock" && compC === "Paper"){
    compScore ++
    document.getElementById("outcome").innerHTML = loss;
    document.getElementById("cScore").innerHTML = compScore;

  } else if (playerChoice === "Paper" && compC === "Scissors"){
    compScore ++;
    document.getElementById("outcome").innerHTML = loss;
    document.getElementById("cScore").innerHTML = compScore;


  } else if (playerChoice === "Scissors" && compC === "Rock"){
    compScore ++;
    document.getElementById("outcome").innerHTML = loss;
    document.getElementById("cScore").innerHTML = compScore;


  } else if (playerChoice === "Rock" && compC === "Scissors"){
    myScore ++;
    document.getElementById("pScore").innerHTML = myScore;
    document.getElementById("outcome").innerHTML = win;

  } else if (playerChoice === "Paper" && compC === "Rock"){
    myScore ++;
    document.getElementById("pScore").innerHTML = myScore;
    document.getElementById("outcome").innerHTML = win;

  } else if (playerChoice === "Scissors" && compC === "Paper"){
    myScore ++;
    console.log(myScore)
    document.getElementById("pScore").innerHTML = myScore;
    document.getElementById("outcome").innerHTML = win;

  } 
}
function playRound(){
   curRound ++;
   document.getElementById("round").innerHTML = curRound;
   if (myScore === 3 || compScore === 3){
    myScore = 0;
    compScore = 0;
    curRound = 0;
    document.getElementById("pScore").innerHTML = myScore;
    document.getElementById("cScore").innerHTML = compScore;
    document.getElementById("round").innerHTML = curRound;
    document.getElementById("outcome").innerHTML = " ";
    } 

}
function end(){
  if (compScore === 3 ){
    document.getElementById("outcome").innerHTML = compWOn;


  } else if (myScore === 3){
    document.getElementById("outcome").innerHTML = plWIn;

  } else
  document.getElementById("outcome").innerHTML = " ";

}
