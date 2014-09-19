// Creating class called Deck
var Deck = function(){ // <-- constructor method
	this.cards = []; // assigns a property called cards to this class
	this.generate(); // runs a method of this class
	this.shuffle();
};

// Defines a function called generate, and attaching it to Deck class
Deck.prototype.generate = function(){
	// generate 52 cards
	// for loop to add each card to array
	for (var i = 0; i < Card.SUITS.length; i++) { // loop through SUITS

		for (var j = 0; j < Card.VALUES.length; j++) { // loop through VALUES of each SUIT
			var card = new Card(Card.SUITS[i], Card.VALUES[j]); // creates new card
			this.cards.push(card); // puts card into Deck (array)
		}
	}
};

// Defines function called deal to Deck class
Deck.prototype.deal = function(){
	// Retrieve the first 5 cards, remove the cards from the deck
	// Return the 5 cards
	return this.cards.splice(0, 5);
};

// Defines funciton called shuffle to Deck class
Deck.prototype.shuffle = function(){
	var counter = this.cards.length;
	var randomIndex = 0;
	var temp = null;

	while (counter > 0) {
		// gets random number
		randomIndex = Math.floor(Math.random() * counter);
		counter--;

		// sets random to temp
		temp = this.cards[randomIndex];
		this.cards[randomIndex] = this.cards[0];
		this.cards[0] = temp;
		
		console.log("shuffle!!");
	}

};