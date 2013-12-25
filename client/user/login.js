
Template.login.events({
	'submit' : function(event) {
    	login();
    	event.preventDefault();
	}
});

function login() {
	valEmail = $("#email").attr('value');
	valPassword = $("#password").attr('value');
	Meteor.loginWithPassword(valEmail, valPassword, function(error){
		clearSessionAlertMessages();
		if ( error ) {
			setSessionObjKey("MESSAGE", "ERROR", error.message);
			setSessionObjKey("MESSAGE", "COMMAND", "login");
		} else {
			setSessionObjKey("MESSAGE", "ERROR", "Login eseguito con successo!");
			setSessionObjKey("MESSAGE", "COMMAND", "login");
			Router.go('profile');
		}
	});
}
