Router.map(function () {
	this.route('login', {
		path: '/login',
		template: 'login',
		layoutTemplate: 'layout',
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
			Meteor.logout();
			document.title = "Cyberfang Logout";
		},
		load: function() {
			tickerText("Disconnessione eseguita");
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
