let score =  JSON.parse(localStorage.getItem('score')) ||   {
  wins: 0,
  losses: 0,
  ties: 0
} 

updateScoreElement();


/*
if (!score) {
score = {
  wins: 0,
  losses: 0,
  ties: 0
} }; */
  
  let isAutoPlaying = false
  let intervalId;

  function autoPlay() {

    if (!isAutoPlaying) {

      intervalId =  setInterval(() => {
        const playerMove = pickComputerMove();
        playGame(playerMove);
      }, 1000);
      isAutoPlaying = true;
    } else{
      clearInterval(intervalId);
      isAutoPlaying = false;
    }
  }; 

 document.querySelector('.js-rock-button').addEventListener('click', () => { playGame('rock');
});


document.body.addEventListener('keydown', (event) => {
   console.log(event.key)
   if (event.key === 'r') {
    playGame('rock');
   } else if (event.key === 'p') {
    playGame('paper');
   } else if (event.key === 's') {
    playGame('scissors');
   }

});

  function playGame (playerMove) {
    const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
  if (computerMove === 'rock') {
    result =  'you lose';
  } else if (computerMove === 'paper') {
    result = 'you win';
  } else if (computerMove === 'Scissors') {
    result = 'tie';
  }
}

else if (playerMove === 'paper') {
  if (computerMove === 'rock') {
          result = 'you win';
        } else if (computerMove === 'paper') {
          result = 'tie';
        } else if (computerMove === 'Scissors') {
          result = 'you lose';
        }
}

else if (playerMove === 'rock') { 
  if (computerMove === 'rock') {
      result =  'tie';
    } else if (computerMove === 'paper') {
      result = 'you lose';
    } else if (computerMove === 'Scissors') {
      result = 'you win';
    }
}

if (result === 'you win') {
  score.wins = score.wins + 1;
} else if (result === 'you lose') {
  score.losses = score.losses + 1;
} else if (result === 'tie') {
  score.ties = score.ties + 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement ();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves')
.innerHTML =   `<p class="js-moves">You
  <img class="move-icon" src="icons/${playerMove}-emoji.png">
  <img class="move-icon" src="icons/${computerMove}-emoji.png">
  Computer`;
  
};


  function updateScoreElement () {
    document.querySelector('.js-score')
.innerHTML = `win: ${score.wins}, losses: ${score.losses}, tie: ${score.ties}`;
  }

  function pickComputerMove () {
    
    const randomNumder =  Math.random();
  
    let computerMove = '';

      if (randomNumder >= 0 && randomNumder < 1 / 3) {
          computerMove = 'rock';
      } else if ( randomNumder >= 1 / 3 && randomNumder < 2 / 3 ) {
          computerMove = 'paper';
      } else if (randomNumder >= 2 / 3 && randomNumder < 1) {
          computerMove = 'Scissors';
      };


 return computerMove;

  };