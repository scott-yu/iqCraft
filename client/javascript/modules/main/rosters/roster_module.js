var Marionette = require('backbone.marionette');
var RosterController = require('./roster_controller');

module.exports = Marionette.Module.extend({
	initialize: function() {
		this.startWithParent = false;
	},
    onStart: function(roster) {
        this.startMediator();
        return this.controller.viewRoster(roster);
    },
    startMediator: function() {
        return this.controller = new RosterController({
            mainRegion: this.app.mainRegion
        });
    }
});
