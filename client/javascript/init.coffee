###
  Start the main app after DOM is ready.
###

$ = require 'jquery'
App = require './app'

$(document).ready ->
  App.start()
  console.log 'Started'
