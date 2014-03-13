Meteor.publish("all-messages", function () {
	return Messages.find();
});

Meteor.publish("message", function(message_id) {
	return Messages.find({_id: message_id});
});

/*
Messages.allow({
	insert: function () { return true; },
	update: function () { return true; },
	remove: function () { return true; } 
});
*/
