(function(){
	// Instantiate a new deck
	var deck = new Deck();
	
	var newHand = deck.deal();
	
	// loops to show each card
	function showNewHand(handArray){
		for (var i = 0; i < handArray.length; i++) {
			console.log(handArray[i].suit, handArray[i].value);

			// card container
			var eachCard = $("<div class='eachCard'></div>");
			
			// show each value
			var eachCardValue = $("<h1></h1>").html(handArray[i].value);
			eachCard.append(eachCardValue);

			// show each suit
			var eachCardSuit = $("<img>", {
				src: "images/" + handArray[i].suit + ".png"
			});
			eachCard.append(eachCardSuit);


			$("body").append(eachCard);
		}
	}

	showNewHand(newHand);

	console.log(deck.cards);

	// var showNewHand = $('<div id="display-cards"></div>');
	// showNewHand.html('hello world');
	// $('body').append(showNewHand);

	// create cards
	var heart = $("<img>", {
		src: "images/heart.png"
	});

	var club = $("<img>", {
		src: "images/club.png"
	});

	var diamond = $("<img>", {
		src: "images/diamond.png"
	});

	var spade = $("<img>", {
		src: "images/spade.png"
	});



})();