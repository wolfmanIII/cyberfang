
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

Handlebars.registerHelper('shellMessage', function(message) {
	var message = "";
	var user = Meteor.user();
	var shell = "<span style='color: yellow'><b>";
	var back = "@cyberfang:~/$</b></span> ";
	if ( user ) {
		shell += user.username + back + " " + getSessionObjValue("MESSAGE", "COMMAND") + "<br>";
	} else {
		shell += "guest" + back + " " + getSessionObjValue("MESSAGE", "COMMAND") + "<br>";
	}
	str = shell + " " + message;
	return str;
});

Handlebars.registerHelper('getSessionMessage', function(input) {
	return getSessionObjValue('MESSAGE', input);
});
