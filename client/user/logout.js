Template.logout.rendered = function () {
	var mess = this.data.message;
	if ( mess != null ) {
		tickerText(mess, "#ticker");
	}
};
