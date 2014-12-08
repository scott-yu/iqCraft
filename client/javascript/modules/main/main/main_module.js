var Marionette = require('backbone.marionette');
var MainController = require('./main_controller');

module.exports = Marionette.Module.extend({
	initialize: function() {
		this.startWithParent = false;
	},
  onStart: function() {
    this.startMediator();
    return this.controller.showContent();
  },
  startMediator: function() {
    return this.controller = new MainController({
      mainRegion: this.app.mainRegion
    });
  }
});
