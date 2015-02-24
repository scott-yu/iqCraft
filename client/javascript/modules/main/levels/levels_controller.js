var Marionette = require('backbone.marionette');
var LevelsEntity = require('./entities/levels');
var LevelsCollection = require('./collections/levels');
var LevelsView = require('./views/levels_view');
var Radio = require('../../../radio');

module.exports = Marionette.Controller.extend({
  initialize: function(options) {
    this.region = options.mainRegion;
    LevelsEntity.initialize();
    this.setHandlers();

    this.levelCollection = this.buildLevelColleciton();
  },
  buildLevelColleciton: function() {
    return new LevelsCollection(Radio.reqres.request('global', 'level:levels'));
  },
  setHandlers: function() {
      // TODO: just some comments
  },
  listLevels: function() {
    this.region.show(new LevelsView({
      collection: this.levelCollection
    }));
  }
});
