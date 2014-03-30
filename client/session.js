
clearSessionMessages = function() {
	delete Session.keys['MESSAGES'];
}

setReturnUrl = function(path) {
	Session.set("RETURN_URL", path);
}

getReturnUrl = function() {
	return Session.get("RETURN_URL");
}

removeReturnUrl = function() {
	delete Session.keys['RETURN_URL'];
}

setSessionObjKey = function(name, key, value) {
	sObj = Session.get(name);
	if ( !sObj ) {
		sObj = {};
	}
	sObj[key] = value;
	Session.set(name, sObj);
}

getSessionObjValue = function(name, key) {
	sObj = Session.get(name);
	if ( sObj ) {
		return sObj[key];
	} else {
		return null;
	}
}

clearCommonSessionObject = function() {
	clearSessionMessages();
	removeReturnUrl();
}
