
Router.configure({
	layoutTemplate: "layout3col",
	notFoundTemplate: "not_found",
	waitOn: function () {
	    Meteor.subscribe("all_messages");
	    return;
	}
});
