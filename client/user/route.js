Router.map(function () {
	this.route('login', {
		path: '/login',
		template: 'login',
		layoutTemplate: 'layout',
		before: function () {
			if ( Meteor.userId() != null ) {
				this.redirect('profile');
			}
		},
		after: function () {
			document.title = "Cyberfang Login";
		}
	});

	this.route('logout', {
		path: '/logout',
		template: 'logout',
		layoutTemplate: 'layout',
        after: function() {
			setSessionObjKey("MESSAGES", "COMMAND", "logout");
			document.title = "Cyberfang Logout";
		},
		data: {
			message: "Disconnessione eseguita con successo!"
		},
		unload: function() {
			clearSessionMessages();
		}
	});

	this.route('profile', {
		path: '/profile',
        template: 'profile',
		layoutTemplate: 'layout2col',
		yieldTemplates: {
			'lside': {to: 'lside'}
		},
		before: function () {
			if ( Meteor.userId() == null ) {
				this.redirect('login');
			}
		},
		after: function () {
			document.title = "Cyberfang User Profile";
			
		},
		unload: function() {
			clearSessionMessages();
		}
		
	});

});
