tickerText = function (input, selector) {
	var text = input;
	var ticker = function( i ){
		var tick = $(selector).html();
		tick += text[i];
		$(selector).html(tick);
		i = i+1;
		if( i == text.length ) {
		   return;
		}
	    Meteor.setTimeout( function() {
			ticker( i );
		}, 30);
	};
	ticker(0);
};