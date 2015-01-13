var Marionette = require('backbone.marionette');
var _ = require('underscore');

module.exports = Marionette.ItemView.extend({
    className: function() {
        var classes = 'mix item';
        var self = this;
        _.each(this.model.collection.filters, function(filter) {
            var value = self.model.get(filter.key).replace(/[^\w]/gi, '');
            classes = classes + ' ' + filter.key + '-' + value;
        });
        return classes;
    },
    template: require('./templates/roster_template'),
    initialize: function(options) {
        this.filters = options.filters;
    }
});
