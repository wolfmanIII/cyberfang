Meteor.publish("all-messages", function () {
	return Messages.find();
});

Meteor.publish("message", function(message_id) {
	return Messages.find({_id: message_id});
});

Meteor.methods({
	save_message: function (message) {
		Messages.upsert(
		{
			_id: message.m_id
		}, 
		{
			subject: message.subject,
			text: message.text 
		});
		return "Messaggio registrato correttamente!";
	}
});
