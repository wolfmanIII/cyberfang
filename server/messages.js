Meteor.publish("all-messages", function () {
	return Messages.find();
});

Messages.allow({
	insert: function () { return true; },
	update: function () { return true; },
	remove: function () { return true; } 
});
