var Marionette = require('backbone.marionette');
var RosterView = require('./roster_view');

module.exports = Marionette.CompositeView.extend({
    template: require('./templates/rosters_template'),
    childView: RosterView,
    childViewContainer: '.x-container'
});
