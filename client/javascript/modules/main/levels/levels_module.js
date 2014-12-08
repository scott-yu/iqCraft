var Marionette = require('backbone.marionette');
var LevelsController = require('./levels_controller');

module.exports = Marionette.Module.extend({
	initialize: function() {
		this.startWithParent = false;
	},
	onStart: function() {
		this.startMediator();
		return this.controller.listLevels();
	},
	startMediator: function() {
		return this.controller = new LevelsController({
	    	mainRegion: this.app.mainRegion
		});
	}
});
