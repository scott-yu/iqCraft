var Marionette = require('backbone.marionette');
var FilterView = require('./filter_view');

module.exports = Marionette.CompositeView.extend({
    template: require('./templates/filters_template'),
    childView: FilterView,
    childViewContainer: '.x-container'
});
