var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({
	initialize: function(options) {
		this.app = options.app;
	},
	routes: {
        'rosters/filters/:filter': 'onBrowseRosters',
        'rosters': 'onBrowseRosters',
        'rosters/:id': 'onBrowseRoster'
//		'levels': 'onBrowseLevels',
//		'classes': 'onBrowseClasses',
//		'skills': 'onBrowseSkills',
//		'titles': 'onBrowseTitles'
	},
    onBrowseRosters: function(filters) {
        if (!this.app.module('rosters').controller) {
            this.app.startModule('rosters', filters);
        } else {
            this.app.module('rosters').controller.listRosters(filters);
        }

	},
    onBrowseRoster: function(roster) {
        if (!this.app.module('roster').controller) {
            this.app.startModule('roster', roster);
        } else {
            this.app.module('roster').controller.viewRoster(roster);
        }
    }
//	onBrowseLevels: function() {
//		this.app.startModule('levels');
//	},
//	onBrowseClasses: function() {
//		this.app.startModule('classes');
//	},
//	onBrowseSkills: function() {
//		this.app.startModule('skills');
//	},
//	onBrowseTitles: function() {
//		this.app.startModule('titles');
//	}
});