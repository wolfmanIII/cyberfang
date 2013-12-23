Router.map(function () {
	this.route('login', {
		path: '/login',
		template: 'login',
		layoutTemplate: 'layout',
		before: function() {
			Meteor.logout();
		},
		after: function () {
			document.title = "Login";
			//clearSessionAlertMessages();
		}
	});

	this.route('logout', {
		path: '/logout',
        before: function() {
			Meteor.logout();
			this.redirect('/login');
		},
		after: function() {
			//clearSessionAlertMessages();
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
			if ( !Meteor.user() ) {
				this.redirect("/login")
			}
		},
		after: function () {
			document.title = "Profile";
			//clearSessionAlertMessages();
		}
	});

});
