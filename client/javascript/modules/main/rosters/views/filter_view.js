var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

require('jquery.mixitup');
require('select2');

module.exports = Marionette.ItemView.extend({
    template: require('./templates/filter_template'),
    ui: {
        select: '.x-select'
    },
    initialize: function(options) {
        options = options || {};
        this.appliedFilters = options.appliedFilters;
    },
    serializeData: function() {
        var data = this.model.toJSON();
        data.values = _.map(data.values, function(value) {
            return {
                value: value.replace(/[^\w]/gi, ''),
                displayValue: value
            }
        });
        data.useDropdown = data.values.length > 0;
        return data;
    },
    onRender: function() {
        this.ui.select.select2({
            width: 'copy'
        }).on('change', function(e) {
              Backbone.history.navigate('rosters/filters/' + e.currentTarget.value, true);
        });

        if (this.appliedFilters && this.appliedFilters.search(this.model.get('key')) === 1) {
            this.ui.select.select2('val', this.appliedFilters);
        }
    }
});
