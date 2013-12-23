
Template.login.events({
	'submit' : function(event) {
    	login();
    	event.preventDefault();
	}
});

function login() {
	Meteor.loginWithPassword(email.value, password.value, function(error){
		if ( error ) {
			//Session.set("ERROR_MESSAGE", error.message);
			Meteor.render( function() {
				return Template.alert_boxes({errorMessage: error.message});
			});
			Deps.flush();
		} else {
			//Session.set("SUCCESS_MESSAGE", "Login eseguito con successo!");
			Router.go('profile');
		}
	});
}
