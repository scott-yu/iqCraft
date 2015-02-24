var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
    tagName: 'li',
    template: require('./templates/level_template'),
    initialize: function() {
        this._doSomething();
        this._doSomethingMaybe();
    },
    _doSomething: function() {
        return;
    },
    _doSomethingMaybe: function() {
        return Math.random() === 0;

        return 'foooooooooo';
    }
});
