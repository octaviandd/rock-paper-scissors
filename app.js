const userScore_span = document.getElementById('user_score');
const computerScore_span = document.getElementById('computer_score');
const tiesNumber = document.getElementById('ties_number');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const roundNumber = document.getElementById('roundnumber');
const resetScore = document.getElementById('reset_button')
const winner = document.querySelector('#winner')




let userScore = 0;
let computerScore = 0;
let ties = 0;
let rounds = 0;

function computerRandomPick(){
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random(choices) * 3);
  return choices[randomChoice];

}

const scoreBoard = (function(){
  function win(){
    userScore++
    userScore_span.innerHTML = userScore
  }
  
  function lose() {
    computerScore++
    computerScore_span.innerHTML = computerScore
  }
  
  function draw() {
    ties++
    ties_number.innerHTML = ties
  }
  
  function addRound(){
    rounds ++
    round_number.innerHTML = 'Round: ' + rounds
  }
  
  function reset(){
    rounds = 0;
    userScore = 0;
    computerScore = 0;
    ties = 0;
    round_number.innerHTML = 'Round: '
    ties_number.innerHTML = '0'
    computerScore_span.innerHTML = '0'
    userScore_span.innerHTML = '0'
  }

  return {win, lose, draw, addRound, reset}

})()


function game(userChoice){
  const computerChoice = computerRandomPick();
  switch(userChoice + computerChoice){
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      winner.innerHTML = 'Computer picked: ' + computerChoice + ', you won.'
      scoreBoard.win()
      scoreBoard.addRound()
      break
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      winner.innerHTML = 'Computer picked: ' + computerChoice + ', you lost.'
      scoreBoard.lose()
      scoreBoard.addRound()
      break
    case 'rockrrock':
    case 'paperpaper':
    case 'scissorsscissors':
      winner.innerHTML = "You both picked " + computerChoice + ", it's a draw."
      scoreBoard.draw()
      scoreBoard.addRound()
      break
  }
}



function main(){
    rock_div.addEventListener('click', function () {
      game('rock')
    })

    paper_div.addEventListener('click', function () {
      game('paper')
    })

    scissors_div.addEventListener('click', function () {
      game('scissors')
    })
    resetScore.addEventListener('click', function () {
      scoreBoard.reset()
    })
}

main()
