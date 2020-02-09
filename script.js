let rounds = 1;
let playerPoints = 0;
let computerPoints = 0;


let playRound = (playersChoice) => {

  let computerPlay = () => {
    const choices = ['Rock','Paper','Scissors'];
    let choice = Math.floor(Math.random()*Math.floor(3));
    return choices[choice]; 
  };

    let computerSelection = computerPlay();
    let result = 'Sorry, please try again';
    if (playersChoice === computerSelection) {
      result = 'Tie! Both of you chose the same option!';
    }
    else if(playersChoice === 'Rock') {
      if(computerSelection === 'Paper') {
        result = 'You lose! Paper beats Rock.';
        computerPoints = computerPoints + 1;
      }
      else {
        result = 'You win! Rock beats Scissors.';
        playerPoints = playerPoints + 1;
      }
    }
    else if(playersChoice === 'Paper') {
      if(computerSelection === 'Rock') {
        result = 'You win! Paper beats Rock.';
        playerPoints = playerPoints + 1;
      }
      else {
        result = 'You lose! Scissors beats Paper.';
        computerPoints = computerPoints + 1;
      }
    }
    else if(playersChoice === 'Scissors') {
      if(computerSelection === 'Paper') {
        result = 'You win! Scissors beats Paper.';
        playerPoints = playerPoints + 1;
      }
      else{
        result = 'You lose! Rock beats Scissors.';
        computerPoints = computerPoints + 1;
      }
    }
    result =  "Round " + rounds + ": " + result;
    document.getElementById('roundResult').textContent = result;
    console.log(result);
    rounds++;
};

let updateScore = () => {
  let scoreKeeper = document.getElementById('gameScore');
  scoreKeeper.textContent = `Player: ${playerPoints}    Computer: ${computerPoints}`;
  if(playerPoints === 5 || computerPoints === 5) {
    endGame();
  }
};

let endGame = () => {
  let gameResults = document.getElementById('gameResults');

  buttonList.forEach(button => button.disabled = true);
  if(playerPoints === 5) {
    gameResults.textContent = `Congrats! You beat the Computer!`;
  }
  else {
    gameResults.textContent = `You lose! The Computer has beat you.`;
  }
};

let buttons = document.getElementsByTagName('button');
let buttonList = Array.from(buttons);
let playersClick = (e) => {
  console.log(e.target.name);
  playRound(e.target.name);
  updateScore();
};
buttonList.forEach(button => button.addEventListener('mousedown',playersClick));

