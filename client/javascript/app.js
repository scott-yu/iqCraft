var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Radio = require('./radio');
var HeaderModule = require('./modules/header/header_module');
var SidebarModule = require('./modules/sidebar/sidebar_module');
var MainRouter = require('./modules/main/main_routes');

var MainModule = require('./modules/main/main/main_module');  

require('./common/hbs_helpers');
require('backbone.queryparams');

App = new Marionette.Application();

new MainRouter({app: App});

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
App.module('main', MainModule);

module.exports = App;
