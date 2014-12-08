var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({
	initialize: function(options) {
		this.app = options.app;
	},
	routes: {
		'main': 'onBrowseMain'
	},
	onBrowseMain: function() {
		this.app.startModule('main');
	},
});