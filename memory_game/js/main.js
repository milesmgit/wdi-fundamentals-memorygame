
// test main.js linked file with script tags
// ctrl + shft + j opens the chrome console in windows 10
// console.log('Up and running');


// // create the 4 cards for our memory game
//
// const cardOne = "queen";
// const cardTwo = "queen";
// const cardThree = "king";
// const cardFour = "king";
//
//
//
// // flipping two cards to test concatenation with string variables.
//
// console.log('User flips ' + cardOne);
// console.log('User flips ' + cardTwo);
//





// cards from which to choose.
const cards = ['queen', 'queen', 'king', 'king'];

// cards in play
const cardsInPlay = [];




function checkForMatch(){
  if(cardsInPlay.length === 2){
    if(cardsInPlay[0] === cardsInPlay[1]){
      console.log('You found a match');
    } else {
        console.log('Sorry, try again');
    }
  }
}





function flipCard(cardId){

  // console.log the card that was flipped over
  console.log('User flipped ' + cards[cardId]);

  cardsInPlay.push(cards[cardId]);
  checkForMatch();

}

flipCard(0);
flipCard(2);




























































//   placeholder so I can save without losing working space, ie line breaks.
