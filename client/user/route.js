Router.map(function () {
	this.route('login', {
		path: '/login',
		template: 'login',
		layoutTemplate: 'layout',
		after: function () {
			document.title = "Login";
		}
	});

	/*this.route('logout', {
		path: '/logout',
		template: 'logout',
		layoutTemplate: 'layout',
        before: function() {
			Meteor.logout(function(error) {
				if ( error ) {
					console.log(error);
				}
			});
		},
		unload: function() {
			clearSessionAlertMessages();
		}
	});*/

	this.route('profile', {
		path: '/profile',
        template: 'profile',
		layoutTemplate: 'layout2col',
		yieldTemplates: {
			'lside': {to: 'lside'}
		},
		before: function() {
			if ( !Meteor.user() ) {
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
