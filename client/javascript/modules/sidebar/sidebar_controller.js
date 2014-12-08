var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var $ = require('jquery');
var Radio = require('../../radio');
var SidebarsView = require('./views/sidebars_view');
var SidebarEntity = require('./entities/sidebar');

module.exports = Marionette.Controller.extend({
  initialize: function() {
    SidebarEntity.initialize();
    return this.setHandlers();
  },
  setActiveSidebar: function(sidebarUrl) {
    var links, sidebarToSelect;
    links = Radio.reqres.request('global', 'sidebar:entities');
    sidebarToSelect = links.find(function(sidebar) {
      return sidebar.get('url') === sidebarUrl;
    });
    sidebarToSelect.select();
    return links.trigger('reset');
  },
  listSidebar: function() {
    var links, sidebars;
    links = Radio.reqres.request('global', 'sidebar:entities');
    
    sidebars = new SidebarsView({
      collection: links
    });
    
    sidebars.on('brand:clicked', function() {
      return Radio.vent.trigger('global', 'page:support');
    });

    sidebars.on('childview:navigate', function(childView, model) {
      var trigger;
      trigger = model.get('navigationTrigger');
      url = model.get('url');
      return Radio.vent.trigger('global', trigger, url);
    });
    
    return this.options.sidebarRegion.show(sidebars);
  },
  setHandlers: function() {
    Radio.commands.setHandler('global', 'set:active:sidebar', (function(_this) {
      return function(name) {
        return _this.setActiveSidebar(name);
      };
    })(this));
    
    Radio.vent.on('global', 'toggle:sidebar', function() {
      console.log($('#page-wrapper'));
      return $('#page-wrapper').toggleClass('active');
    });

    Radio.vent.on('global', 'navigate', function(url) {
      Backbone.history.navigate(url, true);
    });
  }
});
