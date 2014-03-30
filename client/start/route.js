
Router.map(function () {
	this.route('home', {
		path: '/',
		template: 'home',
		layoutTemplate: 'layout',
		onAfterAction: function () {
			document.title = 'Cyberfang Home';
		},
		onStop: function() {
			clearCommonSessionObject();
		}
	});

	this.route('messages', {
		path: '/messages',
		template: 'all_messages',
		layoutTemplate: 'layout2col',
		onBeforeAction: function() {
			if ( !Meteor.userId() ) {
				clearSessionMessages();
				setSessionObjKey("MESSAGES", "COMMAND", "check permission");
				setSessionObjKey("MESSAGES", "ERROR", "Devi eseguire il login per accedere!");
				Session.set("RETURN_URL", this.path);
				this.redirect("login");
			}
		},
		onAfterAction: function () {
			document.title = "Cyberfang In Box";
		},
		waitOn: function () {
	    	Meteor.subscribe("all_messages");
	    	return;
		},
		Data: { messages: 
			function() {
				var list = Messages.find({}, { sort: {subject: ""} });
				if ( list.count ) {
					return list;
				} else {
					return null;
				}
			}
		},
		onStop: function() {
			clearCommonSessionObject();
		}
	});

	this.route('message', {
		path: '/message/:_id',
		template: 'message',
		layoutTemplate: 'layout2col',
		onBeforeAction: function() {
			if ( Meteor.userId() == null ) {
				clearSessionMessages();
				setSessionObjKey("MESSAGES", "COMMAND", "check permission");
				setSessionObjKey("MESSAGES", "ERROR", "Devi eseguire il login per accedere!");
				Session.set("RETURN_URL", this.path);				
				this.redirect("login");
			}
		},
		onAfterAction: function () {
			document.title = "Cyberfang message";
		},
		Data: function (){
    		var m = Messages.findOne({_id: this.params._id});
    		if ( m ) {
   				var templateData = {mess: m};
				return templateData;
			} else {
				return null;
			}
  		},
		onStop: function() {
			clearCommonSessionObject();
		}	
	});

	this.route('message_new', {
		path: '/new/message',
		template: 'message',
		layoutTemplate: 'layout2col',
		yieldTemplates: {
			'lside': {to: 'lside'}
		},
		onBeforeAction: function() {
			if ( Meteor.userId() == null ) {
				clearSessionMessages();
				setSessionObjKey("MESSAGES", "COMMAND", "check permission");
				setSessionObjKey("MESSAGES", "ERROR", "Devi eseguire il login per accedere!");
				Session.set("RETURN_URL", this.path);				
				this.redirect("login");
			}
		},
		onAfterAction: function () {
			document.title = "Cyberfang message";
		},
		onStop: function() {
			clearCommonSessionObject();
		}	
	});

});
