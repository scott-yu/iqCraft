var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var Radio = require('./radio');
var HeaderModule = require('./modules/header/header_module');
var SidebarModule = require('./modules/sidebar/sidebar_module');
var MainRouter = require('./modules/main/main_routes');

var RostersModule = require('./modules/main/rosters/rosters_module');

//var LevelsModule = require('./modules/main/levels/levels_module');
//var SkillsModule = require('./modules/main/skills/skills_module');
//var ClassesModule = require('./modules/main/classes/classes_module');
//var TitlesModule = require('./modules/main/titles/titles_module');

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
App.module('rosters', RostersModule);
//App.module('levels', LevelsModule);
//App.module('classes', ClassesModule);
//App.module('titles', TitlesModule);
//App.module('skills', SkillsModule);


module.exports = App;
