var Backbone, Header, _;

Backbone = require('backbone');

Backbone.Picky = require('backbone.picky');

_ = require('underscore');

Header = require('../models/header');

module.exports = Backbone.Collection.extend({
  model: Header,
  initialize: function() {
    var singleSelect;
    singleSelect = new Backbone.Picky.SingleSelect(this);
    return _.extend(this, singleSelect);
  }
});
