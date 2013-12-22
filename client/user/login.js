
Template.login.events({
	'submit' : function(event) {
    	login();
    	event.preventDefault();
	}
});

function login() {
	Meteor.loginWithPassword(email.value, password.value, function(error){
		if ( error ) {
			Router.go('login');
		} else {
			Router.go('profile');
		}
	});
}
