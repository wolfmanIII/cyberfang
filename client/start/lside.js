
Template.lside.gravatar_img = function() {
	var user = Meteor.user();
	if (user) { 
		m = user.emails[0].address;
		email = m.toLowerCase();
		var hash = CryptoJS.MD5(email);
		return img_add = "http://www.gravatar.com/avatar/" + hash;
	}
}
