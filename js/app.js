

const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchCount=0; 
let rate=3;

// declaring move variable
let moves = 0;
let counter = document.querySelector(".moves");

// declare variables for star icons
const stars = document.querySelectorAll(".fa-star");

 // stars list
 let starsList = document.querySelectorAll(".stars li");

 


 //rest game//new game
 function newgame(){
   // shuffle();
  (function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();
  // un flip all cards
  for (let i = 0; i < cards.length; i++){
    cards[i].classList.remove('flip');
  }
// add click event and stard flip function 
   cards.forEach(card => card.addEventListener('click', flipCard));
     //reset match count 
     matchCount=0;
    
     // reset moves
     moves = 0;
     counter.innerHTML = moves;
     for (let i= 0; i < stars.length; i++){
      stars[i].style.color = "#FFD700";
      stars[i].style.visibility = "visible";
  }
     //reset timer
     second = 0;
     minute = 0; 
     hour = 0;
     let timer = document.querySelector(".timer");
     timer.innerHTML = "0 mins 0 secs";
     clearInterval(interval);
 
}

// @description shuffles cards when page is refreshed / loads
//document.body.onload = unflipCards() ;

//Gmae Rules start

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
  
    this.classList.add('flip');
  
    if (!hasFlippedCard) {
      // first click
      hasFlippedCard = true;
      firstCard = this;
      return;
    }
  
    // second click
    secondCard = this;
    moveCounter();
    checkForMatch();
  }

  // matching function 
  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
  }
  // if  match remove click event and keep it fliped
  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    winner();
  }
  // if not match flip it back and prevent any other click until the flip back finish
  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetBoard();
    }, 1000);
  }
  // reset values 
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
  
  (function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
      return cards;
    });
  })();

  cards.forEach(card => card.addEventListener('click', flipCard));



  
// @description count player's moves
function moveCounter(){
    moves++;
    counter.innerHTML = moves;
    //start timer on first click
    if(moves == 1){
        second = 0;
        minute = 0; 
        hour = 0;
        startTimer();
    }
    // setting rates based on moves
    if (moves > 8 && moves < 12){
        for( i= 0; i < 3; i++){
            if(i > 1){
                stars[i].style.visibility = "collapse";
               rate=2;
            }
        }
    }
    else if (moves > 13){
        for( i= 0; i < 3; i++){
            if(i > 0){
                stars[i].style.visibility = "collapse";
                rate=1;
            }
        }
    }
}


// @description game timer
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}


// @description winner window when all cards match, show  moves, time and rating


  function winner(){
    matchCount++;
    if  (matchCount == 8)
      setTimeout(function alertt() {
        alert (`You win!!
       you have made: ${moves} moves
       Total Time: ${minute} mins ${second} secs
       Rating: ${rate} Star(s)`);
       newgame() ;
      
    },1000);
  
}


      



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
