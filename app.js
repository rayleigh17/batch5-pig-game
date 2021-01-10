/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// Global var
var scores;
var Playerscore;
var activeP; 
var isPlaying;
var lastDice;

//Globar DOM var 
var Ddice1 = document.querySelector('.dice');
var Ddice2 = document.querySelector('.dice2');
var PPanel0 = document.querySelector('.player-0-panel');
var PPanel1 = document.querySelector('.player-1-panel');
var scrore0 = document.getElementById('score-0');
var scrore1 = document.getElementById('score-1');
var current0 = document.getElementById('current-0');
var current1 = document.getElementById('current-1');
var name0 = document.getElementById('name-0');
var name1 = document.getElementById('name-1');


// initial function callback to zero
init();

//function init reset all
function init() {

    scores = [0, 0];
    Playerscore = 0;
    activeP = 0;
    isPlaying = true;
  
    // hide the dice
    Ddice1.style.display = 'none';
    Ddice2.style.display = 'none';
  
    // reset all scores and current
    scrore0.textContent = '0';
    scrore1.textContent = '0';
    current0.textContent = '0';
    current1.textContent = '0';
    
    // change player names back
    name0.textContent = 'Player 1';
    name1.textContent = 'Player 2';
  
    // remove winner class to active player panel
    PPanel0.classList.remove('winner');
    PPanel1.classList.remove('winner');
  
    // remove active class to active player panel
    PPanel0.classList.remove('active');
    PPanel1.classList.remove('active');
    PPanel0.classList.add('active');
  
  }
  function nextPlayer(){

        // player change 
        // if active player = 0, change to player 1, else active player = 0
        activeP === 0 ? activeP = 1 : activeP = 0;
        // reset 
        Playerscore = 0;
      
        // reset currents to 0 
        current0.textContent = '0';
        current1.textContent = '0';
        // toggle active on panels
      
        PPanel0.classList.toggle('active');
        PPanel1.classList.toggle('active');
}
// reset all
document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-roll').addEventListener('click', function() {
  // if game playing is true
  if (isPlaying) {

    //random number
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    
    Ddice1.style.display = 'block';
    Ddice2.style.display = 'block';

    Ddice1.src = 'dice-' + dice1 + '.png';
    Ddice2.src = 'dice-' + dice2 + '.png';

    //Update the round score IF the rolled number was NOT a 1
    if (dice1 !== 1 && dice2 !== 1) {
      // get the round score from dice rolls
      Playerscore += dice1 + dice2;
      // update the current players score with round score, based on active player
      document.querySelector('#current-' + activeP).textContent = Playerscore;
      // check if last dice roll is equal to current dice roll
    } else {
      // call next player function
      nextPlayer();
    }
    // set last dice roll to dice roll
    lastDice = dice1;
  }

});





