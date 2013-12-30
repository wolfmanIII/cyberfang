
clearSessionMessages = function() {
	delete Session.keys['MESSAGES'];
}

setSessionObjKey = function(name, key, value) {
	sObj = Session.get(name);
	if ( sObj == null ) {
		sObj = {};
	}
	sObj[key] = value;
	Session.set(name, sObj);
}

getSessionObjValue = function(name, key) {
	sObj = Session.get(name);
	if ( sObj != null ) {
		return sObj[key];
	} else {
		return null;
	}
}
