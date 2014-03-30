Template.alert_boxes.rendered = function () {

	var error = getSessionObjValue('MESSAGES', 'ERROR');
	var success = getSessionObjValue('MESSAGES', 'SUCCESS');
	var info = getSessionObjValue('MESSAGES', 'INFO');
	var warning = getSessionObjValue('MESSAGES', 'WARNING');
	
	if ( error ) {
		tickerText(error, "#tickerError");
	}
	
	if ( success ) {
		tickerText(success, "#tickerSuccess");
	}
	
	if ( info ) {
		tickerText(info, "#tickerInfo");
	}
	
	if ( warning ) {
		tickerText(warning, "#tickerWarning");
	}
}
