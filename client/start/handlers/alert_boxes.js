Template.alert_boxes.rendered = function () {
	var error = getSessionObjValue('MESSAGES', 'ERROR');
	var success = getSessionObjValue('MESSAGES', 'SUCCESS');
	var info = getSessionObjValue('MESSAGES', 'INFO');
	var warning = getSessionObjValue('MESSAGES', 'WARNING');
	
	if ( error != null ) {
		tickerText(error, "#ticker");
	}
	
	if ( success != null ) {
		tickerText(success, "#ticker");
	}
	
	if ( info != null ) {
		tickerText(info, "#ticker");
	}
	
	if ( warning != null ) {
		tickerText(warning, "#ticker");
	}
}
