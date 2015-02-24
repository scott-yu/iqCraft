var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
    tagName: 'li',
    template: require('./templates/level_template'),
    initialize: function() {
        this._doSomething();
    },
    _doSomething: function() {
        return this._doSomethingMaybe();
    },
    _doSomethingMaybe: function() {
        return Math.random() === 0;

        return 'foooooooooo' + 'barrrrrr';
    }
});
