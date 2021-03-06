var Marionette = require('backbone.marionette');
var RostersEntity = require('./entities/rosters');
var RostersCollection = require('./collections/rosters');
var RostersLayout= require('./views/rosters_layout');

module.exports = Marionette.Controller.extend({
    initialize: function(options) {
        this.region = options.mainRegion;
        RostersEntity.initialize();
        this.setHandlers();

        this.rostersCollection = new RostersCollection();

    },
    setHandlers: function() {
    },
    listRosters: function(filters) {
        this.rostersCollection.fetch().complete(function() {
            this.region.show(new RostersLayout({
                collection: this.rostersCollection,
                filters: filters
            }));
        }.bind(this));
    }
});
