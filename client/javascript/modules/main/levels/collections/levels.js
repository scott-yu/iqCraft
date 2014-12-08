var Backbone = require('backbone');
var Level = require('../models/level');

module.exports = Backbone.Collection.extend({
  model: Level,
  initialize: function() {
  }
});
