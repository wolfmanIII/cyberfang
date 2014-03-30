
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
		setSessionObjKey("MESSAGES", "COMMAND", "login");
		if ( error ) {
			setSessionObjKey("MESSAGES", "ERROR", "Username e/o Password errati!");
		} else {
			var user = Meteor.user();
			if ( !user.emails[0].verified ) {
				setSessionObjKey("MESSAGES", "WARNING", "Login eseguito con successo. Attenzione " + user.username + "! Indirizzo email non verificato!");
			} else {
				setSessionObjKey("MESSAGES", "SUCCESS", "Login eseguito con successo. Benvenuto " + user.username + "!");
			}
			if ( Session.get("RETURN_URL") != null ) {
				Router.go( Session.get("RETURN_URL") );			
			} else {
				Router.go('profile');
			}
		}
	});
	return;
}
