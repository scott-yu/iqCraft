Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
        name: 'level1',
        label: 'Level 1',
        exp: 65535
    }
});
