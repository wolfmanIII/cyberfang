Template.message.rendered = function () {
	var mess = this.data.mess;
	if ( mess != null ) {
		tickerText(mess['text'], "#ticker");
	}
};
