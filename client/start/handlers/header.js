Template.header.events({
	'click #logout' : function(event, t) {
		Meteor.logout( function () {
			Router.go("logout");
		});
	}
});
