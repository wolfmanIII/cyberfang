
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

Handlebars.registerHelper('shellMessage', function(command) {
	var message = "";
	var user = Meteor.user();
	var shell = "<span style='color: yellow'><b>";
	var back = "@cyberfang:~/$</b></span> ";
	if ( user ) {
		shell += user.username + back; 
	} else {
		shell += "rogue" + back;
	}
	str = shell + command + "<br>" + shell;
	return str;
});
