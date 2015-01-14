var Marionette = require('backbone.marionette');
var _ = require('underscore');
var $ = require('jquery');

require('jquery.mixitup');
require('select2');

module.exports = Marionette.ItemView.extend({
    template: require('./templates/filter_template'),
    ui: {
        select: '.x-select'
    },
    serializeData: function() {
        var data = this.model.toJSON();
        data.values = _.map(data.values, function(value) {
            return {
                value: value.replace(/[^\w]/gi, ''),
                displayValue: value
            }
        });
        data.useDropbox = data.values.length > 50;
        return data;
    },
    onRender: function() {
        this.ui.select.select2({
            width: 'copy'
        }).on('change', function(e) {
            $('.x-mixitup-container').mixItUp('filter', e.currentTarget.value);
        });
    }
});
