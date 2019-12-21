// function makeDeck() {
// 	const deck = [];
// 	const suits = [ 'hearts', 'diamonds', 'spades', 'clubs' ];
// 	const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
// 	for (let value of values.split(',')) {
// 		for (let suit of suits) {
// 			deck.push({ value, suit });
// 		}
// 	}
// 	return deck;
// }

// function drawCard(deck) {
// 	return deck.pop();
// }

//Deck of cards object
const myDeck = {
	//init card keys
	deck       : [],
	drawnCards : [],
	suits      : [ 'hearts', 'clubs', 'spades', 'diamonds' ],
	values     : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
	//function to create the deck
	initDeck() {
		//destructure to use in method (instead of 'this.suits' just use suits )
		let { deck, suits, values } = this;
		for (let suit of suits) {
			for (let value of values.split(',')) {
				//create an array of objects
				deck.push({ suit, value });
			}
		}
		return deck;
	},
	//draw a card from deck, return it and add it to the drawn cards key
	drawCard() {
		const card = this.deck.pop();
		this.drawnCards.push(card);
		return card;
	},

	//draw multiple cards
	drawCards(numCards = 1) {
		const cards = [];
		for (let i = 0; i < numCards; i++) {
			cards.push(this.drawCard());
		}
		return cards;
	},
	//shuffle the deck
	//Fisher-Yates Shuffle algorithm
	shuffle() {
		let { deck } = this;
		let currIndex = deck.length;
		let temp = null;
		let randomIndex = null;
		//while there remain elements to shuffle
		while (0 != currIndex) {
			//pick a remaining element
			randomIndex = Math.floor(Math.random() * currIndex);
			//move pointer from right to left
			currIndex--;
			//swap the random index with the current index
			temp = deck[currIndex];
			deck[currIndex] = deck[randomIndex];
			deck[randomIndex] = temp;
			//can also use es6 way of swapping using destructuring
			/* 
      [deck[currIndex],deck[randomIndex]] = [deck[randomIndex],deck[currIndex]]
      */
		}
		return deck;
	}
};
