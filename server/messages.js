Meteor.publish("all_messages", function () {
	return Messages.find();
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
