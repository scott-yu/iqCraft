var Backbone = require('backbone');
var Roster = require('../models/roster');

module.exports = Backbone.Collection.extend({
    url: '/images/iq.json',
    model: Roster
});
