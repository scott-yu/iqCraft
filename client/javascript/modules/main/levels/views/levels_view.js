var Marionette = require('backbone.marionette');
var LevelView = require('./level_view');

module.exports = Marionette.CompositeView.extend({
    template: require('./templates/levels_template'),
    childView: LevelView,
    childViewContainer: 'ul',
    initialize: function() {
        this.$el.addClass('clear-fix');
    }
});
