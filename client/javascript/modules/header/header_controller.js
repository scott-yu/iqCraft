var HeaderEntity, HeaderView, Marionette, Radio;

Marionette = require('backbone.marionette');

Radio = require('../../radio');

HeaderView = require('./views/header_view');

HeaderEntity = require('./entities/header');

module.exports = Marionette.Controller.extend({
  initialize: function() {
    HeaderEntity.initialize();
    return this.setHandlers();
  },
  setActiveHeader: function(headerUrl) {
    var header, headerToSelect, links;
    links = Radio.reqres.request('global', 'header:entities');
    headerToSelect = links.find(function(header) {
      return header.get('url') === headerUrl;
    });
    header = new HeaderView({
      model: headerToSelect
    });
    return this.options.headerRegion.show(header);
  },
  setHandlers: function() {
    return Radio.commands.setHandler('global', 'set:active:header', (function(_this) {
      return function(name) {
        return _this.setActiveHeader(name);
      };
    })(this));
  }
});
