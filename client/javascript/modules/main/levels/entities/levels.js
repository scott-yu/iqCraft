var Marionette = require('backbone.marionette');
var LevelsCollection = require('../collections/levels');
var Radio = require('../../../../radio');

var EXP_REQUIRED_PER_LEVEL = 200;
var LEVEL_CAP = 50;

module.exports = {
  initialize: function() {
    return this.setHandlers();
  },
  getLevelByExp: function(exp) {
    return {
       level: (exp / EXP_REQUIRED_PER_LEVEL).toFixed(0),
       expRequiredToLevel: EXP_REQUIRED_PER_LEVEL,
       expForCurrentLevel: exp % EXP_REQUIRED_PER_LEVEL 
     };
  },
  setHandlers: function() {
    Radio.reqres.setHandler('global', 'level:byExp', function(exp) {
        return this.getLevelByExp(exp);
    }.bind(this));

    Radio.reqres.setHandler('global', 'level:levels', function() {
        var levels = [];
        for (var i = 1; i <= LEVEL_CAP; i++) {
          levels.push({
            level: i,
            expRequiredToLevel: i === LEVEL_CAP ? null : EXP_REQUIRED_PER_LEVEL
          });
        }
        return levels;
    });
  }
};
