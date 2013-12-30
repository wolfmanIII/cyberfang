
Router.map(function () {
	this.route('home', {
		path: '/',
		template: 'home',
		layoutTemplate: 'layout',
		after: function () {
			document.title = 'Home Try-Meteor';
		},
		unload: function() {
			clearSessionMessages();
		}
	});

	this.route('messages', {
		path: '/messages',
		template: 'all-messages',
		layoutTemplate: 'layout-2-col',
		yieldTemplates: {
			'lside': {to: 'lside'}
		},
		after: function () {
			document.title = "Messages Try-Meteor";
		},
		waitOn: function () {
			Meteor.subscribe("all-messages");
		},
		data: { messages: Messages.find() },
		unload: function() {
			clearSessionMessages();
		}
	});

});
