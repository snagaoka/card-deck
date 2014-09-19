// Create class called Card
var Card = function(suit, value){
	this.suit = suit;
	this.value = value; // this.value; <-- sets empty string
};

Card.SUITS = ["club", "spade", "heart", "diamond"];
Card.VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];