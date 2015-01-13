var Marionette = require('backbone.marionette');
var RostersController = require('./rosters_controller');

module.exports = Marionette.Module.extend({
	initialize: function() {
		this.startWithParent = false;
	},
  onStart: function() {
    this.startMediator();
    return this.controller.listRosters();
  },
  startMediator: function() {
    return this.controller = new RostersController({
      mainRegion: this.app.mainRegion
    });
  }
});
