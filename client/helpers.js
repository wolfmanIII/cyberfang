
Handlebars.registerHelper('getSessionValue',function(input){
    return Session.get(input);
});

Handlebars.registerHelper('checkSessionValue',function(input){
	var value = Session.get(input);
    if ( Session.equals(input, undefined) || 
		 Session.equals(input, null) || 
		 Session.equals(input, "") ) {
		return false;
	} else {
		return true;
	}
});

Handlebars.registerHelper('shellMessage', function(input) {
	var user = Meteor.user();
	var shell = "<span style='color: yellow'><b>cyberfang:~/$</b></span> ";
	if ( input.length > 0 ) {
		shell += input + "<br>";
	} else {
		shell += getSessionObjValue("MESSAGES", "COMMAND") + "<br>";
	}
	//shell += getSessionObjValue("MESSAGES", "COMMAND") + "<br>";
	return shell;
});

Handlebars.registerHelper('getSessionMessage', function(input) {	
	return getSessionObjValue('MESSAGES', input);
});

Handlebars.registerHelper('getGravatarImage', function() {
	var user = Meteor.user();
	if ( user ) { 
		m = user.emails[0].address;
		email = m.toLowerCase();
		var hash = CryptoJS.MD5(email);
		return img_add = "http://www.gravatar.com/avatar/" + hash + ".png?s=130";
	} else {
		return null;
	}
});

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

