var Marionette = require('backbone.marionette');
var RostersEntity = require('./entities/rosters');
var RostersCollection = require('./collections/rosters');
var RosterLayout= require('./views/roster_layout');

module.exports = Marionette.Controller.extend({
    initialize: function(options) {
        this.region = options.mainRegion;
        RostersEntity.initialize();
        this.setHandlers();

        this.rostersCollection = new RostersCollection();

    },
    setHandlers: function() {
    },
    viewRoster: function(name) {
        this.rostersCollection.fetch().complete(function() {
            var nameObj = name.split('.');
            var roster = this.rostersCollection.findWhere({firstName: nameObj[0], lastName: nameObj[1]});
            this.region.show(new RosterLayout({
                model: roster
            }));
        }.bind(this));
    }
});
