Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    parse: function(res) {
        return {
            company: res.company,
            department: res.department,
            firstName: res.givenName,
            office: res.l,
            title: res.title,
            lastName: res.sn,
            thumbnailPhoto: res.thumbnailPhoto
        };
    }
});
