

Router.map(function () {
	this.route('home', {
		path: '/',
		template: 'home',
		layoutTemplate: 'layout',
		yieldTemplates: {
			'lside': {to: 'lside'}
		},
		after: document.title = 'Home Try-Meteor'
	});
});
