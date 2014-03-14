
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
		template: 'all-messages',
		layoutTemplate: 'layout2col',
		yieldTemplates: {
			'lside': {to: 'lside'}
		},
		before: function() {
			var user = Meteor.user();
			if ( !user ) {
				setSessionObjKey("MESSAGES", "COMMAND", "checking credentials");
				setSessionObjKey("MESSAGES", "ERROR", "Devi eseguire il login per accedere!");
				Session.set("RETURN_URL", this.path);				
				this.redirect("login");
			}
		},
		after: function () {
			document.title = "Cyberfang In Box";
		},
		waitOn: function () {
			Meteor.subscribe("all-messages");
		},
		data: { messages: Messages.find({}, { sort: {subject: ""} }) },
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
		after: function () {
			document.title = "Cyberfang message";
		},
		waitOn: function () {
			Meteor.subscribe("message", this.params._id);
		},
		data: function (){
    		var m = Messages.findOne({_id: this.params._id});
   			var templateData = {mess: m};
			return templateData;
  		},
		unload: function() {
			clearCommonSessionObject();
		}	
	});

	this.route('message_new', {
		path: '/message/new',
		template: 'message',
		layoutTemplate: 'layout2col',
		yieldTemplates: {
			'lside': {to: 'lside'}
		},
		after: function () {
			document.title = "Cyberfang message";
		},
		unload: function() {
			clearCommonSessionObject();
		}	
	});

});
