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
        	document.title = "Cyberfang Logout";
			Meteor.logout( function() {
				setSessionObjKey("MESSAGES", "COMMAND", "logout");
				setSessionObjKey("MESSAGES", "INFO", "Disconnessione eseguita con successo!");
			});
		},
		unload: function() {
			clearCommonSessionObject();
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
			clearCommonSessionObject();
		}
		
	});

});
