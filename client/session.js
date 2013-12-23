
clearSessionAlertMessages = function() {
	delete Session.keys['SUCCESS_MESSAGE'];
	delete Session.keys['ERROR_MESSAGE'];
	delete Session.keys['INFO_MESSAGE'];
	delete Session.keys['WARNING_MESSAGE'];	
}
