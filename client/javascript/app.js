
/*
  Main app that coordinates various Marionette modules.
 */
var App, Backbone, HeaderModule, Marionette, Radio, SidebarModule;

Backbone = require('backbone');

require('backbone.queryparams');

Marionette = require('backbone.marionette');

Radio = require('./radio');

require('./common/hbs_helpers');

HeaderModule = require('./modules/header/header_module');

SidebarModule = require('./modules/sidebar/sidebar_module');

App = new Marionette.Application();

App.startModule = function(moduleName, args) {
  var currentModule;
  currentModule = App.module(moduleName);
  if (App.currentModule === currentModule) {
    return;
  }
  if (App.currentModule) {
    App.currentModule.stop();
  }
  App.currentModule = currentModule;
  return currentModule.start(args);
};

App.getCurrentRoute = function() {
  return Backbone.history.fragment;
};

App.addRegions({
  headerRegion: '#header-region',
  sidebarRegion: '#sidebar-region',
  mainRegion: '#main-region'
});

App.on('start', function() {
  if (Backbone.history) {
    return Backbone.history.start();
  }
});

App.module('header', HeaderModule);

App.module('sidebar', SidebarModule);

module.exports = App;
