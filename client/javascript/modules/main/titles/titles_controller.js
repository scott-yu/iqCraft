var Marionette = require('backbone.marionette');

module.exports = Marionette.Controller.extend({
  initialize: function(options) {
    this.region = options.mainRegion;
    this.setHandlers();
  },
  setHandlers: function() {
  },
  listTitles: function() {
    this.region.empty();
  }
});
