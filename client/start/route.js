
Router.map(function () {
	this.route('home', {
		path: '/',
		template: 'home',
		layoutTemplate: 'layout',
		after: function () {
			document.title = 'Cyberfang Home';
		},
		unload: function() {
			clearSessionMessages();
		}
	});

	this.route('messages', {
		path: '/messages',
		template: 'all-messages',
		layoutTemplate: 'layout2col',
		yieldTemplates: {
			'lside': {to: 'lside'}
		},
		after: function () {
			document.title = "Cyberfang messages";
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
