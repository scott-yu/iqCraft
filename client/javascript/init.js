
/*
  Start the main app after DOM is ready.
 */
var $, App;

$ = require('jquery');

App = require('./app');

$(document).ready(function() {
  App.start();
  return console.log('Started');
});
