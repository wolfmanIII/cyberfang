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
			setSessionObjKey("MESSAGE", "COMMAND", "logout");
			Meteor.logout();
		},
		unload: function() {
			clearSessionAlertMessages();
		}
	});

	this.route('profile', {
		path: '/profile',
        template: 'profile',
		layoutTemplate: 'layout2col',
		yieldTemplates: {
			'lside': {to: 'lside'}
		},
		before: function() {
			var user = Meteor.user();
			if ( !user ) {
				this.redirect('login');
			}
		},
		after: function () {
			document.title = "Profile";
		},
		unload: function() {
			clearSessionAlertMessages();
		}
		
	});

});
