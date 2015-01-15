var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Marionette.ItemView.extend({
    events: {
        'click': 'onClick'
    },
    className: function() {
        var classes = 'mix item ';
        var self = this;
        var filterClasses = [];
        var formatFilterValue = function(key, value) {
            filterClasses.push(key + '-' + value.replace(/[^\w]/gi, ''));
        }
        _.each(this.model.collection.filters, function(filter) {
            var value = self.model.get(filter.key);
            if (typeof(value) === 'object') {
                _.each(value, function(group) {
                    formatFilterValue(filter.key, group);
                });
            } else {
                formatFilterValue(filter.key, value);
            }
        });
        return classes + filterClasses.join(' ');
    },
    attributes: function() {
        return {
            'data-whenCreated': this.model.get('whenCreated')
        };
    },
    template: require('./templates/roster_template'),
    initialize: function(options) {
        this.filters = options.filters;
    },
    serializeData: function() {
        var data = this.model.toJSON();
        data.thumbnailPath = data.firstName.toLowerCase() + '_' + data.lastName.toLowerCase();

        return data;
    },
    onClick: function() {
        Backbone.history.navigate('rosters/' + this.model.get('firstName') + '.' + this.model.get('lastName'), true);
    }
});
