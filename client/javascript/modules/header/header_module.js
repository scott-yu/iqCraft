var HeaderController, HeaderModule, Marionette,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Marionette = require('backbone.marionette');

HeaderController = require('./header_controller');

module.exports = HeaderModule = (function(_super) {
  __extends(HeaderModule, _super);

  function HeaderModule() {
    return HeaderModule.__super__.constructor.apply(this, arguments);
  }

  HeaderModule.prototype.onStart = function() {
    this.startMediator();
    return this.controller.setActiveHeader('');
  };

  HeaderModule.prototype.startMediator = function() {
    return this.controller = new HeaderController({
      headerRegion: this.app.headerRegion
    });
  };

  return HeaderModule;

})(Marionette.Module);
