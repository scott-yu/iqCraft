var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
  tagName: 'li',
  template: require('./templates/level_template')
});
