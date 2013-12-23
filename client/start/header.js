
Template.header.events({
	'click #logout' : function(event) {
    	Meteor.logout();
		clearSessionAlertMessages();
    	event.preventDefault();
	}
});
