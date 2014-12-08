var Marionette = require('backbone.marionette');
var ClassesController = require('./classes_controller');

module.exports = Marionette.Module.extend({
	initialize: function() {
		this.startWithParent = false;
	},
  onStart: function() {
    this.startMediator();
    return this.controller.listClasses();
  },
  startMediator: function() {
    return this.controller = new ClassesController({
      mainRegion: this.app.mainRegion
    });
  }
});
