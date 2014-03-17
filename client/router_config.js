
Router.configure({
	notFoundTemplate: "not_found",
	waitOn: function () {
	    return Meteor.subscribe("all_messages");
	}
});
