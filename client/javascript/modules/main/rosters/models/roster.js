Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
    parse: function(res) {
        return {
            company: res.company,
            department: res.department,
            firstName: res.givenName,
            office: res.l,
            title: res.title,
            lastName: res.sn,
            thumbnailPhoto: res.thumbnailPhoto,
            manager: this.getCNFromString(res.manager),
            memberOf: this.formatMemberGroups(res.memberOf),
            whenCreated: res.whenCreated,
            mail: res.mail
        };
    },
    getCNFromString: function(string) {
        var match = (/CN=([\w\s]+),/g).exec(string);
        return match && match.length > 1 ? match[1] : '';
    },
    formatMemberGroups: function(string) {
        var groups = string.split('|');
        groups = _.map(groups, function(group) {
            return this.getCNFromString(group);
        }.bind(this));
        groups = _.without(groups, '');
        return groups;
    }
});
