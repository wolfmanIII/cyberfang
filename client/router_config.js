
Router.configure({
	waitOn: function () {
	    return Meteor.subscribe("all-messages");
	}
});
