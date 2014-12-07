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
      { name: "Levels", url: "levels", navigationTrigger: "navigate" },
      { name: "Classes", url: "classes", navigationTrigger: "navigate" },
      { name: "Skills", url: "skills", navigationTrigger: "navigate" },
      { name: "Titles", url: "titles", navigationTrigger: "navigate" }
    ])

  getSidebars: ->
    if sidebars is undefined
      @initializeSidebars()
    sidebars

  setHandlers: ->
    Radio.reqres.setHandler "global", "sidebar:entities", =>
      @getSidebars()