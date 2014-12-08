var Marionette = require('backbone.marionette');
var TitlesController = require('./titles_controller');

module.exports = Marionette.Module.extend({
	initialize: function() {
		this.startWithParent = false;
	},
  onStart: function() {
    this.startMediator();
    return this.controller.listTitles();
  },
  startMediator: function() {
    return this.controller = new TitlesController({
      mainRegion: this.app.mainRegion
    });
  }
});
