var Backbone, _;

Backbone = require('backbone');

Backbone.Picky = require('backbone.picky');

_ = require('underscore');

module.exports = Backbone.Model.extend({
  initialize: function() {
    var selectable;
    selectable = new Backbone.Picky.Selectable(this);
    return _.extend(this, selectable);
  }
});
