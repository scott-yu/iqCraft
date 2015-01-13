var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var RostersView = require('./rosters_view');
var FiltersView = require('./filters_view');

var _ = require('underscore');

require('jquery.mixitup');


module.exports = Marionette.LayoutView.extend({
    regions: {
        filtersRegion: '.x-filters',
        rostersRegion: '.x-rosters'
    },
    className: 'x-mixitup-container',
    template: require('./templates/rosters_layout'),
    initialize: function(options) {

        var self = this;
        var filterKeys = ['office', 'department', 'title'];

        this.collection = options.collection;

        this.filters = _.map(filterKeys, function(filterKey) {
            return  {
                key: filterKey,
                values: _.without(_.uniq(self.collection.pluck(filterKey)), '')
            };
        });

        this.collection.filters = this.filters;
    },
    onRender: function() {
        this.filtersRegion.show(new FiltersView({
            collection: new Backbone.Collection(this.filters)
        }));

        this.rostersRegion.show(new RostersView({
            collection: this.collection
        }));

        this.$el.mixItUp({
            controls: {
                live: true
            }
        });
    }
});
