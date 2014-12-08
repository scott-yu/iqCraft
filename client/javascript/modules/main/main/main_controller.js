var Marionette = require('backbone.marionette');

module.exports = Marionette.Controller.extend({
  initialize: function(options) {
    this.region = options.mainRegion;
    this.setHandlers();
  },
  setHandlers: function() {
  },
  showContent: function() {
    this.region.empty();
  }
});
