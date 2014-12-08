var Marionette;

Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
  tagName: 'li',
  template: require('./templates/sidebar_link'),
  events: {
    'click a': 'navigate'
  },
  navigate: function(e) {
    e.preventDefault();
    return this.trigger('navigate', this.model);
  },
  onRender: function() {
    if (this.model.selected) {
      return this.$el.addClass('active');
    }
  }
});
