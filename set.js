

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
   document.getElementById("result").innerHTML = tie;
   tieShake() // Technically not shaking but to lazy to fix
  } else if (playerChoice === "Rock" && compC === "Paper"){
    compScore ++;
    document.getElementById("result").innerHTML = loss;
    document.getElementById("cScore").innerHTML = compScore;
    cShake();
    cShake();

  } else if (playerChoice === "Paper" && compC === "Scissors"){
    compScore ++;
    document.getElementById("result").innerHTML = loss;
    document.getElementById("cScore").innerHTML = compScore;
    cShake();
    cShake();


  } else if (playerChoice === "Scissors" && compC === "Rock"){
    compScore ++;
    document.getElementById("result").innerHTML = loss;
    document.getElementById("cScore").innerHTML = compScore;
    cShake();

  } else if (playerChoice === "Rock" && compC === "Scissors"){
    myScore ++;
    document.getElementById("pScore").innerHTML = myScore;
    document.getElementById("result").innerHTML = win;
    pShake();

  } else if (playerChoice === "Paper" && compC === "Rock"){
    myScore ++;
    document.getElementById("pScore").innerHTML = myScore;
    document.getElementById("result").innerHTML = win;
    pShake()


  } else if (playerChoice === "Scissors" && compC === "Paper"){
    myScore ++;
    document.getElementById("pScore").innerHTML = myScore;
    document.getElementById("result").innerHTML = win;
    pShake();
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
    document.getElementById("result").innerHTML = " ";
    } 

}
function end(){
  if (compScore === 3 ){
    document.getElementById("result").innerHTML = compWOn;


  } else if (myScore === 3){
    document.getElementById("result").innerHTML = plWIn;

  }
}
function pShake() {
  var pPoint = document.getElementById("pPoint");
  pPoint.style.animation = 'none';
  void pPoint.offsetWidth; 
  pPoint.style.animation = 'shake 0.5s linear';

}
function cShake() {
  var cPoint = document.getElementById("cPoint");
  cPoint.style.animation = 'none';
  void cPoint.offsetWidth; 
  cPoint.style.animation = 'shake 0.5s linear';

}
function pShake() {
  let pPoint = document.getElementById("pPoint");
  pPoint.style.animation = 'none';
  void pPoint.offsetWidth; 
  pPoint.style.animation = 'shake 0.5s linear';

}
function cShake() {
  let cPoint = document.getElementById("cPoint");
  cPoint.style.animation = 'none';
  void cPoint.offsetWidth; 
  cPoint.style.animation = 'shake 0.5s linear';

}
function tieShake() {
  let result = document.getElementById("result");
  result.style.animation = 'none';
  void result.offsetWidth; 
  result.style.animation = 'shake 0.5s linear';

}