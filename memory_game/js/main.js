
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

// first card user flipped
const cardOne = cards[0];

// add the first card to the cardsInPlay Array
cardsInPlay.push(cardOne);

// debugging purposes to verify that the user flipped card 1
console.log('User flipped ' + cardOne);

// second card the user flipped
const cardTwo = cards[2];

// add the second card to the cardsInPlayArray
cardsInPlay.push(cardTwo);


// debugging purposes to verify that the user flipped card 3
console.log('User flipped ' + cardTwo);



// if statement to check if two cards have been played at this point.

if (cardsInPlay.length === 2){
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert('You found a match');
  } else {
    alert('Sorry, try again');
  }
}




//   placeholder so I can save without losing working space, ie line breaks.
