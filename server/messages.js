Meteor.publish("all-messages", function () {
	return Messages.find();
});
