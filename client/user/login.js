
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
			Session.set("ERROR_MESSAGE", error.message);
		} else {
			Session.set("SUCCESS_MESSAGE", "Login eseguito con successo!");
			Router.go('profile');
		}
	});
}
