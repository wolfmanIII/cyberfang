
Router.map(function () {
	this.route('home', {
		path: '/',
		template: 'home',
		layoutTemplate: 'layout',
		after: function () {
			document.title = 'Cyberfang Home';
		},
		unload: function() {
			clearSessionMessages();
		}
	});

	this.route('messages', {
		path: '/messages',
		template: 'all-messages',
		layoutTemplate: 'layout2col',
		yieldTemplates: {
			'lside': {to: 'lside'}
		},
		after: function () {
			document.title = "Cyberfang messages";
		},
		waitOn: function () {
			Meteor.subscribe("all-messages");
		},
		data: { messages: Messages.find() },
		unload: function() {
			clearSessionMessages();
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
			clearSessionMessages();
		}	
	});

});
