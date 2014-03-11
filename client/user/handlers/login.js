
Template.login.events({
	'submit #login-form' : function(event, t) {
		login();
    	event.preventDefault();
	}
});

function login() {
	var valUserame = $('#username').val().toLowerCase();
	var valPassword = $('#password').val();
	Meteor.loginWithPassword(valUserame, valPassword, function(error){
		clearSessionMessages();
		if ( error ) {
			setSessionObjKey("MESSAGES", "ERROR", error.message);
			setSessionObjKey("MESSAGES", "COMMAND", "login");
		} else {
			setSessionObjKey("MESSAGES", "COMMAND", "login");
			var user = Meteor.user();
			if ( !user.emails[0].verified ) {
				setSessionObjKey("MESSAGES", "WARNING", "Login eseguito con successo. Attenzione " + user.username + "! Indirizzo email non verificato!");
			} else {
				setSessionObjKey("MESSAGES", "SUCCESS", "Login eseguito con successo. Benvenuto " + user.username + "!");
			}
			Router.go('profile');
		}
	});
}
