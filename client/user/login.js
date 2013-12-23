
Template.login.events({
	'submit' : function(event) {
    	login();
    	event.preventDefault();
	}
});

function login() {
	Meteor.loginWithPassword(email.value, password.value, function(error){
		if ( error ) {
			Session.set("ERROR_MESSAGE", error.message);
		} else {
			Session.set("SUCCESS_MESSAGE", "Login eseguito con successo!");
			Router.go('profile');
		}
	});
}
