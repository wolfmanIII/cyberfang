
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

Handlebars.registerHelper('shellMessage', function() {
	var user = Meteor.user();
	var shell = "<span style='color: yellow'><b>";
	var back = "@cyberfang:~/$</b></span> ";
	if ( user ) {
		shell += user.username + back + " " + getSessionObjValue("MESSAGES", "COMMAND") + "<br>";
	} else {
		shell += "guest" + back + " " + getSessionObjValue("MESSAGES", "COMMAND") + "<br>";
	}
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
		return img_add = "http://www.gravatar.com/avatar/" + hash;
	} else {
		return null;
	}
});

Handlebars.registerHelper('tickerText', function (input) {
	var ticker = function( i ){
		if ( document.getElementById("ticker") != null ) {
			var tick = $("#ticker").html();
        	tick += input[i];
			$("#ticker").html(tick);
			i++;
        	if( i == input.length ) {
        	   return;
			}
		}
        Meteor.setTimeout( function(){
			ticker( i );
		}, 100);
    }
	ticker(0);
});


tickerText = function (input) {
	var text = input;
	var ticker = function( i ){
		var tick = $("#ticker").html();
		tick += text[i];
		$("#ticker").html(tick);
		i = i+1;
		if( i == text.length ) {
		   return;
		}
	    Meteor.setTimeout( function() {
			ticker( i );
		}, 100);
	};
	ticker(0);
};

