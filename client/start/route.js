
Router.map(function () {
	this.route('home', {
		path: '/',
		template: 'home',
		layoutTemplate: 'layout',
		after: function () {
			document.title = 'Cyberfang Home';
		},
		unload: function() {
			clearCommonSessionObject();
		}
	});

	this.route('messages', {
		path: '/messages',
		template: 'all_messages',
		layoutTemplate: 'layout2col',
		yieldTemplates: {
			'lside': {to: 'lside'}
		},
		before: function() {
			if ( Meteor.userId() == null ) {
				clearSessionMessages();
				setSessionObjKey("MESSAGES", "COMMAND", "check permission");
				setSessionObjKey("MESSAGES", "ERROR", "Devi eseguire il login per accedere!");
				Session.set("RETURN_URL", this.path);				
				this.redirect("login");
			}
		},
		
		after: function () {
			document.title = "Cyberfang In Box";
		},
		data: { messages: 
			function() {
				var list = Messages.find({}, { sort: {subject: ""} });
				if ( list.count ) {
					return list;
				} else {
					return null;
				}
			}
		},
		unload: function() {
			clearCommonSessionObject();
		}
	});

	this.route('message', {
		path: '/message/:_id',
		template: 'message',
		layoutTemplate: 'layout2col',
		yieldTemplates: {
			'lside': {to: 'lside'}
		},
		before: function() {
			if ( Meteor.userId() == null ) {
				clearSessionMessages();
				setSessionObjKey("MESSAGES", "COMMAND", "check permission");
				setSessionObjKey("MESSAGES", "ERROR", "Devi eseguire il login per accedere!");
				Session.set("RETURN_URL", this.path);				
				this.redirect("login");
			}
		},
		after: function () {
			document.title = "Cyberfang message";
		},
		data: function (){
    		var m = Messages.findOne({_id: this.params._id});
    		if ( m ) {
   				var templateData = {mess: m};
				return templateData;
			} else {
				return null;
			}
  		},
		unload: function() {
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
		before: function() {
			if ( Meteor.userId() == null ) {
				clearSessionMessages();
				setSessionObjKey("MESSAGES", "COMMAND", "check permission");
				setSessionObjKey("MESSAGES", "ERROR", "Devi eseguire il login per accedere!");
				Session.set("RETURN_URL", this.path);				
				this.redirect("login");
			}
		},
		after: function () {
			document.title = "Cyberfang message";
		},
		unload: function() {
			clearCommonSessionObject();
		}	
	});

});
