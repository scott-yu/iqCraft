var Backbone, Sidebar, _;

Backbone = require('backbone');

Backbone.Picky = require('backbone.picky');

_ = require('underscore');

Sidebar = require('../models/sidebar');

module.exports = Backbone.Collection.extend({
  model: Sidebar,
  initialize: function() {
    var singleSelect;
    singleSelect = new Backbone.Picky.SingleSelect(this);
    return _.extend(this, singleSelect);
  }
});
