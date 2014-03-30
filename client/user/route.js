Router.map(function () {
	this.route('login', {
		path: '/login',
		template: 'login',
		layoutTemplate: 'layout',
		onBeforeAction: function () {
			if ( Meteor.userId() != null ) {
				this.redirect('profile');
			}
		},
		onAfterAction: function () {
			document.title = "Cyberfang Login";
		}
	});

	this.route('logout', {
		path: '/logout',
		template: 'logout',
		layoutTemplate: 'layout',
		onBeforeAction: function() {
			Meteor.logout( function() {
				clearCommonSessionObject();
				setSessionObjKey("MESSAGES", "COMMAND", "logout");
				setSessionObjKey("MESSAGES", "INFO", "Disconnessione eseguita con successo!");
			});
			return;
		},
        onAfterAction: function() {
        	document.title = "Cyberfang Logout";
		},
		onStop: function() {
			clearCommonSessionObject();
		}
	});

	this.route('profile', {
		path: '/profile',
        template: 'profile',
		layoutTemplate: 'layout2col',
		onBeforeAction: function () {
			if ( Meteor.userId() == null ) {
				this.redirect('login');
			}
		},
		onAfterAction: function () {
			document.title = "Cyberfang User Profile";
			
		},
		onStop: function() {
			clearCommonSessionObject();
		}
		
	});

});
