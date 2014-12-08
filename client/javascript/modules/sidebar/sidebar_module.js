var Marionette, SidebarController, SidebarModule,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Marionette = require('backbone.marionette');

SidebarController = require('./sidebar_controller');

module.exports = SidebarModule = (function(_super) {
  __extends(SidebarModule, _super);

  function SidebarModule() {
    return SidebarModule.__super__.constructor.apply(this, arguments);
  }

  SidebarModule.prototype.onStart = function() {
    this.startMediator();
    return this.controller.listSidebar();
  };

  SidebarModule.prototype.startMediator = function() {
    return this.controller = new SidebarController({
      sidebarRegion: this.app.sidebarRegion
    });
  };

  return SidebarModule;

})(Marionette.Module);
