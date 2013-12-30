
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
