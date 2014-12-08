var Marionette = require('backbone.marionette');
var SkillsController = require('./skills_controller');

module.exports = Marionette.Module.extend({
	initialize: function() {
		this.startWithParent = false;
	},
  onStart: function() {
    this.startMediator();
    this.controller.listSkills();
  },
  startMediator: function() {
    return this.controller = new SkillsController({
      mainRegion: this.app.mainRegion
    });
  }
});
