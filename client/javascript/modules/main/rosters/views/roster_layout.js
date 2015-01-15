var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var RostersView = require('./rosters_view');
var RostersCollection = require('../collections/rosters');

var _ = require('underscore');

module.exports = Marionette.LayoutView.extend({
    template: require('./templates/roster_layout'),
    events: {
       'click .x-manager-link': 'onClickManagerLink',
       'click .x-filter-link': 'onFilterLink'
    },
    regions: {
        reportContainer: '.x-reports'
    },
    initialize: function(options) {},
    onRender: function() {
        var name = this.model.get('firstName') + ' ' + this.model.get('lastName');
        var reports = this.model.collection.where({manager: name});
        if (reports.length) {
            this.reportContainer.show(new RostersView({
                collection: new RostersCollection(reports)
            }));
        }
    },
    serializeData: function() {
        var data = this.model.toJSON();
        data.thumbnailPath = data.firstName.toLowerCase() + '_' + data.lastName.toLowerCase();
        return data;
    },
    onClickManagerLink: function() {
        Backbone.history.navigate('rosters/' + this.model.get('manager').replace(' ', '.'), true);
    },
    onFilterLink: function(e) {
        var value = e.currentTarget.innerText.replace(/[^\w]/gi, '');
        var key = e.currentTarget.dataset.filterkey;
        Backbone.history.navigate('rosters/filters/.' + key + '-' + value, true);
    }
});
