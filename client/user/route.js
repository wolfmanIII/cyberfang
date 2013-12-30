Router.map(function () {
	this.route('login', {
		path: '/login',
		template: 'login',
		layoutTemplate: 'layout',
		after: function () {
			document.title = "Login";
		}
	});

	  this.route('logout', {
		path: '/logout',
		template: 'logout',
		layoutTemplate: 'layout',
        after: function() {
			setSessionObjKey("MESSAGES", "COMMAND", "logout");
			Meteor.logout();
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
			document.title = "Profile";
			
		},
		unload: function() {
			clearSessionMessages();
		}
		
	});

});
