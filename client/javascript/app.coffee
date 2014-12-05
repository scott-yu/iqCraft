###
  Main app that coordinates various Marionette modules.
###

Backbone = require 'backbone'
require 'backbone.queryparams'
Marionette = require 'backbone.marionette'
Radio = require './radio'
require './common/hbs_helpers'

# Require specific modules below.
HeaderModule = require './modules/header/header_module'
SidebarModule = require './modules/sidebar/sidebar_module'

# Create new Marionette app.
App = new Marionette.Application()

# Starts a module unless it is currently running.
App.startModule = (moduleName, args) ->
  currentModule = App.module(moduleName)
  return if App.currentModule is currentModule
  App.currentModule.stop() if App.currentModule
  App.currentModule = currentModule
  currentModule.start(args)

# Returns current hash fragment from Backbone.history
App.getCurrentRoute = ->
  Backbone.history.fragment

# Primary regions for the header, sidebar, and modules.
App.addRegions
  headerRegion: "#header-region"
  sidebarRegion: "#sidebar-region"
  mainRegion: "#main-region"

# Start Backbone history after starting the
# main app.
App.on 'start', ->
  if Backbone.history
    Backbone.history.start()

# Add modules below.
App.module 'header', HeaderModule
App.module 'sidebar', SidebarModule

module.exports = App
