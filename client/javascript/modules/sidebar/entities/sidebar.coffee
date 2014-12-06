Marionette = require 'backbone.marionette'
Backbone = require 'backbone'
SidebarCollection = require '../collections/sidebars'
Radio = require '../../../radio'

sidebars = undefined

module.exports =
  initialize: ->
    @setHandlers()

  initializeSidebars: ->
    sidebars = new SidebarCollection([
      { name: "Levels", url: "levels", navigationTrigger: "browse:levels" },
      { name: "Classes", url: "classes", navigationTrigger: "browse:classes" },
      { name: "Skills", url: "skills", navigationTrigger: "browse:skills" },
      { name: "Titles", url: "titles", navigationTrigger: "browse:titles" }
    ])

  getSidebars: ->
    if sidebars is undefined
      @initializeSidebars()
    sidebars

  setHandlers: ->
    Radio.reqres.setHandler "global", "sidebar:entities", =>
      @getSidebars()