
Router.configure({
	layoutTemplate: "layout2col",
	yieldTemplates: {
		'lside': {to: 'lside'}
	},
	notFoundTemplate: "not_found",
	waitOn: function () {
	    Meteor.subscribe("all_messages");
	    return;
	}
});
