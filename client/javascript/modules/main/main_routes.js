var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({
	initialize: function(options) {
		this.app = options.app;
	},
	routes: {
        'rosters': 'onBrowseRosters'
//		'levels': 'onBrowseLevels',
//		'classes': 'onBrowseClasses',
//		'skills': 'onBrowseSkills',
//		'titles': 'onBrowseTitles'
	},
    onBrowseRosters: function() {
		this.app.startModule('rosters');
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