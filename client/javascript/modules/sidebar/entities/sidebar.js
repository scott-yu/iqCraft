var Marionette, Radio, SidebarCollection, sidebars;

Marionette = require('backbone.marionette');

SidebarCollection = require('../collections/sidebars');

Radio = require('../../../radio');

sidebars = void 0;

module.exports = {
  initialize: function() {
    return this.setHandlers();
  },
  initializeSidebars: function() {
    return sidebars = new SidebarCollection([
      {
        name: 'Levels',
        url: 'levels',
        navigationTrigger: 'navigate'
      },
      {
        name: 'Classes',
        url: 'classes',
        navigationTrigger: 'navigate'
      },
      {
        name: 'Skills',
        url: 'skills',
        navigationTrigger: 'navigate'
      },
      {
        name: 'Titles',
        url: 'titles',
        navigationTrigger: 'navigate'
      }
    ]);
  },
  getSidebars: function() {
    if (sidebars === void 0) {
      this.initializeSidebars();
    }
    return sidebars;
  },
  setHandlers: function() {
    return Radio.reqres.setHandler('global', 'sidebar:entities', (function(_this) {
      return function() {
        return _this.getSidebars();
      };
    })(this));
  }
};
