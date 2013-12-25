
Template.login.events({
	'submit' : function(event) {
    	login();
    	event.preventDefault();
	}
});

function login() {
	var valEmail = $("#email").attr('value');
	var valPassword = $("#password").attr('value');
	Meteor.loginWithPassword(valEmail, valPassword, function(error){
		clearSessionAlertMessages();
		if ( error ) {
			setSessionObjKey("MESSAGE", "ERROR", error.message);
			setSessionObjKey("MESSAGE", "COMMAND", "login");
		} else {
			setSessionObjKey("MESSAGE", "COMMAND", "login");
			var user = Meteor.user();
			if ( !user.emails[0].verified ) {
				setSessionObjKey("MESSAGE", "WARNING", "Login eseguito con successo! Attenzione indirizzo email non verificato!");
			} else {
				setSessionObjKey("MESSAGE", "SUCCESS", "Login eseguito con successo!");
			}
			Router.go('profile');
		}
	});
}
