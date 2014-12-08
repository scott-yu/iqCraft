
/*
  Configure and export various pub/sub channels.
 */
var globalChannel;

Backbone.Wreqr = require('backbone.wreqr');

globalChannel = Backbone.Wreqr.radio.channel('global');

module.exports = Backbone.Wreqr.radio;
