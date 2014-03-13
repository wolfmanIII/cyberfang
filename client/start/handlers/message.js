
Template.message.events({
	'submit #message-form' : function(event, t) {
		event.preventDefault();
		var message = {
			m_id: $('#message_id').val(),
			subject: $('#subject').val(),
			text: $('#text').val()
		}
		Meteor.call('save_message', message, function (error, result) {
			setSessionObjKey("MESSAGES", "COMMAND", "save message");
			if ( error ) {
				setSessionObjKey("MESSAGES", "ERROR", error.message);
			} else {
				setSessionObjKey("MESSAGES", "SUCCESS", result);			
			}
		});
		Router.go("messages");
	}
});
