var HeaderCollection, Marionette, Radio, headers;

Marionette = require('backbone.marionette');

HeaderCollection = require('../collections/headers');

Radio = require('../../../radio');

headers = void 0;

module.exports = {
  initialize: function() {
    return this.setHandlers();
  },
  initializeHeaders: function() {
    return headers = new HeaderCollection([
      {
        name: 'App',
        url: '',
        navigationTrigger: ''
      }
    ]);
  },
  getHeaders: function() {
    if (headers === void 0) {
      this.initializeHeaders();
    }
    return headers;
  },
  setHandlers: function() {
    return Radio.reqres.setHandler('global', 'header:entities', (function(_this) {
      return function() {
        return _this.getHeaders();
      };
    })(this));
  }
};
